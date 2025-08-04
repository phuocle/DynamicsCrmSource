CREATE TABLE [dbo].[TopicHistoryBase] (
    [TopicHistoryId]               UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [TopicModelExecutionHistoryId] UNIQUEIDENTIFIER NULL,
    [KeyPhrase]                    NVARCHAR (512)   NULL,
    [Weight]                       INT              NULL,
    CONSTRAINT [PK_TopicHistoryBase] PRIMARY KEY CLUSTERED ([TopicHistoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [topicmodelexecutionhistory_topichistory] FOREIGN KEY ([TopicModelExecutionHistoryId]) REFERENCES [dbo].[TopicModelExecutionHistoryBase] ([TopicModelExecutionHistoryId])
);


GO
ALTER TABLE [dbo].[TopicHistoryBase] SET (LOCK_ESCALATION = DISABLE);

