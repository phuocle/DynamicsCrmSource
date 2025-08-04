CREATE TABLE [dbo].[BookableResourceCharacteristicBase] (
    [BookableResourceCharacteristicId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                        DATETIME         NULL,
    [CreatedBy]                        UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                       DATETIME         NULL,
    [ModifiedBy]                       UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                          UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                      INT              CONSTRAINT [DF_BookableResourceCharacteristicBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]                    ROWVERSION       NULL,
    [ImportSequenceNumber]             INT              NULL,
    [OverriddenCreatedOn]              DATETIME         NULL,
    [TimeZoneRuleVersionNumber]        INT              NULL,
    [UTCConversionTimeZoneCode]        INT              NULL,
    [Name]                             NVARCHAR (100)   NULL,
    [ProcessId]                        UNIQUEIDENTIFIER NULL,
    [StageId]                          UNIQUEIDENTIFIER NULL,
    [TraversedPath]                    NVARCHAR (1250)  NULL,
    [Characteristic]                   UNIQUEIDENTIFIER NULL,
    [RatingValue]                      UNIQUEIDENTIFIER NULL,
    [Resource]                         UNIQUEIDENTIFIER NULL,
    [StateCode]                        INT              NOT NULL,
    [StatusCode]                       INT              NULL,
    [ExchangeRate]                     DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]            UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourcecharacteristicBase] PRIMARY KEY CLUSTERED ([BookableResourceCharacteristicId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcecharacteristic_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [business_unit_bookableresourcecharacteristic] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [characteristic_bookableresourcecharacteristic_Characteristic] FOREIGN KEY ([Characteristic]) REFERENCES [dbo].[CharacteristicBase] ([CharacteristicId]),
    CONSTRAINT [owner_bookableresourcecharacteristic] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [ratingvalue_bookableresourcecharacteristic_RatingValue] FOREIGN KEY ([RatingValue]) REFERENCES [dbo].[RatingValueBase] ([RatingValueId]),
    CONSTRAINT [TransactionCurrency_bookableresourcecharacteristic] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceCharacteristicBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceCharacteristicBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceCharacteristicBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceCharacteristicBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceCharacteristicBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2F79402DFDB94DA08A0E9BB5956962BF]
    ON [dbo].[BookableResourceCharacteristicBase]([BookableResourceCharacteristicId] ASC)
    INCLUDE([Name], [CreatedOn], [Resource], [RatingValue], [Characteristic], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_2F79402DFDB94DA08A0E9BB5956962BF]
    ON [dbo].[BookableResourceCharacteristicBase]([BookableResourceCharacteristicId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

