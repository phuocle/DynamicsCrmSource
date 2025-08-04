CREATE TABLE [XrmTds].[sys_table_types] (
    [name]                 [sysname] NOT NULL,
    [system_type_id]       TINYINT   NOT NULL,
    [user_type_id]         INT       NOT NULL,
    [schema_id]            INT       NOT NULL,
    [principal_id]         INT       NULL,
    [max_length]           SMALLINT  NOT NULL,
    [precision]            TINYINT   NOT NULL,
    [scale]                TINYINT   NOT NULL,
    [collation_name]       [sysname] NULL,
    [is_nullable]          BIT       NULL,
    [is_user_defined]      BIT       NOT NULL,
    [is_assembly_type]     BIT       NOT NULL,
    [default_object_id]    INT       NOT NULL,
    [rule_object_id]       INT       NOT NULL,
    [is_table_type]        BIT       NOT NULL,
    [type_table_object_id] INT       NOT NULL,
    [is_memory_optimized]  BIT       NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_table_types] PRIMARY KEY CLUSTERED ([type_table_object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_table_types] TO [CRMReaderRole]
    AS [dbo];

