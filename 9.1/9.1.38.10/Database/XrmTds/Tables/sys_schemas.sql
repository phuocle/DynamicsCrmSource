CREATE TABLE [XrmTds].[sys_schemas] (
    [name]         [sysname] NOT NULL,
    [schema_id]    INT       NOT NULL,
    [principal_id] INT       NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_schemas] PRIMARY KEY CLUSTERED ([schema_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_schemas] TO [CRMReaderRole]
    AS [dbo];

