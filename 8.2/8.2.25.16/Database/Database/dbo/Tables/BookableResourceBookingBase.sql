CREATE TABLE [dbo].[BookableResourceBookingBase] (
    [BookingStatus]             UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [BookingType]               INT              NULL,
    [StartTime]                 DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [BookableResourceBookingId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]                DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [StatusCode]                INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [Duration]                  INT              NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (100)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    [EndTime]                   DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Resource]                  UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [Header]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_BookableResourceBookingBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcebookingBase] PRIMARY KEY CLUSTERED ([BookableResourceBookingId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcebooking_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [bookableresourcebookingheader_bookableresourcebooking_Header] FOREIGN KEY ([Header]) REFERENCES [dbo].[BookableResourceBookingHeaderBase] ([BookableResourceBookingHeaderId]),
    CONSTRAINT [bookingstatus_bookableresourcebooking_BookingStatus] FOREIGN KEY ([BookingStatus]) REFERENCES [dbo].[BookingStatusBase] ([BookingStatusId]),
    CONSTRAINT [business_unit_bookableresourcebooking] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcebooking] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcebooking] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceBookingBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceBookingBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceBookingBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceBookingBase]([Name] ASC) WITH (FILLFACTOR = 80);

