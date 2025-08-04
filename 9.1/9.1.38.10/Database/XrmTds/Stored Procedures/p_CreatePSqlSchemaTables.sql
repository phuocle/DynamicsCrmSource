

-- Create the stored procedure.
CREATE PROCEDURE [XrmTds].[p_CreatePSqlSchemaTables]
AS
BEGIN

/*------ Model TDS schema version. ---------------------------------------------*/

DROP TABLE IF EXISTS [XrmTds].[SchemaVersion]
CREATE TABLE [XrmTds].[SchemaVersion]
(
	[MetadataVersionNumber] varbinary(8),
	[EntityIndexModifiedOn] datetime,		-- TODO: Remove this column once versionnumber column is added to EntityIndex table.
	[IndexAttributesModifiedOn] datetime	-- TODO: Remove this column once versionnumber column is added to IndexAttributes table.
)

/*------ Model [sys].[databases]. ---------------------------------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_databases]

CREATE TABLE [XrmTds].[sys_databases]
(
	[name]  [nvarchar](160)  NOT NULL, -- TODO: Revisit this data type name as the name in the OrganizationBase table in CDS is bigger length(160) than sysname which is nvarchar(128)
	[database_id]  [int]  NOT NULL,
	[source_database_id]  [int]  NULL   DEFAULT NULL,
	[owner_sid]  [varbinary](85)  NULL   DEFAULT NULL,
	[create_date]  [datetime]  NOT NULL,
	[compatibility_level]  [tinyint]  NOT NULL  DEFAULT 130,
	[collation_name]  [sysname]  NULL   DEFAULT NULL,
	[user_access]  [tinyint]  NULL   DEFAULT 0,
	[user_access_desc]  [nvarchar](60)  NULL   DEFAULT 'MULTI_USER',
	[is_read_only]  [bit]  NULL   DEFAULT 1,
	[is_auto_close_on]  [bit]  NOT NULL  DEFAULT 0,
	[is_auto_shrink_on]  [bit]  NULL   DEFAULT 0,
	[state]  [tinyint]  NULL   DEFAULT 0,
	[state_desc]  [nvarchar](60)  NULL   DEFAULT 'ONLINE',
	[is_in_standby]  [bit]  NULL   DEFAULT 0,
	[is_cleanly_shutdown]  [bit]  NULL   DEFAULT 0,
	[is_supplemental_logging_enabled]  [bit]  NULL   DEFAULT 0,
	[snapshot_isolation_state]  [tinyint]  NULL   DEFAULT 1,
	[snapshot_isolation_state_desc]  [nvarchar](60)  NULL   DEFAULT 'ON',
	[is_read_committed_snapshot_on]  [bit]  NULL   DEFAULT 1,
	[recovery_model]  [tinyint]  NULL   DEFAULT 1,
	[recovery_model_desc]  [nvarchar](60)  NULL   DEFAULT 'FULL',
	[page_verify_option]  [tinyint]  NULL   DEFAULT 2,
	[page_verify_option_desc]  [nvarchar](60)  NULL   DEFAULT 'CHECKSUM',
	[is_auto_create_stats_on]  [bit]  NULL   DEFAULT 0,
	[is_auto_create_stats_incremental_on]  [bit]  NULL   DEFAULT 0,
	[is_auto_update_stats_on]  [bit]  NULL   DEFAULT 0,
	[is_auto_update_stats_async_on]  [bit]  NULL   DEFAULT 0,
	[is_ansi_null_default_on]  [bit]  NULL   DEFAULT 0,
	[is_ansi_nulls_on]  [bit]  NULL   DEFAULT 0,
	[is_ansi_padding_on]  [bit]  NULL   DEFAULT 0,
	[is_ansi_warnings_on]  [bit]  NULL   DEFAULT 0,
	[is_arithabort_on]  [bit]  NULL   DEFAULT 0,
	[is_concat_null_yields_null_on]  [bit]  NULL   DEFAULT 0,
	[is_numeric_roundabort_on]  [bit]  NULL   DEFAULT 0,
	[is_quoted_identifier_on]  [bit]  NULL   DEFAULT 0,
	[is_recursive_triggers_on]  [bit]  NULL   DEFAULT 0,
	[is_cursor_close_on_commit_on]  [bit]  NULL   DEFAULT 0,
	[is_local_cursor_default]  [bit]  NULL   DEFAULT 0,
	[is_fulltext_enabled]  [bit]  NULL   DEFAULT 0,
	[is_trustworthy_on]  [bit]  NULL   DEFAULT 0,
	[is_db_chaining_on]  [bit]  NULL   DEFAULT 0,
	[is_parameterization_forced]  [bit]  NULL   DEFAULT 0,
	[is_master_key_encrypted_by_server]  [bit]  NOT NULL  DEFAULT 0,
	[is_query_store_on]  [bit]  NULL   DEFAULT 0,
	[is_published]  [bit]  NOT NULL  DEFAULT 0,
	[is_subscribed]  [bit]  NOT NULL  DEFAULT 0,
	[is_merge_published]  [bit]  NOT NULL  DEFAULT 0,
	[is_distributor]  [bit]  NOT NULL  DEFAULT 0,
	[is_sync_with_backup]  [bit]  NOT NULL  DEFAULT 0,
	[service_broker_guid]  [uniqueidentifier]  NOT NULL  DEFAULT '00000000-0000-0000-0000-000000000000',
	[is_broker_enabled]  [bit]  NOT NULL  DEFAULT 0,
	[log_reuse_wait]  [tinyint]  NULL   DEFAULT 0,
	[log_reuse_wait_desc]  [nvarchar](60)  NULL   DEFAULT 'NOTHING',
	[is_date_correlation_on]  [bit]  NOT NULL  DEFAULT 0,
	[is_cdc_enabled]  [bit]  NOT NULL  DEFAULT 0,
	[is_encrypted]  [bit]  NULL   DEFAULT 0,
	[is_honor_broker_priority_on]  [bit]  NULL   DEFAULT 0,
	[replica_id]  [uniqueidentifier]  NULL   DEFAULT NULL,
	[group_database_id]  [uniqueidentifier]  NULL   DEFAULT NULL,
	[resource_pool_id]  [int]  NULL   DEFAULT NULL,
	[default_language_lcid]  [smallint]  NULL   DEFAULT NULL,
	[default_language_name]  [nvarchar](128)  NULL   DEFAULT NULL,
	[default_fulltext_language_lcid]  [int]  NULL   DEFAULT NULL,
	[default_fulltext_language_name]  [nvarchar](128)  NULL   DEFAULT NULL,
	[is_nested_triggers_on]  [bit]  NULL   DEFAULT NULL,
	[is_transform_noise_words_on]  [bit]  NULL   DEFAULT NULL,
	[two_digit_year_cutoff]  [smallint]  NULL   DEFAULT NULL,
	[containment]  [tinyint]  NULL   DEFAULT 0,
	[containment_desc]  [nvarchar](60)  NULL   DEFAULT 'NONE',
	[target_recovery_time_in_seconds]  [int]  NULL   DEFAULT 120,
	[delayed_durability]  [int]  NULL   DEFAULT 0,
	[delayed_durability_desc]  [nvarchar](60)  NULL   DEFAULT 'DISABLED',
	[is_memory_optimized_elevate_to_snapshot_on]  [bit]  NULL   DEFAULT 0,
	[is_federation_member]  [bit]  NULL   DEFAULT 0,
	[is_remote_data_archive_enabled]  [bit]  NULL   DEFAULT 0,
	[is_mixed_page_allocation_on]  [bit]  NULL   DEFAULT 0
	CONSTRAINT [cndx_PrimaryKey_sys_databases] PRIMARY KEY CLUSTERED 
	(
		[database_id]  ASC
	)
)


/*------ Model [sys].[schemas] -----------------------------------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_schemas]

CREATE TABLE [XrmTds].[sys_schemas]
(
	[name]  [sysname]  NOT NULL,
	[schema_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	CONSTRAINT [cndx_PrimaryKey_sys_schemas] PRIMARY KEY CLUSTERED 
	(
		[schema_id]  ASC
	)
)


/*------ Model [sys].[tables] + [INFORMATION_SCHEMA].[TABLES] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_tables]

CREATE TABLE [XrmTds].[sys_tables]
(
	[name]  [sysname]  NOT NULL, 
	[object_id]  [int]  NOT NULL, 
	[principal_id]  [int]  NULL DEFAULT NULL,
	[schema_id]  [int]  NOT NULL,	
	[parent_object_id]  [int]  NOT NULL DEFAULT 0,
	[type]  [char](2)  NULL,		
	[type_desc]  [nvarchar](60)  NULL,  
	[create_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(),  
	[modify_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(),  
	[is_ms_shipped]  [bit]  NOT NULL DEFAULT 0,
	[is_published]  [bit]  NOT NULL DEFAULT 0,
	[is_schema_published]  [bit]  NOT NULL DEFAULT 0,
	[lob_data_space_id]  [int]  NOT NULL DEFAULT 1,
	[filestream_data_space_id]  [int]  NULL DEFAULT NULL,
	[max_column_id_used]  [int]  NOT NULL DEFAULT 0,
	[lock_on_bulk_load]  [bit]  NOT NULL DEFAULT 0, 
	[uses_ansi_nulls]  [bit]  NULL DEFAULT 1,
	[is_replicated]  [bit]  NULL DEFAULT 0,
	[has_replication_filter]  [bit]  NULL DEFAULT 0,
	[is_merge_published]  [bit]  NULL DEFAULT 0,
	[is_sync_tran_subscribed]  [bit]  NULL DEFAULT 0,
	[has_unchecked_assembly_data]  [bit]  NOT NULL DEFAULT 0,
	[text_in_row_limit]  [int]  NULL DEFAULT 0,
	[large_value_types_out_of_row]  [bit]  NULL DEFAULT 0,
	[is_tracked_by_cdc]  [bit]  NULL DEFAULT 0,
	[lock_escalation]  [tinyint]  NULL DEFAULT 0,
	[lock_escalation_desc]  [nvarchar](60)  NULL DEFAULT 'TABLE',
	[is_filetable]  [bit]  NULL DEFAULT 0,
	[is_memory_optimized]  [bit]  NULL DEFAULT 0,
	[durability]  [tinyint]  NULL DEFAULT 0,
	[durability_desc]  [nvarchar](60)  NULL DEFAULT 'SCHEMA_AND_DATA',
	[temporal_type]  [tinyint]  NULL DEFAULT 0,
	[temporal_type_desc]  [nvarchar](60)  NULL DEFAULT 'NON_TEMPORAL_TABLE',
	[history_table_id]  [int]  NULL DEFAULT NULL,
	[is_remote_data_archive_enabled]  [bit]  NULL DEFAULT 0,
	[is_external]  [bit]  NOT NULL DEFAULT 0,
	[history_retention_period]  [int]  NULL,
	[history_retention_period_unit]  [int]  NULL,
	[history_retention_period_unit_desc]  [nvarchar](10)  NULL,
	[is_node]  [bit]  NULL DEFAULT 0,
	[is_edge]  [bit]  NULL DEFAULT 0,
	[EntityId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_tables] ON [XrmTds].[sys_tables]([object_id] ASC);

/*------ Model [sys].[types] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_types]

CREATE TABLE [XrmTds].[sys_types]
(
	[name]  [nvarchar](255)  NOT NULL, 	-- TODO: Fix AttributeTypes.Description to nvarchar(128) to match sysname data type.
	[system_type_id]  [int]  NOT NULL, 	-- TODO: Fix AttributeTypes.SQLServerType to tinyint to match sys.types.system_type_id.
	[user_type_id]  [int]  NOT NULL, 
	[schema_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL DEFAULT NULL,
	[max_length]  [smallint]  NOT NULL DEFAULT 0, 
	[precision]  [tinyint]  NOT NULL DEFAULT 0, 
	[scale]  [tinyint]  NOT NULL DEFAULT 0, 
	[collation_name]  [sysname]  NULL DEFAULT NULL, 
	[is_nullable]  [bit]  NULL DEFAULT 1, 
	[is_user_defined]  [bit]  NOT NULL, 
	[is_assembly_type]  [bit]  NOT NULL DEFAULT 0,
	[default_object_id]  [int]  NOT NULL DEFAULT 0,
	[rule_object_id]  [int]  NOT NULL DEFAULT 0,
	[is_table_type]  [bit]  NOT NULL DEFAULT 0,
	[AttributeTypeId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_types] ON [XrmTds].[sys_types]([user_type_id] ASC);

/*------ Model [sys].[columns] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_columns]

CREATE TABLE [XrmTds].[sys_columns]
(
	[object_id]  [int]  NOT NULL,
	[name]  [sysname]  NULL, 
	[column_id]  [int]  NOT NULL, 
	[system_type_id]  [int]  NOT NULL, 	-- TODO: Fix AttributeTypes.SQLServerType to tinyint to match sys.types.system_type_id.
	[user_type_id]  [int]  NOT NULL, 
	[max_length]  [int]  NOT NULL, 		-- TODO: Fix Attribute.Length to smallint to match sys.columns.max_length.
	[precision]  [tinyint]  NOT NULL,
	[scale]  [int]  NOT NULL, 		-- TODO: Fix Attribute.Accuracy to tinyint to match sys.columns.scale.
	[collation_name]  [sysname]  NULL DEFAULT NULL,
	[is_nullable]  [bit]  NULL, 
	[is_ansi_padded]  [bit]  NOT NULL DEFAULT 0, 
	[is_rowguidcol]  [bit]  NOT NULL DEFAULT 0, 
	[is_identity]  [bit]  NOT NULL, 
	[is_computed]  [bit]  NOT NULL, 
	[is_filestream]  [bit]  NOT NULL DEFAULT 0,
	[is_replicated]  [bit]  NULL DEFAULT 0,
	[is_non_sql_subscribed]  [bit]  NULL DEFAULT 0,
	[is_merge_published]  [bit]  NULL DEFAULT 0, 
	[is_dts_replicated]  [bit]  NULL DEFAULT 0, 
	[is_xml_document]  [bit]  NOT NULL DEFAULT 0, 
	[xml_collection_id]  [int]  NOT NULL DEFAULT 0, 
	[default_object_id]  [int]  NOT NULL, 
	[rule_object_id]  [int]  NOT NULL DEFAULT 0,
	[is_sparse]  [bit]  NULL DEFAULT 0,
	[is_column_set]  [bit]  NULL DEFAULT 0, 
	[generated_always_type]  [tinyint]  NULL DEFAULT 0,
	[generated_always_type_desc]  [nvarchar](60)  NULL DEFAULT 'NOT_APPLICABLE',
	[encryption_type]  [int]  NULL DEFAULT NULL, 
	[encryption_type_desc]  [nvarchar](64)  NULL DEFAULT NULL,
	[encryption_algorithm_name]  [sysname]  NULL DEFAULT NULL,
	[column_encryption_key_id]  [int]  NULL DEFAULT NULL,
	[column_encryption_key_database_name]  [sysname]  NULL DEFAULT NULL,
	[is_hidden]  [bit]  NULL DEFAULT 0,
	[is_masked]  [bit]  NULL DEFAULT 0,
	[AttributeId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_columns] ON [XrmTds].[sys_columns]([object_id] ASC, [column_id] ASC);

/*------ Model [sys].[all_columns] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_all_columns]

CREATE TABLE [XrmTds].[sys_all_columns]
(
	[object_id]  [int]  NOT NULL,
	[name]  [sysname]  NULL,
	[column_id]  [int]  NOT NULL,
	[system_type_id]  [int]  NOT NULL, 	-- TODO: Fix AttributeTypes.SQLServerType to tinyint to match sys.types.system_type_id.
	[user_type_id]  [int]  NOT NULL,
	[max_length]  [int]  NOT NULL,		-- TODO: Fix Attribute.Length to smallint to match sys.columns.max_length.
	[precision]  [tinyint]  NOT NULL,
	[scale]  [int]  NOT NULL, 		-- TODO: Fix Attribute.Accuracy to tinyint to match sys.columns.scale.
	[collation_name]  [sysname]  NULL,
	[is_nullable]  [bit]  NULL,
	[is_ansi_padded]  [bit]  NOT NULL DEFAULT 0,
	[is_rowguidcol]  [bit]  NOT NULL DEFAULT 0, 
	[is_identity]  [bit]  NOT NULL,
	[is_computed]  [bit]  NOT NULL,
	[is_filestream]  [bit]  NOT NULL DEFAULT 0,
	[is_replicated]  [bit]  NULL DEFAULT 0,
	[is_non_sql_subscribed]  [bit]  NULL DEFAULT 0,
	[is_merge_published]  [bit]  NULL DEFAULT 0,
	[is_dts_replicated]  [bit]  NULL DEFAULT 0,
	[is_xml_document]  [bit]  NOT NULL DEFAULT 0,
	[xml_collection_id]  [int]  NOT NULL DEFAULT 0,
	[default_object_id]  [int]  NOT NULL,
	[rule_object_id]  [int]  NOT NULL DEFAULT 0,
	[is_sparse]  [bit]  NULL DEFAULT 0,
	[is_column_set]  [bit]  NULL DEFAULT 0,
	[generated_always_type]  [tinyint]  NULL DEFAULT 0,
	[generated_always_type_desc]  [nvarchar](60)  NULL DEFAULT 'NOT_APPLICABLE',
	[encryption_type]  [int]  NULL,
	[encryption_type_desc]  [nvarchar](64)  NULL,
	[encryption_algorithm_name]  [sysname]  NULL,
	[column_encryption_key_id]  [int]  NULL,
	[column_encryption_key_database_name]  [sysname]  NULL,
	[is_hidden]  [bit]  NULL DEFAULT 0,
	[is_masked]  [bit]  NOT NULL DEFAULT 0,
	[graph_type]  [int]  NULL DEFAULT 0,
	[graph_type_desc]  [nvarchar](60)  NULL DEFAULT 'NOT_APPLICABLE',
	[AttributeId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_all_columns] ON [XrmTds].[sys_all_columns]([object_id] ASC, [column_id] ASC);

/*------ Model [sys].[default_constraints] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_default_constraints]

CREATE TABLE [XrmTds].[sys_default_constraints]
(
	[name]  [sysname]  NOT NULL, 
	[object_id]  [int]  NOT NULL, 
	[principal_id]  [int]  NULL DEFAULT NULL,
	[schema_id]  [int]  NOT NULL, 
	[parent_object_id]  [int]  NOT NULL DEFAULT -1, 
	[type]  [char](2)  NULL DEFAULT 'D',
	[type_desc]  [nvarchar](60)  NULL DEFAULT 'DEFAULT_CONSTRAINT',
	[create_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[modify_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[is_ms_shipped]  [bit]  NOT NULL DEFAULT 0,
	[is_published]  [bit]  NOT NULL DEFAULT 0,
	[is_schema_published]  [bit]  NOT NULL DEFAULT 0,
	[parent_column_id]  [int]  NOT NULL DEFAULT -1, 
	[definition]  [nvarchar](max)  NULL DEFAULT NULL, 
	[is_system_named]  [bit]  NOT NULL DEFAULT 0 
	CONSTRAINT [cndx_PrimaryKey_sys_default_constraints] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)


/*------ Model [sys].[foreign_keys] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_foreign_keys]

CREATE TABLE [XrmTds].[sys_foreign_keys]
(
	[name]  [nvarchar](255)  NOT NULL, -- TODO: Revisit this data type name as the name in the Relationship table in CDS is bigger length(255) than sysname which is nvarchar(128)
	[object_id]  [int]  NOT NULL IDENTITY(1000000, 1), -- Add range padding to make it unique across tables.
	[principal_id]  [int]  NULL DEFAULT NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL, 
	[type]  [char](2)  NULL DEFAULT 'F',
	[type_desc]  [nvarchar](60)  NULL DEFAULT 'FOREIGN_KEY_CONSTRAINT',
	[create_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[modify_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[is_ms_shipped]  [bit]  NOT NULL DEFAULT 0,
	[is_published]  [bit]  NOT NULL DEFAULT 0,
	[is_schema_published]  [bit]  NOT NULL DEFAULT 0,
	[referenced_object_id]  [int]  NULL, 
	[key_index_id]  [int]  NULL,
	[is_disabled]  [bit]  NOT NULL DEFAULT 0,
	[is_not_for_replication]  [bit]  NOT NULL DEFAULT 0,
	[is_not_trusted]  [bit]  NOT NULL DEFAULT 0,
	[delete_referential_action]  [tinyint]  NULL DEFAULT 0,
	[delete_referential_action_desc]  [nvarchar](60)  NULL DEFAULT 'NO_ACTION',
	[update_referential_action]  [tinyint]  NULL DEFAULT 0,
	[update_referential_action_desc]  [nvarchar](60)  NULL DEFAULT 'NO_ACTION',
	[is_system_named]  [bit]  NOT NULL DEFAULT 0,
	[RelationshipId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_foreign_keys] ON [XrmTds].[sys_foreign_keys]([object_id] ASC);

/*------ Model [sys].[foreign_key_columns] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_foreign_key_columns]

CREATE TABLE [XrmTds].[sys_foreign_key_columns]
(
	[constraint_object_id]  [int]  NOT NULL, 
	[constraint_column_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL, 
	[parent_column_id]  [int]  NOT NULL, 
	[referenced_object_id]  [int]  NOT NULL, 
	[referenced_column_id]  [int]  NOT NULL,
	[RelationshipId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_foreign_key_columns] ON [XrmTds].[sys_foreign_key_columns]([constraint_object_id] ASC, [parent_column_id] ASC);

/*------ Model [sys].[computed_columns] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_computed_columns]

CREATE TABLE [XrmTds].[sys_computed_columns]
(
	[object_id]  [int]  NOT NULL, 
	[name]  [sysname]  NULL, 
	[column_id]  [int]  NOT NULL, 
	[system_type_id]  [tinyint]  NOT NULL, 
	[user_type_id]  [int]  NOT NULL, 
	[max_length]  [smallint]  NOT NULL, 
	[precision]  [tinyint]  NOT NULL, 
	[scale]  [tinyint]  NOT NULL, 
	[collation_name]  [sysname]  NULL DEFAULT NULL,
	[is_nullable]  [bit]  NULL, 
	[is_ansi_padded]  [bit]  NOT NULL DEFAULT 0,
	[is_rowguidcol]  [bit]  NOT NULL DEFAULT 0,
	[is_identity]  [bit]  NOT NULL DEFAULT 0,
	[is_filestream]  [bit]  NOT NULL DEFAULT 0,
	[is_replicated]  [bit]  NULL DEFAULT 0,
	[is_non_sql_subscribed]  [bit]  NULL DEFAULT 0,
	[is_merge_published]  [bit]  NULL DEFAULT 0,
	[is_dts_replicated]  [bit]  NULL DEFAULT 0,
	[is_xml_document]  [bit]  NOT NULL DEFAULT 0,
	[xml_collection_id]  [int]  NOT NULL DEFAULT 0,
	[default_object_id]  [int]  NOT NULL DEFAULT 0,
	[rule_object_id]  [int]  NOT NULL DEFAULT 0,
	[definition]  [nvarchar](max)  NULL DEFAULT NULL, 
	[uses_database_collation]  [bit]  NOT NULL DEFAULT 1,
	[is_persisted]  [bit]  NOT NULL DEFAULT 0,
	[is_computed]  [bit]  NOT NULL DEFAULT 1,
	[is_sparse]  [bit]  NOT NULL DEFAULT 0,
	[is_column_set]  [bit]  NOT NULL DEFAULT 0,
	[generated_always_type]  [tinyint]  NULL DEFAULT 0,
	[generated_always_type_desc]  [nvarchar](60)  NULL DEFAULT 'NOT_APPLICABLE',
	[encryption_type]  [int]  NULL DEFAULT NULL,
	[encryption_type_desc]  [nvarchar](64)  NULL DEFAULT NULL,
	[encryption_algorithm_name]  [nvarchar](128)  NULL DEFAULT NULL,
	[column_encryption_key_id]  [int]  NULL DEFAULT NULL,
	[column_encryption_key_database_name]  [sysname]  NULL DEFAULT NULL,
	[is_hidden]  [bit]  NOT NULL DEFAULT 0,
	[is_masked]  [bit]  NOT NULL DEFAULT 0
	CONSTRAINT [cndx_PrimaryKey_sys_computed_columns] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)


/*------ Model [sys].[indexes] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_indexes]

CREATE TABLE [XrmTds].[sys_indexes]
(
	[object_id]  [int]  NOT NULL, 
	[name]  [sysname]  NULL DEFAULT NULL, 
	[index_id]  [int]  NOT NULL, 
	[type]  [tinyint]  NOT NULL DEFAULT -1, 
	[type_desc]  [nvarchar](60)  NULL DEFAULT NULL, 
	[is_unique]  [bit]  NULL, 
	[data_space_id]  [int]  NULL DEFAULT 1, 
	[ignore_dup_key]  [bit]  NULL DEFAULT 0,
	[is_primary_key]  [bit]  NULL, 
	[is_unique_constraint]  [bit]  NULL,
	[fill_factor]  [tinyint]  NOT NULL DEFAULT 0,
	[is_padded]  [bit]  NULL DEFAULT 0,
	[is_disabled]  [bit]  NULL DEFAULT 0,
	[is_hypothetical]  [bit]  NULL DEFAULT 0,
	[allow_row_locks]  [bit]  NULL DEFAULT 1,
	[allow_page_locks]  [bit]  NULL DEFAULT 1,
	[has_filter]  [bit]  NULL DEFAULT 0, 
	[filter_definition]  [nvarchar](max)  NULL DEFAULT NULL,
	[compression_delay]  [int]  NULL DEFAULT NULL,
	[IndexId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_indexes] ON [XrmTds].[sys_indexes]([object_id] ASC, [index_id] ASC);

/*------ Model [sys].[objects] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_objects]

CREATE TABLE [XrmTds].[sys_objects]
(
	[name]  [sysname]  NOT NULL, 
	[object_id]  [int]  NOT NULL, 
	[principal_id]  [int]  NULL DEFAULT NULL, 
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL, 
	[type]  [char](2)  NULL, 
	[type_desc]  [nvarchar](60)  NULL, 
	[create_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[modify_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[is_ms_shipped]  [bit]  NOT NULL DEFAULT 0,
	[is_published]  [bit]  NOT NULL DEFAULT 0,
	[is_schema_published]  [bit]  NOT NULL DEFAULT 0,
	[ObjectId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_objects] ON [XrmTds].[sys_objects]([object_id] ASC);

/*------ Model [sys].[all_objects] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_all_objects]

CREATE TABLE [XrmTds].[sys_all_objects]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[modify_date]  [datetime]  NOT NULL DEFAULT GETUTCDATE(), 
	[is_ms_shipped]  [bit]  NULL DEFAULT 0,
	[is_published]  [bit]  NULL DEFAULT 0,
	[is_schema_published]  [bit]  NULL DEFAULT 0,
	[ObjectId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_all_objects] ON [XrmTds].[sys_all_objects]([object_id] ASC);

/*------ Model [sys].[index_columns] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_index_columns]

CREATE TABLE [XrmTds].[sys_index_columns]
(
	[object_id]  [int]  NOT NULL, 
	[index_id]  [int]  NOT NULL, 
	[index_column_id]  [int]  NOT NULL DEFAULT -1, 
	[column_id]  [int]  NOT NULL, 
	[key_ordinal]  [tinyint]  NOT NULL, 
	[partition_ordinal]  [tinyint]  NOT NULL DEFAULT 0,
	[is_descending_key]  [bit]  NULL DEFAULT 0,
	[is_included_column]  [bit]  NULL DEFAULT 0,
	[IndexAttributeId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_sys_index_columns] ON [XrmTds].[sys_index_columns]([object_id] ASC, [index_id] ASC, [index_column_id] ASC);

/*------ Model [sys].[data_spaces] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_data_spaces]

CREATE TABLE [XrmTds].[sys_data_spaces]
(
	[name]  [sysname]  NOT NULL,
	[data_space_id]  [int]  NOT NULL,
	[type]  [char](2)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[is_default]  [bit]  NOT NULL,
	[is_system]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_data_spaces] PRIMARY KEY CLUSTERED 
	(
		[data_space_id]  ASC
	)
)

/*------ Model [sys].[xml_schema_collections] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_xml_schema_collections]

CREATE TABLE [XrmTds].[sys_xml_schema_collections]
(
	[xml_collection_id]  [int]  NOT NULL,
	[schema_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[name]  [sysname]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_xml_schema_collections] PRIMARY KEY CLUSTERED 
	(
		[xml_collection_id]  ASC
	)
)

/*------ Model [sys].[xml_indexes] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_xml_indexes]

CREATE TABLE [XrmTds].[sys_xml_indexes]
(
	[object_id]  [int]  NOT NULL,
	[name]  [sysname]  NULL,
	[index_id]  [int]  NOT NULL,
	[type]  [tinyint]  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[is_unique]  [bit]  NULL,
	[data_space_id]  [int]  NOT NULL,
	[ignore_dup_key]  [bit]  NULL,
	[is_primary_key]  [bit]  NULL,
	[is_unique_constraint]  [bit]  NULL,
	[fill_factor]  [tinyint]  NOT NULL,
	[is_padded]  [bit]  NULL,
	[is_disabled]  [bit]  NULL,
	[is_hypothetical]  [bit]  NULL,
	[is_ignored_in_optimization]  [bit]  NULL,
	[allow_row_locks]  [bit]  NULL,
	[allow_page_locks]  [bit]  NULL,
	[using_xml_index_id]  [int]  NULL,
	[secondary_type]  [char](1)  NULL,
	[secondary_type_desc]  [nvarchar](60)  NULL,
	[has_filter]  [bit]  NOT NULL,
	[filter_definition]  [nvarchar](max) NULL,
	[xml_index_type]  [tinyint]  NULL,
	[xml_index_type_description]  [nvarchar](60)  NULL,
	[path_id]  [int]  NULL,
	[auto_created]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_xml_indexes] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC,
		[index_id]   ASC
	)
)

/*------ Model [sys].[table_types] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_table_types]

CREATE TABLE [XrmTds].[sys_table_types]
(
	[name]  [sysname]  NOT NULL,
	[system_type_id]  [tinyint]  NOT NULL,
	[user_type_id]  [int]  NOT NULL,
	[schema_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[max_length]  [smallint]  NOT NULL,
	[precision]  [tinyint]  NOT NULL,
	[scale]  [tinyint]  NOT NULL,
	[collation_name]  [sysname]  NULL,
	[is_nullable]  [bit]  NULL,
	[is_user_defined]  [bit]  NOT NULL,
	[is_assembly_type]  [bit]  NOT NULL,
	[default_object_id]  [int]  NOT NULL,
	[rule_object_id]  [int]  NOT NULL,
	[is_table_type]  [bit]  NOT NULL,
	[type_table_object_id]  [int]  NOT NULL,
	[is_memory_optimized]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_table_types] PRIMARY KEY CLUSTERED 
	(
		[type_table_object_id]  ASC
	)
)

/*------ Model [sys].[check_constraints] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_check_constraints]

CREATE TABLE [XrmTds].[sys_check_constraints]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NOT NULL,
	[is_published]  [bit]  NOT NULL,
	[is_schema_published]  [bit]  NOT NULL,
	[is_disabled]  [bit]  NOT NULL,
	[is_not_for_replication]  [bit]  NOT NULL,
	[is_not_trusted]  [bit]  NOT NULL,
	[parent_column_id]  [int]  NOT NULL,
	[definition]  [nvarchar](max)  NULL,
	[uses_database_collation]  [bit]  NULL,
	[is_system_named]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_check_constraints] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[edge_constraints] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_edge_constraints]

CREATE TABLE [XrmTds].[sys_edge_constraints]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NOT NULL,
	[is_published]  [bit]  NOT NULL,
	[is_schema_published]  [bit]  NOT NULL,
	[is_disabled]  [bit]  NOT NULL,
	[is_not_trusted]  [bit]  NOT NULL,
	[is_system_named]  [bit]  NOT NULL,
	[delete_referential_action]  [tinyint]  NULL,
	[delete_referential_action_desc]  [nvarchar](60)  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_edge_constraints] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[triggers] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_triggers]

CREATE TABLE [XrmTds].[sys_triggers]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[parent_class]  [tinyint]  NOT NULL,
	[parent_class_desc]  [nvarchar](60)  NULL,
	[parent_id]  [int]  NOT NULL,
	[type]  [char](2)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NOT NULL,
	[is_disabled]  [bit]  NOT NULL,
	[is_not_for_replication]  [bit]  NOT NULL,
	[is_instead_of_trigger]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_triggers] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[sql_modules] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_sql_modules]

CREATE TABLE [XrmTds].[sys_sql_modules]
(
	[object_id]  [int]  NOT NULL,
	[definition]  [nvarchar](max)  NULL,
	[uses_ansi_nulls]  [bit]  NULL,
	[uses_quoted_identifier]  [bit]  NULL,
	[is_schema_bound]  [bit]  NULL,
	[uses_database_collation]  [bit]  NULL,
	[is_recompiled]  [bit]  NULL,
	[null_on_null_input]  [bit]  NULL,
	[execute_as_principal_id]  [int]  NULL,
	[uses_native_compilation]  [bit]  NULL,
	[inline_type]  [bit]  NULL,
	[is_inlineable]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_sql_modules] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[all_sql_modules] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_all_sql_modules]

CREATE TABLE [XrmTds].[sys_all_sql_modules]
(
	[object_id]  [int]  NOT NULL,
	[definition]  [nvarchar](max)  NULL,
	[uses_ansi_nulls]  [bit]  NULL,
	[uses_quoted_identifier]  [bit]  NULL,
	[is_schema_bound]  [bit]  NULL,
	[uses_database_collation]  [bit]  NULL,
	[is_recompiled]  [bit]  NULL,
	[null_on_null_input]  [bit]  NULL,
	[execute_as_principal_id]  [int]  NULL,
	[uses_native_compilation]  [bit]  NULL,
	[inline_type]  [bit]  NULL,
	[is_inlineable]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_all_sql_modules] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[system_sql_modules] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_system_sql_modules]

CREATE TABLE [XrmTds].[sys_system_sql_modules]
(
	[object_id]  [int]  NOT NULL,
	[definition]  [nvarchar](max)  NULL,
	[uses_ansi_nulls]  [bit]  NOT NULL,
	[uses_quoted_identifier]  [bit]  NOT NULL,
	[is_schema_bound]  [bit]  NOT NULL,
	[uses_database_collation]  [bit]  NOT NULL,
	[is_recompiled]  [bit]  NOT NULL,
	[null_on_null_input]  [bit]  NOT NULL,
	[execute_as_principal_id]  [int]  NULL,
	[uses_native_compilation]  [bit]  NOT NULL,
	[inline_type]  [bit]  NOT NULL,
	[is_inlineable]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_system_sql_modules] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[stats] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_stats]

CREATE TABLE [XrmTds].[sys_stats]
(
	[object_id]  [int]  NOT NULL,
	[name]  [nvarchar](128)  NULL,
	[stats_id]  [int]  NOT NULL,
	[auto_created]  [bit]  NULL,
	[user_created]  [bit]  NULL,
	[no_recompute]  [bit]  NULL,
	[has_filter]  [bit]  NULL,
	[filter_definition]  [nvarchar](max)  NULL,
	[is_temporary]  [bit]  NULL,
	[is_incremental]  [bit]  NULL,
	[has_persisted_sample]  [bit]  NULL,
	[stats_generation_method]  [int]  NOT NULL,
	[stats_generation_method_desc]  [varchar](40)  NOT NULL,
	[auto_drop]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_stats] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC,
		[stats_id]  ASC
	)
)


/*------ Model [sys].[all_views] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_all_views]

CREATE TABLE [XrmTds].[sys_all_views]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NULL,
	[is_published]  [bit]  NULL,
	[is_schema_published]  [bit]  NULL,
	[is_replicated]  [bit]  NULL,
	[has_replication_filter]  [bit]  NULL,
	[has_opaque_metadata]  [bit]  NULL,
	[has_unchecked_assembly_data]  [bit]  NULL,
	[with_check_option]  [bit]  NULL,
	[is_date_correlation_view]  [bit]  NULL,
	[is_tracked_by_cdc]  [bit]  NULL,
	[has_snapshot]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_all_views] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[database_principals] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_database_principals]

CREATE TABLE [XrmTds].[sys_database_principals]
(
	[name]  [sysname]  NOT NULL,
	[principal_id]  [int]  NOT NULL,
	[type]  [char](1)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[default_schema_name]  [sysname]  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[owning_principal_id]  [int]  NULL,
	[sid]  [varbinary](85)  NULL,
	[is_fixed_role]  [bit]  NOT NULL,
	[authentication_type]  [int]  NOT NULL,
	[authentication_type_desc]  [nvarchar](60)  NULL,
	[default_language_name]  [sysname]  NULL,
	[default_language_lcid]  [int]  NULL,
	[allow_encrypted_value_modifications]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_database_principals] PRIMARY KEY CLUSTERED 
	(
		[principal_id]  ASC
	)
)

/*------ Model [sys].[external_data_sources] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_external_data_sources]

CREATE TABLE [XrmTds].[sys_external_data_sources]
(
	[data_source_id]  [int]  NOT NULL,
	[name]  [nvarchar](128)  NOT NULL,
	[location]  [nvarchar](4000)  NOT NULL,
	[type_desc]  [nvarchar](255)  NULL,
	[type]  [tinyint]  NOT NULL,
	[resource_manager_location]  [nvarchar](4000)  NULL,
	[credential_id]  [int]  NOT NULL,
	[database_name]  [nvarchar](128)  NULL,
	[shard_map_name]  [nvarchar](128)  NULL,
	[connection_options]  [nvarchar](4000)  NULL,
	[pushdown]  [nvarchar](256)  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_external_data_sources] PRIMARY KEY CLUSTERED 
	(
		[data_source_id]  ASC
	)
)

/*------ Model [sys].[synonyms] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_synonyms]

CREATE TABLE [XrmTds].[sys_synonyms]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NOT NULL,
	[is_published]  [bit]  NOT NULL,
	[is_schema_published]  [bit]  NOT NULL,
	[base_object_name]  [nvarchar](1035)  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_synonyms] PRIMARY KEY CLUSTERED 
	(
		[object_id]  ASC
	)
)

/*------ Model [sys].[assemblies] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_assemblies]

CREATE TABLE [XrmTds].[sys_assemblies]
(
	[name]  [sysname]  NOT NULL,
	[principal_id]  [int]  NULL,
	[assembly_id]  [int]  NOT NULL,
	[clr_name]  [nvarchar](4000)  NULL,
	[permission_set]  [tinyint]  NULL,
	[permission_set_desc]  [nvarchar](60)  NULL,
	[is_visible]  [bit]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_user_defined]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_assemblies] PRIMARY KEY CLUSTERED 
	(
		[assembly_id]  ASC
	)
)

/*------ Model [sys].[assembly_types] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_assembly_types]

CREATE TABLE [XrmTds].[sys_assembly_types]
(
	[name]  [sysname]  NOT NULL,
	[system_type_id]  [tinyint]  NOT NULL,
	[user_type_id]  [int]  NOT NULL,
	[schema_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[max_length]  [smallint]  NOT NULL,
	[precision]  [tinyint]  NOT NULL,
	[scale]  [tinyint]  NOT NULL,
	[collation_name]  [sysname]  NULL,
	[is_nullable]  [bit]  NULL,
	[is_user_defined]  [bit]  NOT NULL,
	[is_assembly_type]  [bit]  NOT NULL,
	[default_object_id]  [int]  NOT NULL,
	[rule_object_id]  [int]  NOT NULL,
	[assembly_id]  [int]  NOT NULL,
	[assembly_class]  [sysname]  NULL,
	[is_binary_ordered]  [bit]  NULL,
	[is_fixed_length]  [bit]  NULL,
	[prog_id]  [nvarchar](40)  NULL,
	[assembly_qualified_name]  [nvarchar](4000)  NULL,
	[is_table_type]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_assembly_types] PRIMARY KEY CLUSTERED 
	(
		[assembly_id]  ASC,
		[name] ASC
	)
)

/*------ Model [sys].[plan_guides] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_plan_guides]

CREATE TABLE [XrmTds].[sys_plan_guides]
(
	[plan_guide_id]  [int]  NOT NULL,
	[name]  [sysname]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_disabled]  [bit]  NOT NULL,
	[query_text]  [nvarchar](max)  NULL,
	[scope_type]  [tinyint]  NOT NULL,
	[scope_type_desc]  [nvarchar](60)  NULL,
	[scope_object_id]  [int]  NULL,
	[scope_batch]  [nvarchar](max)  NULL,
	[parameters]  [nvarchar](max)  NULL,
	[hints]  [nvarchar](max)  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_plan_guides] PRIMARY KEY CLUSTERED 
	(
		[plan_guide_id] ASC
	)
)

/*------ Model [sys].[sequences] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_sequences]

CREATE TABLE [XrmTds].[sys_sequences]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NOT NULL,
	[is_published]  [bit]  NOT NULL,
	[is_schema_published]  [bit]  NOT NULL,
	[start_value]  [sql_variant]  NOT NULL,
	[increment]  [sql_variant]  NOT NULL,
	[minimum_value]  [sql_variant]  NOT NULL,
	[maximum_value]  [sql_variant]  NOT NULL,
	[is_cycling]  [bit]  NULL,
	[is_cached]  [bit]  NULL,
	[cache_size]  [int]  NULL,
	[system_type_id]  [tinyint]  NOT NULL,
	[user_type_id]  [int]  NOT NULL,
	[precision]  [tinyint]  NOT NULL,
	[scale]  [tinyint]  NULL,
	[current_value]  [sql_variant]  NOT NULL,
	[is_exhausted]  [bit]  NOT NULL,
	[last_used_value]  [sql_variant]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_sequences] PRIMARY KEY CLUSTERED 
	(
		[object_id] ASC
	)
)

/*------ Model [sys].[database_event_sessions] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_database_event_sessions]

CREATE TABLE [XrmTds].[sys_database_event_sessions]
(
	[event_session_id]  [int]  NOT NULL,
	[name]  [sysname]  NULL,
	[event_retention_mode]  [char](1)  NULL,
	[event_retention_mode_desc]  [nvarchar](60)  NULL,
	[max_dispatch_latency]  [int]  NULL,
	[max_memory]  [int]  NULL,
	[max_event_size]  [int]  NULL,
	[memory_partition_mode]  [char](1)  NULL,
	[memory_partition_mode_desc]  [nvarchar](60)  NULL,
	[track_causality]  [bit]  NULL,
	[startup_state]  [bit]  NULL,
	[has_long_running_target]  [bit]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_database_event_sessions] PRIMARY KEY CLUSTERED 
	(
		[event_session_id] ASC
	)
)

/*------ Model [sys].[dm_xe_database_sessions] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_dm_xe_database_sessions]

CREATE TABLE [XrmTds].[sys_dm_xe_database_sessions]
(
	[address]  [varbinary](8)  NOT NULL,
	[name]  [nvarchar](256)  NOT NULL,
	[pending_buffers]  [int]  NOT NULL,
	[total_regular_buffers]  [int]  NOT NULL,
	[regular_buffer_size]  [bigint]  NOT NULL,
	[total_large_buffers]  [int]  NOT NULL,
	[large_buffer_size]  [bigint]  NOT NULL,
	[total_buffer_size]  [bigint]  NOT NULL,
	[buffer_policy_flags]  [int]  NOT NULL,
	[buffer_policy_desc]  [nvarchar](256)  NOT NULL,
	[flags]  [int]  NOT NULL,
	[flag_desc]  [nvarchar](256)  NOT NULL,
	[dropped_event_count]  [int]  NOT NULL,
	[dropped_buffer_count]  [int]  NOT NULL,
	[blocked_event_fire_time]  [int]  NOT NULL,
	[create_time]  [datetime]  NOT NULL,
	[largest_event_dropped_size]  [int]  NOT NULL,
	[session_source]  [nvarchar](256)  NOT NULL,
	[buffer_processed_count]  [bigint]  NOT NULL,
	[buffer_full_count]  [bigint]  NOT NULL,
	[total_bytes_generated]  [bigint]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_dm_xe_database_sessions] PRIMARY KEY CLUSTERED 
	(
		[address] ASC
	)
)

/*------ Model [sys].[fulltext_catalogs] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_fulltext_catalogs]

CREATE TABLE [XrmTds].[sys_fulltext_catalogs]
(
	[fulltext_catalog_id]  [int]  NOT NULL,
	[name]  [sysname]  NOT NULL,
	[path]  [nvarchar](260)  NULL,
	[is_default]  [bit]  NOT NULL,
	[is_accent_sensitivity_on]  [bit]  NOT NULL,
	[data_space_id]  [int]  NULL,
	[file_id]  [int]  NULL,
	[principal_id]  [int]  NULL,
	[is_importing]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_fulltext_catalogs] PRIMARY KEY CLUSTERED 
	(
		[fulltext_catalog_id] ASC
	)
)

/*------ Model [sys].[partition_schemes] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_partition_schemes]

CREATE TABLE [XrmTds].[sys_partition_schemes]
(
	[name]  [sysname]  NOT NULL,
	[data_space_id]  [int]  NOT NULL,
	[type]  [char](2)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[is_default]  [bit]  NULL,
	[is_system]  [bit]  NULL,
	[function_id]  [int]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_partition_schemes] PRIMARY KEY CLUSTERED 
	(
		[data_space_id] ASC,
		[function_id] ASC
	)
)

/*------ Model [sys].[partition_functions] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_partition_functions]

CREATE TABLE [XrmTds].[sys_partition_functions]
(
	[name]  [sysname]  NOT NULL,
	[function_id]  [int]  NOT NULL,
	[type]  [char](2)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[fanout]  [int]  NOT NULL,
	[boundary_value_on_right]  [bit]  NOT NULL,
	[is_system]  [bit]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_partition_functions] PRIMARY KEY CLUSTERED 
	(
		[function_id] ASC
	)
)

/*------ Model [sys].[fulltext_stoplists] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_fulltext_stoplists]

CREATE TABLE [XrmTds].[sys_fulltext_stoplists]
(
	[stoplist_id]  [int]  NOT NULL,
	[name]  [sysname]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[principal_id]  [int]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_fulltext_stoplists] PRIMARY KEY CLUSTERED 
	(
		[stoplist_id] ASC
	)
)

/*------ Model [sys].[database_permissions] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_database_permissions]

CREATE TABLE [XrmTds].[sys_database_permissions]
(
	[class]  [tinyint]  NOT NULL,
	[class_desc]  [nvarchar](60)  NULL,
	[major_id]  [int]  NOT NULL,
	[minor_id]  [int]  NOT NULL,
	[grantee_principal_id]  [int]  NOT NULL,
	[grantor_principal_id]  [int]  NOT NULL,
	[type]  [char](4)  NOT NULL,
	[permission_name]  [nvarchar](128)  NULL,
	[state]  [char](1)  NOT NULL,
	[state_desc]  [nvarchar](60)  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_database_permissions] PRIMARY KEY CLUSTERED 
	(
		[major_id] ASC,
		[minor_id] ASC,
		[grantee_principal_id] ASC,
		[type] ASC
	)
)

/*------ Model [sys].[asymmetric_keys] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_asymmetric_keys]

CREATE TABLE [XrmTds].[sys_asymmetric_keys]
(
	[name]  [sysname]  NOT NULL,
	[principal_id]  [int]  NULL,
	[asymmetric_key_id]  [int]  NOT NULL,
	[pvt_key_encryption_type]  [char](2)  NOT NULL,
	[pvt_key_encryption_type_desc]  [nvarchar](60)  NULL,
	[thumbprint]  [varbinary](64)  NOT NULL,
	[algorithm]  [char](2)  NOT NULL,
	[algorithm_desc]  [nvarchar](60)  NULL,
	[key_length]  [int]  NOT NULL,
	[sid]  [varbinary](85)  NULL,
	[string_sid]  [nvarchar](128)  NULL,
	[public_key]  [varbinary](max)  NOT NULL,
	[attested_by]  [nvarchar](260)  NULL,
	[provider_type]  [nvarchar](60)  NULL,
	[cryptographic_provider_guid]  [uniqueidentifier]  NULL,
	[cryptographic_provider_algid]  [sql_variant]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_asymmetric_keys] PRIMARY KEY CLUSTERED 
	(
		[asymmetric_key_id] ASC
	)
)

/*------ Model [sys].[symmetric_keys] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_symmetric_keys]

CREATE TABLE [XrmTds].[sys_symmetric_keys]
(
	[name]  [sysname]  NOT NULL,
	[principal_id]  [int]  NULL,
	[symmetric_key_id]  [int]  NOT NULL,
	[key_length]  [int]  NOT NULL,
	[key_algorithm]  [char](2)  NOT NULL,
	[algorithm_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[key_guid]  [uniqueidentifier]  NULL,
	[key_thumbprint]  [sql_variant]  NULL,
	[provider_type]  [nvarchar](60)  NULL,
	[cryptographic_provider_guid]  [uniqueidentifier]  NULL,
	[cryptographic_provider_algid]  [sql_variant]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_symmetric_keys] PRIMARY KEY CLUSTERED 
	(
		[symmetric_key_id] ASC
	)
)

/*------ Model [sys].[certificates] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_certificates]

CREATE TABLE [XrmTds].[sys_certificates]
(
	[name]  [sysname]  NOT NULL,
	[certificate_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[pvt_key_encryption_type]  [char](2)  NOT NULL,
	[pvt_key_encryption_type_desc]  [nvarchar](60)  NULL,
	[is_active_for_begin_dialog]  [bit]  NULL,
	[issuer_name]  [nvarchar](442)  NULL,
	[cert_serial_number]  [nvarchar](64)  NULL,
	[sid]  [varbinary](85)  NULL,
	[string_sid]  [nvarchar](128)  NULL,
	[subject]  [nvarchar](4000)  NULL,
	[expiry_date]  [datetime]  NULL,
	[start_date]  [datetime]  NULL,
	[thumbprint]  [varbinary](64)  NOT NULL,
	[attested_by]  [nvarchar](260)  NULL,
	[pvt_key_last_backup_date]  [datetime]  NULL,
	[key_length]  [int]  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_certificates] PRIMARY KEY CLUSTERED 
	(
		[certificate_id] ASC
	)
)

/*------ Model [sys].[security_policies] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_security_policies]

CREATE TABLE [XrmTds].[sys_security_policies]
(
	[name]  [sysname]  NOT NULL,
	[object_id]  [int]  NOT NULL,
	[principal_id]  [int]  NULL,
	[schema_id]  [int]  NOT NULL,
	[parent_object_id]  [int]  NOT NULL,
	[type]  [char](2)  NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[is_ms_shipped]  [bit]  NOT NULL,
	[is_enabled]  [bit]  NOT NULL,
	[is_not_for_replication]  [bit]  NOT NULL,
	[uses_database_collation]  [bit]  NULL,
	[is_schema_bound]  [bit]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_security_policies] PRIMARY KEY CLUSTERED 
	(
		[object_id] ASC
	)
)

/*------ Model [sys].[column_master_keys] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_column_master_keys]

CREATE TABLE [XrmTds].[sys_column_master_keys]
(
	[name]  [sysname]  NOT NULL,
	[column_master_key_id]  [int]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[key_store_provider_name]  [sysname]  NULL,
	[key_path]  [nvarchar](4000)  NULL,
	[allow_enclave_computations]  [int]  NOT NULL,
	[signature]  [varbinary](8000)  NULL
	CONSTRAINT [cndx_PrimaryKey_sys_column_master_keys] PRIMARY KEY CLUSTERED 
	(
		[column_master_key_id] ASC
	)
)

/*------ Model [sys].[column_encryption_keys] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_column_encryption_keys]

CREATE TABLE [XrmTds].[sys_column_encryption_keys]
(
	[name]  [sysname]  NOT NULL,
	[column_encryption_key_id]  [int]  NOT NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL
	CONSTRAINT [cndx_PrimaryKey_sys_column_encryption_keys] PRIMARY KEY CLUSTERED 
	(
		[column_encryption_key_id] ASC
	)
)

/*------ Model [sys].[sql_logins] -------------------*/

