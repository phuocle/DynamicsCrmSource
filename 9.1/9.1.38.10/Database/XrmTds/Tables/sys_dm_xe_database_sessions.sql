CREATE TABLE [XrmTds].[sys_dm_xe_database_sessions] (
    [address]                    VARBINARY (8)  NOT NULL,
    [name]                       NVARCHAR (256) NOT NULL,
    [pending_buffers]            INT            NOT NULL,
    [total_regular_buffers]      INT            NOT NULL,
    [regular_buffer_size]        BIGINT         NOT NULL,
    [total_large_buffers]        INT            NOT NULL,
    [large_buffer_size]          BIGINT         NOT NULL,
    [total_buffer_size]          BIGINT         NOT NULL,
    [buffer_policy_flags]        INT            NOT NULL,
    [buffer_policy_desc]         NVARCHAR (256) NOT NULL,
    [flags]                      INT            NOT NULL,
    [flag_desc]                  NVARCHAR (256) NOT NULL,
    [dropped_event_count]        INT            NOT NULL,
    [dropped_buffer_count]       INT            NOT NULL,
    [blocked_event_fire_time]    INT            NOT NULL,
    [create_time]                DATETIME       NOT NULL,
    [largest_event_dropped_size] INT            NOT NULL,
    [session_source]             NVARCHAR (256) NOT NULL,
    [buffer_processed_count]     BIGINT         NOT NULL,
    [buffer_full_count]          BIGINT         NOT NULL,
    [total_bytes_generated]      BIGINT         NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_sys_dm_xe_database_sessions] PRIMARY KEY CLUSTERED ([address] ASC)
);


GO
GRANT SELECT
    ON OBJECT::[XrmTds].[sys_dm_xe_database_sessions] TO [CRMReaderRole]
    AS [dbo];

