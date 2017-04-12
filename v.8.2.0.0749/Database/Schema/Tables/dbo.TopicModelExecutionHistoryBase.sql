CREATE TABLE [dbo].[TopicModelExecutionHistoryBase]
(
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
[FetchXmlList] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TotalTime] [int] NULL,
[CreatedOn] [datetime] NULL,
[RecordCorrelationId] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ErrorDetails] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase] ADD CONSTRAINT [PK_TopicModelExecutionHistoryBase] PRIMARY KEY CLUSTERED  ([TopicModelExecutionHistoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase] ADD CONSTRAINT [topicmodel_topicmodelexecutionhistory] FOREIGN KEY ([TopicModelId]) REFERENCES [dbo].[TopicModelBase] ([TopicModelId])
GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase] ADD CONSTRAINT [topicmodelconfiguration_topicmodelexecutionhistory] FOREIGN KEY ([TopicModelConfigurationId]) REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
GO
