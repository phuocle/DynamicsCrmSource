

CREATE procedure [dbo].[p_RetrieveDependenciesForCompatibility]
(
	@solutionId uniqueidentifier,
	@systemSolutionIds EntityIdCollection READONLY,
	@version float
)

as
begin
	-- Algorithm:
	-- Take the SolutionId and find all root components for that solution
	-- With the set of root components, 
		-- find all solution internal subcomponents for those root components
		-- we will call this set, which is the set of solution components, the "component set"
	-- With the set of solution components
		-- find the components which are introduced in a later system version
		-- add them to the result set with self dependencies
		-- Expand this set by recursively finding the ancestors of these components (which are also in the component set),
			 --until the set cannot be expanded further
		-- add dependencies which are in the set, but not already in the result set. These are (required, dependent) pairs.
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
	
	-- in-memory table to hold the results of the sproc
	declare @Results table (
		RequiredComponentObjectId uniqueidentifier not null, 
		RequiredComponentType int not null, 
		RequiredComponentParentId uniqueidentifier null, 
		RequiredComponentBaseSolutionId uniqueidentifier not null,
		RequiredComponentIntroducedVersion float null,
		DependentComponentObjectId uniqueidentifier not null, 
		DependentComponentType int not null, 
		DependentComponentParentId uniqueidentifier null, 
		DependentComponentBaseSolutionId  uniqueidentifier not null,
		DependentComponentNodeId uniqueidentifier not null,
		Level int not null
	)

	-- Select all root components for the given solution
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNodeBase dn
			join SolutionComponent sc on (sc.ObjectId = dn.ObjectId and sc.ComponentType = dn.ComponentType)
		where sc.SolutionId = @solutionId
	
	declare @DoNotIncludeNonCustomRelationships bit = 0
	
	-- call sproc to collect solution internal descendents
	exec p_CollectSolutionInternalDescendents @DoNotIncludeNonCustomRelationships

	declare @level int = 1

	-- insert the first set of leaf nodes - these are root or non-root components introduced in a non-compatible system version
	insert into @Results
		(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, RequiredComponentIntroducedVersion,
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, DependentComponentNodeId, Level)
		select dn.ObjectId, dn.ComponentType, ParentId, BaseSolutionId, dn.IntroducedVersion, 
				dn.ObjectId, dn.ComponentType, ParentId, BaseSolutionId, dn.DependencyNodeId, @level
		from DependencyNodeBase dn
		join #ComponentSet sc
			on (dn.DependencyNodeId = sc.dependencynodeid)
		join @systemSolutionIds ss
			on dn.BaseSolutionId = ss.Id
			and dn.IntroducedVersion > @version

	-- insert the second set of leaf nodes - these are components that are in the solution that depend on a non-compatible system component that is NOT in the solution
	insert into @Results
			(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, RequiredComponentIntroducedVersion,
			DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, DependentComponentNodeId, Level)
			select d.RequiredComponentObjectId, d.RequiredComponentType, d.RequiredComponentParentId, d.RequiredComponentBaseSolutionId, d.RequiredComponentIntroducedVersion, 
			d.DependentComponentObjectId, d.DependentComponentType, d.DependentComponentParentId, d.DependentComponentBaseSolutionId, d.DependentComponentNodeId, @level
			from Dependency d
			join #ComponentSet cs
				on (d.DependentComponentNodeId = cs.dependencynodeid)			-- Dependency where the dependent component is in the Export set
			join @systemSolutionIds ss
				on d.RequiredComponentBaseSolutionId = ss.Id					-- AND the required component is a system component
				and d.RequiredComponentIntroducedVersion > @version				-- AND the required component is newer than the export version
			where d.RequiredComponentNodeId not in (select DependentComponentNodeId from #ComponentSet)	-- AND the required component is NOT in the export set

    -- Walk up the dependency tree to insert components which are in the solution and depend on other components that are in the solution
    -- that are either incompatible or depend on something that is in an incompatibility chain
	declare @rows int = 1;

	while @rows > 0
	begin
		insert into @Results
			(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, RequiredComponentIntroducedVersion,
			DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, DependentComponentNodeId, Level )
			select d.RequiredComponentObjectId, d.RequiredComponentType, d.RequiredComponentParentId, d.RequiredComponentBaseSolutionId, d.RequiredComponentIntroducedVersion, 
			d.DependentComponentObjectId, d.DependentComponentType, d.DependentComponentParentId, d.DependentComponentBaseSolutionId, d.DependentComponentNodeId, @level + 1
			from Dependency d
				join @Results r on r.DependentComponentNodeId = d.RequiredComponentNodeId and r.Level = @level
				join #ComponentSet cs on d.RequiredComponentNodeId = cs.dependencynodeid
				
		set @rows = @@ROWCOUNT
		select @level = @level + 1
	end

		
	-- return the results as a dataset
	select distinct RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, RequiredComponentIntroducedVersion,
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
		from @Results order by RequiredComponentType asc
	
	-- drop the temporary table
	drop table #ComponentSet
end
