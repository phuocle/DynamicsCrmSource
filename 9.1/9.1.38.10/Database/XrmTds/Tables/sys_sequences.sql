CREATE TABLE [XrmTds].[sys_sequences] (
    [name]                [sysname]     NOT NULL,
    [object_id]           INT           NOT NULL,
    [principal_id]        INT           NULL,
    [schema_id]           INT           NOT NULL,
    [parent_object_id]    INT           NOT NULL,
    [type]                CHAR (2)      NULL,
    [type_desc]           NVARCHAR (60) NULL,
    [create_date]         DATETIME      NOT NULL,
    [modify_date]         DATETIME      NOT NULL,
    [is_ms_shipped]       BIT           NOT NULL,
    [is_published]        BIT           NOT NULL,
    [is_schema_published] BIT           NOT NULL,
    [start_value]         SQL_VARIANT   NOT NULL,
    [increment]           SQL_VARIANT   NOT NULL,
    [minimum_value]       SQL_VARIANT   NOT NULL,
    [maximum_value]       SQL_VARIANT   NOT NULL,
    [is_cycling]          BIT           NULL,
    [is_cached]           BIT           NULL,
    [cache_size]          INT           NULL,
    [system_type_id]      TINYINT       NOT NULL,
    [user_type_id]        INT           NOT NULL,
    [precision]           TINYINT       NOT NULL,
    [scale]               TINYINT       NULL,
    [current_value]       SQL_VARIANT   NOT NULL,
    [is_exhausted]        BIT           NOT NULL,
    [last_used_value]     SQL_VARIANT   NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_sequences] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_sequences] TO [CRMReaderRole]
    AS [dbo];

