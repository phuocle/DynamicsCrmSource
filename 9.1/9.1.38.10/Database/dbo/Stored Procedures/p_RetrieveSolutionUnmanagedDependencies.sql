

create procedure [dbo].[p_RetrieveSolutionUnmanagedDependencies]
(
	@SolutionId uniqueidentifier
)
as
begin
	-- This stored procedure is much like the p_RetrieveDependenciesForUninstall stored
	-- procedure, except that it returns dependent components only if their top solution
	-- is unmanaged and that it iterates to process all dependencies, as opposed to only
	-- those on the first level

	-- Algorithm:
	-- 1. Find all of the root components for the solution being uninstalled (and all relationships)
	-- 2. Find all of the solution internal descendents from the set of root components - the result is the "component set"
	-- 3. From the component set, find all of the first level required dependencies (not solution internal) - the "dependency set"
	-- 4. Iterate to find the rest

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

	-- add all non-shared components of this solution from ComponentSet to FilteredComponentSet
	insert into #FilteredComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select cs.dependencynodeid, 0, cs.previousdependencynodeid
		from #ComponentSet cs
		join DependencyNode dn on (dn.DependencyNodeId = cs.dependencynodeid)
		where dn.BaseSolutionId = @SolutionId
		and dn.IsSharedComponent = 0  -- note that shared components will not be deleted, as the other referencing solution will take over the ownership of the component
	
	declare @Level int = 0

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

	declare @ActiveSolutionId uniqueidentifier = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}'
	
	-- in-memory table to hold the results of the sproc
	declare @ManagedSolutionDependencies table (
		BaseSolutionId  uniqueidentifier not null,
		TopSolutionId  uniqueidentifier not null,
		ObjectId uniqueidentifier not null, 
		DependencyNodeId uniqueidentifier null,
		ComponentType int not null, 
		level int not null
	)
	
	set @Level = 1

	-- insert preliminary results into the in-memory table
	insert into @ManagedSolutionDependencies 
		(BaseSolutionId, TopSolutionId, ObjectId, DependencyNodeId, ComponentType, level)
		select dnb.BaseSolutionId, dnb.TopSolutionId, dnb.ObjectId, db.DependentComponentNodeId, dnb.ComponentType, @Level
		from DependencyBase db
			join DependencyNodeBase dnb on (db.DependentComponentNodeId = dnb.DependencyNodeId)
			join #FilteredComponentSet fcs on (db.RequiredComponentNodeId = fcs.dependencynodeid)
		where db.DependentComponentNodeId not in (select dependencynodeid from #FilteredComponentSet)
			and dnb.TopSolutionId = @ActiveSolutionId

	-- iterate to find the rest
	declare @Rows int = 1;
	while @Rows > 0
	begin
		set @Level = @Level + 1

		insert into @ManagedSolutionDependencies
		(BaseSolutionId, TopSolutionId, ObjectId, DependencyNodeId, ComponentType, level)
		select dnb.BaseSolutionId, dnb.TopSolutionId, dnb.ObjectId, db.DependentComponentNodeId, dnb.ComponentType, @Level
		from DependencyBase db
			join DependencyNodeBase dnb on (db.DependentComponentNodeId = dnb.DependencyNodeId)
			join @ManagedSolutionDependencies msd on (db.RequiredComponentNodeId = msd.DependencyNodeId)
				and msd.BaseSolutionId = @ActiveSolutionId
		where db.DependentComponentNodeId not in (select DependencyNodeId from @ManagedSolutionDependencies)
			and dnb.TopSolutionId = @ActiveSolutionId
			
		set @Rows = @@ROWCOUNT
	end

	-- add customizations on the current solution
	insert into @ManagedSolutionDependencies
		(BaseSolutionId, TopSolutionId, ObjectId, DependencyNodeId, ComponentType, level)
		select dnb.BaseSolutionId, dnb.TopSolutionId, dnb.ObjectId, dnb.DependencyNodeId, dnb.ComponentType, 1
		from DependencyNodeBase dnb
		where dnb.DependencyNodeId in (select dependencynodeid from #FilteredComponentSet)
			and dnb.TopSolutionId = @ActiveSolutionId
			and dnb.BaseSolutionId <> @ActiveSolutionId

	-- clean up temporary tables
	if object_id(N'tempdb..#ComponentSet') IS NOT NULL
	drop table #ComponentSet;

	if object_id(N'tempdb..#FilteredComponentSet') IS NOT NULL
	drop table #FilteredComponentSet;

	-- select the results
	select distinct TopSolutionId, ObjectId, DependencyNodeId, ComponentType from @ManagedSolutionDependencies

end