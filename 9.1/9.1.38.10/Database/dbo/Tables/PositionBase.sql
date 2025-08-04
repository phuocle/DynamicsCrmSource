CREATE TABLE [dbo].[PositionBase] (
    [ParentPositionId]          UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Description]               NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [PositionId]                UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_PositionBase] PRIMARY KEY CLUSTERED ([PositionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [position_parent_position] FOREIGN KEY ([ParentPositionId]) REFERENCES [dbo].[PositionBase] ([PositionId]),
    CONSTRAINT [transactioncurrency_position] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[PositionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[PositionBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[PositionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[PositionBase]([statecode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_ParentPositionId]
    ON [dbo].[PositionBase]([ParentPositionId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B27700E2799C48A288FD1895E7313A06]
    ON [dbo].[PositionBase]([PositionId] ASC)
    INCLUDE([Name], [ParentPositionId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_B27700E2799C48A288FD1895E7313A06]
    ON [dbo].[PositionBase]([PositionId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_B27700E2799C48A288FD1895E7313A06]
    ON [dbo].[PositionBase]([Name] ASC, [PositionId] ASC)
    INCLUDE([ParentPositionId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

