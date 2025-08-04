CREATE TABLE [XrmTds].[sys_synonyms] (
    [name]                [sysname]       NOT NULL,
    [object_id]           INT             NOT NULL,
    [principal_id]        INT             NULL,
    [schema_id]           INT             NOT NULL,
    [parent_object_id]    INT             NOT NULL,
    [type]                CHAR (2)        NULL,
    [type_desc]           NVARCHAR (60)   NULL,
    [create_date]         DATETIME        NOT NULL,
    [modify_date]         DATETIME        NOT NULL,
    [is_ms_shipped]       BIT             NOT NULL,
    [is_published]        BIT             NOT NULL,
    [is_schema_published] BIT             NOT NULL,
    [base_object_name]    NVARCHAR (1035) NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_synonyms] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_synonyms] TO [CRMReaderRole]
    AS [dbo];

