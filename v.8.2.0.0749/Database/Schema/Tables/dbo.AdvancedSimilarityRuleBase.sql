CREATE TABLE [dbo].[AdvancedSimilarityRuleBase]
(
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[FetchXmlList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SourceEntity] [int] NULL,
[FilterResultByStatus] [int] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_AdvancedSimilarityRuleBase_IsManaged] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsAzureMLRequired] [bit] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_AdvancedSimilarityRuleBase_OverwriteTime] DEFAULT ((0)),
[NgramSize] [int] NULL,
[MaxNumberKeyphrases] [int] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AdvancedSimilarityRuleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[AdvancedSimilarityRuleId] [uniqueidentifier] NOT NULL,
[StateCode] [int] NOT NULL,
[ExactMatchList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[FilterResultByStatusDisplayName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_AdvancedSimilarityRuleBase_ComponentState] DEFAULT ((0)),
[StatusCode] [int] NULL,
[AdvancedSimilarityRuleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_AdvancedSimilarityRuleBase_AdvancedSimilarityRuleIdUnique] DEFAULT (newid()),
[Entity] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AzureServiceConnectionId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] ADD CONSTRAINT [PK_AdvancedSimilarityRuleBase] PRIMARY KEY CLUSTERED  ([AdvancedSimilarityRuleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
