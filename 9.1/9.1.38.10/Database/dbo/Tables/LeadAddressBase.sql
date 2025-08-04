CREATE TABLE [dbo].[LeadAddressBase] (
    [LeadAddressId]             UNIQUEIDENTIFIER NOT NULL,
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
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_LeadAddress] PRIMARY KEY CLUSTERED ([LeadAddressId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lead_addresses] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [TransactionCurrency_LeadAddress] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [AK1_LeadAddressBase] UNIQUE NONCLUSTERED ([ParentId] ASC, [AddressNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[LeadAddressBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[LeadAddressBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadAddressBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_addresses]
    ON [dbo].[LeadAddressBase]([ParentId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);

