CREATE TABLE [XrmTds].[sys_computed_columns] (
    [object_id]                           INT            NOT NULL,
    [name]                                [sysname]      NULL,
    [column_id]                           INT            NOT NULL,
    [system_type_id]                      TINYINT        NOT NULL,
    [user_type_id]                        INT            NOT NULL,
    [max_length]                          SMALLINT       NOT NULL,
    [precision]                           TINYINT        NOT NULL,
    [scale]                               TINYINT        NOT NULL,
    [collation_name]                      [sysname]      DEFAULT (NULL) NULL,
    [is_nullable]                         BIT            NULL,
    [is_ansi_padded]                      BIT            DEFAULT ((0)) NOT NULL,
    [is_rowguidcol]                       BIT            DEFAULT ((0)) NOT NULL,
    [is_identity]                         BIT            DEFAULT ((0)) NOT NULL,
    [is_filestream]                       BIT            DEFAULT ((0)) NOT NULL,
    [is_replicated]                       BIT            DEFAULT ((0)) NULL,
    [is_non_sql_subscribed]               BIT            DEFAULT ((0)) NULL,
    [is_merge_published]                  BIT            DEFAULT ((0)) NULL,
    [is_dts_replicated]                   BIT            DEFAULT ((0)) NULL,
    [is_xml_document]                     BIT            DEFAULT ((0)) NOT NULL,
    [xml_collection_id]                   INT            DEFAULT ((0)) NOT NULL,
    [default_object_id]                   INT            DEFAULT ((0)) NOT NULL,
    [rule_object_id]                      INT            DEFAULT ((0)) NOT NULL,
    [definition]                          NVARCHAR (MAX) DEFAULT (NULL) NULL,
    [uses_database_collation]             BIT            DEFAULT ((1)) NOT NULL,
    [is_persisted]                        BIT            DEFAULT ((0)) NOT NULL,
    [is_computed]                         BIT            DEFAULT ((1)) NOT NULL,
    [is_sparse]                           BIT            DEFAULT ((0)) NOT NULL,
    [is_column_set]                       BIT            DEFAULT ((0)) NOT NULL,
    [generated_always_type]               TINYINT        DEFAULT ((0)) NULL,
    [generated_always_type_desc]          NVARCHAR (60)  DEFAULT ('NOT_APPLICABLE') NULL,
    [encryption_type]                     INT            DEFAULT (NULL) NULL,
    [encryption_type_desc]                NVARCHAR (64)  DEFAULT (NULL) NULL,
    [encryption_algorithm_name]           NVARCHAR (128) DEFAULT (NULL) NULL,
    [column_encryption_key_id]            INT            DEFAULT (NULL) NULL,
    [column_encryption_key_database_name] [sysname]      DEFAULT (NULL) NULL,
    [is_hidden]                           BIT            DEFAULT ((0)) NOT NULL,
    [is_masked]                           BIT            DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_computed_columns] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_computed_columns] TO [CRMReaderRole]
    AS [dbo];

