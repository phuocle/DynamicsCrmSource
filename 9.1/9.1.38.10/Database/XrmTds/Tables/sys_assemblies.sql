CREATE TABLE [XrmTds].[sys_assemblies] (
    [name]                [sysname]       NOT NULL,
    [principal_id]        INT             NULL,
    [assembly_id]         INT             NOT NULL,
    [clr_name]            NVARCHAR (4000) NULL,
    [permission_set]      TINYINT         NULL,
    [permission_set_desc] NVARCHAR (60)   NULL,
    [is_visible]          BIT             NOT NULL,
    [create_date]         DATETIME        NOT NULL,
    [modify_date]         DATETIME        NOT NULL,
    [is_user_defined]     BIT             NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_assemblies] PRIMARY KEY CLUSTERED ([assembly_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_assemblies] TO [CRMReaderRole]
    AS [dbo];

