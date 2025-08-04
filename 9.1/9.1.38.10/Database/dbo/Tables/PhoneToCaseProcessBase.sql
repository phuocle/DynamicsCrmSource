CREATE TABLE [dbo].[PhoneToCaseProcessBase] (
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
    [IncidentId]                    UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_7ba8a5cdd4c648ac8ed1655a56af9307]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_phonetocaseprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PhoneToCaseProcessBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PhoneToCaseProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PhoneToCaseProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_phonetocaseprocess_Name]
    ON [dbo].[PhoneToCaseProcessBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_IncidentId]
    ON [dbo].[PhoneToCaseProcessBase]([IncidentId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A4D4A4B89BD4C5DFA3976E366]
    ON [dbo].[PhoneToCaseProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name], [CreatedOn], [IncidentId], [ActiveStageId], [StateCode], [StatusCode], [ProcessId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A4D4A4B89BD4C5DFA3976E366]
    ON [dbo].[PhoneToCaseProcessBase]([BusinessProcessFlowInstanceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

