CREATE TABLE [dbo].[BookableResourceBookingHeaderBase] (
    [BookableResourceBookingHeaderId] UNIQUEIDENTIFIER NOT NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [Name]                            NVARCHAR (100)   NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [CreatedOn]                       DATETIME         NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [StatusCode]                      INT              NULL,
    [StateCode]                       INT              NOT NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [StartTime]                       DATETIME         NULL,
    [Duration]                        INT              NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [ImportSequenceNumber]            INT              NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [EndTime]                         DATETIME         NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [OwnerId]                         UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_BookableResourceBookingHeaderBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcebookingheaderBase] PRIMARY KEY CLUSTERED ([BookableResourceBookingHeaderId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookableresourcebookingheader] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcebookingheader] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcebookingheader] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceBookingHeaderBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceBookingHeaderBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceBookingHeaderBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceBookingHeaderBase]([Name] ASC) WITH (FILLFACTOR = 80);

