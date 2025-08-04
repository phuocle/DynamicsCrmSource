CREATE TABLE [dbo].[BookableResourceCategoryBase] (
    [BookableResourceCategoryId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerId]                    UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                INT              CONSTRAINT [DF_BookableResourceCategoryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]         UNIQUEIDENTIFIER NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [Name]                       NVARCHAR (100)   NULL,
    [Description]                NVARCHAR (100)   NULL,
    [StateCode]                  INT              NOT NULL,
    [StatusCode]                 INT              NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourcecategoryBase] PRIMARY KEY CLUSTERED ([BookableResourceCategoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookableresourcecategory] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcecategory] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcecategory] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceCategoryBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceCategoryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceCategoryBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceCategoryBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceCategoryBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_FD230910E2D24AE1812E1ED01A83BD81]
    ON [dbo].[BookableResourceCategoryBase]([BookableResourceCategoryId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_FD230910E2D24AE1812E1ED01A83BD81]
    ON [dbo].[BookableResourceCategoryBase]([Name] ASC, [BookableResourceCategoryId] ASC)
    INCLUDE([CreatedOn], [Description], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_FD230910E2D24AE1812E1ED01A83BD81]
    ON [dbo].[BookableResourceCategoryBase]([BookableResourceCategoryId] ASC)
    INCLUDE([Name], [CreatedOn], [Description], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

