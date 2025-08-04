CREATE TABLE [XrmTds].[sys_triggers] (
    [name]                   [sysname]     NOT NULL,
    [object_id]              INT           NOT NULL,
    [parent_class]           TINYINT       NOT NULL,
    [parent_class_desc]      NVARCHAR (60) NULL,
    [parent_id]              INT           NOT NULL,
    [type]                   CHAR (2)      NOT NULL,
    [type_desc]              NVARCHAR (60) NULL,
    [create_date]            DATETIME      NOT NULL,
    [modify_date]            DATETIME      NOT NULL,
    [is_ms_shipped]          BIT           NOT NULL,
    [is_disabled]            BIT           NOT NULL,
    [is_not_for_replication] BIT           NOT NULL,
    [is_instead_of_trigger]  BIT           NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_triggers] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_triggers] TO [CRMReaderRole]
    AS [dbo];

