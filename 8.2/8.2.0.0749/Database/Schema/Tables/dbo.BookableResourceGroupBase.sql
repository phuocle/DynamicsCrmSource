CREATE TABLE [dbo].[BookableResourceGroupBase]
(
[TimeZoneRuleVersionNumber] [int] NULL,
[ParentResource] [uniqueidentifier] NULL,
[ToDate] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[BookableResourceGroupId] [uniqueidentifier] NOT NULL,
[OverriddenCreatedOn] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[StateCode] [int] NOT NULL,
[ModifiedOn] [datetime] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[StatusCode] [int] NULL,
[ChildResource] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ImportSequenceNumber] [int] NULL,
[FromDate] [datetime] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_BookableResourceGroupBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD CONSTRAINT [PK_bookableresourcegroupBase] PRIMARY KEY CLUSTERED  ([BookableResourceGroupId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[BookableResourceGroupBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[BookableResourceGroupBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[BookableResourceGroupBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[BookableResourceGroupBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD CONSTRAINT [bookableresource_bookableresourcegroup_ChildResource] FOREIGN KEY ([ChildResource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD CONSTRAINT [bookableresource_bookableresourcegroup_ParentResource] FOREIGN KEY ([ParentResource]) REFERENCES [dbo].[BookableResourceBase] ([BookableResourceId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD CONSTRAINT [business_unit_bookableresourcegroup] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD CONSTRAINT [owner_bookableresourcegroup] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[BookableResourceGroupBase] ADD CONSTRAINT [TransactionCurrency_bookableresourcegroup] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
