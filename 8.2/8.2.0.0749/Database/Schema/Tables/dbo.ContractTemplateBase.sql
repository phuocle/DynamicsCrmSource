CREATE TABLE [dbo].[ContractTemplateBase]
(
[ContractTemplateId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[Abbreviation] [nvarchar] (20) COLLATE Latin1_General_CI_AI NOT NULL,
[ContractServiceLevelCode] [int] NULL,
[BillingFrequencyCode] [int] NULL,
[AllotmentTypeCode] [int] NULL,
[UseDiscountAsPercentage] [bit] NULL,
[EffectivityCalendar] [nvarchar] (168) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_ContractTemplateBase_IsManaged] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_ContractTemplateBase_ComponentState] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContractTemplateBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_ContractTemplateBase_OverwriteTime] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ContractTemplateIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_ContractTemplateBase_ContractTemplateIdUnique] DEFAULT (newid()),
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_ContractTemplateBase_IsCustomizable] DEFAULT ((1)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_ContractTemplate] PRIMARY KEY CLUSTERED  ([ContractTemplateId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractTemplateBase] ADD CONSTRAINT [AK1_ContractTemplateBase] UNIQUE NONCLUSTERED  ([Abbreviation], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractTemplateBase] ADD CONSTRAINT [UQ_ContractTemplateBase_ContractTemplateIdUnique] UNIQUE NONCLUSTERED  ([ContractTemplateIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ContractTemplateBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContractTemplateBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
