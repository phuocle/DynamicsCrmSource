USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PublisherAddressBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PublisherAddressBase](
	[Line1] [nvarchar](4000) NULL,
	[Line3] [nvarchar](4000) NULL,
	[UTCOffset] [int] NULL,
	[Telephone2] [nvarchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[Longitude] [float] NULL,
	[VersionNumber] [timestamp] NULL,
	[PublisherAddressId] [uniqueidentifier] NOT NULL,
	[FreightTermsCode] [int] NULL,
	[PrimaryContactName] [nvarchar](150) NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Line2] [nvarchar](4000) NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ShippingMethodCode] [int] NULL,
	[PostalCode] [nvarchar](4000) NULL,
	[ModifiedOn] [datetime] NULL,
	[City] [nvarchar](4000) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ImportSequenceNumber] [int] NULL,
	[Latitude] [float] NULL,
	[Name] [nvarchar](200) NULL,
	[AddressTypeCode] [int] NULL,
	[Telephone3] [nvarchar](50) NULL,
	[ParentId] [uniqueidentifier] NOT NULL,
	[StateOrProvince] [nvarchar](4000) NULL,
	[Country] [nvarchar](4000) NULL,
	[Telephone1] [nvarchar](50) NULL,
	[PostOfficeBox] [nvarchar](4000) NULL,
	[AddressNumber] [int] NULL,
	[Fax] [nvarchar](50) NULL,
	[County] [nvarchar](4000) NULL,
	[UPSZone] [nvarchar](4) NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ParentIdTypeCode] [int] NULL,
 CONSTRAINT [cndx_PrimaryKey_PublisherAddress] PRIMARY KEY CLUSTERED 
