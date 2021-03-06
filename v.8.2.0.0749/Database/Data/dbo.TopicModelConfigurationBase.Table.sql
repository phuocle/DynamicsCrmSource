USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TopicModelConfigurationBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TopicModelConfigurationBase](
	[TopicModelConfigurationIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[MinRelevanceScore] [decimal](23, 10) NULL,
	[IsManaged] [bit] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[SourceEntity] [int] NULL,
	[FetchXmlList] [nvarchar](max) NULL,
	[DataFilter] [nvarchar](max) NULL,
	[TimeFilter] [int] NULL,
	[TopicModelConfigurationId] [uniqueidentifier] NOT NULL,
	[NgramSize] [int] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[Name] [nvarchar](100) NULL,
	[TopicModelId] [uniqueidentifier] NOT NULL,
	[TimeFilterDuration] [int] NULL,
	[ComponentState] [int] NOT NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[Description] [nvarchar](max) NULL,
	[StopWords] [nvarchar](500) NULL,
 CONSTRAINT [PK_TopicModelConfigurationBase] PRIMARY KEY CLUSTERED 
(
	[TopicModelConfigurationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] ADD  CONSTRAINT [DF_TopicModelConfigurationBase_TopicModelConfigurationIdUnique]  DEFAULT (newid()) FOR [TopicModelConfigurationIdUnique]
GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] ADD  CONSTRAINT [DF_TopicModelConfigurationBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] ADD  CONSTRAINT [DF_TopicModelConfigurationBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] ADD  CONSTRAINT [DF_TopicModelConfigurationBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] ADD  CONSTRAINT [DF_TopicModelConfigurationBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
