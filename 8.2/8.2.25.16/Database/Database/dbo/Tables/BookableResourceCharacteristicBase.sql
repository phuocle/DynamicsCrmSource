CREATE TABLE [dbo].[BookableResourceCharacteristicBase] (
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [TraversedPath]                    NVARCHAR (1250)  NULL,
    [Name]                             NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    [BookableResourceCharacteristicId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                        DATETIME         NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [Characteristic]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [Resource]                         UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]             INT              NULL,
    [RatingValue]                      UNIQUEIDENTIFIER NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_BookableResourceCharacteristicBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcecharacteristicBase] PRIMARY KEY CLUSTERED ([BookableResourceCharacteristicId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcecharacteristic_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [business_unit_bookableresourcecharacteristic] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [characteristic_bookableresourcecharacteristic_Characteristic] FOREIGN KEY ([Characteristic]) REFERENCES [dbo].[CharacteristicBase] ([CharacteristicId]),
    CONSTRAINT [owner_bookableresourcecharacteristic] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [ratingvalue_bookableresourcecharacteristic_RatingValue] FOREIGN KEY ([RatingValue]) REFERENCES [dbo].[RatingValueBase] ([RatingValueId]),
    CONSTRAINT [TransactionCurrency_bookableresourcecharacteristic] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceCharacteristicBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceCharacteristicBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceCharacteristicBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceCharacteristicBase]([Name] ASC) WITH (FILLFACTOR = 80);

