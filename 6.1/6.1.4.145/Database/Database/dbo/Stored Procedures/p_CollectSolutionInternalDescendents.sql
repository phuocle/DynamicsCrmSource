

create procedure p_CollectSolutionInternalDescendents
(
	@IncludeNonCustomRelationships bit
)
as
begin
	-- Assumption: The #ComponentSet table has been created outside of this sproc with the following structure:
	--
	-- create table #ComponentSet(
	-- 	dependencynodeid uniqueidentifier not null,
	--	processinglevel int default 0 not null,
	--	previousdependencynodeid uniqueidentifier null
	-- )

	-- Assumption: The #ComponentSet table is populated with those components that we want to find
	--             solution internal dependencies for and their level is set to 0.
	
	-- Find all of the solution internal subcomponents by traversing the dependencies a level at a time
	declare @level int
	set @level = 0

	declare @SolutionInternal int
	set @SolutionInternal = 1 -- this is the constant that represents a solution internal dependency type

	declare @EntityRelationshipComponentType int
	set @EntityRelationshipComponentType = 10
	
	declare @previousrowcount int
	set @previousrowcount = 1
	
	while (@previousrowcount > 0)
	begin
		set @level = @level + 1

		-- Note the use of the base table in this query.  This is used to optimize the indexes and
		-- ensure that we don't have to join with the DependencyNode table (twice actually) if we 
		-- were to use the view.
		insert into #ComponentSet
			(dependencynodeid, processinglevel, previousdependencynodeid)
			select DependentComponentNodeId, @level, RequiredComponentNodeId
			from DependencyBase
			where RequiredComponentNodeId in
				(select dependencynodeid
				 from #ComponentSet
				 where processinglevel = (@level - 1))
			and DependencyType = @SolutionInternal
			
		-- save the row count for the while loop condition
		set @previousrowcount = @@rowcount
		
		if (@IncludeNonCustomRelationships = 0)
		begin
			--
			-- this clause is here to remove any non-custom EntityRelationships from the retrieval 
			-- of descendents of the given components.  We have to do this by joining through the
			-- #ComponentSet to the EntityRelationshipView table and checking the IsCustomRelationship
			-- attribute directly
			--
			-- LATER(shead): optimize this by adding the IsCustomRelationship attribute to the DependencyNode table itself
			--
			
			delete from #ComponentSet 
			where dependencynodeid in
			(
				select dn.DependencyNodeId 
				from DependencyNodeBase dn -- optimize by using the base table
					join #ComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)
					join EntityRelationshipView er on (dn.ObjectId = er.EntityRelationshipId)
				where cs.processinglevel = @level 
					and dn.ComponentType = @EntityRelationshipComponentType
					and er.IsCustomRelationship = 0
			)
			
			-- subtract any rows that were deleted from the rowcount
			set @previousrowcount = @previousrowcount - @@rowcount
		end
	end
	
	-- Assumption: The #ComponentSet table will be deleted outside of this sproc
end
