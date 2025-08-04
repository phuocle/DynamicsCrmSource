CREATE TABLE [XrmTds].[sys_all_views] (
    [name]                        [sysname]     NOT NULL,
    [object_id]                   INT           NOT NULL,
    [principal_id]                INT           NULL,
    [schema_id]                   INT           NOT NULL,
    [parent_object_id]            INT           NOT NULL,
    [type]                        CHAR (2)      NOT NULL,
    [type_desc]                   NVARCHAR (60) NULL,
    [create_date]                 DATETIME      NOT NULL,
    [modify_date]                 DATETIME      NOT NULL,
    [is_ms_shipped]               BIT           NULL,
    [is_published]                BIT           NULL,
    [is_schema_published]         BIT           NULL,
    [is_replicated]               BIT           NULL,
    [has_replication_filter]      BIT           NULL,
    [has_opaque_metadata]         BIT           NULL,
    [has_unchecked_assembly_data] BIT           NULL,
    [with_check_option]           BIT           NULL,
    [is_date_correlation_view]    BIT           NULL,
    [is_tracked_by_cdc]           BIT           NULL,
    [has_snapshot]                BIT           NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_all_views] PRIMARY KEY CLUSTERED ([object_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_all_views] TO [CRMReaderRole]
    AS [dbo];

