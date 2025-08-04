CREATE TABLE [dbo].[ProcessSessionBase] (
    [ErrorCode]                 INT              NULL,
    [ExecutedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ActivityName]              NVARCHAR (256)   NULL,
    [ProcessSessionId]          UNIQUEIDENTIFIER NOT NULL,
    [RegardingObjectId]         UNIQUEIDENTIFIER NULL,
    [StartedOn]                 DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [CompletedOn]               DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [NextLinkedSessionId]       UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (256)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [OriginatingSessionId]      UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Comments]                  NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ProcessSessionBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ProcessState]              VARCHAR (MAX)    NULL,
    [PreviousLinkedSessionId]   UNIQUEIDENTIFIER NULL,
    [StepName]                  NVARCHAR (256)   NULL,
    [ProtectionKey]             VARCHAR (MAX)    NULL,
    [ProcessStageName]          NVARCHAR (256)   NULL,
    [CanceledOn]                DATETIME         NULL,
    [InputArguments]            NVARCHAR (MAX)   NULL,
    [ExecutedBy]                UNIQUEIDENTIFIER NULL,
    [CompletedBy]               UNIQUEIDENTIFIER NULL,
    [StartedBy]                 UNIQUEIDENTIFIER NULL,
    [CanceledBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode]   INT              NULL,
    [RegardingObjectIdYomiName] NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ProcessSessionBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdName]     NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_processsessionid] PRIMARY KEY CLUSTERED ([ProcessSessionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_processsession_processid] FOREIGN KEY ([ProcessId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId]),
    CONSTRAINT [owner_processsessions] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [Owning_businessunit_processsessions] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ProcessSessionBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ProcessSessionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ProcessSessionBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_processsessionview]
    ON [dbo].[ProcessSessionBase]([ExecutedOn] ASC, [OwnerId] ASC, [StatusCode] ASC, [Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_regardingObjectIdRegardingObjectTypeCode]
    ON [dbo].[ProcessSessionBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_startedonstartedby]
    ON [dbo].[ProcessSessionBase]([StartedOn] ASC, [StartedBy] ASC, [RegardingObjectId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_8C003E70EBCE4155A9203270DFDC5667]
    ON [dbo].[ProcessSessionBase]([ProcessSessionId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8C003E70EBCE4155A9203270DFDC5667]
    ON [dbo].[ProcessSessionBase]([ProcessSessionId] ASC)
    INCLUDE([Name], [StatusCode], [StartedOn], [StartedBy], [RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [RegardingObjectIdName], [OwnerId], [OwnerIdType]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ProcessSessionBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