DROP TABLE IF EXISTS [XrmTds].[sys_sql_logins]

CREATE TABLE [XrmTds].[sys_sql_logins]
(
	[name]  [sysname]  NOT NULL,
	[principal_id]  [int]  NOT NULL,
	[sid]  [varbinary](85)  NULL,
	[type]  [char](1)  NOT NULL,
	[type_desc]  [nvarchar](60)  NULL,
	[is_disabled]  [bit]  NULL,
	[create_date]  [datetime]  NOT NULL,
	[modify_date]  [datetime]  NOT NULL,
	[default_database_name]  [sysname]  NULL,
	[default_language_name]  [sysname]  NULL,
	[credential_id]  [int]  NULL,
	[owning_principal_id]  [int]  NULL,
	[is_fixed_role]  [bit]  NOT NULL,
	[is_policy_checked] [bit],
	[is_expiration_checked] [bit],
	[password_hash] varbinary(256)
	CONSTRAINT [cndx_PrimaryKey_sys_sql_logins] PRIMARY KEY CLUSTERED 
	(
		[principal_id] ASC
	)
)

/*------ Model [INFORMATION_SCHEMA].[ROUTINES] -------------------*/


DROP TABLE IF EXISTS [XrmTds].[INFORMATION_SCHEMA_ROUTINES]

