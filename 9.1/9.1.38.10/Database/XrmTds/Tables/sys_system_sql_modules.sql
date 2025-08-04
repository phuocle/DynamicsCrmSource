CREATE TABLE [XrmTds].[sys_system_sql_modules] (
    [object_id]               INT            NOT NULL,
    [definition]              NVARCHAR (MAX) NULL,
    [uses_ansi_nulls]         BIT            NOT NULL,
    [uses_quoted_identifier]  BIT            NOT NULL,
    [is_schema_bound]         BIT            NOT NULL,
    [uses_database_collation] BIT            NOT NULL,
    [is_recompiled]           BIT            NOT NULL,
    [null_on_null_input]      BIT            NOT NULL,
    [execute_as_principal_id] INT            NULL,
    [uses_native_compilation] BIT            NOT NULL,
    [inline_type]             BIT            NOT NULL,
    [is_inlineable]           BIT            NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_system_sql_modules] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_system_sql_modules] TO [CRMReaderRole]
    AS [dbo];

