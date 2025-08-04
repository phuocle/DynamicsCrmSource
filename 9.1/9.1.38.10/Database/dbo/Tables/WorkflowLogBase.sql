CREATE TABLE [dbo].[WorkflowLogBase] (
    [ChildWorkflowInstanceId]             UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [InteractionActivityResult]           NVARCHAR (MAX)   NULL,
    [CompletedOn]                         DATETIME         NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [WorkflowLogId]                       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NOT NULL,
    [StartedOn]                           DATETIME         NULL,
    [ErrorCode]                           INT              NULL,
    [AsyncOperationId]                    UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [ActivityName]                        NVARCHAR (160)   NULL,
    [RegardingObjectId]                   UNIQUEIDENTIFIER NULL,
    [StepName]                            NVARCHAR (160)   NULL,
    [CreatedOn]                           DATETIME         NULL,
    [StageName]                           NVARCHAR (256)   NULL,
    [Message]                             NVARCHAR (MAX)   NULL,
    [Status]                              INT              NOT NULL,
    [Description]                         NVARCHAR (MAX)   NULL,
    [AsyncOperationIdName]                NVARCHAR (4000)  NULL,
    [ChildWorkflowInstanceIdName]         NVARCHAR (4000)  NULL,
    [ChildWorkflowInstanceObjectTypeCode] INT              NULL,
    [RegardingObjectIdYomiName]           NVARCHAR (160)   NULL,
    [RegardingObjectTypeCode]             INT              NULL,
    [RegardingObjectIdName]               NVARCHAR (256)   NULL,
    [ObjectTypeCode]                      INT              CONSTRAINT [DF_WorkflowLogBase_ObjectTypeCode] DEFAULT ((4700)) NOT NULL,
    [Duration]                            AS               ([dbo].[fn_UDF_f9af0a63aef347cfaeaef33121133b45]([StartedOn],[CompletedOn])),
    [ErrorText]                           NVARCHAR (1000)  NULL,
    [Inputs]                              UNIQUEIDENTIFIER NULL,
    [Outputs]                             UNIQUEIDENTIFIER NULL,
    [IterationCount]                      INT              NULL,
    [RepetitionCount]                     INT              NULL,
    [RepetitionId]                        NVARCHAR (1000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_WorkflowLog] PRIMARY KEY CLUSTERED ([WorkflowLogId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FileAttachment_WorkflowLog_Inputs] FOREIGN KEY ([Inputs]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [FileAttachment_WorkflowLog_Outputs] FOREIGN KEY ([Outputs]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[WorkflowLogBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[WorkflowLogBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lk_workflowlog_asyncoperations]
    ON [dbo].[WorkflowLogBase]([AsyncOperationId] ASC)
    INCLUDE([ObjectTypeCode], [Status]) WITH (FILLFACTOR = 80);

