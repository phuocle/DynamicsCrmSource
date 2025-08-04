CREATE TABLE [dbo].[TopicModelConfigurationBase]
(
[TopicModelConfigurationIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_TopicModelConfigurationBase_TopicModelConfigurationIdUnique] DEFAULT (newid()),
[MinRelevanceScore] [decimal] (23, 10) NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_TopicModelConfigurationBase_IsManaged] DEFAULT ((0)),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_TopicModelConfigurationBase_OverwriteTime] DEFAULT ((0)),
[SourceEntity] [int] NULL,
[FetchXmlList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[DataFilter] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TimeFilter] [int] NULL,
[TopicModelConfigurationId] [uniqueidentifier] NOT NULL,
[NgramSize] [int] NULL,
[SupportingSolutionId] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[TopicModelId] [uniqueidentifier] NOT NULL,
[TimeFilterDuration] [int] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_TopicModelConfigurationBase_ComponentState] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_TopicModelConfigurationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StopWords] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicModelConfigurationBase] ADD CONSTRAINT [PK_TopicModelConfigurationBase] PRIMARY KEY CLUSTERED  ([TopicModelConfigurationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
