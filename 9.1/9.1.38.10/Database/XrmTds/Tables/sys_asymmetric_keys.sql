CREATE TABLE [XrmTds].[sys_asymmetric_keys] (
    [name]                         [sysname]        NOT NULL,
    [principal_id]                 INT              NULL,
    [asymmetric_key_id]            INT              NOT NULL,
    [pvt_key_encryption_type]      CHAR (2)         NOT NULL,
    [pvt_key_encryption_type_desc] NVARCHAR (60)    NULL,
    [thumbprint]                   VARBINARY (64)   NOT NULL,
    [algorithm]                    CHAR (2)         NOT NULL,
    [algorithm_desc]               NVARCHAR (60)    NULL,
    [key_length]                   INT              NOT NULL,
    [sid]                          VARBINARY (85)   NULL,
    [string_sid]                   NVARCHAR (128)   NULL,
    [public_key]                   VARBINARY (MAX)  NOT NULL,
    [attested_by]                  NVARCHAR (260)   NULL,
    [provider_type]                NVARCHAR (60)    NULL,
    [cryptographic_provider_guid]  UNIQUEIDENTIFIER NULL,
    [cryptographic_provider_algid] SQL_VARIANT      NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_asymmetric_keys] PRIMARY KEY CLUSTERED ([asymmetric_key_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_asymmetric_keys] TO [CRMReaderRole]
    AS [dbo];

