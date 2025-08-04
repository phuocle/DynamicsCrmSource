CREATE TABLE [dbo].[AsyncOperationBase] (
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [CorrelationId]             UNIQUEIDENTIFIER NOT NULL,
    [Data]                      NVARCHAR (MAX)   NULL,
    [FriendlyMessage]           NVARCHAR (MAX)   NULL,
    [PrimaryEntityType]         INT              NULL,
    [Subtype]                   INT              CONSTRAINT [DF_AsyncOperationBase_Subtype] DEFAULT ((1)) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [PostponeUntil]             DATETIME         NULL,
    [Sequence]                  BIGINT           IDENTITY (1, 1) NOT NULL,
    [WorkflowIsBlocked]         BIT              NULL,
    [Message]                   NVARCHAR (MAX)   NULL,
    [StatusCode]                INT              NULL,
    [WorkflowStageName]         NVARCHAR (256)   NULL,
    [HostId]                    NVARCHAR (256)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [RecurrencePattern]         NVARCHAR (256)   NULL,
    [RetryCount]                INT              NULL,
    [StartedOn]                 DATETIME         NULL,
    [AsyncOperationId]          UNIQUEIDENTIFIER NOT NULL,
    [CompletedOn]               DATETIME         NULL,
    [IsWaitingForEvent]         BIT              NULL,
    [RequestId]                 UNIQUEIDENTIFIER NULL,
    [Depth]                     INT              NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NOT NULL,
    [OperationType]             INT              NULL,
    [ExecutionTimeSpan]         FLOAT (53)       CONSTRAINT [DF_AsyncOperationBase_ExecutionTimeSpan] DEFAULT ((0)) NOT NULL,
    [WorkflowState]             VARCHAR (MAX)    NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [CorrelationUpdatedTime]    DATETIME         CONSTRAINT [DF_AsyncOperationBase_CorrelationUpdatedTime] DEFAULT (getutcdate()) NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ErrorCode]                 INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NOT NULL,
    [MessageName]               NVARCHAR (160)   NULL,
    [DependencyToken]           NVARCHAR (256)   NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [ParentPluginExecutionId]   UNIQUEIDENTIFIER NULL,
    [WorkflowActivationId]      UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NOT NULL,
    [OwningExtensionId]         UNIQUEIDENTIFIER NULL,
    [RecurrenceStartTime]       DATETIME         NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_AsyncOperationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwningExtensionIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_AsyncOperationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningExtensionTypeCode]   INT              NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [RootExecutionContext]      NVARCHAR (MAX)   NULL,
    [CallerOrigin]              NVARCHAR (256)   NULL,
    [BreadcrumbId]              UNIQUEIDENTIFIER NULL,
    [Workload]                  NVARCHAR (256)   NULL,
    [RetainJobHistory]          BIT              NULL,
    [ExpanderStartTime]         DATETIME         CONSTRAINT [DF_AsyncOperationBase_ExpanderStartTime] DEFAULT (getutcdate()) NULL,
    [DataBlobId]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_AsyncOperation] PRIMARY KEY CLUSTERED ([AsyncOperationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FileAttachment_AsyncOperation_DataBlobId] FOREIGN KEY ([DataBlobId]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AsyncOperationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AsyncOperationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_StartedOn_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([StartedOn] DESC)
    INCLUDE([RegardingObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lk_asyncoperation_workflowactivationid]
    ON [dbo].[AsyncOperationBase]([WorkflowActivationId] ASC)
    INCLUDE([OperationType]) WHERE ([WorkflowActivationId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RecurrenceStateTime_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([RecurrenceStartTime] ASC, [Name] ASC, [StatusCode] ASC, [OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RequestId_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([RequestId] ASC) WHERE ([RequestId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_asyncoperation]
    ON [dbo].[AsyncOperationBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([RegardingObjectId] ASC)
    INCLUDE([RegardingObjectTypeCode], [StatusCode], [StateCode], [OperationType]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OperationType_StartedOn_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([OperationType] ASC, [StartedOn] DESC)
    INCLUDE([RegardingObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_SpecialTransitions_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([HostId] ASC, [StateCode] ASC, [StatusCode] ASC)
    INCLUDE([AsyncOperationId]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Cover_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([StateCode] ASC, [Sequence] ASC, [DependencyToken] ASC, [PostponeUntil] ASC, [Subtype] ASC, [OperationType] ASC, [Workload] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_StateStatus_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([AsyncOperationId] ASC, [StateCode] ASC)
    INCLUDE([StatusCode], [CreatedBy]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_BreadcrumbId_AsyncOperationId]
    ON [dbo].[AsyncOperationBase]([BreadcrumbId] ASC, [AsyncOperationId] ASC) WHERE ([BreadcrumbId] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_statuscodestatecodeoperationtypecompletedon]
    ON [dbo].[AsyncOperationBase]([StatusCode] ASC, [StateCode] ASC, [OperationType] ASC, [CompletedOn] ASC)
    INCLUDE([StartedOn]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_operationTypestatuscodestatecodeworkflowactivationid]
    ON [dbo].[AsyncOperationBase]([OperationType] ASC, [StatusCode] ASC, [StateCode] ASC, [WorkflowActivationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_operationtypeRecurrencePattern]
    ON [dbo].[AsyncOperationBase]([OperationType] ASC, [RecurrencePattern] ASC, [CorrelationId] ASC, [StateCode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_CorrelationId_RecurrencePattern_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([CorrelationId] ASC, [RecurrencePattern] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_OwnerId]
    ON [dbo].[AsyncOperationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_modifiedon]
    ON [dbo].[AsyncOperationBase]([ModifiedOn] ASC)
    INCLUDE([WorkflowActivationId], [OwningExtensionId]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_operationtyperegardingobjectid]
    ON [dbo].[AsyncOperationBase]([OperationType] ASC, [RegardingObjectId] ASC) WHERE ([StateCode]<>(3)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Name_Statecode]
    ON [dbo].[AsyncOperationBase]([Name] ASC, [StateCode] ASC) WHERE ([StateCode]<>(3)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_dependencytokenstatecodepostponeuntil]
    ON [dbo].[AsyncOperationBase]([DependencyToken] ASC, [StateCode] ASC, [PostponeUntil] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[AsyncOperationBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_918883F97E514820B8CE96E07018220F]
    ON [dbo].[AsyncOperationBase]([AsyncOperationId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_918883F97E514820B8CE96E07018220F]
    ON [dbo].[AsyncOperationBase]([AsyncOperationId] ASC)
    INCLUDE([Name], [RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdName], [RegardingObjectIdYomiName], [OperationType], [StatusCode], [OwnerId], [OwnerIdType], [StartedOn], [StateCode]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

