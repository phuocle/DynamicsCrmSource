CREATE TABLE [XrmTds].[sys_tables] (
    [name]                               [sysname]        NOT NULL,
    [object_id]                          INT              NOT NULL,
    [principal_id]                       INT              DEFAULT (NULL) NULL,
    [schema_id]                          INT              NOT NULL,
    [parent_object_id]                   INT              DEFAULT ((0)) NOT NULL,
    [type]                               CHAR (2)         NULL,
    [type_desc]                          NVARCHAR (60)    NULL,
    [create_date]                        DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [modify_date]                        DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [is_ms_shipped]                      BIT              DEFAULT ((0)) NOT NULL,
    [is_published]                       BIT              DEFAULT ((0)) NOT NULL,
    [is_schema_published]                BIT              DEFAULT ((0)) NOT NULL,
    [lob_data_space_id]                  INT              DEFAULT ((1)) NOT NULL,
    [filestream_data_space_id]           INT              DEFAULT (NULL) NULL,
    [max_column_id_used]                 INT              DEFAULT ((0)) NOT NULL,
    [lock_on_bulk_load]                  BIT              DEFAULT ((0)) NOT NULL,
    [uses_ansi_nulls]                    BIT              DEFAULT ((1)) NULL,
    [is_replicated]                      BIT              DEFAULT ((0)) NULL,
    [has_replication_filter]             BIT              DEFAULT ((0)) NULL,
    [is_merge_published]                 BIT              DEFAULT ((0)) NULL,
    [is_sync_tran_subscribed]            BIT              DEFAULT ((0)) NULL,
    [has_unchecked_assembly_data]        BIT              DEFAULT ((0)) NOT NULL,
    [text_in_row_limit]                  INT              DEFAULT ((0)) NULL,
    [large_value_types_out_of_row]       BIT              DEFAULT ((0)) NULL,
    [is_tracked_by_cdc]                  BIT              DEFAULT ((0)) NULL,
    [lock_escalation]                    TINYINT          DEFAULT ((0)) NULL,
    [lock_escalation_desc]               NVARCHAR (60)    DEFAULT ('TABLE') NULL,
    [is_filetable]                       BIT              DEFAULT ((0)) NULL,
    [is_memory_optimized]                BIT              DEFAULT ((0)) NULL,
    [durability]                         TINYINT          DEFAULT ((0)) NULL,
    [durability_desc]                    NVARCHAR (60)    DEFAULT ('SCHEMA_AND_DATA') NULL,
    [temporal_type]                      TINYINT          DEFAULT ((0)) NULL,
    [temporal_type_desc]                 NVARCHAR (60)    DEFAULT ('NON_TEMPORAL_TABLE') NULL,
    [history_table_id]                   INT              DEFAULT (NULL) NULL,
    [is_remote_data_archive_enabled]     BIT              DEFAULT ((0)) NULL,
    [is_external]                        BIT              DEFAULT ((0)) NOT NULL,
    [history_retention_period]           INT              NULL,
    [history_retention_period_unit]      INT              NULL,
    [history_retention_period_unit_desc] NVARCHAR (10)    NULL,
    [is_node]                            BIT              DEFAULT ((0)) NULL,
    [is_edge]                            BIT              DEFAULT ((0)) NULL,
    [EntityId]                           UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_tables]
    ON [XrmTds].[sys_tables]([object_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_tables] TO [CRMReaderRole]
    AS [dbo];

