CREATE TABLE [dbo].[TopicModelBase]
(
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[BuildRecurrence] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[MaxTopics] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[AzureServiceConnectionId] [uniqueidentifier] NULL,
[AzureSchedulerJobName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[EndTime] [datetime] NULL,
[TopicModelId] [uniqueidentifier] NOT NULL,
[AvgNumberofTopics] [int] NULL,
[ConfigurationUsed] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[MaxNumberofTopics] [int] NULL,
[SourceEntity] [int] NULL,
[StartTime] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[StateCode] [int] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[TotalTopicsFound] [int] NULL,
[TopicsLastCreatedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[AzureSchedulerTestJobName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AzureSchedulerOnDemandJobName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicModelBase] ADD CONSTRAINT [PK_topicmodelBase] PRIMARY KEY CLUSTERED  ([TopicModelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_TopicModel_Name] ON [dbo].[TopicModelBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicModelBase] ADD CONSTRAINT [azureserviceconnection_topicmodel] FOREIGN KEY ([AzureServiceConnectionId]) REFERENCES [dbo].[AzureServiceConnectionBase] ([AzureServiceConnectionId])
GO
ALTER TABLE [dbo].[TopicModelBase] ADD CONSTRAINT [topicmodelconfiguration_topicmodel] FOREIGN KEY ([ConfigurationUsed]) REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
GO
