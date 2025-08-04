CREATE TABLE [dbo].[PublisherAddressBase] (
    [Line1]                     NVARCHAR (4000)  NULL,
    [UPSZone]                   NVARCHAR (4)     NULL,
    [Line3]                     NVARCHAR (4000)  NULL,
    [Longitude]                 FLOAT (53)       NULL,
    [Country]                   NVARCHAR (4000)  NULL,
    [FreightTermsCode]          INT              NULL,
    [PrimaryContactName]        NVARCHAR (150)   NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Line2]                     NVARCHAR (4000)  NULL,
    [Latitude]                  FLOAT (53)       NULL,
    [Telephone2]                NVARCHAR (50)    NULL,
    [County]                    NVARCHAR (4000)  NULL,
    [PostalCode]                NVARCHAR (4000)  NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [City]                      NVARCHAR (4000)  NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ShippingMethodCode]        INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]      INT              NULL,
    [Name]                      NVARCHAR (200)   NULL,
    [AddressTypeCode]           INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Telephone3]                NVARCHAR (50)    NULL,
    [ParentId]                  UNIQUEIDENTIFIER NOT NULL,
    [StateOrProvince]           NVARCHAR (4000)  NULL,
    [UTCOffset]                 INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Telephone1]                NVARCHAR (50)    NULL,
    [Fax]                       NVARCHAR (50)    NULL,
    [PostOfficeBox]             NVARCHAR (4000)  NULL,
    [AddressNumber]             INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [PublisherAddressId]        UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ParentIdTypeCode]          INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_PublisherAddress] PRIMARY KEY CLUSTERED ([PublisherAddressId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PublisherAddressBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PublisherAddressBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_NamePublisherAddressId]
    ON [dbo].[PublisherAddressBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Publisher_PublisherAddress]
    ON [dbo].[PublisherAddressBase]([ParentId] ASC, [AddressNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_97E86F78787D41A9B037A0A25F80508B]
    ON [dbo].[PublisherAddressBase]([PublisherAddressId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_97E86F78787D41A9B037A0A25F80508B]
    ON [dbo].[PublisherAddressBase]([PublisherAddressId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_97E86F78787D41A9B037A0A25F80508B]
    ON [dbo].[PublisherAddressBase]([Name] ASC, [PublisherAddressId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

