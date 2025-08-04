CREATE TABLE [dbo].[NewProcessBase] (
    [CreatedOn]                     DATETIME         NULL,
    [KnowledgeArticleId]            UNIQUEIDENTIFIER NULL,
    [TraversedPath]                 NVARCHAR (1250)  NULL,
    [StateCode]                     INT              NOT NULL,
    [TransactionCurrencyId]         UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                    UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]          INT              NULL,
    [ModifiedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ActiveStageStartedOn]          DATETIME         NULL,
    [OverriddenCreatedOn]           DATETIME         NULL,
    [OrganizationId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                     UNIQUEIDENTIFIER NULL,
    [StatusCode]                    INT              NULL,
    [ActiveStageId]                 UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                  DECIMAL (23, 10) NULL,
    [CreatedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [VersionNumber]                 ROWVERSION       NULL,
    [BusinessProcessFlowInstanceId] UNIQUEIDENTIFIER NOT NULL,
    [ProcessId]                     UNIQUEIDENTIFIER NULL,
    [Name]                          NVARCHAR (200)   NULL,
    [ModifiedOn]                    DATETIME         NULL,
    [CompletedOn]                   DATETIME         NULL,
    [Duration]                      AS               ([dbo].[fn_UDF_c0cfcb8c11b5485a8d1f3ac17b1ad0cc]([CreatedOn],[CompletedOn])),
    CONSTRAINT [PK_newprocessBase] PRIMARY KEY CLUSTERED ([BusinessProcessFlowInstanceId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[NewProcessBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[NewProcessBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_newprocess_Name]
    ON [dbo].[NewProcessBase]([Name] ASC) WITH (FILLFACTOR = 80);

