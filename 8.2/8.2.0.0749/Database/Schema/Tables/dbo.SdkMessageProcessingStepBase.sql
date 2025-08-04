CREATE TABLE [dbo].[SdkMessageProcessingStepBase]
(
[CreatedOn] [datetime] NULL,
[Configuration] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SupportedDeployment] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_SupportedDeployment] DEFAULT ((0)),
[PluginTypeId] [uniqueidentifier] NOT NULL,
[Rank] [int] NOT NULL,
[SdkMessageId] [uniqueidentifier] NOT NULL,
[ModifiedOn] [datetime] NULL,
[SdkMessageProcessingStepId] [uniqueidentifier] NOT NULL,
[Stage] [int] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SdkMessageProcessingStepIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageProcessingStepBase_SdkMessageProcessingStepIdUnique] DEFAULT (newid()),
[FilteringAttributes] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_CustomizationLevel] DEFAULT ((0)),
[ModifiedBy] [uniqueidentifier] NULL,
[StateCode] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_StateCode] DEFAULT ((0)),
[SdkMessageProcessingStepSecureConfigId] [uniqueidentifier] NULL,
[Description] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[Mode] [int] NOT NULL,
[SdkMessageFilterId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_StatusCode] DEFAULT ((1)),
[ImpersonatingUserId] [uniqueidentifier] NULL,
[InvocationSource] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_InvocationSource] DEFAULT ((0)),
[AsyncAutoDelete] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_AsyncAutoDelete] DEFAULT ((0)),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_IsCustomizable] DEFAULT ((1)),
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_Name] DEFAULT (''),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_IsManaged] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_OverwriteTime] DEFAULT ((0)),
[EventHandler] [uniqueidentifier] NULL,
[IsHidden] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_IsHidden] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EventHandlerTypeCode] [int] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CanUseReadOnlyConnection] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepBase_CanUseReadOnlyConnection] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStep] PRIMARY KEY CLUSTERED  ([SdkMessageProcessingStepId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[SdkMessageProcessingStepBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_plugintypeid_sdkmessageprocessingstep] ON [dbo].[SdkMessageProcessingStepBase] ([PluginTypeId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_MessageProcessing] ON [dbo].[SdkMessageProcessingStepBase] ([SdkMessageId], [Rank], [SdkMessageFilterId]) INCLUDE ([CustomizationLevel], [InvocationSource], [SdkMessageProcessingStepIdUnique], [Stage], [StateCode], [SupportedDeployment]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SdkMessageId_PluginTypeId_SdkMessageFilterId] ON [dbo].[SdkMessageProcessingStepBase] ([SdkMessageId], [SdkMessageFilterId], [PluginTypeId]) INCLUDE ([StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepBase] ADD CONSTRAINT [UQ_SdkMessageProcessingStepBase_SdkMessageProcessingStepIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageProcessingStepIdUnique]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sdkmessageprocessingstepsecureconfigid_sdkmessageprocessingstep] ON [dbo].[SdkMessageProcessingStepBase] ([SdkMessageProcessingStepSecureConfigId]) INCLUDE ([ComponentState]) WHERE ([SdkMessageProcessingStepSecureConfigId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SdkMessageProcessingStepBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageProcessingStepBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
