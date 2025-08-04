CREATE TABLE [dbo].[ProcessTriggerBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[ControlType] [int] NULL,
[FormId] [uniqueidentifier] NULL,
[ControlName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_IsCustomizable] DEFAULT ((1)),
[ModifiedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_OverwriteTime] DEFAULT ((0)),
[PrimaryEntityTypeCode] [int] NOT NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ProcessTriggerIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ProcessTriggerBase_ProcessTriggerIdUnique] DEFAULT (newid()),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[Event] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[VersionNumber] [timestamp] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_ComponentState] DEFAULT ((0)),
[ProcessId] [uniqueidentifier] NOT NULL,
[ProcessTriggerId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[MethodId] [uniqueidentifier] NULL,
[Scope] [int] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_Scope] DEFAULT ((1)),
[PipelineStage] [int] NOT NULL CONSTRAINT [DF_ProcessTriggerBase_PipelineStage] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProcessTriggerBase] ADD CONSTRAINT [cndx_PrimaryKey_ProcessTrigger] PRIMARY KEY CLUSTERED  ([ProcessTriggerId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_process_processtrigger] ON [dbo].[ProcessTriggerBase] ([ProcessId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ProcessTriggerBase] ADD CONSTRAINT [UQ_ProcessTriggerBase_ProcessTrigerIdUnique] UNIQUE NONCLUSTERED  ([ProcessTriggerIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber] ON [dbo].[ProcessTriggerBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