(
	[PublisherAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[PublisherAddressBase] ([Line1], [Line3], [UTCOffset], [Telephone2], [CreatedOn], [Longitude], [PublisherAddressId], [FreightTermsCode], [PrimaryContactName], [ModifiedBy], [Line2], [CreatedOnBehalfBy], [ShippingMethodCode], [PostalCode], [ModifiedOn], [City], [ModifiedOnBehalfBy], [ImportSequenceNumber], [Latitude], [Name], [AddressTypeCode], [Telephone3], [ParentId], [StateOrProvince], [Country], [Telephone1], [PostOfficeBox], [AddressNumber], [Fax], [County], [UPSZone], [UTCConversionTimeZoneCode], [CreatedBy], [TimeZoneRuleVersionNumber], [ParentIdTypeCode]) VALUES (NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, N'02741a6a-461b-484a-9d91-011f36a6963b', NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'd21aab71-79e7-11dd-8874-00188b01e34f', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL)
INSERT [dbo].[PublisherAddressBase] ([Line1], [Line3], [UTCOffset], [Telephone2], [CreatedOn], [Longitude], [PublisherAddressId], [FreightTermsCode], [PrimaryContactName], [ModifiedBy], [Line2], [CreatedOnBehalfBy], [ShippingMethodCode], [PostalCode], [ModifiedOn], [City], [ModifiedOnBehalfBy], [ImportSequenceNumber], [Latitude], [Name], [AddressTypeCode], [Telephone3], [ParentId], [StateOrProvince], [Country], [Telephone1], [PostOfficeBox], [AddressNumber], [Fax], [County], [UPSZone], [UTCConversionTimeZoneCode], [CreatedBy], [TimeZoneRuleVersionNumber], [ParentIdTypeCode]) VALUES (NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:27.000' AS DateTime), NULL, N'75cf0736-1581-43a0-8303-035938ce8a43', NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:27.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'd21aab70-79e7-11dd-8874-00188b01e34f', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL)
INSERT [dbo].[PublisherAddressBase] ([Line1], [Line3], [UTCOffset], [Telephone2], [CreatedOn], [Longitude], [PublisherAddressId], [FreightTermsCode], [PrimaryContactName], [ModifiedBy], [Line2], [CreatedOnBehalfBy], [ShippingMethodCode], [PostalCode], [ModifiedOn], [City], [ModifiedOnBehalfBy], [ImportSequenceNumber], [Latitude], [Name], [AddressTypeCode], [Telephone3], [ParentId], [StateOrProvince], [Country], [Telephone1], [PostOfficeBox], [AddressNumber], [Fax], [County], [UPSZone], [UTCConversionTimeZoneCode], [CreatedBy], [TimeZoneRuleVersionNumber], [ParentIdTypeCode]) VALUES (NULL, NULL, NULL, NULL, CAST(N'2017-04-10 14:29:12.000' AS DateTime), NULL, N'06493306-9a73-4278-a63b-0aec3ff42781', NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, NULL, CAST(N'2017-04-10 14:29:12.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL)
INSERT [dbo].[PublisherAddressBase] ([Line1], [Line3], [UTCOffset], [Telephone2], [CreatedOn], [Longitude], [PublisherAddressId], [FreightTermsCode], [PrimaryContactName], [ModifiedBy], [Line2], [CreatedOnBehalfBy], [ShippingMethodCode], [PostalCode], [ModifiedOn], [City], [ModifiedOnBehalfBy], [ImportSequenceNumber], [Latitude], [Name], [AddressTypeCode], [Telephone3], [ParentId], [StateOrProvince], [Country], [Telephone1], [PostOfficeBox], [AddressNumber], [Fax], [County], [UPSZone], [UTCConversionTimeZoneCode], [CreatedBy], [TimeZoneRuleVersionNumber], [ParentIdTypeCode]) VALUES (NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, N'1e87e4ad-fb8f-446c-91b3-208b5f29d9a3', NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:28.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'd21aab71-79e7-11dd-8874-00188b01e34f', NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL)
INSERT [dbo].[PublisherAddressBase] ([Line1], [Line3], [UTCOffset], [Telephone2], [CreatedOn], [Longitude], [PublisherAddressId], [FreightTermsCode], [PrimaryContactName], [ModifiedBy], [Line2], [CreatedOnBehalfBy], [ShippingMethodCode], [PostalCode], [ModifiedOn], [City], [ModifiedOnBehalfBy], [ImportSequenceNumber], [Latitude], [Name], [AddressTypeCode], [Telephone3], [ParentId], [StateOrProvince], [Country], [Telephone1], [PostOfficeBox], [AddressNumber], [Fax], [County], [UPSZone], [UTCConversionTimeZoneCode], [CreatedBy], [TimeZoneRuleVersionNumber], [ParentIdTypeCode]) VALUES (NULL, NULL, NULL, NULL, CAST(N'2017-04-10 14:29:12.000' AS DateTime), NULL, N'a5ed4c03-0976-4bee-94a2-2bb542658148', NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, NULL, CAST(N'2017-04-10 14:29:12.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'b42a536f-8560-42c1-a8b8-eb331c9d90d5', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL)
INSERT [dbo].[PublisherAddressBase] ([Line1], [Line3], [UTCOffset], [Telephone2], [CreatedOn], [Longitude], [PublisherAddressId], [FreightTermsCode], [PrimaryContactName], [ModifiedBy], [Line2], [CreatedOnBehalfBy], [ShippingMethodCode], [PostalCode], [ModifiedOn], [City], [ModifiedOnBehalfBy], [ImportSequenceNumber], [Latitude], [Name], [AddressTypeCode], [Telephone3], [ParentId], [StateOrProvince], [Country], [Telephone1], [PostOfficeBox], [AddressNumber], [Fax], [County], [UPSZone], [UTCConversionTimeZoneCode], [CreatedBy], [TimeZoneRuleVersionNumber], [ParentIdTypeCode]) VALUES (NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:27.000' AS DateTime), NULL, N'12b225e1-4c0f-4caa-82bc-ec3c87089b22', NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL, NULL, NULL, CAST(N'2017-04-10 13:44:27.000' AS DateTime), NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'd21aab70-79e7-11dd-8874-00188b01e34f', NULL, NULL, NULL, NULL, 2, NULL, NULL, NULL, NULL, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', NULL, NULL)
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_NamePublisherAddressId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_NamePublisherAddressId] ON [dbo].[PublisherAddressBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PublisherAddressBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_Publisher_PublisherAddress]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Publisher_PublisherAddress] ON [dbo].[PublisherAddressBase]
(
	[ParentId] ASC,
	[AddressNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
