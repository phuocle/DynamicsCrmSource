CREATE TABLE [XrmTds].[sys_all_columns] (
    [object_id]                           INT              NOT NULL,
    [name]                                [sysname]        NULL,
    [column_id]                           INT              NOT NULL,
    [system_type_id]                      INT              NOT NULL,
    [user_type_id]                        INT              NOT NULL,
    [max_length]                          INT              NOT NULL,
    [precision]                           TINYINT          NOT NULL,
    [scale]                               INT              NOT NULL,
    [collation_name]                      [sysname]        NULL,
    [is_nullable]                         BIT              NULL,
    [is_ansi_padded]                      BIT              DEFAULT ((0)) NOT NULL,
    [is_rowguidcol]                       BIT              DEFAULT ((0)) NOT NULL,
    [is_identity]                         BIT              NOT NULL,
    [is_computed]                         BIT              NOT NULL,
    [is_filestream]                       BIT              DEFAULT ((0)) NOT NULL,
    [is_replicated]                       BIT              DEFAULT ((0)) NULL,
    [is_non_sql_subscribed]               BIT              DEFAULT ((0)) NULL,
    [is_merge_published]                  BIT              DEFAULT ((0)) NULL,
    [is_dts_replicated]                   BIT              DEFAULT ((0)) NULL,
    [is_xml_document]                     BIT              DEFAULT ((0)) NOT NULL,
    [xml_collection_id]                   INT              DEFAULT ((0)) NOT NULL,
    [default_object_id]                   INT              NOT NULL,
    [rule_object_id]                      INT              DEFAULT ((0)) NOT NULL,
    [is_sparse]                           BIT              DEFAULT ((0)) NULL,
    [is_column_set]                       BIT              DEFAULT ((0)) NULL,
    [generated_always_type]               TINYINT          DEFAULT ((0)) NULL,
    [generated_always_type_desc]          NVARCHAR (60)    DEFAULT ('NOT_APPLICABLE') NULL,
    [encryption_type]                     INT              NULL,
    [encryption_type_desc]                NVARCHAR (64)    NULL,
    [encryption_algorithm_name]           [sysname]        NULL,
    [column_encryption_key_id]            INT              NULL,
    [column_encryption_key_database_name] [sysname]        NULL,
    [is_hidden]                           BIT              DEFAULT ((0)) NULL,
    [is_masked]                           BIT              DEFAULT ((0)) NOT NULL,
    [graph_type]                          INT              DEFAULT ((0)) NULL,
    [graph_type_desc]                     NVARCHAR (60)    DEFAULT ('NOT_APPLICABLE') NULL,
    [AttributeId]                         UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_all_columns]
    ON [XrmTds].[sys_all_columns]([object_id] ASC, [column_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_all_columns] TO [CRMReaderRole]
    AS [dbo];