CREATE TABLE [XrmTds].[INFORMATION_SCHEMA_ROUTINES]
(
	[SPECIFIC_CATALOG]  [nvarchar](128)  NULL, 
	[SPECIFIC_SCHEMA]  [nvarchar](128)  NULL, 
	[SPECIFIC_NAME]  [sysname]  NOT NULL, 
	[ROUTINE_CATALOG]  [nvarchar](128)  NULL, 
	[ROUTINE_SCHEMA]  [nvarchar](128)  NULL, 
	[ROUTINE_NAME]  [sysname]  NOT NULL, 
	[ROUTINE_TYPE]  [nvarchar](20)  NULL DEFAULT 'FUNCTION',
	[MODULE_CATALOG]  [sysname]  NULL DEFAULT NULL,
	[MODULE_SCHEMA]  [sysname]  NULL DEFAULT NULL,
	[MODULE_NAME]  [sysname]  NULL DEFAULT NULL,
	[UDT_CATALOG]  [sysname]  NULL DEFAULT NULL,
	[UDT_SCHEMA]  [sysname]  NULL DEFAULT NULL,
	[UDT_NAME]  [sysname]  NULL DEFAULT NULL,
	[DATA_TYPE]  [sysname]  NULL DEFAULT 'TABLE',
	[CHARACTER_MAXIMUM_LENGTH]  [int]  NULL DEFAULT NULL,
	[CHARACTER_OCTET_LENGTH]  [int]  NULL DEFAULT NULL,
	[COLLATION_CATALOG]  [sysname]  NULL DEFAULT NULL,
	[COLLATION_SCHEMA]  [sysname]  NULL DEFAULT NULL,
	[COLLATION_NAME]  [sysname]  NULL DEFAULT NULL,
	[CHARACTER_SET_CATALOG]  [sysname]  NULL DEFAULT NULL,
	[CHARACTER_SET_SCHEMA]  [sysname]  NULL DEFAULT NULL,
	[CHARACTER_SET_NAME]  [sysname]  NULL DEFAULT NULL,
	[NUMERIC_PRECISION]  [tinyint]  NULL DEFAULT NULL,
	[NUMERIC_PRECISION_RADIX]  [smallint]  NULL DEFAULT NULL,
	[NUMERIC_SCALE]  [int]  NULL DEFAULT NULL,
	[DATETIME_PRECISION]  [smallint]  NULL DEFAULT NULL,
	[INTERVAL_TYPE]  [nvarchar](30)  NULL DEFAULT NULL,
	[INTERVAL_PRECISION]  [smallint]  NULL DEFAULT NULL,
	[TYPE_UDT_CATALOG]  [sysname]  NULL DEFAULT NULL,
	[TYPE_UDT_SCHEMA]  [sysname]  NULL DEFAULT NULL,
	[TYPE_UDT_NAME]  [sysname]  NULL DEFAULT NULL,
	[SCOPE_CATALOG]  [sysname]  NULL DEFAULT NULL,
	[SCOPE_SCHEMA]  [sysname]  NULL DEFAULT NULL,
	[SCOPE_NAME]  [sysname]  NULL DEFAULT NULL,
	[MAXIMUM_CARDINALITY]  [bigint]  NULL DEFAULT NULL,
	[DTD_IDENTIFIER]  [sysname]  NULL DEFAULT NULL,
	[ROUTINE_BODY]  [nvarchar](30)  NULL DEFAULT 'SQL',
	[ROUTINE_DEFINITION]  [nvarchar](4000)  NULL DEFAULT '', 
	[EXTERNAL_NAME]  [sysname]  NULL DEFAULT NULL,
	[EXTERNAL_LANGUAGE]  [nvarchar](30)  NULL DEFAULT NULL,
	[PARAMETER_STYLE]  [nvarchar](30)  NULL DEFAULT NULL,
	[IS_DETERMINISTIC]  [nvarchar](10)  NULL DEFAULT 'NO', 
	[SQL_DATA_ACCESS]  [nvarchar](30)  NULL DEFAULT 'READS', 
	[IS_NULL_CALL]  [nvarchar](10)  NULL DEFAULT 'NO', 
	[SQL_PATH]  [sysname]  NULL DEFAULT NULL,
	[SCHEMA_LEVEL_ROUTINE]  [nvarchar](10)  NULL DEFAULT 'YES',
	[MAX_DYNAMIC_RESULT_SETS]  [smallint]  NULL DEFAULT 0, 
	[IS_USER_DEFINED_CAST]  [nvarchar](10)  NULL DEFAULT 'NO',
	[IS_IMPLICITLY_INVOCABLE]  [nvarchar](10)  NULL DEFAULT 'NO',
	[CREATED]  [datetime]  NOT NULL DEFAULT GETUTCDATE(),
	[LAST_ALTERED]  [datetime]  NOT NULL DEFAULT GETUTCDATE()
	CONSTRAINT [cndx_PrimaryKey_INFORMATION_SCHEMA_ROUTINES] PRIMARY KEY CLUSTERED 
	(
		[ROUTINE_NAME]  ASC
	)
)



