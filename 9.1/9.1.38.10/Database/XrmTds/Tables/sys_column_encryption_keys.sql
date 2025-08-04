CREATE TABLE [XrmTds].[sys_column_encryption_keys] (
    [name]                     [sysname] NOT NULL,
    [column_encryption_key_id] INT       NOT NULL,
    [create_date]              DATETIME  NOT NULL,
    [modify_date]              DATETIME  NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_column_encryption_keys] PRIMARY KEY CLUSTERED ([column_encryption_key_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_column_encryption_keys] TO [CRMReaderRole]
    AS [dbo];

