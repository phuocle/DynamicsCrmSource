USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CompetitorAddressBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CompetitorAddressBase](
	[ParentId] [uniqueidentifier] NOT NULL,
	[CompetitorAddressId] [uniqueidentifier] NOT NULL,
	[AddressNumber] [int] NULL,
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
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Composite] [nvarchar](max) NULL,
 CONSTRAINT [cndx_PrimaryKey_CompetitorAddress] PRIMARY KEY CLUSTERED 
(
	[CompetitorAddressId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [AK1_CompetitorAddressBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[CompetitorAddressBase] ADD  CONSTRAINT [AK1_CompetitorAddressBase] UNIQUE NONCLUSTERED 
(
	[ParentId] ASC,
	[AddressNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorAddressBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_competitor_addresses]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_addresses] ON [dbo].[CompetitorAddressBase]
(
	[ParentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorAddressBase]  WITH CHECK ADD  CONSTRAINT [competitor_addresses] FOREIGN KEY([ParentId])
REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
ALTER TABLE [dbo].[CompetitorAddressBase] CHECK CONSTRAINT [competitor_addresses]
GO
