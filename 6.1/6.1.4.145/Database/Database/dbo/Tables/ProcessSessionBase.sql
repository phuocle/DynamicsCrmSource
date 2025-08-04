CREATE TABLE [dbo].[ProcessSessionBase] (
    [ExecutedBy]                UNIQUEIDENTIFIER NULL,
    [ErrorCode]                 INT              NULL,
    [ExecutedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Comments]                  NVARCHAR (MAX)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ActivityName]              NVARCHAR (256)   NULL,
    [ProcessSessionId]          UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [StartedOn]                 DATETIME         NULL,
    [CompletedOn]               DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [NextLinkedSessionId]       UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [OriginatingSessionId]      UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [PreviousLinkedSessionId]   UNIQUEIDENTIFIER NULL,
    [StartedBy]                 UNIQUEIDENTIFIER NULL,
    [ProtectionKey]             VARCHAR (MAX)    NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ProcessSessionBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ProcessState]              VARCHAR (MAX)    NULL,
    [StepName]                  NVARCHAR (256)   NULL,
    [InputArguments]            NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ProcessStageName]          NVARCHAR (256)   NULL,
    [StateCode]                 INT              NOT NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [CanceledOn]                DATETIME         NULL,
    [CompletedBy]               UNIQUEIDENTIFIER NULL,
    [CanceledBy]                UNIQUEIDENTIFIER NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ProcessSessionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_processsessionid] PRIMARY KEY CLUSTERED ([ProcessSessionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_processsession_processid] FOREIGN KEY ([ProcessId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_processsessions] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [Owning_businessunit_processsessions] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_processsessionview]
    ON [dbo].[ProcessSessionBase]([ExecutedOn] ASC, [OwnerId] ASC, [StatusCode] ASC, [Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ProcessSessionBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_startedonstartedby]
    ON [dbo].[ProcessSessionBase]([StartedOn] ASC, [StartedBy] ASC, [RegardingObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ProcessSessionBase]([Name] ASC) WITH (FILLFACTOR = 80);

