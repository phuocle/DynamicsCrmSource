CREATE TABLE [dbo].[WorkflowBase]
(
[OnDemand] [bit] NULL,
[Activities] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PluginTypeId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[Type] [int] NOT NULL,
[WorkflowId] [uniqueidentifier] NOT NULL,
[ActiveWorkflowId] [uniqueidentifier] NULL,
[ParentWorkflowId] [uniqueidentifier] NULL,
[UIData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PrimaryEntity] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[IsCrmUIWorkflow] [bit] NULL CONSTRAINT [DF_WorkflowBase_IsCrmUIWorkflow] DEFAULT ((0)),
[Subprocess] [bit] NULL,
[Scope] [int] NOT NULL CONSTRAINT [DF_WorkflowBase_Scope] DEFAULT ((4)),
[StatusCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Rules] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_WorkflowBase_OverwriteTime] DEFAULT ((0)),
[TriggerOnCreate] [bit] NULL,
[AsyncAutoDelete] [bit] NOT NULL CONSTRAINT [DF_WorkflowBase_AsyncAutoDelete] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[InputParameters] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Xaml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Category] [int] NOT NULL CONSTRAINT [DF_WorkflowBase_Category] DEFAULT ((0)),
[LanguageCode] [int] NULL,
[TriggerOnDelete] [bit] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_WorkflowBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_WorkflowBase_IsCustomizable] DEFAULT ((1)),
[TriggerOnUpdateAttributeList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[WorkflowIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_WorkflowBase_WorkflowIdUnique] DEFAULT (newid()),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_WorkflowBase_ComponentState] DEFAULT ((0)),
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_WorkflowBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_WorkflowBase_IsManaged] DEFAULT ((0)),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_WorkflowBase_OwnerIdType] DEFAULT ((8)),
[UniqueName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ProcessOrder] [int] NULL,
[Rank] [int] NULL,
[CreateStage] [int] NULL,
[ProcessRoleAssignment] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RunAs] [int] NULL,
[IsTransacted] [bit] NULL,
[SyncWorkflowLogOnFailure] [bit] NOT NULL CONSTRAINT [DF_WorkflowBase_SyncWorkflowLogOnFailure] DEFAULT ((0)),
[DeleteStage] [int] NULL,
[Mode] [int] NOT NULL CONSTRAINT [DF_WorkflowBase_Mode] DEFAULT ((0)),
[UpdateStage] [int] NULL,
[VersionNumber] [timestamp] NULL,
[SdkMessageId] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[ClientData] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[RendererObjectTypeCode] [int] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[FormId] [uniqueidentifier] NULL,
[BusinessProcessType] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowBase] ADD CONSTRAINT [cndx_PrimaryKey_Workflow] PRIMARY KEY CLUSTERED  ([WorkflowId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_workflow_active_workflow] ON [dbo].[WorkflowBase] ([ActiveWorkflowId]) INCLUDE ([ComponentState]) WHERE ([ActiveWorkflowId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[WorkflowBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_workflow] ON [dbo].[WorkflowBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_workflow_parent_workflow] ON [dbo].[WorkflowBase] ([ParentWorkflowId]) INCLUDE ([ComponentState]) WHERE ([ParentWorkflowId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[WorkflowBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TypeCategory] ON [dbo].[WorkflowBase] ([Type], [Category], [LanguageCode], [Name], [PrimaryEntity], [CreatedOn], [ModifiedOn]) INCLUDE ([StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber] ON [dbo].[WorkflowBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[WorkflowBase] ADD CONSTRAINT [UQ_WorkflowBase_WorkflowIdUnique] UNIQUE NONCLUSTERED  ([WorkflowIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
