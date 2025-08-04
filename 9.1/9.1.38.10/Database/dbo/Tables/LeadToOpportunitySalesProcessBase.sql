CREATE TABLE [dbo].[LeadToOpportunitySalesProcessBase] (
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
    [LeadId]                        UNIQUEIDENTIFIER NULL,
    [OpportunityId]                 UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_e7d20e6b46c541d7b8b5ad5f9af1635d]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_leadtoopportunitysalesprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[LeadToOpportunitySalesProcessBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_leadtoopportunitysalesprocess_Name]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_LeadId]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([LeadId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A6F6C4B89BD4C5DFA3976E366]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name], [CreatedOn], [LeadId], [ActiveStageId], [StateCode], [StatusCode], [ProcessId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_ActiveStageId]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([ActiveStageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A6F6C4B89BD4C5DFA3976E366]
    ON [dbo].[LeadToOpportunitySalesProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

