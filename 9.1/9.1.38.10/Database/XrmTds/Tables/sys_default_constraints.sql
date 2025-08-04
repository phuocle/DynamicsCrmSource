CREATE TABLE [XrmTds].[sys_default_constraints] (
    [name]                [sysname]      NOT NULL,
    [object_id]           INT            NOT NULL,
    [principal_id]        INT            DEFAULT (NULL) NULL,
    [schema_id]           INT            NOT NULL,
    [parent_object_id]    INT            DEFAULT ((-1)) NOT NULL,
    [type]                CHAR (2)       DEFAULT ('D') NULL,
    [type_desc]           NVARCHAR (60)  DEFAULT ('DEFAULT_CONSTRAINT') NULL,
    [create_date]         DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [modify_date]         DATETIME       DEFAULT (getutcdate()) NOT NULL,
    [is_ms_shipped]       BIT            DEFAULT ((0)) NOT NULL,
    [is_published]        BIT            DEFAULT ((0)) NOT NULL,
    [is_schema_published] BIT            DEFAULT ((0)) NOT NULL,
    [parent_column_id]    INT            DEFAULT ((-1)) NOT NULL,
    [definition]          NVARCHAR (MAX) DEFAULT (NULL) NULL,
    [is_system_named]     BIT            DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_default_constraints] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_default_constraints] TO [CRMReaderRole]
    AS [dbo];

