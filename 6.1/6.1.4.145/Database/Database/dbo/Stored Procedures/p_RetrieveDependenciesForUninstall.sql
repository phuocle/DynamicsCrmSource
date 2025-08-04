

create procedure p_RetrieveDependenciesForUninstall
(
	@SolutionId uniqueidentifier
)
as
begin
	-- This stored procedure is much like the p_RetrieveDependenciesForDelete stored
	-- procedure, except that it acts at a solution level instead of at a component 
	-- level.  This means that all dangling dependencies will be returned for any 
	-- component that depends on a component being deleted.

	-- Algorithm:
	-- 1. Find all of the root components for the solution being uninstalled (and all relationships)
	-- 2. Find all of the solution internal descendents from the set of root components - the result is the "component set"
	-- 3. From the component set, find all of the first level required dependencies (not solution internal) - the "dependency set"
	-- 4. Filter out all of those components that will be removed on uninstallation.  We have to be careful here 
	--    since uninstalling a component does not automatically mean deleting it, only if it was created by the solution
	--    being uninstalled is it deleted.

	-- Create the table that will hold the component set
	create table #ComponentSet(
		dependencynodeid uniqueidentifier not null,
		processinglevel int default 0 not null,
		previousdependencynodeid uniqueidentifier null
	)
	
	-- create statistics to ensure the queries are optimized
	create statistics mpcstat on #ComponentSet(dependencynodeid, processinglevel)
	
	-- Create new index that is like the one we dropped
	create index ndx_dependencynodeid ON #ComponentSet (dependencynodeid)
	create index ndx_processinglevel ON #ComponentSet (processinglevel)	
	
	-- insert all of the root components from the given solution
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNode dn
		join SolutionComponent sc on (dn.ObjectId = sc.ObjectId and dn.ComponentType = sc.ComponentType)
		where sc.SolutionId = @SolutionId

	declare @EntityRelationshipComponentType int
	set @EntityRelationshipComponentType = 10
		
	-- since 1:N relationships can be added from either the referenced (1) side or the referencing (N) side,
	-- but we can only reach an EntityRelationship from the N side, we need to add all EntityRelationships to
	-- the #ComponentSet being uninstalled
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNode dn
		where dn.ComponentType = @EntityRelationshipComponentType and dn.BaseSolutionId = @SolutionId
	
	declare @IncludeNonCustomRelationships bit
	set @IncludeNonCustomRelationships = 1
	
	-- retrieve all of the solution internal descendents
	exec p_CollectSolutionInternalDescendents @IncludeNonCustomRelationships

	-- find out which components are being deleted
	create table #FilteredComponentSet(
		dependencynodeid uniqueidentifier not null,
		processinglevel int default 0 not null,
		previousdependencynodeid uniqueidentifier null)
	
	insert into #FilteredComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select cs.dependencynodeid, 0, cs.previousdependencynodeid
		from #ComponentSet cs
		join DependencyNode dn on (dn.DependencyNodeId = cs.dependencynodeid)
		where dn.BaseSolutionId = @SolutionId
		and dn.IsSharedComponent = 0  -- note that shared components will not be deleted, as the other referencing solution will take over the ownership of the component
	
	declare @level int
	set @level = 0

	-- loop through and add all sub-components that will also be deleted
	-- ASSUMPTION: If we are deleting the ancestor, then all of its solution internal descendents will also be deleted
	while (@@rowcount > 0)
	begin
		set @level = @level + 1

		insert into #FilteredComponentSet
			(dependencynodeid, processinglevel, previousdependencynodeid)
			select dependencynodeid, @level, previousdependencynodeid
			from #ComponentSet
			where previousdependencynodeid in
				(select dependencynodeid 
				 from #FilteredComponentSet 
				 where processinglevel = (@level - 1))
			and dependencynodeid not in (select dependencynodeid from #FilteredComponentSet) -- don't add nodes twice
	end

	declare @ActiveSolutionId uniqueidentifier
	set @ActiveSolutionId = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}'

	declare @Internal int
	set @Internal = 1 -- constant representing all internal dependencies

	declare @Required int
	set @Required = 2 -- constant representing all required dependencies
	
	declare @Unpublished int
	set @Unpublished = 4 -- constant representing all unpublished dependencies

	-- in-memory table to hold the results of the sproc
	declare @Results table (
		ResultId uniqueidentifier not null,
		RequiredComponentNodeId uniqueidentifier not null,
		RequiredComponentObjectId uniqueidentifier not null, 
		RequiredComponentType int not null, 
		RequiredComponentParentId uniqueidentifier null, 
		RequiredComponentBaseSolutionId uniqueidentifier not null,
		DependencyType int not null, 
		DependentComponentNodeId uniqueidentifier not null,
		DependentComponentObjectId uniqueidentifier not null, 
		DependentComponentType int not null, 
		DependentComponentParentId uniqueidentifier null, 
		DependentComponentBaseSolutionId  uniqueidentifier not null
	)
	
	-- insert preliminary results into the in-memory table
	insert into @Results (ResultId, 
		RequiredComponentNodeId, RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, 
		DependencyType,
		DependentComponentNodeId, DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId)
		select 
			newid(), RequiredComponentNodeId, RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId,
			DependencyType, 
			DependentComponentNodeId, DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
			from Dependency d
			join #FilteredComponentSet cs on (d.RequiredComponentNodeId = cs.dependencynodeid)
			where (d.DependencyType = @Required or d.DependencyType = @Unpublished)
				and (d.DependentComponentNodeId not in (select dependencynodeid from #FilteredComponentSet))
			order by DependentComponentType desc, RequiredComponentType desc

	-- call out all of the dependencies in the #FilteredComponentSet that have a parent that is being deleted, and the child is not part of the 
	-- solution being uninstalled, though it is not active.  the child cannot be deleted if it is part of another solution, since that solution
	-- has to be uninstalled first before this solution can be uninstalled. 
	insert into @Results (ResultId, 
		RequiredComponentNodeId, RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, 
		DependencyType,
		DependentComponentNodeId, DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId)
		select 
			newid(), RequiredComponentNodeId, RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId,
			DependencyType, 
			DependentComponentNodeId, DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
			from Dependency d
			join #FilteredComponentSet cs on (d.RequiredComponentNodeId = cs.dependencynodeid)
			where d.RequiredComponentBaseSolutionId = @SolutionId 
				and d.DependencyType = @Internal
				and d.DependentComponentBaseSolutionId <> @SolutionId
				and d.DependentComponentBaseSolutionId <> @ActiveSolutionId

	-- Return all of the dependent components that will be left without an ancestor if this solution is uninstalled
	select 
		RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId,
		DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
	from @Results r		
	where r.ResultId not in (
		-- this not in clause represents those components that are being updated that refer to components in the solution
		-- being uninstalled.  all of these components *will not* have dependencies after uninstallation since it would be
		-- impossible to refer to a component in the solution that did not exists before the solution was installed.
		select r1.ResultId 
		from @Results r1
		join DependencyNode dn on (r1.DependentComponentNodeId = dn.DependencyNodeId)
		where r1.RequiredComponentNodeId in (select dependencynodeid from #FilteredComponentSet)
			and r1.DependentComponentNodeId in (select dependencynodeid from #ComponentSet)
			and dn.TopSolutionId = @SolutionId
	)			
	
	-- drop the temporary tables
	drop table #FilteredComponentSet
	drop table #ComponentSet
end
