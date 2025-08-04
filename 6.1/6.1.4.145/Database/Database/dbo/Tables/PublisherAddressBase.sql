CREATE TABLE [dbo].[PublisherAddressBase] (
    [Line1]                     NVARCHAR (4000)  NULL,
    [Line3]                     NVARCHAR (4000)  NULL,
    [UTCOffset]                 INT              NULL,
    [Telephone2]                NVARCHAR (50)    NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Longitude]                 FLOAT (53)       NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [PublisherAddressId]        UNIQUEIDENTIFIER NOT NULL,
    [FreightTermsCode]          INT              NULL,
    [PrimaryContactName]        NVARCHAR (150)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Line2]                     NVARCHAR (4000)  NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ShippingMethodCode]        INT              NULL,
    [PostalCode]                NVARCHAR (4000)  NULL,
    [ModifiedOn]                DATETIME         NULL,
    [City]                      NVARCHAR (4000)  NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [Latitude]                  FLOAT (53)       NULL,
    [Name]                      NVARCHAR (200)   NULL,
    [AddressTypeCode]           INT              NULL,
    [Telephone3]                NVARCHAR (50)    NULL,
    [ParentId]                  UNIQUEIDENTIFIER NOT NULL,
    [StateOrProvince]           NVARCHAR (4000)  NULL,
    [Country]                   NVARCHAR (4000)  NULL,
    [Telephone1]                NVARCHAR (50)    NULL,
    [PostOfficeBox]             NVARCHAR (4000)  NULL,
    [AddressNumber]             INT              NULL,
    [Fax]                       NVARCHAR (50)    NULL,
    [County]                    NVARCHAR (4000)  NULL,
    [UPSZone]                   NVARCHAR (4)     NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ParentIdTypeCode]          INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_PublisherAddress] PRIMARY KEY CLUSTERED ([PublisherAddressId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PublisherAddressBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Publisher_PublisherAddress]
    ON [dbo].[PublisherAddressBase]([ParentId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_NamePublisherAddressId]
    ON [dbo].[PublisherAddressBase]([Name] ASC) WITH (FILLFACTOR = 80);

