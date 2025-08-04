CREATE TABLE [dbo].[BookableResourceCategoryBase] (
    [StateCode]                  INT              NOT NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [Name]                       NVARCHAR (100)   NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [Description]                NVARCHAR (100)   NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [BookableResourceCategoryId] UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OwnerId]                    UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [StatusCode]                 INT              NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OwnerIdType]                INT              CONSTRAINT [DF_BookableResourceCategoryBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcecategoryBase] PRIMARY KEY CLUSTERED ([BookableResourceCategoryId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_bookableresourcecategory] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcecategory] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcecategory] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceCategoryBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceCategoryBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceCategoryBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceCategoryBase]([Name] ASC) WITH (FILLFACTOR = 80);

