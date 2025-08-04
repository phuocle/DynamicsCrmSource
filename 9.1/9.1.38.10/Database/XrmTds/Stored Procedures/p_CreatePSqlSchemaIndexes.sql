

-- Create the stored procedure.
CREATE PROCEDURE [XrmTds].[p_CreatePSqlSchemaIndexes]
AS
BEGIN

-- Below Indexes needs to be created for Diff based refresh.
-- Below Indexes needs to be recreated on cases where the same got dropped earlier while turning off Diff based refresh.
IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_tables') AND name = N'ndx_sys_tables_EntityId')
	CREATE NONCLUSTERED INDEX [ndx_sys_tables_EntityId] ON [XrmTds].[sys_tables]([EntityId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_types') AND name = N'ndx_sys_types_AttributeTypeId')
	CREATE NONCLUSTERED INDEX [ndx_sys_types_AttributeTypeId] ON [XrmTds].[sys_types]([AttributeTypeId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_columns') AND name = N'ndx_sys_columns_AttributeId')
	CREATE NONCLUSTERED INDEX [ndx_sys_columns_AttributeId] ON [XrmTds].[sys_columns]([AttributeId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_all_columns') AND name = N'ndx_sys_all_columns_AttributeId')
	CREATE NONCLUSTERED INDEX [ndx_sys_all_columns_AttributeId] ON [XrmTds].[sys_all_columns]([AttributeId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_foreign_keys') AND name = N'ndx_sys_foreign_keys_RelationshipId')
	CREATE NONCLUSTERED INDEX [ndx_sys_foreign_keys_RelationshipId] ON [XrmTds].[sys_foreign_keys]([RelationshipId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_foreign_key_columns') AND name = N'ndx_sys_foreign_key_columns_RelationshipId')
	CREATE NONCLUSTERED INDEX [ndx_sys_foreign_key_columns_RelationshipId] ON [XrmTds].[sys_foreign_key_columns]([RelationshipId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_indexes') AND name = N'ndx_sys_indexes_IndexId')
	CREATE NONCLUSTERED INDEX [ndx_sys_indexes_IndexId] ON [XrmTds].[sys_indexes]([IndexId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_objects') AND name = N'ndx_sys_objects_ObjectId')
	CREATE NONCLUSTERED INDEX [ndx_sys_objects_ObjectId] ON [XrmTds].[sys_objects]([ObjectId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_objects') AND name = N'ndx_sys_objects_type')
	CREATE NONCLUSTERED INDEX [ndx_sys_objects_type] ON [XrmTds].[sys_objects]([type] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_all_objects') AND name = N'ndx_sys_all_objects_ObjectId')
	CREATE NONCLUSTERED INDEX [ndx_sys_all_objects_ObjectId] ON [XrmTds].[sys_all_objects]([ObjectId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_all_objects') AND name = N'ndx_sys_all_objects_type')
	CREATE NONCLUSTERED INDEX [ndx_sys_all_objects_type] ON [XrmTds].[sys_all_objects]([type] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.sys_index_columns') AND name = N'ndx_sys_index_columns_IndexAttributeId')
	CREATE NONCLUSTERED INDEX [ndx_sys_index_columns_IndexAttributeId] ON [XrmTds].[sys_index_columns]([IndexAttributeId] ASC);

IF NOT EXISTS (SELECT * FROM sys.indexes WHERE object_id = OBJECT_ID(N'XrmTds.INFORMATION_SCHEMA_TABLES') AND name = N'ndx_INFORMATION_SCHEMA_TABLES_EntityId')
	CREATE NONCLUSTERED INDEX [ndx_INFORMATION_SCHEMA_TABLES_EntityId] ON [XrmTds].[INFORMATION_SCHEMA_TABLES]([EntityId] ASC);

END