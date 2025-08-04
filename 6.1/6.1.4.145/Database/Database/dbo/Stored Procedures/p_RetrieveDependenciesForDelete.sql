

create procedure p_RetrieveDependenciesForDelete
(
	@ObjectId uniqueidentifier,
	@ComponentType int
)
as
begin
	-- This stored procedure is meant to collect all of the dangling dependent components
	-- that will be left if the given object is deleted.  The optimal output of this stored
	-- procedure is to return no results, which means the component can be deleted without 
	-- violating any dependency relationships. But if something is returned from this sproc, 
	-- then that means that if the given component is deleted, then the results will be the 
	-- components left that require the component being deleted to exist in order to exist 
	-- themselves.

	-- Algorithm:
	-- 1. Find all solution internal descendents from the given component - the "component set"
	-- 2. From the component set, find all first level dependent required components (not solution internal) - the "dependency set"
	-- 3. Filter any component from the dependency set that is already in the component set, since the elements in the
	--    component set are those that will be deleted when the given component is deleted

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
	
	-- Insert the initial node that is going to be deleted into the #ComponentSet table
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select DependencyNodeId, 0, null
		from DependencyNode
		where ObjectId = @ObjectId and ComponentType = @ComponentType

	declare @IncludeNonCustomRelationships bit
	set @IncludeNonCustomRelationships = 1
	
	-- call sproc to collect solution internal descendents
	exec p_CollectSolutionInternalDescendents @IncludeNonCustomRelationships

	declare @Required int
	set @Required = 2 -- constant representing all required dependencies

	declare @Unpublished int
	set @Unpublished = 4 -- constant representing all unpublished dependencies

	-- Return all dependencies for those components that will be left after the deletion 
	-- occurs that are dependent on a component being deleted
	select 
		RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId,
		DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
		from Dependency d
		join #ComponentSet cs on (d.RequiredComponentNodeId = cs.dependencynodeid)
		where (d.DependencyType = @Required or d.DependencyType = @Unpublished)
		and (d.DependentComponentNodeId not in (select dependencynodeid from #ComponentSet))
		order by DependentComponentType desc, RequiredComponentType desc

	-- delete the #ComponentSet table
	drop table #ComponentSet
end
