

-- Create the stored procedure.
CREATE PROCEDURE [XrmTds].[p_DropPSqlSchemaIndexes]
AS
BEGIN

-- Below Indexes are created for Diff based refresh and the same needs to be dropped while turning off Diff based refresh, to ensure that full refresh performance is not impacted.
DROP INDEX IF EXISTS [XrmTds].[sys_tables].[ndx_sys_tables_EntityId];
DROP INDEX IF EXISTS [XrmTds].[sys_types].[ndx_sys_types_AttributeTypeId];
DROP INDEX IF EXISTS [XrmTds].[sys_columns].[ndx_sys_columns_AttributeId];
DROP INDEX IF EXISTS [XrmTds].[sys_all_columns].[ndx_sys_all_columns_AttributeId];
DROP INDEX IF EXISTS [XrmTds].[sys_foreign_keys].[ndx_sys_foreign_keys_RelationshipId];
DROP INDEX IF EXISTS [XrmTds].[sys_foreign_key_columns].[ndx_sys_foreign_key_columns_RelationshipId];
DROP INDEX IF EXISTS [XrmTds].[sys_indexes].[ndx_sys_indexes_IndexId];
DROP INDEX IF EXISTS [XrmTds].[sys_objects].[ndx_sys_objects_ObjectId];
DROP INDEX IF EXISTS [XrmTds].[sys_objects].[ndx_sys_objects_type];
DROP INDEX IF EXISTS [XrmTds].[sys_all_objects].[ndx_sys_all_objects_ObjectId];
DROP INDEX IF EXISTS [XrmTds].[sys_all_objects].[ndx_sys_all_objects_type];
DROP INDEX IF EXISTS [XrmTds].[sys_index_columns].[ndx_sys_index_columns_IndexAttributeId];
DROP INDEX IF EXISTS [XrmTds].[INFORMATION_SCHEMA_TABLES].[ndx_INFORMATION_SCHEMA_TABLES_EntityId];

END