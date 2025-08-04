CREATE TABLE [dbo].[ProcessSessionBase]
(
[ExecutedBy] [uniqueidentifier] NULL,
[ErrorCode] [int] NULL,
[ExecutedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Comments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ActivityName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ProcessSessionId] [uniqueidentifier] NOT NULL,
[RegardingObjectId] [uniqueidentifier] NULL,
[StartedOn] [datetime] NULL,
[CompletedOn] [datetime] NULL,
[StatusCode] [int] NULL,
[NextLinkedSessionId] [uniqueidentifier] NULL,
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[OriginatingSessionId] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[PreviousLinkedSessionId] [uniqueidentifier] NULL,
[StartedBy] [uniqueidentifier] NULL,
[ProtectionKey] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProcessSessionBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ProcessState] [varchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StepName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[InputArguments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ProcessStageName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[ProcessId] [uniqueidentifier] NULL,
[CanceledOn] [datetime] NULL,
[CompletedBy] [uniqueidentifier] NULL,
[CanceledBy] [uniqueidentifier] NULL,
[RegardingObjectIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[RegardingObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ProcessSessionBase_OwnerIdType] DEFAULT ((8)),
[RegardingObjectIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProcessSessionBase] ADD CONSTRAINT [cndx_processsessionid] PRIMARY KEY CLUSTERED  ([ProcessSessionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_processsessionview] ON [dbo].[ProcessSessionBase] ([ExecutedOn], [OwnerId], [StatusCode], [Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ProcessSessionBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ProcessSessionBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_regardingObjectIdRegardingObjectTypeCode] ON [dbo].[ProcessSessionBase] ([RegardingObjectId], [RegardingObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_startedonstartedby] ON [dbo].[ProcessSessionBase] ([StartedOn], [StartedBy], [RegardingObjectId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProcessSessionBase] ADD CONSTRAINT [lk_processsession_processid] FOREIGN KEY ([ProcessId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId])
GO
ALTER TABLE [dbo].[ProcessSessionBase] ADD CONSTRAINT [owner_processsessions] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ProcessSessionBase] ADD CONSTRAINT [Owning_businessunit_processsessions] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
