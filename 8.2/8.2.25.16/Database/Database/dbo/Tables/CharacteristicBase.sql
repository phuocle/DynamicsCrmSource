CREATE TABLE [dbo].[CharacteristicBase] (
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CharacteristicId]          UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [StatusCode]                INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [CharacteristicType]        INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (100)   NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_CharacteristicBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_characteristicBase] PRIMARY KEY CLUSTERED ([CharacteristicId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_characteristic] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_characteristic] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_characteristic] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CharacteristicBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CharacteristicBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[CharacteristicBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[CharacteristicBase]([Name] ASC) WITH (FILLFACTOR = 80);

