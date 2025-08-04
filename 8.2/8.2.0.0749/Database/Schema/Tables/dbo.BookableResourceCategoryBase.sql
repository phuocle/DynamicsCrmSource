CREATE TABLE [dbo].[BookableResourceCategoryBase]
(
[StateCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[OverriddenCreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[BookableResourceCategoryId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceCategoryBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCategoryBase] ADD CONSTRAINT [PK_bookableresourcecategoryBase] PRIMARY KEY CLUSTERED  ([BookableResourceCategoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceCategoryBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceCategoryBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceCategoryBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceCategoryBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceCategoryBase] ADD CONSTRAINT [business_unit_bookableresourcecategory] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryBase] ADD CONSTRAINT [owner_bookableresourcecategory] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceCategoryBase] ADD CONSTRAINT [TransactionCurrency_bookableresourcecategory] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
