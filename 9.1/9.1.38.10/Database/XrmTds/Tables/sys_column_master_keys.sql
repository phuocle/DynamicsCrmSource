CREATE TABLE [XrmTds].[sys_column_master_keys] (
    [name]                       [sysname]        NOT NULL,
    [column_master_key_id]       INT              NOT NULL,
    [create_date]                DATETIME         NOT NULL,
    [modify_date]                DATETIME         NOT NULL,
    [key_store_provider_name]    [sysname]        NULL,
    [key_path]                   NVARCHAR (4000)  NULL,
    [allow_enclave_computations] INT              NOT NULL,
    [signature]                  VARBINARY (8000) NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_column_master_keys] PRIMARY KEY CLUSTERED ([column_master_key_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_column_master_keys] TO [CRMReaderRole]
    AS [dbo];

