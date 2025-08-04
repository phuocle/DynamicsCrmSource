CREATE TABLE [dbo].[PublisherAddressBase]
(
[Line1] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Line3] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[UTCOffset] [int] NULL,
[Telephone2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[Longitude] [float] NULL,
[VersionNumber] [timestamp] NULL,
[PublisherAddressId] [uniqueidentifier] NOT NULL,
[FreightTermsCode] [int] NULL,
[PrimaryContactName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Line2] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ShippingMethodCode] [int] NULL,
[PostalCode] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[City] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ImportSequenceNumber] [int] NULL,
[Latitude] [float] NULL,
[Name] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[AddressTypeCode] [int] NULL,
[Telephone3] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[ParentId] [uniqueidentifier] NOT NULL,
[StateOrProvince] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Country] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[Telephone1] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[PostOfficeBox] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[AddressNumber] [int] NULL,
[Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[County] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[UPSZone] [nvarchar] (4) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ParentIdTypeCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PublisherAddressBase] ADD CONSTRAINT [cndx_PrimaryKey_PublisherAddress] PRIMARY KEY CLUSTERED  ([PublisherAddressId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_NamePublisherAddressId] ON [dbo].[PublisherAddressBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Publisher_PublisherAddress] ON [dbo].[PublisherAddressBase] ([ParentId], [AddressNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PublisherAddressBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
