CREATE TABLE [dbo].[BookableResourceCategoryAssnBase] (
    [BookableResourceCategoryAssnId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [OwnerId]                        UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                    INT              CONSTRAINT [DF_BookableResourceCategoryAssnBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]             UNIQUEIDENTIFIER NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ImportSequenceNumber]           INT              NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [Name]                           NVARCHAR (100)   NULL,
    [Resource]                       UNIQUEIDENTIFIER NULL,
    [ResourceCategory]               UNIQUEIDENTIFIER NULL,
    [StateCode]                      INT              NOT NULL,
    [StatusCode]                     INT              NULL,
    [ExchangeRate]                   DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_bookableresourcecategoryassnBase] PRIMARY KEY CLUSTERED ([BookableResourceCategoryAssnId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bookableresource_bookableresourcecategoryassn_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId]),
    CONSTRAINT [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory] FOREIGN KEY ([ResourceCategory]) REFERENCES [dbo].[BookableResourceCategoryBase] ([BookableResourceCategoryId]),
    CONSTRAINT [business_unit_bookableresourcecategoryassn] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_bookableresourcecategoryassn] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_bookableresourcecategoryassn] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BookableResourceCategoryAssnBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[BookableResourceCategoryAssnBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[BookableResourceCategoryAssnBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[BookableResourceCategoryAssnBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_FF60528FE3D248529668DFBA7AF1B270]
    ON [dbo].[BookableResourceCategoryAssnBase]([BookableResourceCategoryAssnId] ASC)
    INCLUDE([CreatedOn], [Name], [ResourceCategory], [Resource], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_FF60528FE3D248529668DFBA7AF1B270]
    ON [dbo].[BookableResourceCategoryAssnBase]([BookableResourceCategoryAssnId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

