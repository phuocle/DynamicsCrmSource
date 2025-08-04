


--
-- base view for PluginTraceLog
--
create view dbo.[PluginTraceLog]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- physical attributes
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [PluginTraceLogId],
    [Configuration],
    [MessageName],
    [Depth],
    [Mode],
    [OperationType],
    [PerformanceConstructorDuration],
    [PerformanceConstructorStartTime],
    [PerformanceExecutionDuration],
    [PerformanceExecutionStartTime],
    [PersistenceKey],
    [PrimaryEntity],
    [Profile],
    [RequestId],
    [SecureConfiguration],
    [TypeName],
    [PluginStepId],
    [MessageBlock],
    [OrganizationId],
    [ExceptionDetails],
    [CorrelationId],
    [IsSystemCreated]
) with view_metadata as
select
    -- logical attributes
    [createdby_plugintracelog].[FullName],
    [createdby_plugintracelog].[FullName],
    [lk_plugintracelogbase_createdonbehalfby].[FullName],
    [lk_plugintracelogbase_createdonbehalfby].[FullName],

    -- physical attribute
    [PluginTraceLogBase].[CreatedOn],
    [PluginTraceLogBase].[CreatedBy],
    [PluginTraceLogBase].[CreatedOnBehalfBy],
    [PluginTraceLogBase].[PluginTraceLogId],
    [PluginTraceLogBase].[Configuration],
    [PluginTraceLogBase].[MessageName],
    [PluginTraceLogBase].[Depth],
    [PluginTraceLogBase].[Mode],
    [PluginTraceLogBase].[OperationType],
    [PluginTraceLogBase].[PerformanceConstructorDuration],
    [PluginTraceLogBase].[PerformanceConstructorStartTime],
    [PluginTraceLogBase].[PerformanceExecutionDuration],
    [PluginTraceLogBase].[PerformanceExecutionStartTime],
    [PluginTraceLogBase].[PersistenceKey],
    [PluginTraceLogBase].[PrimaryEntity],
    [PluginTraceLogBase].[Profile],
    [PluginTraceLogBase].[RequestId],
    [PluginTraceLogBase].[SecureConfiguration],
    [PluginTraceLogBase].[TypeName],
    [PluginTraceLogBase].[PluginStepId],
    [PluginTraceLogBase].[MessageBlock],
    [PluginTraceLogBase].[OrganizationId],
    [PluginTraceLogBase].[ExceptionDetails],
    [PluginTraceLogBase].[CorrelationId],
    [PluginTraceLogBase].[IsSystemCreated]
from [PluginTraceLogBase] 
    left join [SystemUserBase] [createdby_plugintracelog] with(nolock) on ([PluginTraceLogBase].[CreatedBy] = [createdby_plugintracelog].[SystemUserId])
    left join [SystemUserBase] [lk_plugintracelogbase_createdonbehalfby] with(nolock) on ([PluginTraceLogBase].[CreatedOnBehalfBy] = [lk_plugintracelogbase_createdonbehalfby].[SystemUserId])
