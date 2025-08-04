CREATE TABLE [dbo].[TopicModelBase] (
    [ModifiedOn]                    DATETIME         NULL,
    [Name]                          NVARCHAR (100)   NULL,
    [BuildRecurrence]               NVARCHAR (100)   NULL,
    [MaxTopics]                     INT              NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [AzureServiceConnectionId]      UNIQUEIDENTIFIER NULL,
    [AzureSchedulerJobName]         NVARCHAR (100)   NULL,
    [EndTime]                       DATETIME         NULL,
    [TopicModelId]                  UNIQUEIDENTIFIER NOT NULL,
    [AvgNumberofTopics]             INT              NULL,
    [ConfigurationUsed]             UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [MaxNumberofTopics]             INT              NULL,
    [SourceEntity]                  INT              NULL,
    [StartTime]                     DATETIME         NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              NULL,
    [Description]                   NVARCHAR (MAX)   NULL,
    [StateCode]                     INT              NOT NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [TotalTopicsFound]              INT              NULL,
    [TopicsLastCreatedOn]           DATETIME         NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [AzureSchedulerTestJobName]     NVARCHAR (100)   NULL,
    [AzureSchedulerOnDemandJobName] NVARCHAR (100)   NULL,
    CONSTRAINT [PK_topicmodelBase] PRIMARY KEY CLUSTERED ([TopicModelId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [azureserviceconnection_topicmodel] FOREIGN KEY ([AzureServiceConnectionId]) REFERENCES [dbo].[AzureServiceConnectionBase] ([AzureServiceConnectionId]),
    CONSTRAINT [topicmodelconfiguration_topicmodel] FOREIGN KEY ([ConfigurationUsed]) REFERENCES [dbo].[TopicModelConfigurationBaseIds] ([TopicModelConfigurationId])
);


GO
CREATE NONCLUSTERED INDEX [fndx_TopicModel_Name]
    ON [dbo].[TopicModelBase]([Name] ASC) WITH (FILLFACTOR = 80);

