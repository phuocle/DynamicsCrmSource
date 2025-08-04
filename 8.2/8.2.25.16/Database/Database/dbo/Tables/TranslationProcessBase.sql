CREATE TABLE [dbo].[TranslationProcessBase] (
    [VersionNumber]                 ROWVERSION       NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              NULL,
    [ImportSequenceNumber]          INT              NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [CompletedOn]                   DATETIME         NULL,
    [KnowledgeArticleId]            UNIQUEIDENTIFIER NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [StateCode]                     INT              NOT NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_702d7f7e040e41bcbf34bc65ab49b22a]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_translationprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[TranslationProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TranslationProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_translationprocess_Name]
    ON [dbo].[TranslationProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);

