CREATE TABLE [dbo].[TopicModelBase] (
    [TopicModelId]                  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ImportSequenceNumber]          INT              NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TimeZoneRuleVersionNumber]     INT              NULL,
    [UTCConversionTimeZoneCode]     INT              NULL,
    [Name]                          NVARCHAR (100)   NULL,
    [MaxTopics]                     INT              NULL,
    [StatusCode]                    INT              NULL,
    [StateCode]                     INT              NOT NULL,
    [BuildRecurrence]               NVARCHAR (100)   NULL,
    [StartTime]                     DATETIME         NULL,
    [EndTime]                       DATETIME         NULL,
    [SourceEntity]                  INT              NULL,
    [ConfigurationUsed]             UNIQUEIDENTIFIER NULL,
    [Description]                   NVARCHAR (MAX)   NULL,
    [AzureServiceConnectionId]      UNIQUEIDENTIFIER NULL,
    [TopicsLastCreatedOn]           DATETIME         NULL,
    [TotalTopicsFound]              INT              NULL,
    [AvgNumberofTopics]             INT              NULL,
    [MaxNumberofTopics]             INT              NULL,
    [AzureSchedulerJobName]         NVARCHAR (100)   NULL,
    [AzureSchedulerTestJobName]     NVARCHAR (100)   NULL,
    [AzureSchedulerOnDemandJobName] NVARCHAR (100)   NULL,
    CONSTRAINT [PK_topicmodelBase] PRIMARY KEY CLUSTERED ([TopicModelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [azureserviceconnection_topicmodel] FOREIGN KEY ([AzureServiceConnectionId]) REFERENCES [dbo].[AzureServiceConnectionBase] ([AzureServiceConnectionId]),
    CONSTRAINT [topicmodelconfiguration_topicmodel] FOREIGN KEY ([ConfigurationUsed]) REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[TopicModelBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[TopicModelBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_TopicModel_Name]
    ON [dbo].[TopicModelBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_580B09B26807405BBF1FBBF330D859AF]
    ON [dbo].[TopicModelBase]([Name] ASC, [TopicModelId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_580B09B26807405BBF1FBBF330D859AF]
    ON [dbo].[TopicModelBase]([TopicModelId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

