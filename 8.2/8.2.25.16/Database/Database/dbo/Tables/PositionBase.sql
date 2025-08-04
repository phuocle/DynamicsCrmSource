CREATE TABLE [dbo].[PositionBase] (
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ParentPositionId]          UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [statecode]                 INT              NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedOn]                 DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Description]               NVARCHAR (100)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [PositionId]                UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    CONSTRAINT [PK_PositionBase] PRIMARY KEY CLUSTERED ([PositionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [position_parent_position] FOREIGN KEY ([ParentPositionId]) REFERENCES [dbo].[PositionBase] ([PositionId]),
    CONSTRAINT [transactioncurrency_position] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


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

