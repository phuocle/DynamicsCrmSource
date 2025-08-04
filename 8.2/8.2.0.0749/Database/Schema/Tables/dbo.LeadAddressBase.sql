CREATE TABLE [dbo].[LeadAddressBase]
(
[ParentId] [uniqueidentifier] NOT NULL,
[LeadAddressId] [uniqueidentifier] NOT NULL,
[AddressNumber] [int] NULL,
[AddressTypeCode] [int] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
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
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadAddressBase] ADD CONSTRAINT [cndx_PrimaryKey_LeadAddress] PRIMARY KEY CLUSTERED  ([LeadAddressId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_addresses] ON [dbo].[LeadAddressBase] ([ParentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadAddressBase] ADD CONSTRAINT [AK1_LeadAddressBase] UNIQUE NONCLUSTERED  ([ParentId], [AddressNumber]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadAddressBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadAddressBase] ADD CONSTRAINT [lead_addresses] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[LeadAddressBase] ADD CONSTRAINT [TransactionCurrency_LeadAddress] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
