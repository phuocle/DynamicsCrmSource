CREATE TABLE [dbo].[TopicModelExecutionHistoryBase] (
    [TopicModelExecutionHistoryId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [OrganizationId]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ImportSequenceNumber]         INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [Name]                         NVARCHAR (100)   NULL,
    [TopicModelId]                 UNIQUEIDENTIFIER NULL,
    [TopicModelConfigurationId]    UNIQUEIDENTIFIER NULL,
    [RecordsProcessed]             INT              NULL,
    [TotalTime]                    INT              NULL,
    [NumberOfTopicsFound]          INT              NULL,
    [StartTime]                    DATETIME         NULL,
    [IsTestExecution]              BIT              NULL,
    [Status]                       INT              NULL,
    [StatusReason]                 INT              NULL,
    [FetchXmlList]                 NVARCHAR (MAX)   NULL,
    [MaxTopics]                    INT              NULL,
    [ErrorDetails]                 NVARCHAR (MAX)   NULL,
    [RecordCorrelationId]          NVARCHAR (100)   NULL,
    CONSTRAINT [PK_TopicModelExecutionHistoryBase] PRIMARY KEY CLUSTERED ([TopicModelExecutionHistoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [topicmodel_topicmodelexecutionhistory] FOREIGN KEY ([TopicModelId]) REFERENCES [dbo].[TopicModelBase] ([TopicModelId]),
    CONSTRAINT [topicmodelconfiguration_topicmodelexecutionhistory] FOREIGN KEY ([TopicModelConfigurationId]) REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TopicModelExecutionHistoryBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TopicModelExecutionHistoryBase] SET (LOCK_ESCALATION = DISABLE);

