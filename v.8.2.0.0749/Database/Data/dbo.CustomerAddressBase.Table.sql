USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CustomerAddressBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerAddressBase](
	[ParentId] [uniqueidentifier] NOT NULL,
	[CustomerAddressId] [uniqueidentifier] NOT NULL,
	[AddressNumber] [int] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[AddressTypeCode] [int] NULL,
	[Name] [nvarchar](200) NULL,
	[PrimaryContactName] [nvarchar](150) NULL,
	[Line1] [nvarchar](4000) NULL,
	[Line2] [nvarchar](4000) NULL,
	[Line3] [nvarchar](4000) NULL,
	[City] [nvarchar](4000) NULL,
	[StateOrProvince] [nvarchar](4000) NULL,
	[County] [nvarchar](4000) NULL,
	[Country] [nvarchar](4000) NULL,
	[PostOfficeBox] [nvarchar](4000) NULL,
	[PostalCode] [nvarchar](4000) NULL,
	[UTCOffset] [int] NULL,
	[FreightTermsCode] [int] NULL,
	[UPSZone] [nvarchar](4) NULL,
	[Latitude] [float] NULL,
	[Telephone1] [nvarchar](50) NULL,
	[Longitude] [float] NULL,
	[ShippingMethodCode] [int] NULL,
	[Telephone2] [nvarchar](50) NULL,
	[Telephone3] [nvarchar](50) NULL,
	[Fax] [nvarchar](50) NULL,
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
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ParentIdTypeCode] [int] NULL,
	[Composite] [nvarchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [cndx_ParentIdAddressNumber]    Script Date: 4/10/2017 9:59:18 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_ParentIdAddressNumber] ON [dbo].[CustomerAddressBase]
(
	[ParentId] ASC,
	[AddressNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_PrimaryKey_CustomerAddress]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[CustomerAddressBase] ADD  CONSTRAINT [cndx_PrimaryKey_CustomerAddress] PRIMARY KEY NONCLUSTERED 
(
	[CustomerAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_NameCustomerAddressId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_NameCustomerAddressId] ON [dbo].[CustomerAddressBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomerAddressBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_Contact_CustomerAddress]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Contact_CustomerAddress] ON [dbo].[CustomerAddressBase]
(
	[ParentId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerAddressBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_CustomerAddress] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[CustomerAddressBase] CHECK CONSTRAINT [TransactionCurrency_CustomerAddress]
GO
