SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


create procedure [dbo].[p_FindDeletableManagedSolution]
(
	@version float
)
as
begin
	
	-- declare variables
	declare @NextSolutionId uniqueidentifier = null
	declare @SolutionId uniqueidentifier = '00000000-0000-0000-0000-000000000000'
	declare @EntityRelationshipComponentType int = 10	
	declare @IncludeNonCustomRelationships bit = 1
	declare @Level int
	declare @ActiveSolutionId uniqueidentifier = 'FD140AAE-4DF4-11DD-BD17-0019B9312238'
	declare @SystemUserId uniqueidentifier = (select SystemUserId from SystemUserBase where FullName='system')
	declare @Internal int = 1 -- constant representing all internal dependencies


	-- create the table to hold the component set
	create table #ComponentSet(
		dependencynodeid uniqueidentifier not null,
		processinglevel int default 0 not null,
		previousdependencynodeid uniqueidentifier null
	)

	-- create the table to hold components being deleted
	create table #FilteredComponentSet(
		dependencynodeid uniqueidentifier not null,
		processinglevel int default 0 not null,
		previousdependencynodeid uniqueidentifier null)

	-- create a table to hold the solution's first level dependencies
	create table #FirstLevelDependencies(
		DependentTopSolutionId uniqueidentifier not null
	)

	-- initialize NextSolutionId to some solution that we know will need to be deleted (IE a 7.1 managed solution)
	-- If no such solution exists, then we have deleted all 7.1 managed solutions and all dependent managed solutions
	-- (otherwise we wouldn't have been able to delete the 7.1 solutions), so we are done.
	set @NextSolutionId = (select top 1 SolutionId from SolutionBase where SolutionPackageVersion > @version and IsManaged='1')

	-- This stored procedure is much like the p_RetrieveDependenciesForUninstall stored
	-- procedure, except that it continues iterating through solutions until identifying one
	-- that could be uninstalled (barring customizations)

	-- Basic Algorithm:
	-- 1. Find all of the root components for the solution being uninstalled (and all relationships)
	-- 2. Find all of the solution internal descendents from the set of root components - the result is the "component set"
	-- 3. From the component set, find all of the first level required dependencies (not solution internal) - the "dependency set"
	-- 4. If any dependencies/customizations stem from other managed solutions, repeat from step 1 for one of those solutions. Else, return the current solution id

	-- if we cannot find another managed solution dependent on or customizing the current managed solution, then the loop should terminate
	while (@NextSolutionId is not null)
	begin
		set @SolutionId = @NextSolutionId

		truncate table #ComponentSet
	
		-- insert all of the root components from the given solution
		insert into #ComponentSet
			(dependencynodeid, processinglevel, previousdependencynodeid)
			select dn.DependencyNodeId, 0, null
			from DependencyNode dn
			join SolutionComponent sc on (dn.ObjectId = sc.ObjectId and dn.ComponentType = sc.ComponentType)
			where sc.SolutionId = @SolutionId
		
		-- since 1:N relationships can be added from either the referenced (1) side or the referencing (N) side,
		-- but we can only reach an EntityRelationship from the N side, we need to add all EntityRelationships to
		-- the #ComponentSet being uninstalled
		insert into #ComponentSet
			(dependencynodeid, processinglevel, previousdependencynodeid)
			select dn.DependencyNodeId, 0, null
			from DependencyNode dn
			where dn.ComponentType = @EntityRelationshipComponentType and dn.BaseSolutionId = @SolutionId
	
		-- retrieve all of the solution internal descendents
		exec p_CollectSolutionInternalDescendents @IncludeNonCustomRelationships
		
		truncate table #FilteredComponentSet

		-- add all non-shared components of this solution from ComponentSet to FilteredComponentSet
		insert into #FilteredComponentSet
			(dependencynodeid, processinglevel, previousdependencynodeid)
			select cs.dependencynodeid, 0, cs.previousdependencynodeid
			from #ComponentSet cs
			join DependencyNode dn on (dn.DependencyNodeId = cs.dependencynodeid)
			where dn.BaseSolutionId = @SolutionId
			and dn.IsSharedComponent = 0  -- note that shared components will not be deleted, as the other referencing solution will take over the ownership of the component

		set @Level = 0	

		-- loop through and add all sub-components that will also be deleted
		-- ASSUMPTION: If we are deleting the ancestor, then all of its solution internal descendents will also be deleted
		while (@@rowcount > 0)
		begin
			set @Level = @Level + 1

			insert into #FilteredComponentSet
				(dependencynodeid, processinglevel, previousdependencynodeid)
				select dependencynodeid, @Level, previousdependencynodeid
				from #ComponentSet
				where previousdependencynodeid in
					(select dependencynodeid 
					 from #FilteredComponentSet 
					 where processinglevel = (@Level - 1))
				and dependencynodeid not in (select dependencynodeid from #FilteredComponentSet) -- don't add nodes twice
		end

		truncate table #FirstLevelDependencies

		-- find all of the first level required dependencies (not solution internal)
		insert into #FirstLevelDependencies 
			(DependentTopSolutionId)
			select dnb.TopSolutionId
			from DependencyBase db
				join DependencyNodeBase dnb on (db.DependentComponentNodeId = dnb.DependencyNodeId)
				join #FilteredComponentSet fcs on (db.RequiredComponentNodeId = fcs.dependencynodeid)
				join SolutionBase sb on (dnb.BaseSolutionId = sb.SolutionId)
			-- we are interested in a dependency only if the dependent component's base solution is another managed solution.
			-- otherwise it does not pose a problem for uninstalling the current solution
			where db.DependentComponentNodeId not in (select dependencynodeid from #FilteredComponentSet)
				and dnb.BaseSolutionId <> @SolutionId
				and dnb.BaseSolutionId <> @ActiveSolutionId
				-- ignore components from OOB solutions, as they can only be dependent through customizations
				and sb.CreatedBy <> @SystemUserId

		-- call out all of the dependencies in the #FilteredComponentSet that have a parent that is being deleted, and the child is not part of the 
		-- solution being uninstalled, though it is not active.  the child cannot be deleted if it is part of another solution, since that solution
		-- has to be uninstalled first before this solution can be uninstalled. 
		insert into #FirstLevelDependencies
			(DependentTopSolutionId)
			select dnb.TopSolutionId
			from Dependency d
				join #FilteredComponentSet fcs on (d.RequiredComponentNodeId = fcs.dependencynodeid)
				join DependencyNodeBase dnb on (dnb.DependencyNodeId = d.DependentComponentNodeId)
				join SolutionBase sb on (dnb.BaseSolutionId = sb.SolutionId)
			-- we are interested in a dependency only if the dependent component's base solution is another managed solution.
			-- otherwise it does not pose a problem for uninstalling the current solution
			where d.RequiredComponentBaseSolutionId = @SolutionId
				-- If the dependency is internal, then the dependent component is already in filtered components 
				and d.DependencyType = @Internal
				and d.DependentComponentBaseSolutionId <> @ActiveSolutionId
				and d.DependentComponentBaseSolutionId <> @SolutionId
				-- ignore components from OOB solutions, as they can only be dependent through customizations
				and sb.CreatedBy <> @SystemUserId

		-- if there are no dependencies without unmanaged customizations, then the next solution should be null.
		-- either there are no managed dependencies at all, in which case we should remove the unmanaged dependencies and uninstall,
		-- or there are no managed dependencies without unmanaged customizations, in which case we should remove the customizations to see that the managed
		-- solutions with dependencies need to be uninstalled first. Because a cycle must have at least one set of dependencies that come from
		-- unmanaged customizations, we cannot go in a cycle if we never follow a dependency with an unmanaged customization.
		if (not exists (select 1 from #FirstLevelDependencies where DependentTopSolutionId <> @ActiveSolutionId and DependentTopSolutionId <> @SolutionId))
		begin
			set @NextSolutionId = null

			-- look for a top layer managed customization on one of the components in #FilteredComponentSet. If such a customization exists, then we should
			-- visit its managed solution because that solution will need to be uninstalled first.
			select top 1 @NextSolutionId = dnb.TopSolutionId 
			from DependencyNodeBase dnb
				join #FilteredComponentSet fcs on (fcs.dependencynodeid = dnb.DependencyNodeId)
			where dnb.BaseSolutionId = @SolutionId
				and dnb.TopSolutionId <> @SolutionId
				and dnb.TopSolutionId <> @ActiveSolutionId
		end
		else
		begin
			-- retrieve the top level solution of the first dependency on another managed solution
			-- we want to visit the top level solution next because either the component was uncustomized (in which case top and base are the same
			-- and it doesn't matter which we choose) or the component had a top level managed customization (in which case the customizing solution
			-- should be deleted before the customized solution so we can save on visiting the base solution because we know that we will need to
			-- uninstall the top solution first anyway)
			select top 1 @NextSolutionId = DependentTopSolutionId
			from #FirstLevelDependencies
			where DependentTopSolutionId <> @ActiveSolutionId and DependentTopSolutionId <> @SolutionId
		end

	end

	--clean up the temporary tables
	if object_id(N'tempdb..#ComponentSet') IS NOT NULL
	drop table #ComponentSet;

	if object_id(N'tempdb..#FilteredComponentSet') IS NOT NULL
	drop table #FilteredComponentSet;

	if object_id(N'tempdb..#FirstLevelDependencies') IS NOT NULL
	drop table #FirstLevelDependencies;

	select @SolutionId
end
GO
