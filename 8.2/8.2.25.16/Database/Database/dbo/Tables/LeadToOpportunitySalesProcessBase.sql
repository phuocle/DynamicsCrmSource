CREATE TABLE [dbo].[LeadToOpportunitySalesProcessBase] (
    [LeadId]                        UNIQUEIDENTIFIER NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]          INT              NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [StateCode]                     INT              NOT NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              NULL,
    [OpportunityId]                 UNIQUEIDENTIFIER NULL,
    [CompletedOn]                   DATETIME         NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_e7d20e6b46c541d7b8b5ad5f9af1635d]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_leadtoopportunitysalesprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_leadtoopportunitysalesprocess_Name]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_e7d20e6b46c541d7b8b5ad5f9af1635d]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([Duration] ASC) WITH (FILLFACTOR = 80);

