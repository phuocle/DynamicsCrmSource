CREATE TABLE [dbo].[PluginTraceLogBase] (
    [PerformanceConstructorDuration]  INT              NULL,
    [PluginTraceLogId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [IsSystemCreated]                 BIT              CONSTRAINT [DF_PluginTraceLogBase_IsSystemCreated] DEFAULT ((0)) NOT NULL,
    [PerformanceConstructorStartTime] DATETIME         NULL,
    [PerformanceExecutionDuration]    INT              NULL,
    [Configuration]                   NVARCHAR (MAX)   NULL,
    [PerformanceExecutionStartTime]   DATETIME         NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OrganizationId]                  UNIQUEIDENTIFIER NULL,
    [PersistenceKey]                  UNIQUEIDENTIFIER NULL,
    [ExceptionDetails]                NVARCHAR (MAX)   NULL,
    [MessageBlock]                    NVARCHAR (MAX)   NULL,
    [Profile]                         NVARCHAR (MAX)   NULL,
    [PrimaryEntity]                   NVARCHAR (500)   NULL,
    [RequestId]                       UNIQUEIDENTIFIER NULL,
    [CorrelationId]                   UNIQUEIDENTIFIER NULL,
    [OperationType]                   INT              NULL,
    [MessageName]                     NVARCHAR (1024)  NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [Depth]                           INT              NULL,
    [SecureConfiguration]             NVARCHAR (MAX)   NULL,
    [Mode]                            INT              NULL,
    [PluginStepId]                    UNIQUEIDENTIFIER NULL,
    [TypeName]                        NVARCHAR (1024)  NULL,
    CONSTRAINT [PK_PluginTraceLogBase] PRIMARY KEY NONCLUSTERED ([PluginTraceLogId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE CLUSTERED INDEX [ndx_CreatedOn]
    ON [dbo].[PluginTraceLogBase]([CreatedOn] ASC, [PluginTraceLogId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Typename]
    ON [dbo].[PluginTraceLogBase]([TypeName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_PerformanceExecutionStartTime]
    ON [dbo].[PluginTraceLogBase]([PerformanceExecutionStartTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Operationtype]
    ON [dbo].[PluginTraceLogBase]([OperationType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Messagename]
    ON [dbo].[PluginTraceLogBase]([MessageName] ASC) WITH (FILLFACTOR = 80);

