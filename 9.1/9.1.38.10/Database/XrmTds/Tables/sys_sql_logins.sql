CREATE TABLE [XrmTds].[sys_sql_logins] (
    [name]                  [sysname]       NOT NULL,
    [principal_id]          INT             NOT NULL,
    [sid]                   VARBINARY (85)  NULL,
    [type]                  CHAR (1)        NOT NULL,
    [type_desc]             NVARCHAR (60)   NULL,
    [is_disabled]           BIT             NULL,
    [create_date]           DATETIME        NOT NULL,
    [modify_date]           DATETIME        NOT NULL,
    [default_database_name] [sysname]       NULL,
    [default_language_name] [sysname]       NULL,
    [credential_id]         INT             NULL,
    [owning_principal_id]   INT             NULL,
    [is_fixed_role]         BIT             NOT NULL,
    [is_policy_checked]     BIT             NULL,
    [is_expiration_checked] BIT             NULL,
    [password_hash]         VARBINARY (256) NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_sql_logins] PRIMARY KEY CLUSTERED ([principal_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_sql_logins] TO [CRMReaderRole]
    AS [dbo];

