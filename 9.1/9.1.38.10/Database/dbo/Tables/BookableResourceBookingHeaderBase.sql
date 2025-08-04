CREATE TABLE [dbo].[BookableResourceBookingHeaderBase] (
    [BookableResourceBookingHeaderId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                       DATETIME         NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_BookableResourceBookingHeaderBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [Name]                            NVARCHAR (100)   NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [Duration]                        INT              NULL,
    [EndTime]                         DATETIME         NULL,
    [StartTime]                       DATETIME         NULL,
    [StateCode]                       INT              NOT NULL,
    [StatusCode]                      INT              NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourcebookingheaderBase] PRIMARY KEY CLUSTERED ([BookableResourceBookingHeaderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookableresourcebookingheader] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcebookingheader] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcebookingheader] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceBookingHeaderBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceBookingHeaderBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceBookingHeaderBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceBookingHeaderBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceBookingHeaderBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CBF23DDBC53C4889AD70CFCD5D48A192]
    ON [dbo].[BookableResourceBookingHeaderBase]([BookableResourceBookingHeaderId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CBF23DDBC53C4889AD70CFCD5D48A192]
    ON [dbo].[BookableResourceBookingHeaderBase]([BookableResourceBookingHeaderId] ASC)
    INCLUDE([CreatedOn], [Name], [StartTime], [EndTime], [Duration], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

