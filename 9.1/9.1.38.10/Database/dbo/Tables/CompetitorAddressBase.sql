CREATE TABLE [dbo].[CompetitorAddressBase] (
    [CompetitorAddressId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (200)   NULL,
    [AddressNumber]             INT              NULL,
    [AddressTypeCode]           INT              NULL,
    [City]                      NVARCHAR (4000)  NULL,
    [Composite]                 NVARCHAR (MAX)   NULL,
    [Country]                   NVARCHAR (4000)  NULL,
    [County]                    NVARCHAR (4000)  NULL,
    [Fax]                       NVARCHAR (50)    NULL,
    [Latitude]                  FLOAT (53)       NULL,
    [Line1]                     NVARCHAR (4000)  NULL,
    [Line2]                     NVARCHAR (4000)  NULL,
    [Line3]                     NVARCHAR (4000)  NULL,
    [Longitude]                 FLOAT (53)       NULL,
    [ParentId]                  UNIQUEIDENTIFIER NOT NULL,
    [PostalCode]                NVARCHAR (4000)  NULL,
    [PostOfficeBox]             NVARCHAR (4000)  NULL,
    [ShippingMethodCode]        INT              NULL,
    [StateOrProvince]           NVARCHAR (4000)  NULL,
    [Telephone1]                NVARCHAR (50)    NULL,
    [Telephone2]                NVARCHAR (50)    NULL,
    [Telephone3]                NVARCHAR (50)    NULL,
    [UPSZone]                   NVARCHAR (4)     NULL,
    [UTCOffset]                 INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_CompetitorAddress] PRIMARY KEY CLUSTERED ([CompetitorAddressId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [competitor_addresses] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[CompetitorBase] ([CompetitorId]),
    CONSTRAINT [AK1_CompetitorAddressBase] UNIQUE NONCLUSTERED ([ParentId] ASC, [AddressNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CompetitorAddressBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CompetitorAddressBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CompetitorAddressBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_competitor_addresses]
    ON [dbo].[CompetitorAddressBase]([ParentId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A0CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CompetitorAddressBase]([Name] ASC, [CompetitorAddressId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A0CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CompetitorAddressBase]([CompetitorAddressId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[CompetitorAddressBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A0CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CompetitorAddressBase]([CompetitorAddressId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

