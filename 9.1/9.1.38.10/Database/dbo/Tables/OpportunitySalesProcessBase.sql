CREATE TABLE [dbo].[OpportunitySalesProcessBase] (
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
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
    [Name]                          NVARCHAR (200)   NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [CompletedOn]                   DATETIME         NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [StateCode]                     INT              NOT NULL,
    [StatusCode]                    INT              NULL,
    [OpportunityId]                 UNIQUEIDENTIFIER NULL,
    [QuoteId]                       UNIQUEIDENTIFIER NULL,
    [SalesOrderId]                  UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_e213853d6a2f4927af426890a1161dcf]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_opportunitysalesprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[OpportunitySalesProcessBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OpportunitySalesProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[OpportunitySalesProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_opportunitysalesprocess_Name]
    ON [dbo].[OpportunitySalesProcessBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_OpportunitySalesProcessBase_ProcessId_OpportunityId]
    ON [dbo].[OpportunitySalesProcessBase]([ProcessId] ASC, [OpportunityId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A707D4B89BD4C5DFA3976E366]
    ON [dbo].[OpportunitySalesProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name], [CreatedOn], [OpportunityId], [ActiveStageId], [StateCode], [StatusCode], [ProcessId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ActiveStageId]
    ON [dbo].[OpportunitySalesProcessBase]([ActiveStageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A707D4B89BD4C5DFA3976E366]
    ON [dbo].[OpportunitySalesProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_OpportunityId]
    ON [dbo].[OpportunitySalesProcessBase]([OpportunityId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

