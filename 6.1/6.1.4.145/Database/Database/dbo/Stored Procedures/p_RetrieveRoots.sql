

create procedure p_RetrieveRoots
(
	@ObjectId uniqueidentifier,
	@ComponentType int,
	@RetrievalType int
)
as
begin	
	-- This stored procedure is meant to find all of the solution component roots
	-- for the given component.  If the component itself is a root, then it will 
	-- be returned. The term root is used here not as it is in the code, since we
	-- cannot check for all of the extra conditions, but instead it is defined as
	-- a component that does not have any more parent solution internal links. Further
	-- checking has to be done in the middle tier in order to verify that those nodes 
	-- returned from this method are actually solution component roots.
	
	-- @RetrievalType is a filter:
	-- 0 = Retrieve both internal and external roots.  Internal roots are found by following
	--     SolutionInternal links only.  External links are found by following Required links
	--     on customized components, and then following those component's SolutionInternal links
	--     to their end.
	-- 1 = Retrieve only internal roots.
	-- 2 = Retrieve only external roots.
	
	declare @InsertionSql nvarchar(max)
	set @InsertionSql = 
	'insert into #ComponentSet
		select DependencyNodeId, 0, null
		from DependencyNode
		where ObjectId = ''' + convert(nvarchar(128), @ObjectId) + ''' and ComponentType = ' + convert(nvarchar(28), @ComponentType)
	
	exec p_RetrieveMultipleRoots @InsertionSql,@RetrievalType
	
end