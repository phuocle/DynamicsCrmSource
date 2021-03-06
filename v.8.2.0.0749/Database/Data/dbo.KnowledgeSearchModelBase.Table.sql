USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KnowledgeSearchModelBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KnowledgeSearchModelBase](
	[SourceEntity] [int] NULL,
	[NgramSize] [int] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[KnowledgeSearchModelIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[KnowledgeSearchModelId] [uniqueidentifier] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[AzureServiceConnectionId] [uniqueidentifier] NULL,
	[StatusCode] [int] NULL,
	[FetchXmlList] [nvarchar](max) NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[Entity] [nvarchar](100) NULL,
	[IsManaged] [bit] NOT NULL,
	[MaxKeyWords] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[ComponentState] [int] NOT NULL,
	[StateCode] [int] NOT NULL,
	[Name] [nvarchar](100) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
 CONSTRAINT [PK_knowledgesearchmodelBase] PRIMARY KEY CLUSTERED 
(
	[KnowledgeSearchModelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] ADD  CONSTRAINT [DF_KnowledgeSearchModelBase_KnowledgeSearchModelIdUnique]  DEFAULT (newid()) FOR [KnowledgeSearchModelIdUnique]
GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] ADD  CONSTRAINT [DF_KnowledgeSearchModelBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] ADD  CONSTRAINT [DF_KnowledgeSearchModelBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] ADD  CONSTRAINT [DF_KnowledgeSearchModelBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[KnowledgeSearchModelBase] ADD  CONSTRAINT [DF_KnowledgeSearchModelBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
