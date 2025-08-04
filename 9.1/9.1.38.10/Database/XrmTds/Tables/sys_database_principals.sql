CREATE TABLE [XrmTds].[sys_database_principals] (
    [name]                                [sysname]      NOT NULL,
    [principal_id]                        INT            NOT NULL,
    [type]                                CHAR (1)       NOT NULL,
    [type_desc]                           NVARCHAR (60)  NULL,
    [default_schema_name]                 [sysname]      NULL,
    [create_date]                         DATETIME       NOT NULL,
    [modify_date]                         DATETIME       NOT NULL,
    [owning_principal_id]                 INT            NULL,
    [sid]                                 VARBINARY (85) NULL,
    [is_fixed_role]                       BIT            NOT NULL,
    [authentication_type]                 INT            NOT NULL,
    [authentication_type_desc]            NVARCHAR (60)  NULL,
    [default_language_name]               [sysname]      NULL,
    [default_language_lcid]               INT            NULL,
    [allow_encrypted_value_modifications] BIT            NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_database_principals] PRIMARY KEY CLUSTERED ([principal_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_database_principals] TO [CRMReaderRole]
    AS [dbo];

