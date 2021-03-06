USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TopicModelBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TopicModelBase](
	[ModifiedOn] [datetime] NULL,
	[Name] [nvarchar](100) NULL,
	[BuildRecurrence] [nvarchar](100) NULL,
	[MaxTopics] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[AzureServiceConnectionId] [uniqueidentifier] NULL,
	[AzureSchedulerJobName] [nvarchar](100) NULL,
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
	[Description] [nvarchar](max) NULL,
	[StateCode] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[TotalTopicsFound] [int] NULL,
	[TopicsLastCreatedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[AzureSchedulerTestJobName] [nvarchar](100) NULL,
	[AzureSchedulerOnDemandJobName] [nvarchar](100) NULL,
 CONSTRAINT [PK_topicmodelBase] PRIMARY KEY CLUSTERED 
(
	[TopicModelId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[TopicModelBase]  WITH CHECK ADD  CONSTRAINT [azureserviceconnection_topicmodel] FOREIGN KEY([AzureServiceConnectionId])
REFERENCES [dbo].[AzureServiceConnectionBase] ([AzureServiceConnectionId])
GO
ALTER TABLE [dbo].[TopicModelBase] CHECK CONSTRAINT [azureserviceconnection_topicmodel]
GO
ALTER TABLE [dbo].[TopicModelBase]  WITH CHECK ADD  CONSTRAINT [topicmodelconfiguration_topicmodel] FOREIGN KEY([ConfigurationUsed])
REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
GO
ALTER TABLE [dbo].[TopicModelBase] CHECK CONSTRAINT [topicmodelconfiguration_topicmodel]
GO
