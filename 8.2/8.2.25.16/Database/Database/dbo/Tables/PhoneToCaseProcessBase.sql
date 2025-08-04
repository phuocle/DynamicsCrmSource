CREATE TABLE [dbo].[PhoneToCaseProcessBase] (
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [CreatedOn]                     DATETIME         NULL,
    [ImportSequenceNumber]          INT              NULL,
    [StateCode]                     INT              NOT NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [StatusCode]                    INT              NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [IncidentId]                    UNIQUEIDENTIFIER NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [CompletedOn]                   DATETIME         NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_7ba8a5cdd4c648ac8ed1655a56af9307]()),
    CONSTRAINT [PK_phonetocaseprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[PhoneToCaseProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PhoneToCaseProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_phonetocaseprocess_Name]
    ON [dbo].[PhoneToCaseProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);

