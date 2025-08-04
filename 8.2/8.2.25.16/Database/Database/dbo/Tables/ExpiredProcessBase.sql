CREATE TABLE [dbo].[ExpiredProcessBase] (
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [KnowledgeArticleId]            UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [StateCode]                     INT              NOT NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]          INT              NULL,
    [CompletedOn]                   DATETIME         NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_0d6a588cc1354e6dac26a40ea606a2fc]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_expiredprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


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
CREATE NONCLUSTERED INDEX [ndx_0d6a588cc1354e6dac26a40ea606a2fc]
    ON [dbo].[ExpiredProcessBase]([Duration] ASC) WITH (FILLFACTOR = 80);

