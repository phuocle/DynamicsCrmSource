CREATE TABLE [dbo].[SimilarityRuleBase]
(
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MatchingEntityTypeCode] [int] NOT NULL,
[name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SimilarityRuleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SimilarityRuleBase_SimilarityRuleIdUnique] DEFAULT (newid()),
[statecode] [int] NOT NULL CONSTRAINT [DF_SimilarityRuleBase_statecode] DEFAULT ((0)),
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SimilarityRuleBase_IsManaged] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[FetchXmlList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MaxKeyWords] [int] NULL,
[ExcludeInactiveRecords] [bit] NULL CONSTRAINT [DF_SimilarityRuleBase_ExcludeInactiveRecords] DEFAULT ((0)),
[BaseEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SimilarityRuleBase_ComponentState] DEFAULT ((0)),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[RuleConditionXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[SimilarityRuleId] [uniqueidentifier] NOT NULL,
[statuscode] [int] NULL CONSTRAINT [DF_SimilarityRuleBase_statuscode] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SimilarityRuleBase_OverwriteTime] DEFAULT ((0)),
[MatchingEntityName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SimilarityRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[ActiveRuleFetchXML] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[BaseEntityTypeCode] [int] NOT NULL,
[NgramSize] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD CONSTRAINT [PK_SimilarityRuleBase] PRIMARY KEY CLUSTERED  ([SimilarityRuleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[SimilarityRuleBase] ([name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SimilarityRuleBase] ADD CONSTRAINT [UQ_SimilarityRuleBase_SimilarityRuleIdUnique] UNIQUE NONCLUSTERED  ([SimilarityRuleIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[SimilarityRuleBase] ([statecode], [statuscode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SimilarityRuleBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
