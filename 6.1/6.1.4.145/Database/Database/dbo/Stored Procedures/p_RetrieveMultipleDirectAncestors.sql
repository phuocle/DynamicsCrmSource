

create procedure p_RetrieveMultipleDirectAncestors
(
	@InsertionSql nvarchar(max)
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
	exec sp_sqlexec @InsertionSql	
		
	select 
		RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, 
		DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId
	from Dependency d
		join #ComponentSet cs on (d.DependentComponentNodeId = cs.dependencynodeid)
	where (d.DependencyType = @SolutionInternal)
	order by RequiredComponentType asc, DependentComponentType asc

	-- drop the temp table
	drop table #ComponentSet	
end