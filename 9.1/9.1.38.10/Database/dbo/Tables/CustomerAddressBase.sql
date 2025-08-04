CREATE TABLE [dbo].[CustomerAddressBase] (
    [UPSZone]                   NVARCHAR (4)     NULL,
    [AddressNumber]             INT              NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [Fax]                       NVARCHAR (50)    NULL,
    [Name]                      NVARCHAR (200)   NULL,
    [ParentId]                  UNIQUEIDENTIFIER NOT NULL,
    [Latitude]                  FLOAT (53)       NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [AddressTypeCode]           INT              NULL,
    [PrimaryContactName]        NVARCHAR (150)   NULL,
    [County]                    NVARCHAR (4000)  NULL,
    [ModifiedOn]                DATETIME         NULL,
    [City]                      NVARCHAR (4000)  NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [Line3]                     NVARCHAR (4000)  NULL,
    [Line1]                     NVARCHAR (4000)  NULL,
    [FreightTermsCode]          INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [StateOrProvince]           NVARCHAR (4000)  NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Line2]                     NVARCHAR (4000)  NULL,
    [PostalCode]                NVARCHAR (4000)  NULL,
    [UTCOffset]                 INT              NULL,
    [PostOfficeBox]             NVARCHAR (4000)  NULL,
    [Telephone3]                NVARCHAR (50)    NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Composite]                 NVARCHAR (MAX)   NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CustomerAddressId]         UNIQUEIDENTIFIER NOT NULL,
    [ShippingMethodCode]        INT              NULL,
    [Telephone2]                NVARCHAR (50)    NULL,
    [Telephone1]                NVARCHAR (50)    NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Country]                   NVARCHAR (4000)  NULL,
    [Longitude]                 FLOAT (53)       NULL,
    [ParentIdTypeCode]          INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomerAddress] PRIMARY KEY NONCLUSTERED ([CustomerAddressId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_CustomerAddress] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CustomerAddressBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CustomerAddressBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_ParentIdAddressNumber]
    ON [dbo].[CustomerAddressBase]([ParentId] ASC, [AddressNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomerAddressBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_NameCustomerAddressId]
    ON [dbo].[CustomerAddressBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Contact_CustomerAddress]
    ON [dbo].[CustomerAddressBase]([ParentId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9ACC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CustomerAddressBase]([CustomerAddressId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9ACC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CustomerAddressBase]([Name] ASC, [CustomerAddressId] ASC)
    INCLUDE([Line1], [City], [PostalCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9ACC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CustomerAddressBase]([CustomerAddressId] ASC)
    INCLUDE([Name], [Line1], [City], [PostalCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

