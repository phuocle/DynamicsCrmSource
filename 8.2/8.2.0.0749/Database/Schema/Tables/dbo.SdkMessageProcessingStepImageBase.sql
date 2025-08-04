CREATE TABLE [dbo].[SdkMessageProcessingStepImageBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[SdkMessageProcessingStepId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SdkMessageProcessingStepImageId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[EntityAlias] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[CustomizationLevel] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_CustomizationLevel] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[SdkMessageProcessingStepImageIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_SdkMessageProcessingStepImageIdUnique] DEFAULT (newid()),
[ImageType] [int] NOT NULL,
[RelatedAttributeName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[MessagePropertyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[Attributes] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_IsCustomizable] DEFAULT ((1)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_IsManaged] DEFAULT ((0)),
[Name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_Name] DEFAULT (''),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SdkMessageProcessingStepImageBase_OverwriteTime] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepImageBase] ADD CONSTRAINT [cndx_PrimaryKey_SdkMessageProcessingStepImage] PRIMARY KEY CLUSTERED  ([SdkMessageProcessingStepImageId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Description] ON [dbo].[SdkMessageProcessingStepImageBase] ([Description]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[SdkMessageProcessingStepImageBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_ProcessingStep] ON [dbo].[SdkMessageProcessingStepImageBase] ([SdkMessageProcessingStepId]) INCLUDE ([ComponentState]) WHERE ([SdkMessageProcessingStepId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepImageBase] ADD CONSTRAINT [UQ_SdkMessageProcessingStepImageBase_SdkMessageProcessingStepImageIdUnique] UNIQUE NONCLUSTERED  ([SdkMessageProcessingStepImageIdUnique]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SdkMessageProcessingStepImageBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
