

create procedure dbo.p_PublishMetadata
(
    @publishDeep bit
)
as
begin
	-- CRM SE 5610:  Create a table variable which will contain the data we need to process - we do it with a table variable instead of using the temp
	-- table because of significant performance benefits
	declare @MetadataPublishCollectInternal table (ObjectId uniqueidentifier, ObjectTypeCode int not null, ComponentState tinyint not null)
		
	-- CRM SE 5610:  Copy the contents of the temp table into the table variable
	insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState) select ObjectId, ObjectTypeCode, ComponentState from #MetadataPublishCollect
	
	-- If publish deep is true then we need to do some additional collection steps
	set nocount on
	if(@publishDeep = 1)
	begin
		-- CRM SE 5610:  All references to the temp table have been changed to now reference the table variable
		-- If there exist any entities in the table then collect all PARENT attributes and localized labels related to those entities
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 1))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select a.AttributeId, 2, a.ComponentState from AttributeAsIfPublishedLogicalView a
				join @MetadataPublishCollectInternal mpc on a.EntityId = mpc.ObjectId
				where mpc.ObjectTypeCode = 1 and a.AttributeOf is null and a.AggregateOf is null and a.YomiOf is null

			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select l.LocalizedLabelId, 7, l.ComponentState FROM LocalizedLabelAsIfPublishedLogicalView l
				join @MetadataPublishCollectInternal mpc on l.ObjectId = mpc.ObjectId
				where mpc.ObjectTypeCode = 1
		end
		
		-- If there exist any attributes in the table then collect related child attributes, localized labels, lookup values, and local option sets
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 2))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select a.AttributeId, 2, a.ComponentState from AttributeAsIfPublishedLogicalView a
				join @MetadataPublishCollectInternal mpc on a.AttributeOf = mpc.ObjectId
				where mpc.ObjectTypeCode = 2

			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select a.AttributeId, 2, a.ComponentState from AttributeAsIfPublishedLogicalView a
				join @MetadataPublishCollectInternal mpc on a.AggregateOf = mpc.ObjectId
				where mpc.ObjectTypeCode = 2

			-- We have an additional clause for YomiOf - most YomiOf attributes are also AttributeOfs which we've already added, but some are not
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select a.AttributeId, 2, a.ComponentState from AttributeAsIfPublishedLogicalView a
				join @MetadataPublishCollectInternal mpc on a.YomiOf = mpc.ObjectId
				where mpc.ObjectTypeCode = 2 and a.AttributeOf is null

			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select l.LocalizedLabelId, 7, l.ComponentState from LocalizedLabelAsIfPublishedLogicalView l
				join @MetadataPublishCollectInternal mpc on l.ObjectId = mpc.ObjectId
				where mpc.ObjectTypeCode = 2

			-- collect only Local OptionSets (IsGlobal = 0) for attributes we have already collected
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select o.OptionSetId, 15, o.ComponentState from OptionSetAsIfPublishedLogicalView o
				join AttributeAsIfPublishedLogicalView a on a.OptionSetId = o.OptionSetId
				join @MetadataPublishCollectInternal mpc on mpc.ObjectId = a.AttributeId and mpc.ObjectTypeCode = 2
				where o.IsGlobal = 0

			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select a.AttributeLookupValueId, 5, a.ComponentState from AttributeLookupValueAsIfPublishedLogicalView a
				join @MetadataPublishCollectInternal mpc on a.AttributeId = mpc.ObjectId
				where mpc.ObjectTypeCode = 2
		end

		-- If there exist any OptionSets in the table then collect related picklist values, localized labels
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 15))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select a.AttributePicklistValueId, 4, a.ComponentState from AttributePicklistValueAsIfPublishedLogicalView a
				join @MetadataPublishCollectInternal mpc on a.OptionSetId = mpc.ObjectId
				where mpc.ObjectTypeCode = 15
		
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select l.LocalizedLabelId, 7, l.ComponentState from LocalizedLabelAsIfPublishedLogicalView l
				join @MetadataPublishCollectInternal mpc on l.ObjectId = mpc.ObjectId
				where mpc.ObjectTypeCode = 15 
		end
		
		-- If there exist any attribute picklist values in the table then collect related localized labels
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 4))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select l.LocalizedLabelId, 7, l.ComponentState from LocalizedLabelAsIfPublishedLogicalView l
				join @MetadataPublishCollectInternal mpc on l.ObjectId = mpc.ObjectId
				where mpc.ObjectTypeCode = 4
		end
		
		-- if there exist any entities in the table then find localized labels that are associated with entity relationship roles associated
		-- with the given entities.  We do this by finding the entity relationships associated with this entity, then find all of the
		-- entity relationship roles associated with the given entity relationships, then find all of the associated localized labels
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 1))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select distinct err.EntityRelationshipId, 12, err.ComponentState from EntityRelationshipRoleAsIfPublishedLogicalView err
				join @MetadataPublishCollectInternal mpc on err.EntityId = mpc.ObjectId
				where mpc.ObjectTypeCode = 1
		end
		
		-- Find the entity relationship roles for the given entity relationships
		-- REVIEW:  Should we limit the number by only selecting roles that we know will have labels, e.g. association and referencing roles?
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 12))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select err.EntityRelationshipRoleId, 13, err.ComponentState from EntityRelationshipRoleAsIfPublishedLogicalView err
				join @MetadataPublishCollectInternal mpc on err.EntityRelationshipId = mpc.ObjectId
				where mpc.ObjectTypeCode = 12
		end
		
		-- Finally look for labels associated with entity relationship roles
		if(exists(select top 1 ObjectTypeCode from @MetadataPublishCollectInternal where ObjectTypeCode = 13))
		begin
			insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
				select l.LocalizedLabelId, 7, l.ComponentState from LocalizedLabelAsIfPublishedLogicalView l
				join @MetadataPublishCollectInternal mpc on l.ObjectId = mpc.ObjectId
				where mpc.ObjectTypeCode = 13
		end
	end

	-- Now delete from the temp table anything that is in production - we don't want those in this table anymore (we needed
	-- them for collection only but from here on we assume only non-published data exists in the temp table)
	delete from @MetadataPublishCollectInternal where ComponentState in (0, 2)

	-- CRM SE 5610:  Instead of calling a second stored procedure from this procedure we inline the contents of that procedure.  This allows us to avoid
	-- string concatenations and excessive string recompilations.  While it means repetitive code, the significant performance benefits strongly justify it.
	
	-- Steps are:
	-- Step one:  Delete records where ComponentState is (Publish or Delete) and SolutionId is Active where there is an existing record in the temp table
	-- NOTE:  This assumes that when a new solution is installed on top of a component that has an unpublished row as part of the active solution, that unpublished row is deleted.
	-- This means that there should only ever be one row which is published for a component in the active solution with the component state of 0
	-- Step two:  Delete records in an unpublished delete state where there are no other rows representing the item, which means it was an unpublished
	-- delete of a customization created on this deployment.
	--    For components which are child items in a set (Attribute picklist values and their labels), also delete sentinel rows (component state 2)
	-- 	  when the unpublished delete row is the only other row.
	-- Step three:  For any published or deleted row that has an OverwriteTime of 0 where there is a corresponding unpublished row, set the overwrite time to UTCNOW
	-- Step four:  Set unpublished rows to published
	-- Step five:  Delete rows from the IDs table, if an IDs table exists

	-- AttributePicklistValue

	-- Step one
	delete from AttributePicklistValue where ComponentState in (0, 2)  and SolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238' and AttributePicklistValueId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 4)

	-- Step two, can have sentinel value
	delete from AttributePicklistValue where ComponentState in (2, 3) and AttributePicklistValueId not in
		(select distinct AttributePicklistValueId from AttributePicklistValue where ComponentState not in (2, 3)) and AttributePicklistValueId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 4)

	
	-- Step three
	update AttributePicklistValue set OverwriteTime = GETUTCDATE()
		where OverwriteTime = 0 and ComponentState in (0, 2) and AttributePicklistValueId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 4)
	
	-- Step four
	update AttributePicklistValue set ComponentState = 0 where ComponentState = 1 and AttributePicklistValueId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 4)
	
	update AttributePicklistValue set ComponentState = 2 where ComponentState = 3 and AttributePicklistValueId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 4)
		
	-- No ids table - skipping step 5

	-- AttributeLookupValue

	-- Step one
	delete from AttributeLookupValue where ComponentState in (0, 2) and SolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238' and AttributeLookupValueId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 5)

	-- Step two
	delete from AttributeLookupValue where ComponentState = 3 and AttributeLookupValueId not in
		(select distinct AttributeLookupValueId from AttributeLookupValue where ComponentState <> 3) and AttributeLookupValueId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 5)
	
	-- Step three
	update AttributeLookupValue set OverwriteTime = GETUTCDATE()
		where OverwriteTime = 0 and ComponentState in (0, 2) and AttributeLookupValueId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 5)
	
	-- Step four
	update AttributeLookupValue set ComponentState = 0 where ComponentState = 1 and AttributeLookupValueId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 5)
	
	update AttributeLookupValue set ComponentState = 2 where ComponentState = 3 and AttributeLookupValueId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 5)
		
	-- No ids table - skipping step 5

	-- LocalizedLabel

	-- Step one
	delete from LocalizedLabel where ComponentState in (0, 2) and  SolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238' and LocalizedLabelId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 7)

	-- Step two, can have sentinel value
	delete from LocalizedLabel where ComponentState in (2, 3) and LocalizedLabelId not in
		(select distinct LocalizedLabelId from LocalizedLabel where ComponentState not in (2, 3)) and LocalizedLabelId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 7)
	
	-- Step three
	update LocalizedLabel set OverwriteTime = GETUTCDATE()
		where OverwriteTime = 0 and ComponentState in (0, 2) and LocalizedLabelId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 7)
	
	-- Step four
	update LocalizedLabel set ComponentState = 0 where ComponentState = 1 and LocalizedLabelId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 7)
	
	update LocalizedLabel set ComponentState = 2 where ComponentState = 3 and LocalizedLabelId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 7)
		
	-- No ids table - skipping step 5

	-- Attribute
	-- This table will be used to hold temp ids of rows we're deleting entirely and thus need to be deleted from ids tables
	declare @deletedIds table (Id uniqueidentifier primary key clustered)

	-- Step one
	delete from Attribute where ComponentState in (0, 2) and  SolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238' and AttributeId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 2)

	-- Step two
	delete from Attribute
	output deleted.AttributeId into @deletedIds (Id)
	where ComponentState = 3 and AttributeId not in
		(select distinct AttributeId from Attribute where ComponentState <> 3) and AttributeId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 2)
		
	
	-- Step three
	update Attribute set OverwriteTime = GETUTCDATE()
		where OverwriteTime = 0 and ComponentState in (0, 2) and AttributeId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 2)
	
	-- Step four
	update Attribute set ComponentState = 0 where ComponentState = 1 and AttributeId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 2)
	
	update Attribute set ComponentState = 2 where ComponentState = 3 and AttributeId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 2)
	
	-- Step five
		delete from AttributeIds where AttributeId in (select Id from @deletedIds)

	-- OptionSet

	delete from @deletedIds

	-- Step one
	delete from OptionSet where ComponentState in (0, 2)  and SolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238' and OptionSetId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 15)

	-- Step two
	delete from OptionSet
	output deleted.OptionSetId into @deletedIds (Id)
	where ComponentState = 3 and OptionSetId not in
		(select distinct OptionSetId from OptionSet where ComponentState <> 3) and OptionSetId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 15)
	
	-- Step three
	update OptionSet set OverwriteTime = GETUTCDATE()
		where OverwriteTime = 0 and ComponentState in (0, 2) and OptionSetId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 15)
	
	-- Step four
	update OptionSet set ComponentState = 0 where ComponentState = 1 and OptionSetId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 15)
	
	update OptionSet set ComponentState = 2 where ComponentState = 3 and OptionSetId in
		(select ObjectId From @MetadataPublishCollectInternal where ObjectTypeCode = 15)
	
	-- Step five
	delete from OptionSetIds where OptionSetId in (select Id from @deletedIds)
	
	-- update tracking deleted metadata objects required for the diff based metadata sync
	
	delete from MetadataSyncTrackingDeletedObject 
		from MetadataSyncTrackingDeletedObject mstdo
		inner join @MetadataPublishCollectInternal mpci on mstdo.MetadataObjectTypeCode = mpci.ObjectTypeCode and mstdo.ObjectId = mpci.ObjectId
		where mpci.ComponentState = 1

	insert into MetadataSyncTrackingDeletedObject (ObjectId, MetadataObjectTypeCode)
		select mpci.ObjectId, mpci.ObjectTypeCode 
		from @MetadataPublishCollectInternal mpci 
		where mpci.ComponentState = 3
	
	-- Return all entries that were published from the table variable
	select ObjectId, ObjectTypeCode from @MetadataPublishCollectInternal where ComponentState = 1
end