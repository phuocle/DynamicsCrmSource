USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[InternalAddressBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[InternalAddressBase](
	[ParentId] [uniqueidentifier] NOT NULL,
	[InternalAddressId] [uniqueidentifier] NOT NULL,
	[AddressNumber] [int] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[AddressTypeCode] [int] NULL,
	[Name] [nvarchar](200) NULL,
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
	[UPSZone] [nvarchar](4) NULL,
	[Latitude] [float] NULL,
	[Telephone1] [nvarchar](64) NULL,
	[Longitude] [float] NULL,
	[ShippingMethodCode] [int] NULL,
	[Telephone2] [nvarchar](50) NULL,
	[Telephone3] [nvarchar](50) NULL,
	[VersionNumber] [timestamp] NULL,
	[Fax] [nvarchar](64) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Composite] [nvarchar](max) NULL,
 CONSTRAINT [cndx_PrimaryKey_InternalAddress] PRIMARY KEY CLUSTERED 
(
	[InternalAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[InternalAddressBase] ([ParentId], [InternalAddressId], [AddressNumber], [ObjectTypeCode], [AddressTypeCode], [Name], [Line1], [Line2], [Line3], [City], [StateOrProvince], [County], [Country], [PostOfficeBox], [PostalCode], [UTCOffset], [UPSZone], [Latitude], [Telephone1], [Longitude], [ShippingMethodCode], [Telephone2], [Telephone3], [Fax], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Composite]) VALUES (N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'65f35206-ea43-4b49-88e7-468e082c2da3', 1, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:43:58.000' AS DateTime), N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:43:58.000' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[InternalAddressBase] ([ParentId], [InternalAddressId], [AddressNumber], [ObjectTypeCode], [AddressTypeCode], [Name], [Line1], [Line2], [Line3], [City], [StateOrProvince], [County], [Country], [PostOfficeBox], [PostalCode], [UTCOffset], [UPSZone], [Latitude], [Telephone1], [Longitude], [ShippingMethodCode], [Telephone2], [Telephone3], [Fax], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Composite]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'3f1cb457-702e-4140-bbcf-5008abf633c7', 1, 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:44:20.000' AS DateTime), N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[InternalAddressBase] ([ParentId], [InternalAddressId], [AddressNumber], [ObjectTypeCode], [AddressTypeCode], [Name], [Line1], [Line2], [Line3], [City], [StateOrProvince], [County], [Country], [PostOfficeBox], [PostalCode], [UTCOffset], [UPSZone], [Latitude], [Telephone1], [Longitude], [ShippingMethodCode], [Telephone2], [Telephone3], [Fax], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Composite]) VALUES (N'c6acfcbe-f31d-e711-80d3-00155d00662d', N'b68476f0-0129-42c8-a896-65eb33dbeb7e', 2, 10, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:43:58.000' AS DateTime), N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:43:58.000' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[InternalAddressBase] ([ParentId], [InternalAddressId], [AddressNumber], [ObjectTypeCode], [AddressTypeCode], [Name], [Line1], [Line2], [Line3], [City], [StateOrProvince], [County], [Country], [PostOfficeBox], [PostalCode], [UTCOffset], [UPSZone], [Latitude], [Telephone1], [Longitude], [ShippingMethodCode], [Telephone2], [Telephone3], [Fax], [CreatedBy], [CreatedOn], [ModifiedBy], [ModifiedOn], [ModifiedOnBehalfBy], [CreatedOnBehalfBy], [Composite]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'53494c6e-40a6-4ddd-a306-dcec85860a3f', 2, 8, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:44:20.000' AS DateTime), N'00000000-0000-0000-0000-000000000000', CAST(N'2017-04-10 13:44:20.000' AS DateTime), NULL, NULL, NULL)
/****** Object:  Index [AK1_InternalAddressBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[InternalAddressBase] ADD  CONSTRAINT [AK1_InternalAddressBase] UNIQUE NONCLUSTERED 
(
	[ParentId] ASC,
	[AddressNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[InternalAddressBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_site_internal_addresses]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_site_internal_addresses] ON [dbo].[InternalAddressBase]
(
	[ParentId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
