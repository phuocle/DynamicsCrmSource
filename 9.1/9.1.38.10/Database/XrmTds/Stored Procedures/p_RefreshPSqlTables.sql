CREATE PROC [XrmTds].[p_RefreshPSqlTables]
AS
BEGIN

	SET NOCOUNT ON;

	-- Table for collecting telemetry.
	DECLARE @RecordsAffected TABLE (
		tableName NVARCHAR(100) NOT NULL, 
		recordCount INT NOT NULL
	);

	-- Indexes are created for Diff based refresh and the same needs to be dropped while turning off Diff based refresh, to ensure that full refresh performance is not impacted.
	IF EXISTS (SELECT * FROM sys.indexes WHERE name = 'ndx_sys_tables_EntityId' AND object_id = OBJECT_ID('XrmTds.sys_tables'))
	BEGIN
		-- Drop indexes as its not required for Full refresh.
		IF EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[XrmTds].[p_DropPSqlSchemaIndexes]') AND type IN (N'P', N'SP'))
			EXEC [XrmTds].[p_DropPSqlSchemaIndexes]

		-- To keep track of Index drop code execution.
		INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('DropIndex', 0);
	END

	-- Clean existing data.
	DELETE FROM [XrmTds].[sys_foreign_keys];
	DELETE FROM [XrmTds].[sys_foreign_key_columns];
	DELETE FROM [XrmTds].[sys_index_columns];
	DELETE FROM [XrmTds].[sys_indexes];
	DELETE FROM [XrmTds].[sys_columns];
	DELETE FROM [XrmTds].[sys_all_columns];
	DELETE FROM [XrmTds].[sys_types];
	DELETE FROM [XrmTds].[sys_tables];
	DELETE FROM [XrmTds].[INFORMATION_SCHEMA_TABLES];
	DELETE FROM [XrmTds].[sys_objects];
	DELETE FROM [XrmTds].[sys_all_objects];
	DELETE FROM [XrmTds].[sys_databases];
	DELETE FROM [XrmTds].[sys_schemas];

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

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_schemas', @@ROWCOUNT);

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

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_databases', @@ROWCOUNT);

	-- Populate sys_tables.
	INSERT INTO [XrmTds].[sys_tables] (
			[object_id],	
			[name],
			[schema_id],
			[type],
			[type_desc],
			[EntityId]
		)
	 SELECT [object_id],
			[name],
			[schema_id],
			[type],
			[type_desc],
			[EntityId]
	   FROM [XrmTds].[tables_view];

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_tables', @@ROWCOUNT);

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
	   FROM [XrmTds].[tables_view];

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('INFORMATION_SCHEMA_TABLES', @@ROWCOUNT);

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
	   FROM [XrmTds].[types_view];

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_types', @@ROWCOUNT);

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
	   FROM [XrmTds].[columns_view];
 
 	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_columns', @@ROWCOUNT);

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
	   FROM [XrmTds].[columns_view];

 	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_all_columns', @@ROWCOUNT);

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
	   FROM [XrmTds].[indexes_view];

 	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_indexes', @@ROWCOUNT);

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
	  FROM [XrmTds].[index_columns_view];

 	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_index_columns', @@ROWCOUNT);

 	-- Populate sys_foreign_keys.
	INSERT INTO [XrmTds].[sys_foreign_keys] (
			[RelationshipId],
			[schema_id],
			[name], 
			[parent_object_id], 
			[referenced_object_id], 
			[key_index_id]
		)
	 SELECT [RelationshipId],
			[schema_id],
			[name], 
			[parent_object_id], 
			[referenced_object_id], 
			[key_index_id]	
	   FROM [XrmTds].[foreign_keys_view];

 	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_foreign_keys', @@ROWCOUNT);

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
	  FROM [XrmTds].[foreign_key_columns_view] fkcv INNER JOIN [XrmTds].[sys_foreign_keys] sfk ON fkcv.[RelationshipId] = sfk.[RelationshipId];

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_foreign_key_columns', @@ROWCOUNT);

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
	   FROM [XrmTds].[sys_tables]
	UNION
	 SELECT [name],
			[object_id],
			[schema_id],
			[parent_object_id],
			[type],
			[type_desc],
			[RelationshipId]
	   FROM [XrmTds].[sys_foreign_keys];

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_objects', @@ROWCOUNT);

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
			[ObjectId]
	   FROM [XrmTds].[sys_objects];

	INSERT INTO @RecordsAffected (tableName, recordCount) VALUES ('sys_all_objects', @@ROWCOUNT);

	-- Return record count information.
	SELECT tableName, recordCount FROM @RecordsAffected;

END