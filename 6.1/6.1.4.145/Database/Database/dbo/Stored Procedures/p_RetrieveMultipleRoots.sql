

create procedure p_RetrieveMultipleRoots
(
	@InsertionSql nvarchar(max),
	@RetrievalType int
)
as
begin	
	-- This stored procedure is meant to find all of the solution component roots
	-- for the given components in the InsertionSql.  If the components themselves
	-- are roots, then they will be returned. 
	--
	-- The term root is used here not as it is in the code, since we
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
	
	declare @RetrieveBoth int
	declare @RetrieveOnlyInternal int
	declare @RetrieveOnlyExternal int
	
	set @RetrieveBoth = 0
	set @RetrieveOnlyInternal = 1
	set @RetrieveOnlyExternal = 2

	-- validate that the retrieval type is valid
	if (@RetrievalType <> @RetrieveBoth and @RetrievalType <> @RetrieveOnlyInternal and @RetrievalType <> @RetrieveOnlyExternal)
	begin
		return
	end
	
	create table #ComponentSet(
		dependencynodeid uniqueidentifier not null,
		processinglevel int not null,
		previousdependencynodeid uniqueidentifier null
	)
	
	declare @Results table (
		DependencyNodeId uniqueidentifier not null,
		ObjectId uniqueidentifier not null, 
		ComponentType int not null
	)
	
	-- create statistics to ensure the queries are optimized
	create statistics mpcstat on #ComponentSet(dependencynodeid, processinglevel)
	
	-- Create new indexes
	create index ndx_processinglevel ON #ComponentSet (processinglevel)	
	create index ndx_dependencynodeid ON #ComponentSet (dependencynodeid)	
	
	declare @level int
	set @level = 0

	-- declare dependency types
	declare @SolutionInternal int
	declare @Required int
	declare @Unpublished int

	set @SolutionInternal = 1 -- this is the constant that represents a solution internal dependency type	
	set @Required = 2 -- constant representing all required dependencies
	set @Unpublished = 4 -- constant for unpublished dependencies

	-- declare solution constant
	declare @ActiveSolutionId uniqueidentifier
	set @ActiveSolutionId = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}' -- this is the constant that represents the active solution
		
	-- insert all of the the components into the #ComponentSet table
	-- that we want to find roots for
	exec sp_sqlexec @InsertionSql	
		
	declare @DoNotIncludeReferencedEntity bit
	set @DoNotIncludeReferencedEntity = 0
	
	-- find all solution internal ancestors for the given component
	exec p_CollectSolutionInternalAncestors @DoNotIncludeReferencedEntity

	-- delete any node that was a child, leaving only roots
	delete from #ComponentSet 
		where dependencynodeid in (select previousdependencynodeid from #ComponentSet) 

	-- save the results for all of the internal roots
	insert into @Results (DependencyNodeId, ObjectId, ComponentType)
		select distinct dn.DependencyNodeId, dn.ObjectId, dn.ComponentType
		from DependencyNode dn
			join #ComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)		
		
	-- now find the external roots
	if (@RetrievalType = @RetrieveBoth or @RetrievalType = @RetrieveOnlyExternal)
	begin
		-- reset the level of the roots to 0
		update #ComponentSet set processinglevel = 0
		
		declare @IncludeNonCustomRelationships bit
		set @IncludeNonCustomRelationships = 0 -- do not include non custom relationships
	
		-- starting from the internal roots that were found above,
		-- collect all solution internal dependent components
		exec p_CollectSolutionInternalDescendents @IncludeNonCustomRelationships
		
		-- we want to filter out display strings from the set of active components
		-- since display strings proliferate out from any given display string to
		-- a wider set of entities, but we do not necessarily want to return those
		-- entities as external roots since the entity itself has not been customized
		-- but just the display string has been customized.  There are no other external
		-- dependencies from the given display string that are required, so filtering out
		-- display strings will help keep the 'add required components' dialog results to
		-- a minimum after importing translations.
		declare @DisplayStringComponentType int
		set @DisplayStringComponentType = 22

		-- delete anything that is not active from the list of components
		delete from #ComponentSet
			where dependencynodeid in (select dn.DependencyNodeId
				from DependencyNode dn
					join #ComponentSet cs on (cs.dependencynodeid = dn.DependencyNodeId)
				where dn.TopSolutionId <> @ActiveSolutionId or
					dn.ComponentType = @DisplayStringComponentType)
		
		-- reset the level of the active components to 0
		update #ComponentSet set processinglevel = 0
		
		-- find all Required or Unpublished dependencies for the given set of active components
		insert into #ComponentSet
			select RequiredComponentNodeId, @level + 1, DependentComponentNodeId
			from DependencyBase db
				join DependencyNode dc on (db.DependentComponentNodeId = dc.DependencyNodeId)
				join #ComponentSet cs on (cs.dependencynodeid = db.DependentComponentNodeId)
			where (db.DependencyType = @Required or db.DependencyType = @Unpublished) and cs.processinglevel = @level

		-- SolutionComponentType constant that represents an EntityRelationship
		declare @EntityRelationshipComponentType int
		set @EntityRelationshipComponentType = 10
	
		-- SolutionComponentType constant that represents an EntityRelationshipRole
		declare @EntityRelationshipRoleComponentType int	
		set @EntityRelationshipRoleComponentType = 11
		
		-- delete all non custom relationships since these are managed by the system, cannot be deleted and should not be followed
		delete from #ComponentSet 
		where dependencynodeid in
		(
			select dn.DependencyNodeId 
			from DependencyNodeBase dn -- optimize by using the base table
				join #ComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)
				join EntityRelationshipView er on (dn.ObjectId = er.EntityRelationshipId)
			where cs.processinglevel = @level + 1
				and dn.ComponentType = @EntityRelationshipComponentType
				and er.IsCustomRelationship = 0
		)
		
		-- 
		-- the structure of the EntityRelationship -> EntityRelationshipRole is a special condition
		-- that we have to check for here, since the relationship is reversed because of the way relationships
		-- are stored and how we have to look them up.  This means that instead of the query done above
		-- where we check for the required nodes from the set of dependent nodes in the #ComponentSet table,
		-- we now have to check for dependent EntityRelationships from the set of required EntityRelationshipRoles
		-- in the #ComponentSet table
		--
		-- We need to check for both SolutionInternal and Required here because on the lookup, only one side of the
		-- relationship would have been checked, and including both SolutionInternal and Required here allow us to 
		-- pick up the other side of the relationship when necessary
		--
		insert into #ComponentSet
			select d.DependentComponentNodeId, @level + 1, d.RequiredComponentNodeId
			from Dependency d
				join #ComponentSet cs on (cs.dependencynodeid = d.RequiredComponentNodeId)
				join EntityRelationshipView er on (d.DependentComponentObjectId = er.EntityRelationshipId)
			where (d.DependencyType = @Required or d.DependencyType = @SolutionInternal) 
				and cs.processinglevel = @level
				and d.RequiredComponentType = @EntityRelationshipRoleComponentType 
				and d.DependentComponentType = @EntityRelationshipComponentType
				and er.IsCustomRelationship = 1
		
		-- reset the level of the active components to 0
		update #ComponentSet set processinglevel = 0
		
		declare @IncludeReferencedEntity bit
		set @IncludeReferencedEntity = 1
	
		-- for all of the dependency nodes that were added, find all of the ancestors
		exec p_CollectSolutionInternalAncestors @IncludeReferencedEntity
		
		-- delete any node that was a child, leaving only roots
		delete from #ComponentSet 
			where dependencynodeid in (select previousdependencynodeid from #ComponentSet)
		
		if (@RetrievalType = @RetrieveOnlyExternal)
		begin
			-- do not return internal roots when RetrieveOnlyExternal is set
			delete from #ComponentSet 
			where dependencynodeid in (select DependencyNodeId from @Results)
			
			-- remove all internal roots when only returning external roots
			delete from @Results
		end 
		
		-- insert the external roots into the result set
		insert into @Results
			select distinct dn.DependencyNodeId, dn.ObjectId, dn.ComponentType
			from DependencyNode dn
				join #ComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)		
	end
	
	-- return all of the results
	select distinct ObjectId, ComponentType from @Results order by ComponentType
	
	-- drop the temporary table
	drop table #ComponentSet
end
