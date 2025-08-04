CREATE TABLE [dbo].[TopicHistoryBase] (
    [Weight]                       INT              NULL,
    [TopicModelExecutionHistoryId] UNIQUEIDENTIFIER NULL,
    [TopicHistoryId]               UNIQUEIDENTIFIER NOT NULL,
    [KeyPhrase]                    NVARCHAR (512)   NULL,
    CONSTRAINT [PK_TopicHistoryBase] PRIMARY KEY CLUSTERED ([TopicHistoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [topicmodelexecutionhistory_topichistory] FOREIGN KEY ([TopicModelExecutionHistoryId]) REFERENCES [dbo].[TopicModelExecutionHistoryBase] ([TopicModelExecutionHistoryId])
);

