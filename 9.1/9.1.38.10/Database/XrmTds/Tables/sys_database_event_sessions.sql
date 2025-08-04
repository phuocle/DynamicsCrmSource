CREATE TABLE [XrmTds].[sys_database_event_sessions] (
    [event_session_id]           INT           NOT NULL,
    [name]                       [sysname]     NULL,
    [event_retention_mode]       CHAR (1)      NULL,
    [event_retention_mode_desc]  NVARCHAR (60) NULL,
    [max_dispatch_latency]       INT           NULL,
    [max_memory]                 INT           NULL,
    [max_event_size]             INT           NULL,
    [memory_partition_mode]      CHAR (1)      NULL,
    [memory_partition_mode_desc] NVARCHAR (60) NULL,
    [track_causality]            BIT           NULL,
    [startup_state]              BIT           NULL,
    [has_long_running_target]    BIT           NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_database_event_sessions] PRIMARY KEY CLUSTERED ([event_session_id] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_database_event_sessions] TO [CRMReaderRole]
    AS [dbo];

