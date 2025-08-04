CREATE TABLE [XrmTds].[sys_symmetric_keys] (
    [name]                         [sysname]        NOT NULL,
    [principal_id]                 INT              NULL,
    [symmetric_key_id]             INT              NOT NULL,
    [key_length]                   INT              NOT NULL,
    [key_algorithm]                CHAR (2)         NOT NULL,
    [algorithm_desc]               NVARCHAR (60)    NULL,
    [create_date]                  DATETIME         NOT NULL,
    [modify_date]                  DATETIME         NOT NULL,
    [key_guid]                     UNIQUEIDENTIFIER NULL,
    [key_thumbprint]               SQL_VARIANT      NULL,
    [provider_type]                NVARCHAR (60)    NULL,
    [cryptographic_provider_guid]  UNIQUEIDENTIFIER NULL,
    [cryptographic_provider_algid] SQL_VARIANT      NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_symmetric_keys] PRIMARY KEY CLUSTERED ([symmetric_key_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_symmetric_keys] TO [CRMReaderRole]
    AS [dbo];

