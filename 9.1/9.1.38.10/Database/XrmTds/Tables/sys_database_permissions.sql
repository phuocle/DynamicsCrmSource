CREATE TABLE [XrmTds].[sys_database_permissions] (
    [class]                TINYINT        NOT NULL,
    [class_desc]           NVARCHAR (60)  NULL,
    [major_id]             INT            NOT NULL,
    [minor_id]             INT            NOT NULL,
    [grantee_principal_id] INT            NOT NULL,
    [grantor_principal_id] INT            NOT NULL,
    [type]                 CHAR (4)       NOT NULL,
    [permission_name]      NVARCHAR (128) NULL,
    [state]                CHAR (1)       NOT NULL,
    [state_desc]           NVARCHAR (60)  NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_database_permissions] PRIMARY KEY CLUSTERED ([major_id] ASC, [minor_id] ASC, [grantee_principal_id] ASC, [type] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_database_permissions] TO [CRMReaderRole]
    AS [dbo];

