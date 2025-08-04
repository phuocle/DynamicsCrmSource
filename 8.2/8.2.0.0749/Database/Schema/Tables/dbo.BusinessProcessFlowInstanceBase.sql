CREATE TABLE [dbo].[BusinessProcessFlowInstanceBase]
(
[VersionNumber] [timestamp] NULL,
[Entity4Id] [uniqueidentifier] NULL,
[Entity2Id] [uniqueidentifier] NULL,
[Entity5ObjectTypeCode] [int] NULL,
[Entity5Id] [uniqueidentifier] NULL,
[BusinessProcessFlowInstanceId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_BusinessProcessFlowInstanceBase_BusinessProcessFlowInstanceId] DEFAULT (newid()),
[Entity3Id] [uniqueidentifier] NULL,
[Entity3ObjectTypeCode] [int] NULL,
[Entity2ObjectTypeCode] [int] NULL,
[Entity1ObjectTypeCode] [int] NULL,
[Entity1Id] [uniqueidentifier] NULL,
[Entity4ObjectTypeCode] [int] NULL,
[ProcessId] [uniqueidentifier] NOT NULL,
[ProcessStageId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CompletedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NOT NULL CONSTRAINT [DF_BusinessProcessFlowInstanceBase_StatusCode] DEFAULT ((1)),
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_BusinessProcessFlowInstanceBase_StateCode] DEFAULT ((0)),
[ActiveStageStartedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BusinessProcessFlowInstanceBase] ADD CONSTRAINT [cndx_PrimaryKey_BusinessProcessFlowInstance] PRIMARY KEY CLUSTERED  ([BusinessProcessFlowInstanceId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_Entity1_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase] ([Entity1Id], [Entity1ObjectTypeCode], [ProcessId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_Entity2_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase] ([ProcessId], [Entity2Id], [Entity2ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_Entity3_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase] ([ProcessId], [Entity3Id], [Entity3ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_Entity4_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase] ([ProcessId], [Entity4Id], [Entity4ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [cndx_Entity5_ProcessId] ON [dbo].[BusinessProcessFlowInstanceBase] ([ProcessId], [Entity5Id], [Entity5ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BusinessProcessFlowInstanceBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
