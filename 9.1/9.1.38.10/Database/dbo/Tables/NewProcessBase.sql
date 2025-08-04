CREATE TABLE [dbo].[NewProcessBase] (
    [StatusCode]                    INT              NULL,
    [KnowledgeArticleId]            UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [CompletedOn]                   DATETIME         NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [StateCode]                     INT              NOT NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]          INT              NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_c0cfcb8c11b5485a8d1f3ac17b1ad0cc]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_newprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[NewProcessBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[NewProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[NewProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_newprocess_Name]
    ON [dbo].[NewProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_newprocess_Activestage]
    ON [dbo].[NewProcessBase]([ActiveStageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_newprocess_Knowledgearticle]
    ON [dbo].[NewProcessBase]([KnowledgeArticleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A818E4B89BD4C5DFA3976E366]
    ON [dbo].[NewProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name], [CreatedOn], [KnowledgeArticleId], [ActiveStageId], [StateCode], [StatusCode], [ProcessId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A818E4B89BD4C5DFA3976E366]
    ON [dbo].[NewProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

