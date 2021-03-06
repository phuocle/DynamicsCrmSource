USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AdvancedSimilarityRuleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AdvancedSimilarityRuleBase](
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[FetchXmlList] [nvarchar](max) NULL,
	[SourceEntity] [int] NULL,
	[FilterResultByStatus] [int] NULL,
	[IsManaged] [bit] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[name] [nvarchar](100) NULL,
	[Description] [nvarchar](max) NULL,
	[IsAzureMLRequired] [bit] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[NgramSize] [int] NULL,
	[MaxNumberKeyphrases] [int] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[AdvancedSimilarityRuleId] [uniqueidentifier] NOT NULL,
	[StateCode] [int] NOT NULL,
	[ExactMatchList] [nvarchar](max) NULL,
	[FilterResultByStatusDisplayName] [nvarchar](50) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[AdvancedSimilarityRuleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[Entity] [nvarchar](100) NULL,
	[AzureServiceConnectionId] [uniqueidentifier] NULL,
 CONSTRAINT [PK_AdvancedSimilarityRuleBase] PRIMARY KEY CLUSTERED 
(
	[AdvancedSimilarityRuleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] ADD  CONSTRAINT [DF_AdvancedSimilarityRuleBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] ADD  CONSTRAINT [DF_AdvancedSimilarityRuleBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] ADD  CONSTRAINT [DF_AdvancedSimilarityRuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] ADD  CONSTRAINT [DF_AdvancedSimilarityRuleBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[AdvancedSimilarityRuleBase] ADD  CONSTRAINT [DF_AdvancedSimilarityRuleBase_AdvancedSimilarityRuleIdUnique]  DEFAULT (newid()) FOR [AdvancedSimilarityRuleIdUnique]
GO
