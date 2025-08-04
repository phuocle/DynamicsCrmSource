CREATE TABLE [dbo].[BookableResourceCategoryAssnBase] (
    [ImportSequenceNumber]           INT              NULL,
    [ResourceCategory]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [Resource]                       UNIQUEIDENTIFIER NULL,
    [BookableResourceCategoryAssnId] UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [StateCode]                      INT              NOT NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ExchangeRate]                   DECIMAL (23, 10) NULL,
    [OwningBusinessUnit]             UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]          UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [Name]                           NVARCHAR (100)   NULL,
    [CreatedOn]                      DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [OwnerId]                        UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [StatusCode]                     INT              NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [OwnerIdType]                    INT              CONSTRAINT [DF_BookableResourceCategoryAssnBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [PK_bookableresourcecategoryassnBase] PRIMARY KEY CLUSTERED ([BookableResourceCategoryAssnId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcecategoryassn_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory] FOREIGN KEY ([ResourceCategory]) REFERENCES [dbo].[BookableResourceCategoryBase] ([BookableResourceCategoryId]),
    CONSTRAINT [business_unit_bookableresourcecategoryassn] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcecategoryassn] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcecategoryassn] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceCategoryAssnBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceCategoryAssnBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceCategoryAssnBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceCategoryAssnBase]([Name] ASC) WITH (FILLFACTOR = 80);

