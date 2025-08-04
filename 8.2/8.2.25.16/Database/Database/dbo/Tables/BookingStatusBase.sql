CREATE TABLE [dbo].[BookingStatusBase] (
    [Status]                    INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [Description]               NVARCHAR (100)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [BookingStatusId]           UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookingStatusBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookingstatusBase] PRIMARY KEY CLUSTERED ([BookingStatusId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookingstatus] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookingstatus] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookingstatus] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookingStatusBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookingStatusBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookingStatusBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookingStatusBase]([Name] ASC) WITH (FILLFACTOR = 80);

