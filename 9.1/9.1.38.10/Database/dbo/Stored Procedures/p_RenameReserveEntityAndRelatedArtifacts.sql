

CREATE PROCEDURE dbo.p_RenameReserveEntityAndRelatedArtifacts(
        @reserveEntityName nvarchar(128),
		@newEntityName nvarchar(128),
		@newEntityPhysicalName nvarchar(128),
		@newEntityLogicalName nvarchar(128),
		@newEntityCollectionName nvarchar(128),
		@newEntityLocalizedName nvarchar(max),
		@newEntityLocalizedCollectionName nvarchar(max),
		@newEntityDesc nvarchar(max),
		@newPrimaryAttributePhysicalName nvarchar(128),
		@newPrimaryAttributeLogicalName nvarchar(128),
		@newPrimaryAttributeDisplayName nvarchar(128),
		@newPrimaryAttributeDesc nvarchar(128),
		@solutionId uniqueidentifier
        ) AS
BEGIN
    
	SET xact_abort on;

	BEGIN TRAN T1
	
	IF (@reserveEntityName = '' OR @reserveEntityName IS NULL)
		Throw 51000, 'Null or empty oldEntityName', 1;
	IF (@newEntityName = '' OR @newEntityName IS NULL)
		Throw 51000, 'Null or empty newEntityName', 1;
	IF (@newEntityPhysicalName = '' OR @newEntityPhysicalName IS NULL)
		Throw 51000, 'Null or empty newEntityPhysicalName', 1;
	IF (@newEntityLogicalName = '' OR @newEntityLogicalName IS NULL)
		Throw 51000, 'Null or empty newEntityLogicalName', 1;
	IF (@newEntityCollectionName = '' OR @newEntityCollectionName IS NULL)
		Throw 51000, 'Null or empty newEntityCollectionName', 1;
	IF (@newEntityLocalizedName = '' OR @newEntityLocalizedName IS NULL)
		Throw 51000, 'Null or empty newEntityLocalizedName', 1;
	IF (@newEntityLocalizedCollectionName = '' OR @newEntityLocalizedCollectionName IS NULL)
		Throw 51000, 'Null or empty newEntityLocalizedCollectionName', 1;
	IF (@newPrimaryAttributePhysicalName = '' OR @newPrimaryAttributePhysicalName IS NULL)
		Throw 51000, 'Null or empty newPrimaryAttributePhysicalName', 1;
	IF (@newPrimaryAttributeLogicalName = '' OR @newPrimaryAttributeLogicalName IS NULL)
		Throw 51000, 'Null or empty newPrimaryAttributeLogicalName', 1;
	IF (@newPrimaryAttributeDisplayName = '' OR @newPrimaryAttributeDisplayName IS NULL)
		Throw 51000, 'Null or empty newPrimaryAttributeDisplayName', 1;
	IF (@solutionId IS NULL)
		Throw 51000, 'Null or empty solutionId', 1;

	DECLARE @entityId uniqueidentifier;
	DECLARE @entityOTC int;
	DECLARE @primaryNameAttributeId Uniqueidentifier
	DECLARE @oldBaseTableName nvarchar(128);
	DECLARE @oldEntityReportViewName nvarchar(128);
	DECLARE @oldPrimaryNameAttributeName nvarchar(128);
	DECLARE @oldPrimaryField nvarchar(256) = @reserveEntityName + 'Id';
	-- TODO Add this as a parameter
	DECLARE @newBaseTableName nvarchar(128) = @newEntityPhysicalName + 'Base';
	DECLARE @newEntityReportViewName nvarchar(128) = 'Filtered' + @newEntityPhysicalName;
	-- TODO Add this as a parameter
	DECLARE @newPrimaryField nvarchar(256) = @newEntityPhysicalName + 'Id';
	DECLARE @errorMessage nvarchar(240); 

	IF NOT EXISTS (SELECT 1 FROM SolutionBase WHERE SolutionId = @solutionId)
	BEGIN
		SET @errorMessage = 'Invalid Solutionid ' + CAST(@SolutionId as varchar(40));
		Throw 51000, @errorMessage, 1;
	END

	SELECT TOP 1 @entityOTC = ObjectTypeCode, @entityId = EntityId, @oldBaseTableName = BaseTableName, @oldEntityReportViewName = ReportViewName
	FROM Entity WHERE name = @reserveEntityName

	IF (@entityOTC IS NULL OR @entityId IS NULL)
	BEGIN
		SET @errorMessage = 'Reserve entity by name ' + @reserveEntityName + ' does not exist';
		Throw 51000, @errorMessage, 1;	
	END

	SELECT TOP 1 @primaryNameAttributeId = AttributeId, @oldPrimaryNameAttributeName = Name FROM Attribute 
					WHERE EntityId = @entityId AND (DisplayMask & 256) != 0

	DECLARE @PrimaryFieldAttributeId Uniqueidentifier = (SELECT TOP 1 AttributeId FROM MetadataSchema.Attribute 
											WHERE EntityId = @entityId AND Name = @reserveEntityName + 'id')

	DECLARE @oldEntityLocalizedName nvarchar(max) = (SELECT TOP 1 Label FROM LocalizedLabel 
													WHERE LabelTypeCode = 0 AND OBjectId = @entityId
													AND ObjectColumnName = 'LocalizedName');
	-- Rename Entity
	UPDATE Entity 
	SET Name = @newEntityName, 
	LogicalName = @newEntityLogicalName, 
	PhysicalName = @newEntityPhysicalName,
	BaseTableName = @newEntityPhysicalName + 'Base',
	EntitySetName = @newEntityCollectionName,
	CollectionName = @newEntityCollectionName,
	LogicalCollectionName = @newEntityCollectionName,
	OriginalLocalizedName = @newEntityLocalizedName,
	OriginalLocalizedCollectionName = @newEntityLocalizedCollectionName,
	ReportViewName = @newEntityReportViewName
	WHERE EntityId = @entityId

	--Rename primary field Attribute
	UPDATE Attribute
	SET Name = @newEntityLogicalName + 'id',
		LogicalName = @newEntityLogicalName + 'id',
		PhysicalName = @newEntityPhysicalName + 'Id',
		TableColumnName =  @newEntityPhysicalName + 'Id'
	WHERE EntityId = @entityId AND attributeId = @PrimaryFieldAttributeId

	--Rename primary name Attribute
	UPDATE Attribute
	SET Name = @newPrimaryAttributeLogicalName,
		LogicalName = @newPrimaryAttributeLogicalName,
		PhysicalName = @newPrimaryAttributePhysicalName,
		TableColumnName = @newPrimaryAttributePhysicalName
	WHERE EntityId = @entityId AND AttributeId = @primaryNameAttributeId

	-- Rename Statecode AND Statuscode OptionSet

	DECLARE @stateCodeOptionSetId uniqueidentifier = (SELECT TOP 1 O.OptionSetId FROM OptionSet O
	INNER JOIN MetadataSchema.Attribute A ON O.OptionSetId = A.OptionSetId
	WHERE A.EntityId = @entityId AND O.name = @reserveEntityName + '_statecode')

	DECLARE @statusCodeOptionSetId uniqueidentifier = (SELECT TOP 1 O.OptionSetId FROM OptionSet O
	INNER JOIN MetadataSchema.Attribute A ON O.OptionSetId = A.OptionSetId
	WHERE A.EntityId = @entityId AND O.name = @reserveEntityName + '_statuscode')

	UPDATE OptionSet
	SET Name = REPLACE(Name, @reserveEntityName, @newEntityLogicalName)
	WHERE OptionSetId = @stateCodeOptionSetId OR OptionSetId = @statusCodeOptionSetId

	DECLARE @matchingRelationshipIds EntityIdCollection;

	INSERT INTO @matchingRelationshipIds(id) 
	SELECT R.RelationshipId 
	FROM MetadataSchema.Relationship R 
	WHERE R.ReferencingEntityId = @entityId OR R.ReferencedEntityId = @entityId;

	-- Rename Relationship
	UPDATE Relationship SET Name = REPLACE(Name, @reserveEntityName, @newEntityLogicalName)
	WHERE RelationshipId IN (SELECT id FROM @matchingRelationshipIds)

	-- Rename EntityRelationship
	UPDATE ER
	SET SchemaName = REPLACE(Name, @reserveEntityName, @newEntityLogicalName)
	FROM EntityRelationship ER
	INNER JOIN MetadataSchema.EntityRelationshipRelationships ERR ON ERR.EntityRelationshipId = ER.EntityRelationshipId
	INNER JOIN MetadataSchema.Relationship R ON ERR.RelationshipId = R.RelationshipId
	WHERE R.RelationshipId IN (SELECT id FROM @matchingRelationshipIds)

	-- Rename EntityRelationshipRole
	UPDATE ERR
	SET NavigationPropertyName = REPLACE(NavigationPropertyName, @reserveEntityName, @newEntityLogicalName)
	FROM EntityRelationshipRole ERR
	WHERE ERR.EntityRelationshipId IN (SELECT ERRs.EntityRelationshipId
	FROM MetadataSchema.EntityRelationshipRelationships ERRs
	WHERE ERRs.RelationshipId IN (SELECT id FROM @matchingRelationshipIds))

	-- Update EntityRelationshipRelationships to bump up the version, this will make the incremental cache load
	-- to detect it as initially its hidden in cache
	UPDATE ERR
	SET ComponentState = ERR.ComponentState	
	FROM EntityRelationshipRelationships ERR
	WHERE ERR.RelationshipId IN (SELECT id FROM @matchingRelationshipIds)

	-- Update RelationshipExtraCondition to bump up the version
	UPDATE REC
	SET ComponentState = REC.ComponentState	
	FROM RelationshipExtraCondition REC
	WHERE REC.RelationshipId IN (SELECT id FROM @matchingRelationshipIds)

	-- Update AttributeLookupValue to bump up the version
	UPDATE ALV
	SET ComponentState = ALV.ComponentState	
	FROM AttributeLookupValue ALV
	INNER JOIN MetadataSchema.Relationship R ON ALV.AttributeId = R.ReferencingAttributeId OR ALV.AttributeId = R.ReferencedAttributeId
	WHERE R.RelationshipId IN (SELECT id FROM @matchingRelationshipIds)

	-- Update ViewAttribute to bump up the version
	UPDATE VA
	SET ComponentState = VA.ComponentState	
	FROM ViewAttribute VA
	WHERE VA.RelationshipId IN (SELECT id FROM @matchingRelationshipIds)

	-- Update Attribute to bump up the version
	UPDATE A
	SET ComponentState = A.ComponentState	
	FROM Attribute A
	WHERE A.EntityId = @entityId

	-- Rename privileges
	UPDATE P
	SET Name = REPLACE(Name, @reserveEntityName, @newEntityPhysicalName)
	FROM PrivilegeBase P
	INNER JOIN PrivilegeObjectTypeCodes POTC ON POTC.PrivilegeId = P.PrivilegeId
	WHERE POTC.ObjectTypeCode = @entityOTC 

	-- rename entity labels
	UPDATE LocalizedLabel
	SET Label = @newEntityDesc WHERE LabelTypeCode = 0 AND ObjectId = @entityId AND ObjectColumnName = 'Description'

	UPDATE LocalizedLabel
	SET Label = @newEntityLocalizedName	 WHERE LabelTypeCode = 0 AND ObjectId = @entityId AND ObjectColumnName = 'LocalizedName'

	UPDATE LocalizedLabel
	SET Label = @newEntityLocalizedCollectionName WHERE LabelTypeCode = 0 AND ObjectId = @entityId AND ObjectColumnName = 'LocalizedCollectionName'

	-- rename primary field attribute label
	UPDATE LocalizedLabel
	SET Label = @newEntityLocalizedName 
	WHERE LabelTypeCode = 1 AND ObjectId = @PrimaryFieldAttributeId AND ObjectColumnName = 'DisplayName'

	-- rename primary name attribute label
	UPDATE LocalizedLabel
	SET Label = @newPrimaryAttributeDisplayName 
	WHERE LabelTypeCode = 1 AND ObjectId = @primaryNameAttributeId AND ObjectColumnName = 'DisplayName'

	UPDATE LocalizedLabel
	SET Label = @newPrimaryAttributeDesc 
	WHERE LabelTypeCode = 1 AND ObjectId = @primaryNameAttributeId AND ObjectColumnName = 'Description'

	-- rename statecode AND statuscode attribute label
	UPDATE L
	SET Label = REPLACE(Label, @oldEntityLocalizedName, @newEntityLocalizedName)
	FROM LocalizedLabel L
	INNER JOIN MetadataSchema.Attribute A ON L.ObjectId = A.AttributeId
	WHERE A.EntityId = @entityId AND A.Name IN ('statecode','statuscode') 
	AND ObjectColumnName = 'Description'

	-- rename Statecode AND statuscode OptionSet label
	UPDATE LocalizedLabel
	SET Label = REPLACE(Label, @oldEntityLocalizedName, @newEntityLocalizedName)
	WHERE LabelTypeCode = 10 
	AND (ObjectId = @stateCodeOptionSetId OR objectId = @statusCodeOptionSetId)
	AND ObjectColumnName = 'Description'

	-- Rename primary field, primary name field AND table name
	DECLARE @oldPrimaryFieldFullName nvarchar(512) = 'dbo.' + @oldBaseTableName + '.' + @reserveEntityName + 'Id'
	DECLARE @fullOldPrimaryNameAttributeName nvarchar(512) = 'dbo.' + @oldBaseTableName + '.' + @oldPrimaryNameAttributeName
	
	EXEC sp_rename @oldPrimaryFieldFullName, @newPrimaryField, 'COLUMN'
	EXEC sp_rename @fullOldPrimaryNameAttributeName, @newPrimaryAttributePhysicalName, 'COLUMN'
	Exec sp_rename @oldBaseTableName, @newBaseTableName

	-- Create entity View
	DECLARE @viewDefinition nvarchar(max)
	SELECT @viewDefinition = REPLACE(m.definition, '[' + @oldPrimaryNameAttributeName + ']', '[' + @newPrimaryAttributePhysicalName + ']')
	FROM sys.sql_modules m 
	WHERE m.object_id = object_id('dbo.' + @reserveEntityName, 'V')
	
	SET  @viewDefinition = REPLACE(@viewDefinition, '[' + @oldPrimaryField + ']', '[' + @newPrimaryField + ']')
	SET  @viewDefinition = REPLACE(@viewDefinition, '[' + @oldBaseTableName + ']', '[' + @newBaseTableName + ']')
	SET  @viewDefinition = REPLACE(@viewDefinition, @reserveEntityName, @newEntityPhysicalName)
	
	Exec (@viewDefinition)
	
	-- Create entity report View
	DECLARE @reportViewDefinition nvarchar(max)
	SELECT @reportViewDefinition = REPLACE(m.definition, '[' + @oldPrimaryNameAttributeName  + ']', '[' + @newPrimaryAttributePhysicalName + ']')
	FROM sys.sql_modules m 
	WHERE m.object_id = object_id('dbo.' + @oldEntityReportViewName, 'V')
	
	SET  @reportViewDefinition = REPLACE(@reportViewDefinition, '[' + @oldPrimaryField + ']', '[' + @newPrimaryField + ']')
	SET  @reportViewDefinition = REPLACE(@reportViewDefinition, '[' + @oldEntityReportViewName + ']', '[' +  @newEntityReportViewName + ']')
	SET  @reportViewDefinition = REPLACE(@reportViewDefinition, '[' + @oldBaseTableName + ']', '[' +  @newBaseTableName + ']')
	SET  @reportViewDefinition = REPLACE(@reportViewDefinition, @reserveEntityName , @newEntityPhysicalName )
	
	-- Report view might not exist in CDS lite org
	IF (@reportViewDefinition IS NOT NULL)
		Exec (@reportViewDefinition)
	
	-- DROP old entity view
	DECLARE @dropViewCmd nvarchar(200) = 'DROP view ' + @reserveEntityName
	Exec (@dropViewCmd)
	
	-- DROP old report entity view
	-- Report view might not exist in CDS lite org
	IF OBJECT_ID(@oldEntityReportViewName, 'V') IS NOT NULL
	BEGIN
		DECLARE @dropReportViewCmd nvarchar(200) = 'DROP view ' + @oldEntityReportViewName
		Exec (@dropReportViewCmd)
	END
	
	-- Entity Solution mapping
	DECLARE @DefaultSolutionId Uniqueidentifier = (SELECT TOP 1 SolutionId FROM SolutionBase WHERE UniqueName = 'DEFAULT')
	
	DELETE FROM SolutionComponentBase
		WHERE ObjectId = @entityId AND ComponentType = 1 AND SolutionId NOT IN (@SolutionId, @DefaultSolutionId)

	IF NOT EXISTS(SELECT 1 FROM SolutionComponentBase WHERE ObjectId = @entityId AND ComponentType = 1 AND SolutionId = @solutionId)
	BEGIN
		INSERT INTO SolutionComponentBase (RootSolutionComponentId, ComponentType,IsMetadata,RootComponentBehavior,SolutionComponentId,SolutionId,ObjectId)
		SELECT TOP 1 RootSolutionComponentId, ComponentType, IsMetadata, RootComponentBehavior, NEWID(), @solutionId, ObjectId 
		FROM SolutionComponentBase WHERE ObjectId = @entityId AND ComponentType = 1 AND SolutionId = @DefaultSolutionId
	END  

	-- Rename primary attribute index
	DECLARE @primaryAttributeIndexid uniqueidentifier
	DECLARE @oldPimaryAttributeIndexName nvarchar(128)
	DECLARE @oldPrimaryAttributeIndexFullName nvarchar(512)
	DECLARE @newPrimaryAttributenewIndexName nvarchar(128)

	SELECT @primaryAttributeIndexid = IndexId, @oldPimaryAttributeIndexName = Name 
	FROM EntityIndex 
	WHERE EntityId = @entityId AND Name	LIKE '%' + @oldPrimaryNameAttributeName + '%' 

	IF (@primaryAttributeIndexid IS NOT NULL)
	BEGIN

		SET @newPrimaryAttributenewIndexName =  REPLACE(@oldPimaryAttributeIndexName, @oldPrimaryNameAttributeName, @newPrimaryAttributePhysicalName)
		SET @oldPrimaryAttributeIndexFullName = 'dbo.' + @newBaseTableName + '.' + @oldPimaryAttributeIndexName

		UPDATE EntityIndex 
		SET Name = @newPrimaryAttributenewIndexName
		WHERE IndexId = @primaryAttributeIndexid
	
		IF IndexProperty(Object_Id(@NewBaseTableName), @oldPimaryAttributeIndexName, 'IndexId') Is NOT Null
				EXEC sp_rename @oldPrimaryAttributeIndexFullName, @newPrimaryAttributenewIndexName, 'INDEX'
	END
	
	-- Rename entity index AND related physical index which contain reserve entity name
	DECLARE @IndexNamesToRename TABLE
	(
		RecordId INT IDENTITY(1,1) PRIMARY KEY CLUSTERED,
		IndexId uniqueidentifier,
		IndexName nvarchar(128)
	);

	INSERT INTO @IndexNamesToRename
	SELECT IndexId, Name FROM EntityIndex WHERE EntityId = @entityId
	AND Name like '%' + @reserveEntityName + '%'

	DECLARE @maxRecordId int = (SELECT MAX(RecordId) FROM @IndexNamesToRename)
	DECLARE @locLoopId int = 1
	DECLARE @indexIdLoc Uniqueidentifier
	DECLARE @oldIndexNameLoc nvarchar(128)
	DECLARE @oldIndexFullNameLoc nvarchar(512)
	DECLARE @newIndexNameLoc nvarchar(128)

	WHILE @locLoopId <= @maxRecordId 
	BEGIN
		SELECT @indexIdLoc = IndexId, @oldIndexNameLoc = IndexName FROM @IndexNamesToRename WHERE RecordId = @locLoopId

		SET @newIndexNameLoc = REPLACE(@oldIndexNameLoc, @reserveEntityName, @newEntityPhysicalName)
		UPDATE EntityIndex SET Name = @newIndexNameLoc WHERE IndexId = @indexIdLoc

		SET @oldIndexFullNameLoc = 'dbo.' + @newBaseTableName + '.' + @oldIndexNameLoc

		IF IndexProperty(Object_Id(@NewBaseTableName), @oldIndexNameLoc, 'IndexId') Is NOT Null
			EXEC sp_rename @oldIndexFullNameLoc, @newIndexNameLoc, 'INDEX'

		SET @locLoopId = @locLoopId + 1
	END

	COMMIT TRAN T1
	
	SELECT @entityId
	
END