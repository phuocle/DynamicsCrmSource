CREATE TABLE [dbo].[BookableResourceCategoryAssnBase]
(
[ImportSequenceNumber] [int] NULL,
[ResourceCategory] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[Resource] [uniqueidentifier] NULL,
[BookableResourceCategoryAssnId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[StateCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceCategoryAssnBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD CONSTRAINT [PK_bookableresourcecategoryassnBase] PRIMARY KEY CLUSTERED  ([BookableResourceCategoryAssnId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceCategoryAssnBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceCategoryAssnBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceCategoryAssnBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceCategoryAssnBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD CONSTRAINT [bookableresource_bookableresourcecategoryassn_Resource] FOREIGN KEY ([Resource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD CONSTRAINT [bookableresourcecategory_bookableresourcecategoryassn_ResourceCategory] FOREIGN KEY ([ResourceCategory]) REFERENCES [dbo].[BookableResourceCategoryBase] ([BookableResourceCategoryId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD CONSTRAINT [business_unit_bookableresourcecategoryassn] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD CONSTRAINT [owner_bookableresourcecategoryassn] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryAssnBase] ADD CONSTRAINT [TransactionCurrency_bookableresourcecategoryassn] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
