CREATE TABLE [dbo].[TranslationProcessBase] (
    [VersionNumber]                 ROWVERSION       NULL,
    [StatusCode]                    INT              NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [KnowledgeArticleId]            UNIQUEIDENTIFIER NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [StateCode]                     INT              NOT NULL,
    [ImportSequenceNumber]          INT              NULL,
    [CompletedOn]                   DATETIME         NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_702d7f7e040e41bcbf34bc65ab49b22a]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_translationprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TranslationProcessBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[TranslationProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TranslationProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_translationprocess_Name]
    ON [dbo].[TranslationProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_translationprocess_Knowledgearticle]
    ON [dbo].[TranslationProcessBase]([KnowledgeArticleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_translationprocess_Activestage]
    ON [dbo].[TranslationProcessBase]([ActiveStageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A5E5B4B89BD4C5DFA3976E366]
    ON [dbo].[TranslationProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name], [CreatedOn], [KnowledgeArticleId], [ActiveStageId], [StateCode], [StatusCode], [ProcessId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A5E5B4B89BD4C5DFA3976E366]
    ON [dbo].[TranslationProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

