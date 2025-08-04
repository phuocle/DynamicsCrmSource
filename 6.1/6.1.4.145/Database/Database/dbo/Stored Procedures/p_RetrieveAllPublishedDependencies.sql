

create procedure p_RetrieveAllPublishedDependencies
(
	@SolutionId uniqueidentifier
)
as
begin
	--
	-- Simple stored procedure that takes a solution ID, finds all components that belong to that solution
	-- based on whether the 'BaseSolutionId' of the Dependency is equal to the given solution, and then 
	-- finds all published dependencies where one of the sides is in the given collection.
	--
	-- Return the results

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
	
	declare @ActiveSolutionId uniqueidentifier
	set @ActiveSolutionId = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}' -- this is the constant that represents the active solution
		
	declare @Required int
	set @Required = 2 -- constant representing all required dependencies

	-- insert all of the root components from the given solution
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNode dn
		join SolutionComponent sc on (dn.ObjectId = sc.ObjectId and dn.ComponentType = sc.ComponentType)
		where sc.SolutionId = @SolutionId
		
	declare @IncludeNonCustomRelationships bit
	set @IncludeNonCustomRelationships = 1
	
	exec p_CollectSolutionInternalDescendents @IncludeNonCustomRelationships
	
	-- find all published dependencies where either side is owned by the solution being processed
	select 
		RequiredComponentObjectId, RequiredComponentType, RequiredComponentBaseSolutionId,
		DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentBaseSolutionId
	from Dependency
	where DependencyType = @Required and
		((RequiredComponentNodeId in (select dependencynodeid from #ComponentSet) 
			and RequiredComponentBaseSolutionId = @SolutionId and DependentComponentBaseSolutionId <> @ActiveSolutionId) or
		 (DependentComponentNodeId in (select dependencynodeid from #ComponentSet) 
			and DependentComponentBaseSolutionId = @SolutionId and RequiredComponentBaseSolutionId <> @ActiveSolutionId))
		 and RequiredComponentBaseSolutionId <> DependentComponentBaseSolutionId
	
	-- drop the temporary table
	drop table #ComponentSet
end
