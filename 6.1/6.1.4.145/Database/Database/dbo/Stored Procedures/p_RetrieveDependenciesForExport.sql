

create procedure [dbo].[p_RetrieveDependenciesForExport]
(
	@SolutionId uniqueidentifier,
	@RetrieveInternal bit
)
as
begin
	-- This method retrieves all of the components that are ancestors of components being exported.  It operates in
	-- two separate modes.  
	--
	-- Mode 1 (@RetrieveInternal = 1): The first returns all dependencies that are not being exported, including solution internal
	-- dependencies.  This is meant to indicate during export what is required when importing this set of customizations.
	-- For example, lets take the case where we are exporting an Entity, but the entity itself has not changed, only one
	-- of its attributes has changed.  In this case, an empty node would be exported for the entity and the full definition
	-- of the attribute would be exported because we expect the entity to exist on the target system.  This algorithm is 
	-- responsible for indicating that the entity is required on the target system by returning that the attribute has a 
	-- dependency on its parent entity through a solution internal dependency.
	--
	-- Mode 2 (@RetrieveInternal = 0): The second use of this method is the same as above, except solution internal links are not returned.  That
	-- means that anything that is internally required is expected to exist on the target system and is not required to be
	-- called out explicitly here.  This mode is meant to be used for interaction with the end user, and the end user should
	-- not be concerned with the internal linkages between components in the solution heirachy.
	--

	-- Algorithm:
	-- Take the SolutionId and find all root components for that solution
	-- With the set of root components, 
		-- find all solution internal subcomponents for those root components that have changed for this solution
		-- we will call this set, which is the updated set of solution components, the "component set"
	-- With the updated set of solution components, 
		-- find all immediate ancestors of those solution components that have changed for this solution
		-- this is where we distinguish between Mode 1 and Mode 2, we take all ancestors in Mode 1, but only external ancestors in Mode 2
		-- we will call this set, which is the set of dependencies for the updated components, the "dependency set"
	-- Remove those components that are in both the dependency set and the component set from the dependency set since those components
	-- will be being exported as part of the solution
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
		DependencyType int not null, 
		DependentComponentObjectId uniqueidentifier not null, 
		DependentComponentType int not null, 
		DependentComponentParentId uniqueidentifier null, 
		DependentComponentBaseSolutionId  uniqueidentifier not null,
		RequiredComponentIntroducedVersion float null
	)

	-- Select all root components for the given solution
	insert into #ComponentSet
		(dependencynodeid, processinglevel, previousdependencynodeid)
		select dn.DependencyNodeId, 0, null
		from DependencyNode dn
			join SolutionComponent sc on (sc.ObjectId = dn.ObjectId and sc.ComponentType = dn.ComponentType)
		where sc.SolutionId = @SolutionId
	
	declare @DoNotIncludeNonCustomRelationships bit
	set @DoNotIncludeNonCustomRelationships = 0
	
	-- call sproc to collect solution internal descendents
	exec p_CollectSolutionInternalDescendents @DoNotIncludeNonCustomRelationships
	
	declare @ActiveSolutionId uniqueidentifier
	set @ActiveSolutionId = '{FD140AAE-4DF4-11DD-BD17-0019B9312238}' -- this is the constant that represents the active solution
	
	declare @SystemSolutionId uniqueidentifier
	set @SystemSolutionId = '{FD140AAD-4DF4-11DD-BD17-0019B9312238}' -- this is the constant that represents the active solution

	declare @SolutionInternal int
	set @SolutionInternal = 1 -- this is the constant that represents a solution internal dependency type

	declare @Required int
	set @Required = 2 -- constant representing all required dependencies

	if (@RetrieveInternal = 1)
	begin
		-- For all roots of this solution that were created as part of another managed solution installation, add a dependency to 
		-- that component since it was added to the solution on the source system and is expected to exist on the target system 
		-- even if there have not been customizations performed.  See bug 81639 for some examples
		insert into @Results
			(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, DependencyType, 
			DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, RequiredComponentIntroducedVersion)
			select dn.ObjectId, dn.ComponentType, ParentId, BaseSolutionId, @SolutionInternal,
				   dn.ObjectId, dn.ComponentType, ParentId, BaseSolutionId, dn.IntroducedVersion
			from DependencyNode dn
				join SolutionComponent sc on (dn.ObjectId = sc.ObjectId and dn.ComponentType = sc.ComponentType)
			where sc.SolutionId = @SolutionId and dn.BaseSolutionId <> @ActiveSolutionId 
				and dn.BaseSolutionId <> @SystemSolutionId
		
		-- For those components that were not created by an unprotected solution, but where created by another
		-- protected solution, return that component as an internal dependency.  This means that if an attribute
		-- was created by a protected solution, and then a different unprotected solution came along and customized
		-- that attribute, we expect that that attribute will exist on the target system and therefore return it as
		-- a dependency on export
		insert into @Results
			(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, DependencyType, 
			DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, RequiredComponentIntroducedVersion)
			select ObjectId, ComponentType, ParentId, BaseSolutionId, @SolutionInternal,
				   ObjectId, ComponentType, ParentId, BaseSolutionId, dn.IntroducedVersion
			from DependencyNode dn
				join #ComponentSet cs on (dn.DependencyNodeId = cs.dependencynodeid)
			where dn.BaseSolutionId <> @ActiveSolutionId and dn.BaseSolutionId <> @SystemSolutionId 
				and dn.TopSolutionId = @ActiveSolutionId

		-- For those components that were created by an unprotected solution, we have to return their solution internal
		-- required component dependencies.  This means that if a new attribute was created by an unprotected solution
		-- on an entity that was created by a protected solution, then we will expect that the entity will exist on the
		-- target system so that the attribute can be created and therefore we return the entity as a dependency on export
		--	
		-- Note that if the ancestor (required component) is also being exported, then this dependency does not need to be
		-- returned (hence the check to see whether the rc.TopSolutionId = ActiveSolutionId)
		insert into @Results
			(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, DependencyType, 
			DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, RequiredComponentIntroducedVersion)
			select 
				rc.ObjectId, rc.ComponentType, rc.ParentId, rc.BaseSolutionId, db.DependencyType, 
				dc.ObjectId, dc.ComponentType, dc.ParentId, dc.BaseSolutionId, rc.IntroducedVersion
			from DependencyBase db
				join DependencyNode dc on (db.DependentComponentNodeId = dc.DependencyNodeId)
				join #ComponentSet cs on (cs.dependencynodeid = dc.DependencyNodeId)
				join DependencyNode rc on (db.RequiredComponentNodeId = rc.DependencyNodeId)
			where (db.DependencyType = @SolutionInternal)
				and dc.BaseSolutionId = @ActiveSolutionId and dc.TopSolutionId = @ActiveSolutionId
				and rc.TopSolutionId <> @ActiveSolutionId
		
		-- For all of those components within the Solution Internal heirarchy that have been customized and depend on other components
		-- within the heirarchy, we have to return them as results here so that we know about the solution internal links between
		-- non-system solutions and the solution be exported.
		--
		-- E.G. Solution 1 has created a new attribute on the account entity, the attribute is named A1. The solution has also customized 
		-- the account form, adding that attribute to the form.  If solution 1 is installed as protected on a target system, and another
		-- solution comes along and customizes the account form, we have to return the dependency that the form depends on the attribute
		-- installed by solution 1, attribute A1.  This insertion statement ensures that A1 is added.
		insert into @Results
		(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, RequiredComponentIntroducedVersion)
		select 
			rc.ObjectId, rc.ComponentType, rc.ParentId, rc.BaseSolutionId, d.DependencyType, 
			dc.ObjectId, dc.ComponentType, dc.ParentId, dc.BaseSolutionId, rc.IntroducedVersion
		from DependencyBase d
			join #ComponentSet cs on (d.DependentComponentNodeId = cs.dependencynodeid)
			join DependencyNode dc on (d.DependentComponentNodeId = dc.DependencyNodeId)
			join DependencyNode rc on (d.RequiredComponentNodeId = rc.DependencyNodeId)		
		where 
			-- select only required dependencies where the dependent component has been customized and the required component 
			-- is not part of the active solution (and hence is being exported as part of this solution)
			(d.DependencyType = @Required and dc.TopSolutionId = @ActiveSolutionId and rc.TopSolutionId <> @ActiveSolutionId)
			-- keep only component in the solution internal hierachy (these are internal links)
			and d.RequiredComponentNodeId in (select dependencynodeid from #ComponentSet)
			-- filter out all of those components that were created by the system solution
			and d.RequiredComponentNodeId not in 
				(
				select cs.dependencynodeid 
				from #ComponentSet cs
				join DependencyNode dn on (cs.dependencynodeid = dn.DependencyNodeId)
				where dn.BaseSolutionId = @SystemSolutionId
				)	
	end

	-- Create an in-memory filtered table that will hold those components
	-- that were updated by an unprotected solution
	declare @FilteredComponentSet table (
		dependencynodeid uniqueidentifier not null		
	)

	-- Select all components that have the active solution id on top, meaning 
	-- that they are part of an unprotected solution
	insert into @FilteredComponentSet (dependencynodeid)
		select cs.dependencynodeid
		from #ComponentSet cs
			join DependencyNode dn on (cs.dependencynodeid = dn.DependencyNodeId)
		where dn.TopSolutionId = @ActiveSolutionId

	-- LATER(shead): optimize this statement by creating a secondary table for #ComponentSet with a set of unique DependencyNodeIds
	-- so that the not in statement can do a seek instead of a scan.  (decrease from a moderately customized system goes from 120 sec
	-- to 4 seconds.

	-- Return all dependencies for those components that have been updated
	insert into @Results
		(RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, DependencyType, 
		DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, RequiredComponentIntroducedVersion)
		select 
			RequiredComponentObjectId, RequiredComponentType, RequiredComponentParentId, RequiredComponentBaseSolutionId, DependencyType, 
			DependentComponentObjectId, DependentComponentType, DependentComponentParentId, DependentComponentBaseSolutionId, RequiredComponentIntroducedVersion
		from Dependency d
			join @FilteredComponentSet fcs on (d.DependentComponentNodeId = fcs.dependencynodeid)
		where (d.DependencyType = @Required or d.DependencyType = @SolutionInternal)		
			and d.RequiredComponentNodeId not in (
				-- exclude those components that are already in the solution
				select dependencynodeid from #ComponentSet
				union
				-- exclude dependencies on all non-custom relationships
				select dn.DependencyNodeId
					from DependencyNode dn
					join MetadataSchema.EntityRelationship er on (dn.ObjectId = er.EntityRelationshipId)
					where dn.ComponentType = 10 and er.IsCustomRelationship = 0)

	-- return the results as a dataset
	select * from @Results order by RequiredComponentType asc
	
	-- drop the temporary table
	drop table #ComponentSet
end