/*------ Model [INFORMATION_SCHEMA].[TABLES] -------------------*/


DROP TABLE IF EXISTS [XrmTds].[INFORMATION_SCHEMA_TABLES]

CREATE TABLE [XrmTds].[INFORMATION_SCHEMA_TABLES]
(
	[TABLE_CATALOG]  [nvarchar](160)  NULL, 	-- TODO: Revisit this data type name as the name in the OrganizationBase table in CDS is bigger length(160) than sysname which is nvarchar(128).
	[TABLE_SCHEMA]  [sysname]  NULL, 
	[TABLE_NAME]  [sysname]  NOT NULL, 
	[TABLE_TYPE]  [varchar](10)  NULL,
	[EntityId] [uniqueidentifier] NOT NULL
)

CREATE CLUSTERED INDEX [cndx_INFORMATION_SCHEMA_TABLES] ON [XrmTds].[INFORMATION_SCHEMA_TABLES]([TABLE_NAME] ASC);

/**********************************************************************************************
					ALL TABLE DEFINITIONS SHOULD GO ABOVE THIS COMMENT.
				PLEASE DO NOT ADD ANY NEW TABLE DEFINITIONS BELOW THIS COMMENT.
***********************************************************************************************
  Below script will grant the CRMReaderRole SELECT access to all the tables in XrmTds schema
**********************************************************************************************/

-- Validate if the schema exists
IF(SCHEMA_ID('XrmTds') IS NOT NULL)
BEGIN
	-- Validate if the CRMReaderRole exists in the database
	IF EXISTS(SELECT TOP 1 * FROM sys.sysusers WHERE issqlrole = 1 AND name = 'CRMReaderRole')
	BEGIN
		-- Grant SELECT permissions on the tables in XrmTds Schema to CRMReaderRole		
		DECLARE @tableName NVARCHAR(128)
		DECLARE c CURSOR LOCAL FOR SELECT TABLE_NAME 
		FROM [INFORMATION_SCHEMA].[TABLES] WHERE TABLE_TYPE = 'BASE TABLE'
		AND TABLE_SCHEMA = 'XrmTds'
		OPEN c FETCH c INTO @tableName
		WHILE @@fetch_status = 0
		BEGIN
			EXECUTE ('GRANT SELECT ON [XrmTds].[' + @tableName + '] TO CRMReaderRole')
			FETCH c INTO @tableName
		END
		CLOSE c
		DEALLOCATE c		
	END
END

END