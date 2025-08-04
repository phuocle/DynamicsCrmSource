CREATE TABLE [XrmTds].[sys_types] (
    [name]              NVARCHAR (255)   NOT NULL,
    [system_type_id]    INT              NOT NULL,
    [user_type_id]      INT              NOT NULL,
    [schema_id]         INT              NOT NULL,
    [principal_id]      INT              DEFAULT (NULL) NULL,
    [max_length]        SMALLINT         DEFAULT ((0)) NOT NULL,
    [precision]         TINYINT          DEFAULT ((0)) NOT NULL,
    [scale]             TINYINT          DEFAULT ((0)) NOT NULL,
    [collation_name]    [sysname]        DEFAULT (NULL) NULL,
    [is_nullable]       BIT              DEFAULT ((1)) NULL,
    [is_user_defined]   BIT              NOT NULL,
    [is_assembly_type]  BIT              DEFAULT ((0)) NOT NULL,
    [default_object_id] INT              DEFAULT ((0)) NOT NULL,
    [rule_object_id]    INT              DEFAULT ((0)) NOT NULL,
    [is_table_type]     BIT              DEFAULT ((0)) NOT NULL,
    [AttributeTypeId]   UNIQUEIDENTIFIER NOT NULL
);


GO
CREATE CLUSTERED INDEX [cndx_sys_types]
    ON [XrmTds].[sys_types]([user_type_id] ASC);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_types] TO [CRMReaderRole]
    AS [dbo];

