CREATE TABLE [XrmTds].[sys_stats] (
    [object_id]                    INT            NOT NULL,
    [name]                         NVARCHAR (128) NULL,
    [stats_id]                     INT            NOT NULL,
    [auto_created]                 BIT            NULL,
    [user_created]                 BIT            NULL,
    [no_recompute]                 BIT            NULL,
    [has_filter]                   BIT            NULL,
    [filter_definition]            NVARCHAR (MAX) NULL,
    [is_temporary]                 BIT            NULL,
    [is_incremental]               BIT            NULL,
    [has_persisted_sample]         BIT            NULL,
    [stats_generation_method]      INT            NOT NULL,
    [stats_generation_method_desc] VARCHAR (40)   NOT NULL,
    [auto_drop]                    BIT            NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_stats] PRIMARY KEY CLUSTERED ([object_id] ASC, [stats_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_stats] TO [CRMReaderRole]
    AS [dbo];

