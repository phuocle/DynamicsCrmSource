CREATE TABLE [dbo].[BookableResourceBookingBase] (
    [BookableResourceBookingId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookableResourceBookingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [BookingStatus]             UNIQUEIDENTIFIER NULL,
    [BookingType]               INT              NULL,
    [Duration]                  INT              NULL,
    [EndTime]                   DATETIME         NULL,
    [Header]                    UNIQUEIDENTIFIER NULL,
    [Resource]                  UNIQUEIDENTIFIER NULL,
    [StartTime]                 DATETIME         NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourcebookingBase] PRIMARY KEY CLUSTERED ([BookableResourceBookingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcebooking_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [bookableresourcebookingheader_bookableresourcebooking_Header] FOREIGN KEY ([Header]) REFERENCES [dbo].[BookableResourceBookingHeaderBase] ([BookableResourceBookingHeaderId]),
    CONSTRAINT [bookingstatus_bookableresourcebooking_BookingStatus] FOREIGN KEY ([BookingStatus]) REFERENCES [dbo].[BookingStatusBase] ([BookingStatusId]),
    CONSTRAINT [business_unit_bookableresourcebooking] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcebooking] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcebooking] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceBookingBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceBookingBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceBookingBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceBookingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceBookingBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DA813DB91702490995D885A52144AB1E]
    ON [dbo].[BookableResourceBookingBase]([BookableResourceBookingId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DA813DB91702490995D885A52144AB1E]
    ON [dbo].[BookableResourceBookingBase]([BookableResourceBookingId] ASC)
    INCLUDE([CreatedOn], [Name], [StartTime], [Resource], [EndTime], [Duration], [BookingType], [BookingStatus], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

