USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TopicModelExecutionHistoryBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TopicModelExecutionHistoryBase](
	[StartTime] [datetime] NULL,
	[TopicModelId] [uniqueidentifier] NULL,
	[NumberOfTopicsFound] [int] NULL,
	[IsTestExecution] [bit] NULL,
	[MaxTopics] [int] NULL,
	[TopicModelConfigurationId] [uniqueidentifier] NULL,
	[Status] [int] NULL,
	[StatusReason] [int] NULL,
	[RecordsProcessed] [int] NULL,
	[OrganizationId] [uniqueidentifier] NULL,
	[TopicModelExecutionHistoryId] [uniqueidentifier] NOT NULL,
	[FetchXmlList] [nvarchar](max) NULL,
	[TotalTime] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[RecordCorrelationId] [nvarchar](100) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ErrorDetails] [nvarchar](max) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
 CONSTRAINT [PK_TopicModelExecutionHistoryBase] PRIMARY KEY CLUSTERED 
(
	[TopicModelExecutionHistoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase]  WITH CHECK ADD  CONSTRAINT [topicmodel_topicmodelexecutionhistory] FOREIGN KEY([TopicModelId])
REFERENCES [dbo].[TopicModelBase] ([TopicModelId])
GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase] CHECK CONSTRAINT [topicmodel_topicmodelexecutionhistory]
GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase]  WITH CHECK ADD  CONSTRAINT [topicmodelconfiguration_topicmodelexecutionhistory] FOREIGN KEY([TopicModelConfigurationId])
REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase] CHECK CONSTRAINT [topicmodelconfiguration_topicmodelexecutionhistory]
GO
