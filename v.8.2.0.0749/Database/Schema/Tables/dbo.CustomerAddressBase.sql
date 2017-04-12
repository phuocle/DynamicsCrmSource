CREATE TABLE [dbo].[CustomerAddressBase]
(
[ParentId] [uniqueidentifier] NOT NULL,
[CustomerAddressId] [uniqueidentifier] NOT NULL,
[AddressNumber] [int] NULL,
[ObjectTypeCode] [int] NOT NULL,
[AddressTypeCode] [int] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[PrimaryContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[Line1] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Line2] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Line3] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[City] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[StateOrProvince] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[County] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Country] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[PostOfficeBox] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[PostalCode] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[UTCOffset] [int] NULL,
[FreightTermsCode] [int] NULL,
[UPSZone] [nvarchar] (4) COLLATE Latin1_General_CI_AI NULL,
[Latitude] [float] NULL,
[Telephone1] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Longitude] [float] NULL,
[ShippingMethodCode] [int] NULL,
[Telephone2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone3] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ParentIdTypeCode] [int] NULL,
[Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerAddressBase] ADD CONSTRAINT [cndx_PrimaryKey_CustomerAddress] PRIMARY KEY NONCLUSTERED  ([CustomerAddressId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_NameCustomerAddressId] ON [dbo].[CustomerAddressBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_ParentIdAddressNumber] ON [dbo].[CustomerAddressBase] ([ParentId], [AddressNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Contact_CustomerAddress] ON [dbo].[CustomerAddressBase] ([ParentId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomerAddressBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerAddressBase] ADD CONSTRAINT [TransactionCurrency_CustomerAddress] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
