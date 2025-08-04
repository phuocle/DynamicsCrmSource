

CREATE procedure [dbo].[p_DeleteStagedMetadata]
	 @CountOfRecordsDeleted int OUTPUT,
	 @CountOfTables int OUTPUT
AS
BEGIN

	SET @CountOfRecordsDeleted= 0
	SET @CountOfTables=0

	-- Steps are:
	-- Step one:  Delete records where ComponentState is (Staged or StagedDelete) 
	-- Step two:  Delete rows from the IDs table, if an IDs table exists

	-- AttributePicklistValue
	delete from AttributePicklistValue where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	-- AttributeLookupValue
	delete from AttributeLookupValue where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	-- LocalizedLabel
	delete from LocalizedLabel where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	--ViewAttribute
	delete from ViewAttribute where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	--EntityRelationshipRelationships
	delete from EntityRelationshipRelationships where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2
	
	-- ManagedProperty
	delete from ManagedProperty where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	--RelationshipExtraCondition
	delete from RelationshipExtraCondition where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	--EntityRelationshipRole
	delete from EntityRelationshipRole where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	--EntityKeyAttribute
	delete from EntityKeyAttribute where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	-- No ids table - skipping step 2

	--Relationship
	-- Step one	
	delete from Relationship 
	where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1
	
	-- step 2 Delete from Ids table
	delete from RelationshipIds
	where RelationshipId NOT IN (select RelationshipId from Relationship)	
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- Cleanup IndexAttributes. Select EntityIds and AttributeIds that do not exist in "Non-Staged" State
	delete from IndexAttributes
	where AttributeId IN (Select AttributeId from Attribute where ComponentState NOT IN (1, 2, 3, 4))
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	delete from IndexAttributes
	where IndexId IN 
	(Select IndexId from EntityIndex where EntityId IN (Select EntityId from Entity where ComponentState NOT IN (1, 2, 3, 4)))
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT

	-- Attribute
	-- Step one	
	delete from Attribute
	where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- Step two. Select AttributeIds that have no records in Attribute table in "Non-Staged" component state
	delete from AttributeIds
	where AttributeId NOT IN (select AttributeId from Attribute)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- OptionSet
	-- Step one
	delete from OptionSet
	where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- Step two. Select OptionSetIds that have no records in OptionSet table in "Non-Staged" component state
	delete from OptionSetIds where OptionSetId NOT IN (select OptionSetId from OptionSet)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	--EntityKey
	-- Step one
	delete from EntityKey
	where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- Step two
	delete from EntityKeyIds where EntityKeyId NOT IN (select EntityKeyId from EntityKey)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	--EntityRelationship
	-- Step one
	delete from EntityRelationship
	where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- Step two
	delete from EntityRelationshipIds where EntityRelationshipId NOT IN (select EntityRelationshipId from EntityRelationship)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	--Cleanup IndexFilters and EntityIndex. Select EntityIds that do no exist in "Non-Staged" component state
	-- Step one
	delete from IndexFilters
	where IndexId IN 
	(Select IndexId from EntityIndex where EntityId IN (Select EntityId from Entity where ComponentState NOT IN (1, 2, 3, 4)))
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	delete from EntityIndex
	where EntityId IN (Select EntityId from Entity where ComponentState NOT IN (1, 2, 3, 4))
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	--Entity
	--Step one
	delete from Entity
	where ComponentState in (5, 6, 7, 8)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

	-- Step two. Select EntityIds that have no records in Entity table in "Non-Staged" component state
	delete from EntityIds where EntityId NOT IN (select EntityId from Entity)
	SET @CountOfRecordsDeleted = @CountOfRecordsDeleted + @@ROWCOUNT
	SET @CountOfTables = @CountOfTables + 1

END
