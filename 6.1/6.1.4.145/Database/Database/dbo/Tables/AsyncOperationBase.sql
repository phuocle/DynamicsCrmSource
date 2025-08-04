CREATE TABLE [dbo].[AsyncOperationBase] (
    [MessageName]               NVARCHAR (160)   NULL,
    [Depth]                     INT              NOT NULL,
    [PrimaryEntityType]         INT              NULL,
    [Data]                      NVARCHAR (MAX)   NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [WorkflowStageName]         NVARCHAR (256)   NULL,
    [OperationType]             INT              NULL,
    [DependencyToken]           NVARCHAR (256)   NULL,
    [RecurrencePattern]         NVARCHAR (256)   NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [PostponeUntil]             DATETIME         NULL,
    [WorkflowState]             VARCHAR (MAX)    NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NOT NULL,
    [IsWaitingForEvent]         BIT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NOT NULL,
    [ErrorCode]                 INT              NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NOT NULL,
    [CorrelationId]             UNIQUEIDENTIFIER NOT NULL,
    [RecurrenceStartTime]       DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [AsyncOperationId]          UNIQUEIDENTIFIER NOT NULL,
    [Sequence]                  BIGINT           IDENTITY (1, 1) NOT NULL,
    [RequestId]                 UNIQUEIDENTIFIER NULL,
    [WorkflowIsBlocked]         BIT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Message]                   NVARCHAR (MAX)   NULL,
    [StartedOn]                 DATETIME         NULL,
    [HostId]                    NVARCHAR (256)   NULL,
    [StateCode]                 INT              NOT NULL,
    [WorkflowActivationId]      UNIQUEIDENTIFIER NULL,
    [CompletedOn]               DATETIME         NULL,
    [CorrelationUpdatedTime]    DATETIME         CONSTRAINT [DF_AsyncOperationBase_CorrelationUpdatedTime] DEFAULT (getutcdate()) NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [RetryCount]                INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [FriendlyMessage]           NVARCHAR (MAX)   NULL,
    [ExecutionTimeSpan]         FLOAT (53)       CONSTRAINT [DF_AsyncOperationBase_ExecutionTimeSpan] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwningExtensionId]         UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_AsyncOperationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwningExtensionIdName]     NVARCHAR (4000)  NULL,
    [OwningExtensionTypeCode]   INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_AsyncOperationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Subtype]                   INT              CONSTRAINT [DF_AsyncOperationBase_Subtype] DEFAULT ((1)) NULL,
    CONSTRAINT [cndx_PrimaryKey_AsyncOperation] PRIMARY KEY CLUSTERED ([AsyncOperationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_asyncoperations] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AsyncOperationBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_RequestId_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([RequestId] ASC) WHERE ([RequestId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_StartedOn_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([StartedOn] DESC)
    INCLUDE([RegardingObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_OperationType_StartedOn_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([OperationType] ASC, [StartedOn] DESC)
    INCLUDE([RegardingObjectTypeCode]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Cover_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([StateCode] ASC, [Sequence] ASC, [DependencyToken] ASC, [PostponeUntil] ASC, [Subtype] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_RegardingObjectId_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([RegardingObjectId] ASC)
    INCLUDE([RegardingObjectTypeCode], [StatusCode], [StateCode], [OperationType]) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_asyncoperation]
    ON [dbo].[AsyncOperationBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RecurrenceStateTime_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([RecurrenceStartTime] ASC, [Name] ASC, [StatusCode] ASC, [OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_StateStatus_AsyncOperation]
    ON [dbo].[AsyncOperationBase]([AsyncOperationId] ASC, [StateCode] ASC)
    INCLUDE([StatusCode], [CreatedBy]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[AsyncOperationBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lk_asyncoperation_workflowactivationid]
    ON [dbo].[AsyncOperationBase]([WorkflowActivationId] ASC)
    INCLUDE([OperationType]) WHERE ([WorkflowActivationId] IS NOT NULL) WITH (FILLFACTOR = 80);

