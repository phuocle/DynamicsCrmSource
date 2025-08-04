CREATE TABLE [XrmTds].[sys_certificates] (
    [name]                         [sysname]       NOT NULL,
    [certificate_id]               INT             NOT NULL,
    [principal_id]                 INT             NULL,
    [pvt_key_encryption_type]      CHAR (2)        NOT NULL,
    [pvt_key_encryption_type_desc] NVARCHAR (60)   NULL,
    [is_active_for_begin_dialog]   BIT             NULL,
    [issuer_name]                  NVARCHAR (442)  NULL,
    [cert_serial_number]           NVARCHAR (64)   NULL,
    [sid]                          VARBINARY (85)  NULL,
    [string_sid]                   NVARCHAR (128)  NULL,
    [subject]                      NVARCHAR (4000) NULL,
    [expiry_date]                  DATETIME        NULL,
    [start_date]                   DATETIME        NULL,
    [thumbprint]                   VARBINARY (64)  NOT NULL,
    [attested_by]                  NVARCHAR (260)  NULL,
    [pvt_key_last_backup_date]     DATETIME        NULL,
    [key_length]                   INT             NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_certificates] PRIMARY KEY CLUSTERED ([certificate_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_certificates] TO [CRMReaderRole]
    AS [dbo];

