CREATE TABLE [dbo].[msdyn_PostRuleConfigBase]
(
[msdyn_PostRuleConfigId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[statecode] [int] NOT NULL,
[statuscode] [int] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[msdyn_name] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[msdyn_FormatId] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[msdyn_PostToYammer] [bit] NULL,
[msdyn_RuleId] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[msdyn_RuleSource] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[msdyn_StepId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[msdyn_PostConfigId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_PostRuleConfigBase] ADD CONSTRAINT [PK_msdyn_PostRuleConfigBase] PRIMARY KEY CLUSTERED  ([msdyn_PostRuleConfigId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_name] ON [dbo].[msdyn_PostRuleConfigBase] ([msdyn_name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_postconfig_msdyn_postruleconfig] ON [dbo].[msdyn_PostRuleConfigBase] ([msdyn_PostConfigId]) WHERE ([msdyn_PostConfigId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[msdyn_PostRuleConfigBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[msdyn_PostRuleConfigBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[msdyn_PostRuleConfigBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[msdyn_PostRuleConfigBase] ADD CONSTRAINT [msdyn_postconfig_msdyn_postruleconfig] FOREIGN KEY ([msdyn_PostConfigId]) REFERENCES [dbo].[msdyn_PostConfigBase] ([msdyn_PostConfigId])
GO
