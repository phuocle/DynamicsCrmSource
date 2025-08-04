CREATE TABLE [dbo].[TopicHistoryBase]
(
[Weight] [int] NULL,
[TopicModelExecutionHistoryId] [uniqueidentifier] NULL,
[TopicHistoryId] [uniqueidentifier] NOT NULL,
[KeyPhrase] [nvarchar] (512) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicHistoryBase] ADD CONSTRAINT [PK_TopicHistoryBase] PRIMARY KEY CLUSTERED  ([TopicHistoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[TopicHistoryBase] ADD CONSTRAINT [topicmodelexecutionhistory_topichistory] FOREIGN KEY ([TopicModelExecutionHistoryId]) REFERENCES [dbo].[TopicModelExecutionHistoryBase] ([TopicModelExecutionHistoryId])
GO
