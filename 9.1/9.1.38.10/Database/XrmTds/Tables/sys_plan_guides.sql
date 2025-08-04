CREATE TABLE [XrmTds].[sys_plan_guides] (
    [plan_guide_id]   INT            NOT NULL,
    [name]            [sysname]      NOT NULL,
    [create_date]     DATETIME       NOT NULL,
    [modify_date]     DATETIME       NOT NULL,
    [is_disabled]     BIT            NOT NULL,
    [query_text]      NVARCHAR (MAX) NULL,
    [scope_type]      TINYINT        NOT NULL,
    [scope_type_desc] NVARCHAR (60)  NULL,
    [scope_object_id] INT            NULL,
    [scope_batch]     NVARCHAR (MAX) NULL,
    [parameters]      NVARCHAR (MAX) NULL,
    [hints]           NVARCHAR (MAX) NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_plan_guides] PRIMARY KEY CLUSTERED ([plan_guide_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_plan_guides] TO [CRMReaderRole]
    AS [dbo];

