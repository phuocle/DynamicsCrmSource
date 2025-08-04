CREATE TABLE [dbo].[PluginTraceLogBase] (
    [PerformanceExecutionStartTime]   DATETIME         NULL,
    [PerformanceConstructorStartTime] DATETIME         NULL,
    [Mode]                            INT              NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NULL,
    [Depth]                           INT              NULL,
    [MessageBlock]                    NVARCHAR (MAX)   NULL,
    [TypeName]                        NVARCHAR (1024)  NULL,
    [PerformanceConstructorDuration]  INT              NULL,
    [PrimaryEntity]                   NVARCHAR (500)   NULL,
    [CreatedOn]                       DATETIME         NULL,
    [PersistenceKey]                  UNIQUEIDENTIFIER NULL,
    [ExceptionDetails]                NVARCHAR (MAX)   NULL,
    [PluginTraceLogId]                UNIQUEIDENTIFIER NOT NULL,
    [RequestId]                       UNIQUEIDENTIFIER NULL,
    [PluginStepId]                    UNIQUEIDENTIFIER NULL,
    [CorrelationId]                   UNIQUEIDENTIFIER NULL,
    [Profile]                         NVARCHAR (MAX)   NULL,
    [IsSystemCreated]                 BIT              CONSTRAINT [DF_PluginTraceLogBase_IsSystemCreated] DEFAULT ((0)) NOT NULL,
    [OperationType]                   INT              NULL,
    [MessageName]                     NVARCHAR (1024)  NULL,
    [PerformanceExecutionDuration]    INT              NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [Configuration]                   NVARCHAR (MAX)   NULL,
    [SecureConfiguration]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_PluginTraceLogBase] PRIMARY KEY NONCLUSTERED ([PluginTraceLogId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[PluginTraceLogBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[PluginTraceLogBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[PluginTraceLogBase]([CreatedOn] ASC, [PluginTraceLogId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Typename]
    ON [dbo].[PluginTraceLogBase]([TypeName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PerformanceExecutionStartTime]
    ON [dbo].[PluginTraceLogBase]([PerformanceExecutionStartTime] ASC, [IsSystemCreated] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Operationtype]
    ON [dbo].[PluginTraceLogBase]([OperationType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Messagename]
    ON [dbo].[PluginTraceLogBase]([MessageName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PerformanceExecutionStartTime_PluginTraceLogId]
    ON [dbo].[PluginTraceLogBase]([PerformanceExecutionStartTime] DESC, [PluginTraceLogId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_EA99E9D7DC604EE6B8FC8E311D1F301D]
    ON [dbo].[PluginTraceLogBase]([PluginTraceLogId] ASC)
    INCLUDE([MessageName], [TypeName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_EA99E9D7DC604EE6B8FC8E311D1F301D]
    ON [dbo].[PluginTraceLogBase]([PluginTraceLogId] ASC)
    INCLUDE([MessageName], [IsSystemCreated], [OperationType], [TypeName], [PerformanceExecutionStartTime]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

