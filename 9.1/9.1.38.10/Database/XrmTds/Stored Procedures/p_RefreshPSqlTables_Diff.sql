CREATE PROC [XrmTds].[p_RefreshPSqlTables_Diff]
AS
BEGIN
	SET NOCOUNT ON;

	-- Metadata version timestamp.
	DECLARE @CurrentMetadataVersion timestamp = 0;
	DECLARE @CurrentEntityIndexModifiedOn datetime = 0;
	DECLARE @CurrentIndexAttributeModifiedOn datetime = 0;

	SELECT @CurrentMetadataVersion = max(VersionNumber) from [dbo].[MetadataTimestamp]
	SELECT @CurrentEntityIndexModifiedOn = max(ModifiedOn) from [Metadataschema].[EntityIndex]
	SELECT @CurrentIndexAttributeModifiedOn = max(ModifiedOn) from [Metadataschema].[IndexAttributes]

	-- PSql schema version timestamp.
	DECLARE @PSqlMetadataVersion timestamp = 0;
	DECLARE @PSqlSysIndexModifiedOn datetime = 0;
	DECLARE @PSqlSysIndexColumnModifiedOn datetime = 0;

	SELECT @PSqlMetadataVersion = [MetadataVersionNumber], @PSqlSysIndexModifiedOn = [EntityIndexModifiedOn], @PSqlSysIndexColumnModifiedOn = [IndexAttributesModifiedOn] from [XrmTds].[SchemaVersion]

	-- Table for collecting telemetry.
	DECLARE @RecordsAffected TABLE (
		tableName NVARCHAR(100) NOT NULL, 
		recordCount INT NOT NULL,
		operationType NVARCHAR(100) NOT NULL
	);

	DECLARE @RecCount int = 0;

	-- Indexes needs to be recreated on cases where the same got dropped earlier while turning off Diff based FCB.
	IF NOT EXISTS (SELECT * FROM sys.indexes WHERE name = 'ndx_sys_tables_EntityId' AND object_id = OBJECT_ID('XrmTds.sys_tables'))
	BEGIN
		-- Create indexes for Diff based refresh.
		IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[XrmTds].[p_CreatePSqlSchemaIndexes]') AND type IN (N'P', N'SP'))
			EXEC [XrmTds].[p_CreatePSqlSchemaIndexes]

		-- To keep track of Index create code execution.
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('Index', 0, 'Create');
	END

	IF @PSqlMetadataVersion <> @CurrentMetadataVersion OR @PSqlSysIndexModifiedOn <> @CurrentEntityIndexModifiedOn OR @PSqlSysIndexColumnModifiedOn <> @CurrentIndexAttributeModifiedOn
	BEGIN

		-- Delete records from PSql schema tables that are no longer present in metadata tables.
		DELETE FROM [XrmTds].[sys_foreign_keys] WHERE [RelationshipId] NOT IN (SELECT [RelationshipId] FROM [dbo].[RelationshipView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_foreign_keys', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_foreign_key_columns] WHERE [RelationshipId] NOT IN (SELECT [RelationshipId] FROM [dbo].[RelationshipView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_foreign_key_columns', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_index_columns] WHERE [IndexAttributeId] NOT IN (SELECT [IndexAttributeId] FROM [Metadataschema].[IndexAttributes]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_index_columns', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_indexes] WHERE [IndexId] NOT IN (SELECT [IndexId] FROM [Metadataschema].[EntityIndex] WHERE [ComponentState] = 0 AND [OverwriteTime] = 0);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_indexes', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_columns] WHERE [AttributeId] NOT IN (SELECT [AttributeId] FROM [dbo].[AttributeView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_columns', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_all_columns] WHERE [AttributeId] NOT IN (SELECT [AttributeId] FROM [dbo].[AttributeView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_all_columns', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_types] WHERE [AttributeTypeId] NOT IN (SELECT [AttributeTypeId] FROM [MetadataSchema].[AttributeTypes]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_types', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_tables] WHERE [EntityId] NOT IN (SELECT EntityId FROM [dbo].[EntityView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_tables', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[INFORMATION_SCHEMA_TABLES] WHERE [EntityId] NOT IN (SELECT EntityId FROM [dbo].[EntityView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('INFORMATION_SCHEMA_TABLES', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_objects] WHERE type = 'U' AND ObjectId NOT IN (SELECT EntityId FROM [dbo].[EntityView]);
		SET @RecCount = @@ROWCOUNT
		DELETE FROM [XrmTds].[sys_objects] WHERE type = 'F' AND ObjectId NOT IN (SELECT [RelationshipId] FROM [dbo].[RelationshipView]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_objects', @RecCount + @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_all_objects] WHERE ObjectId NOT IN (SELECT ObjectId FROM [XrmTds].[sys_objects]);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_all_objects', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_databases];
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_databases', @@ROWCOUNT, 'D');

		DELETE FROM [XrmTds].[sys_schemas];
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_schemas', @@ROWCOUNT, 'D');


		-- Update records to PSql schema tables that are modified in metadata tables.
		UPDATE sc
		   SET sc.[is_nullable] = cv.[is_nullable],
			   sc.[precision] = cv.[precision],
			   sc.[scale] = cv.[scale],
			   sc.[max_length] = cv.[max_length],
			   sc.[is_identity] = cv.[is_identity],
			   sc.[is_computed] = cv.[is_computed]
		  FROM [XrmTds].[sys_columns] sc INNER JOIN [XrmTds].[columns_view] cv ON (sc.[AttributeId] = cv.[AttributeId] AND cv.[VersionNumber] > @PSqlMetadataVersion)
	
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_columns', @@ROWCOUNT, 'U');

		UPDATE sac
		   SET sac.[is_nullable] = cv.[is_nullable],
			   sac.[precision] = cv.[precision],
			   sac.[scale] = cv.[scale],
			   sac.[max_length] = cv.[max_length],
			   sac.[is_identity] = cv.[is_identity],
			   sac.[is_computed] = cv.[is_computed]
		  FROM [XrmTds].[sys_all_columns] sac INNER JOIN [XrmTds].[columns_view] cv ON (sac.[AttributeId] = cv.[AttributeId] AND cv.[VersionNumber] > @PSqlMetadataVersion)
	
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_all_columns', @@ROWCOUNT, 'U');

		UPDATE si
		   SET si.[name] = iv.[name],
			   si.[is_primary_key] = iv.[is_primary_key],
			   si.[is_unique_constraint] = iv.[is_unique_constraint],
			   si.[is_unique] = iv.[is_unique],
			   si.[type] = iv.[type],
			   si.[type_desc] = iv.[type_desc]
		FROM [XrmTds].[sys_indexes] si INNER JOIN [XrmTds].[indexes_view] iv ON (si.[IndexId] = iv.[IndexId] AND iv.[ModifiedOn] > @PSqlSysIndexModifiedOn)
	
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_indexes', @@ROWCOUNT, 'U');

		UPDATE sic
		   SET sic.[key_ordinal] = scv.[key_ordinal],
			   sic.[index_column_id] = scv.[index_column_id]
		  FROM [XrmTds].[sys_index_columns] sic INNER JOIN [XrmTds].[index_columns_view] scv ON (sic.[IndexAttributeId] = scv.[IndexAttributeId] AND scv.[ModifiedOn] > @PSqlSysIndexColumnModifiedOn)
	
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_index_columns', @@ROWCOUNT, 'U');

		-- Insert missing records to PSql schema tables that are present in metadata tables.
		-- Populate sys_schemas.
		INSERT INTO [XrmTds].[sys_schemas] (
				[schema_id], 
				[name],
				[principal_id]
			)
		 SELECT [schema_id], 
				[name],
				[principal_id]
		   FROM [XrmTds].[schemas_view];

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_schemas', @@ROWCOUNT, 'I');

		-- Populate sys_databases.
		INSERT INTO [XrmTds].[sys_databases] (
				[name],
				[database_id],
				[collation_name],
				[create_date]
			)
		 SELECT [name],
	 			[database_id],
				[collation_name],
				[create_date]
		   FROM [XrmTds].[databases_view];

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_databases', @@ROWCOUNT, 'I');

		-- Populate sys_tables.
		INSERT INTO [XrmTds].[sys_tables] (
				[object_id],	
				[name],
				[schema_id],
				[type],
				[type_desc],
				[EntityId],
				[parent_object_id]
			)
		 SELECT [object_id],
				[name],
				[schema_id],
				[type],
				[type_desc],
				[EntityId],
				[parent_object_id]
		   FROM [XrmTds].[tables_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [EntityId] NOT IN (SELECT [EntityId] FROM [XrmTds].[sys_tables]);

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_tables', @@ROWCOUNT, 'I');

		-- Populate [INFORMATION_SCHEMA_TABLES].
		INSERT INTO [XrmTds].[INFORMATION_SCHEMA_TABLES] (
				[TABLE_NAME],
				[TABLE_SCHEMA],
				[TABLE_TYPE],
				[TABLE_CATALOG],
				[EntityId]
			)
		 SELECT [name],
				[TABLE_SCHEMA],
				[TABLE_TYPE],
				[TABLE_CATALOG],
				[EntityId]
		   FROM [XrmTds].[tables_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [EntityId] NOT IN (SELECT [EntityId] FROM [XrmTds].[INFORMATION_SCHEMA_TABLES]);

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('INFORMATION_SCHEMA_TABLES', @@ROWCOUNT, 'I');

		-- Populate sys_types.
		INSERT INTO [XrmTds].[sys_types] (
				[name],	
				[schema_id], 
				[system_type_id], 
				[user_type_id], 
				[is_user_defined],
				[max_length],
				[precision],
				[scale],
				[collation_name],
				[AttributeTypeId]	
			)
		 SELECT [name], 
				[schema_id], 
				[system_type_id], 
				[user_type_id], 
				[is_user_defined],
				[max_length],
				[precision],
				[scale],
				[collation_name],
				[AttributeTypeId]	
		   FROM [XrmTds].[types_view]
		   WHERE [AttributeTypeId] NOT IN (SELECT [AttributeTypeId] FROM [XrmTds].[sys_types]);

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_types', @@ROWCOUNT, 'I');

		-- Populate sys_columns.
		INSERT INTO [XrmTds].[sys_columns] (
				[name], 
				[column_id], 
				[object_id], 
				[system_type_id], 
				[user_type_id], 
				[is_nullable], 
				[precision],	
				[scale], 
				[max_length], 
				[is_identity], 
				[is_computed], 
				[default_object_id],
				[AttributeId]
			)
		 SELECT [name], 
				[column_id], 
				[object_id], 
				[system_type_id], 
				[user_type_id], 
				[is_nullable], 
				[precision], 
				[scale], 
				[max_length], 
				[is_identity], 
				[is_computed], 
				[default_object_id],
				[AttributeId]
		   FROM [XrmTds].[columns_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [AttributeId] NOT IN (SELECT [AttributeId] FROM [XrmTds].[sys_columns]);
 
 		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_columns', @@ROWCOUNT, 'I');

 		-- Populate sys_all_columns.
		INSERT INTO [XrmTds].[sys_all_columns] (
				[object_id],
				[name],
				[column_id],
				[system_type_id],
				[user_type_id],
				[max_length],
				[precision],
				[scale],
				[is_nullable],
				[is_identity],
				[is_computed],
				[default_object_id],
				[AttributeId]
			)
		 SELECT [object_id], 
				[name], 
				[column_id], 
				[system_type_id], 
				[user_type_id],
				[max_length],
				[precision],
				[scale], 
				[is_nullable],
				[is_identity], 
				[is_computed], 
				[default_object_id],
				[AttributeId]
		   FROM [XrmTds].[columns_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [AttributeId] NOT IN (SELECT [AttributeId] FROM [XrmTds].[sys_all_columns]);

 		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_all_columns', @@ROWCOUNT, 'I');

 		-- Populate sys_indexes.
		INSERT INTO [XrmTds].[sys_indexes] (
				[object_id], 
				[name], 
				[index_id], 
				[is_primary_key], 
				[is_unique_constraint], 
				[is_unique],
				[type],
				[type_desc],
				[IndexId]
			)
		 SELECT [object_id],
				[name], 
				[index_id], 
				[is_primary_key], 
				[is_unique_constraint], 
				[is_unique],
				[type],
				[type_desc],
				[IndexId]
		   FROM [XrmTds].[indexes_view]
		   WHERE [ModifiedOn] > @PSqlSysIndexModifiedOn AND [IndexId] NOT IN (SELECT [IndexId] FROM [XrmTds].[sys_indexes]);

 		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_indexes', @@ROWCOUNT, 'I');

 		-- Populate sys_indexes_columns.
		INSERT INTO [XrmTds].[sys_index_columns] (
				[object_id], 
				[index_id], 
				[key_ordinal], 
				[column_id],
				[index_column_id],
				[IndexAttributeId]
			)
		 SELECT [object_id], 
				[index_id], 
				[key_ordinal], 
				[column_id],
				[index_column_id],
				[IndexAttributeId]
		  FROM [XrmTds].[index_columns_view]
		   WHERE [ModifiedOn] > @PSqlSysIndexColumnModifiedOn AND [IndexAttributeId] NOT IN (SELECT [IndexAttributeId] FROM [XrmTds].[sys_index_columns]);

 		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_index_columns', @@ROWCOUNT, 'I');

 		-- Populate sys_foreign_keys.
		INSERT INTO [XrmTds].[sys_foreign_keys] (
				[RelationshipId],
				[schema_id],
				[name], 
				[parent_object_id], 
				[referenced_object_id], 
				[key_index_id],
				[type],
				[type_desc]
			)
		 SELECT [RelationshipId],
				[schema_id],
				[name], 
				[parent_object_id], 
				[referenced_object_id], 
				[key_index_id],
				[type],
				[type_desc]
		   FROM [XrmTds].[foreign_keys_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [RelationshipId] NOT IN (SELECT [RelationshipId] FROM [XrmTds].[sys_foreign_keys]);

 		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_foreign_keys', @@ROWCOUNT, 'I');

 		-- Populate sys_foreign_key_columns.
		INSERT INTO [XrmTds].[sys_foreign_key_columns] (
				[constraint_object_id], 
				[constraint_column_id], 
				[parent_object_id], 
				[parent_column_id], 
				[referenced_object_id], 
				[referenced_column_id],
				[RelationshipId]
			)
		 SELECT sfk.[object_id],
				fkcv.[constraint_column_id], 
				fkcv.[parent_object_id], 
				fkcv.[parent_column_id], 
				fkcv.[referenced_object_id], 
				fkcv.[referenced_column_id],
				fkcv.[RelationshipId]
		  FROM [XrmTds].[foreign_key_columns_view] fkcv
		  INNER JOIN [XrmTds].[sys_foreign_keys] sfk ON fkcv.[RelationshipId] = sfk.[RelationshipId]
		  WHERE fkcv.[VersionNumber] > @PSqlMetadataVersion AND fkcv.[RelationshipId] NOT IN (SELECT [RelationshipId] FROM [XrmTds].[sys_foreign_key_columns]);

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_foreign_key_columns', @@ROWCOUNT, 'I');

			-- Populate sys_objects.
		INSERT INTO [XrmTds].[sys_objects] (
				[name],
				[object_id],
				[schema_id],
				[parent_object_id],
				[type],
				[type_desc],
				[ObjectId]
			)
		 SELECT [name],
				[object_id],
				[schema_id],
				[parent_object_id],
				[type],
				[type_desc],
				[EntityId]
		   FROM [XrmTds].[tables_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [EntityId] NOT IN (SELECT ObjectId FROM [XrmTds].[sys_objects])
		UNION
		 SELECT fkv.[name],
				sfk.[object_id],
				fkv.[schema_id],
				fkv.[parent_object_id],
				fkv.[type],
				fkv.[type_desc],
				fkv.[RelationshipId]
		   FROM [XrmTds].[foreign_keys_view] fkv
		   INNER JOIN [XrmTds].[sys_foreign_keys] sfk ON fkv.[RelationshipId] = sfk.[RelationshipId]
		   WHERE fkv.[VersionNumber] > @PSqlMetadataVersion AND fkv.[RelationshipId] NOT IN (SELECT ObjectId FROM [XrmTds].[sys_objects]);

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_objects', @@ROWCOUNT, 'I');

		-- Populate sys_all_objects.
		INSERT INTO [XrmTds].[sys_all_objects] (
				[name],
				[object_id],
				[schema_id],
				[parent_object_id],
				[type],
				[type_desc],
				[ObjectId]
			)
		 SELECT [name],
				[object_id],
				[schema_id],
				[parent_object_id],
				[type],
				[type_desc],
				[EntityId]
		   FROM [XrmTds].[tables_view]
		   WHERE [VersionNumber] > @PSqlMetadataVersion AND [EntityId] NOT IN (SELECT ObjectId FROM [XrmTds].[sys_all_objects])
		UNION
		 SELECT fkv.[name],
				sfk.[object_id],
				fkv.[schema_id],
				fkv.[parent_object_id],
				fkv.[type],
				fkv.[type_desc],
				fkv.[RelationshipId]
		   FROM [XrmTds].[foreign_keys_view] fkv
		   INNER JOIN [XrmTds].[sys_foreign_keys] sfk ON fkv.[RelationshipId] = sfk.[RelationshipId]
		   WHERE fkv.[VersionNumber] > @PSqlMetadataVersion AND fkv.[RelationshipId] NOT IN (SELECT ObjectId FROM [XrmTds].[sys_all_objects]);

		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('sys_all_objects', @@ROWCOUNT, 'I');

		-- Save schema version.
		DELETE FROM [XrmTds].[SchemaVersion]
		INSERT INTO [XrmTds].[SchemaVersion] ([MetadataVersionNumber], [EntityIndexModifiedOn], [IndexAttributesModifiedOn])
		VALUES (@CurrentMetadataVersion, @CurrentEntityIndexModifiedOn, @CurrentIndexAttributeModifiedOn)

		-- To keep track of Index drop/create code execution.
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('MetadataVersionNumber', 0, CONVERT(NVARCHAR(100), CONVERT(BINARY(8), @CurrentMetadataVersion), 1));
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('EntityIndexModifiedOn', 0, @CurrentEntityIndexModifiedOn);
		INSERT INTO @RecordsAffected (tableName, recordCount, operationType) VALUES ('IndexAttributesModifiedOn', 0, @CurrentIndexAttributeModifiedOn);
	END

	-- Return record count information.
	SELECT tableName, recordCount, operationType FROM @RecordsAffected;

END