CREATE TABLE [XrmTds].[sys_assembly_types] (
    [name]                    [sysname]       NOT NULL,
    [system_type_id]          TINYINT         NOT NULL,
    [user_type_id]            INT             NOT NULL,
    [schema_id]               INT             NOT NULL,
    [principal_id]            INT             NULL,
    [max_length]              SMALLINT        NOT NULL,
    [precision]               TINYINT         NOT NULL,
    [scale]                   TINYINT         NOT NULL,
    [collation_name]          [sysname]       NULL,
    [is_nullable]             BIT             NULL,
    [is_user_defined]         BIT             NOT NULL,
    [is_assembly_type]        BIT             NOT NULL,
    [default_object_id]       INT             NOT NULL,
    [rule_object_id]          INT             NOT NULL,
    [assembly_id]             INT             NOT NULL,
    [assembly_class]          [sysname]       NULL,
    [is_binary_ordered]       BIT             NULL,
    [is_fixed_length]         BIT             NULL,
    [prog_id]                 NVARCHAR (40)   NULL,
    [assembly_qualified_name] NVARCHAR (4000) NULL,
    [is_table_type]           BIT             NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_assembly_types] PRIMARY KEY CLUSTERED ([assembly_id] ASC, [name] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_assembly_types] TO [CRMReaderRole]
    AS [dbo];

