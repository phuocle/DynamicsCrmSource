CREATE TABLE [XrmTds].[sys_security_policies] (
    [name]                    [sysname]     NOT NULL,
    [object_id]               INT           NOT NULL,
    [principal_id]            INT           NULL,
    [schema_id]               INT           NOT NULL,
    [parent_object_id]        INT           NOT NULL,
    [type]                    CHAR (2)      NULL,
    [type_desc]               NVARCHAR (60) NULL,
    [create_date]             DATETIME      NOT NULL,
    [modify_date]             DATETIME      NOT NULL,
    [is_ms_shipped]           BIT           NOT NULL,
    [is_enabled]              BIT           NOT NULL,
    [is_not_for_replication]  BIT           NOT NULL,
    [uses_database_collation] BIT           NULL,
    [is_schema_bound]         BIT           NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_security_policies] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_security_policies] TO [CRMReaderRole]
    AS [dbo];

