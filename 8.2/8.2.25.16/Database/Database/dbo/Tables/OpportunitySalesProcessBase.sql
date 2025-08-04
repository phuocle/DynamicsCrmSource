CREATE TABLE [dbo].[OpportunitySalesProcessBase] (
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [QuoteId]                       UNIQUEIDENTIFIER NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber]          INT              NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [StatusCode]                    INT              NULL,
    [OpportunityId]                 UNIQUEIDENTIFIER NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [StateCode]                     INT              NOT NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [CompletedOn]                   DATETIME         NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [SalesOrderId]                  UNIQUEIDENTIFIER NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_e213853d6a2f4927af426890a1161dcf]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_opportunitysalesprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[OpportunitySalesProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunitySalesProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_opportunitysalesprocess_Name]
    ON [dbo].[OpportunitySalesProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);

