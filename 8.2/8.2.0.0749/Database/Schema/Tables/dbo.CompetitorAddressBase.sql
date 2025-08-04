CREATE TABLE [dbo].[CompetitorAddressBase]
(
[ParentId] [uniqueidentifier] NOT NULL,
[CompetitorAddressId] [uniqueidentifier] NOT NULL,
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
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Composite] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorAddressBase] ADD CONSTRAINT [cndx_PrimaryKey_CompetitorAddress] PRIMARY KEY CLUSTERED  ([CompetitorAddressId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_addresses] ON [dbo].[CompetitorAddressBase] ([ParentId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorAddressBase] ADD CONSTRAINT [AK1_CompetitorAddressBase] UNIQUE NONCLUSTERED  ([ParentId], [AddressNumber]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CompetitorAddressBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CompetitorAddressBase] ADD CONSTRAINT [competitor_addresses] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId])
GO
