CREATE TABLE [dbo].[WorkflowLogBase] (
    [AsyncOperationId]                    UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NOT NULL,
    [CompletedOn]                         DATETIME         NULL,
    [WorkflowLogId]                       UNIQUEIDENTIFIER NOT NULL,
    [Description]                         NVARCHAR (MAX)   NULL,
    [Message]                             NVARCHAR (MAX)   NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [StageName]                           NVARCHAR (256)   NULL,
    [CreatedOn]                           DATETIME         NULL,
    [StepName]                            NVARCHAR (160)   NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [RegardingObjectId]                   UNIQUEIDENTIFIER NULL,
    [Status]                              INT              NOT NULL,
    [ErrorCode]                           INT              NULL,
    [ActivityName]                        NVARCHAR (160)   NULL,
    [RegardingObjectIdName]               NVARCHAR (256)   NULL,
    [RegardingObjectTypeCode]             INT              NULL,
    [RegardingObjectIdYomiName]           NVARCHAR (160)   NULL,
    [InteractionActivityResult]           NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [ChildWorkflowInstanceId]             UNIQUEIDENTIFIER NULL,
    [ChildWorkflowInstanceObjectTypeCode] INT              NULL,
    [AsyncOperationIdName]                NVARCHAR (4000)  NULL,
    [ChildWorkflowInstanceIdName]         NVARCHAR (4000)  NULL,
    [ObjectTypeCode]                      INT              CONSTRAINT [DF_WorkflowLogBase_ObjectTypeCode] DEFAULT ((4700)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_WorkflowLog] PRIMARY KEY CLUSTERED ([WorkflowLogId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lk_workflowlog_asyncoperations]
    ON [dbo].[WorkflowLogBase]([AsyncOperationId] ASC, [ObjectTypeCode] ASC)
    INCLUDE([Status]) WITH (FILLFACTOR = 80);

