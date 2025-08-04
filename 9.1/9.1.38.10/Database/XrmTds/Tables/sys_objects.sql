CREATE TABLE [XrmTds].[sys_objects] (
    [name]                [sysname]        NOT NULL,
    [object_id]           INT              NOT NULL,
    [principal_id]        INT              DEFAULT (NULL) NULL,
    [schema_id]           INT              NOT NULL,
    [parent_object_id]    INT              NOT NULL,
    [type]                CHAR (2)         NULL,
    [type_desc]           NVARCHAR (60)    NULL,
    [create_date]         DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [modify_date]         DATETIME         DEFAULT (getutcdate()) NOT NULL,
    [is_ms_shipped]       BIT              DEFAULT ((0)) NOT NULL,
    [is_published]        BIT              DEFAULT ((0)) NOT NULL,
    [is_schema_published] BIT              DEFAULT ((0)) NOT NULL,
    [ObjectId]            UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_objects]
    ON [XrmTds].[sys_objects]([object_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_objects] TO [CRMReaderRole]
    AS [dbo];

