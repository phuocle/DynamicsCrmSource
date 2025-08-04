

create procedure dbo.p_PublishLabelsByObjectId
as
begin
	-- CRM SE 5610:  Create a table variable which will contain the data we need to process - we do it with a table variable instead of using the temp
	-- table because of significant performance benefits
	declare @MetadataPublishCollectInternal table (ObjectId uniqueidentifier, ObjectTypeCode int not null, ComponentState tinyint not null)
		
	-- CRM SE 5610:  Copy the contents of the temp table into the table variable
	insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState) select ObjectId, ObjectTypeCode, ComponentState from #MetadataPublishCollect

	-- CRM SE 5610:  All references to the temp table have been changed to now reference the table variable
	-- Get the set of labels from the data that has been pre-populated in the temp table
	insert into @MetadataPublishCollectInternal(ObjectId, ObjectTypeCode, ComponentState)
		select l.LocalizedLabelId, 7, l.ComponentState from LocalizedLabelAsIfPublishedLogicalView l
		join @MetadataPublishCollectInternal mpc on l.ObjectId = mpc.ObjectId
		
	-- Now delete from the temp table anything that is in production or has a metadata object type code of 0 (these are the seeded entries of objects
	-- that have labels but might not necessarily have a metadata object type code, such as form objects or saved queries).
	delete from @MetadataPublishCollectInternal where ComponentState in (0, 2) or ObjectTypeCode = 0

	-- CRM SE 5610:  Instead of calling a second stored procedure from this procedure we inline the contents of that procedure.  This allows us to avoid
	-- string concatenations and excessive string recompilations.  While it means repetitive code, the significant performance benefits strongly justify it.
	
	-- Steps are:
	-- Step one:  Delete records where ComponentState is Publish and SolutionId is Active and OverwriteTime is 0 where there is an existing record in the temp table
	-- NOTE:  This assumes that when a new solution is installed on top of a component that has an unpublished row as part of the active solution, that unpublished row is deleted.
	-- This means that there should only ever be one row with an OverwriteTime of 0 with the active solution id and a ComponentState of 0.
	-- Step two:  Delete records in an unpublished delete state where there are no other rows representing the item, which means it was an unpublished
	-- delete of a customization created on this deployment
	-- Step three:  For any published or deleted row that has an OverwriteTime of 0 where there is a corresponding unpublished row, set the overwrite time to UTCNOW
	-- Step four:  Set unpublished rows to published
	-- Step five:  Delete rows from the IDs table, if an IDs table exists

	-- LocalizedLabel

	-- Step one
	delete from LocalizedLabel where ComponentState = 0 and OverwriteTime = 0 and SolutionId = 'fd140aae-4df4-11dd-bd17-0019b9312238' and LocalizedLabelId in
		(select ObjectId from @MetadataPublishCollectInternal where ObjectTypeCode = 7)

	-- Step two
	delete from LocalizedLabel where ComponentState = 3 and LocalizedLabelId not in
		(select distinct LocalizedLabelId from LocalizedLabel where ComponentState <> 3) and LocalizedLabelId in
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

	-- update tracking deleted metadata objects required for the diff based metadata sync
	
	delete from MetadataSyncTrackingDeletedObject 
		from MetadataSyncTrackingDeletedObject mstdo
		inner join @MetadataPublishCollectInternal mpci on mstdo.MetadataObjectTypeCode = mpci.ObjectTypeCode and mstdo.ObjectId = mpci.ObjectId
		where mpci.ComponentState = 1

	insert into MetadataSyncTrackingDeletedObject (ObjectId, MetadataObjectTypeCode)
		select mpci.ObjectId, mpci.ObjectTypeCode 
		from @MetadataPublishCollectInternal mpci 
		where mpci.ComponentState = 3

end