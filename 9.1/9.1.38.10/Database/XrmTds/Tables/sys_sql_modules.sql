CREATE TABLE [XrmTds].[sys_sql_modules] (
    [object_id]               INT            NOT NULL,
    [definition]              NVARCHAR (MAX) NULL,
    [uses_ansi_nulls]         BIT            NULL,
    [uses_quoted_identifier]  BIT            NULL,
    [is_schema_bound]         BIT            NULL,
    [uses_database_collation] BIT            NULL,
    [is_recompiled]           BIT            NULL,
    [null_on_null_input]      BIT            NULL,
    [execute_as_principal_id] INT            NULL,
    [uses_native_compilation] BIT            NULL,
    [inline_type]             BIT            NULL,
    [is_inlineable]           BIT            NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_sql_modules] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_sql_modules] TO [CRMReaderRole]
    AS [dbo];

