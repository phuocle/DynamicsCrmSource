

create procedure dbo.p_RetrieveMultipleDirectAncestors
(
	@ComponentSetType t_ComponentSetTable READONLY
)
as
begin	
	--
	-- This stored procedure is meant to find all of the direct solution internal
	-- ancestors for the given set of solution components.  We only go one level
	-- because we are just finding the direct ancestors, and not necessarily the roots.
	--
		
	create table #ComponentSet (
		dependencynodeid uniqueidentifier not null		
	)
				
	-- declare dependency types
	declare @SolutionInternal int

	set @SolutionInternal = 1 -- this is the constant that represents a solution internal dependency type	

	-- insert all of the the components into the #ComponentSet table
	-- that we want to find roots for
	insert into #ComponentSet
		select DependencyNodeId
		from DependencyNode d
		inner join @ComponentSetType t
		on d.ObjectId = t.ObjectId and d.ComponentType = t.ComponentType	
		
	select 
		RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, 
		DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
	from Dependency d
		join #ComponentSet cs on (d.DependentComponentNodeId = cs.dependencynodeid)
	where (d.DependencyType = 1)
	order by RequiredComponentType asc, DependentComponentType asc

	-- drop the temp table
	drop table #ComponentSet	
end