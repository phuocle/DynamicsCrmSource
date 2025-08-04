CREATE TABLE [dbo].[ExpiredProcessBase] (
    [StateCode]                     INT              NOT NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [KnowledgeArticleId]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [CompletedOn]                   DATETIME         NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]          INT              NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_0d6a588cc1354e6dac26a40ea606a2fc]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_expiredprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[ExpiredProcessBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ExpiredProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ExpiredProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_expiredprocess_Name]
    ON [dbo].[ExpiredProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_expiredprocess_Knowledgearticle]
    ON [dbo].[ExpiredProcessBase]([KnowledgeArticleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_expiredprocess_Activestage]
    ON [dbo].[ExpiredProcessBase]([ActiveStageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A3C394B89BD4C5DFA3976E366]
    ON [dbo].[ExpiredProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A3C394B89BD4C5DFA3976E366]
    ON [dbo].[ExpiredProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name], [CreatedOn], [KnowledgeArticleId], [ActiveStageId], [StateCode], [StatusCode], [ProcessId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

