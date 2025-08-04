CREATE TABLE [dbo].[msdyn_knowledgeinteractioninsightBase] (
    [msdyn_knowledgeinteractioninsightId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                           DATETIME         NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [OwnerId]                             UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                         INT              CONSTRAINT [DF_msdyn_knowledgeinteractioninsightBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                  UNIQUEIDENTIFIER NULL,
    [statecode]                           INT              NOT NULL,
    [statuscode]                          INT              NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [ImportSequenceNumber]                INT              NULL,
    [OverriddenCreatedOn]                 DATETIME         NULL,
    [TimeZoneRuleVersionNumber]           INT              NULL,
    [UTCConversionTimeZoneCode]           INT              NULL,
    [msdyn_InteractionType]               NVARCHAR (100)   NULL,
    [msdyn_KnowledgeOperationId]          NVARCHAR (36)    NULL,
    [msdyn_KnowledgeOperationType]        NVARCHAR (100)   NULL,
    [msdyn_TimeStamp]                     DATETIME         NULL,
    [msdyn_ArticleRecordId]               NVARCHAR (36)    NULL,
    [msdyn_ArticleRelevance]              FLOAT (53)       NULL,
    [msdyn_ArticleRank]                   INT              NULL,
    [msdyn_InteractionContext]            NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_msdyn_knowledgeinteractioninsightBase] PRIMARY KEY CLUSTERED ([msdyn_knowledgeinteractioninsightId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_knowledgeinteractioninsight] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_msdyn_knowledgeinteractioninsight] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([OwnerId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_msdyn_knowledgeinteractioninsights]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([OwningBusinessUnit] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_InteractionType]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([msdyn_InteractionType] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DDABD1F136C94C428CB66D8217A00B35]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([msdyn_knowledgeinteractioninsightId] ASC)
    INCLUDE([msdyn_InteractionType]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DDABD1F136C94C428CB66D8217A00B35]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([msdyn_knowledgeinteractioninsightId] ASC)
    INCLUDE([msdyn_InteractionType], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DDABD1F136C94C428CB66D8217A00B35]
    ON [dbo].[msdyn_knowledgeinteractioninsightBase]([msdyn_InteractionType] ASC, [msdyn_knowledgeinteractioninsightId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

