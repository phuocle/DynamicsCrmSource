CREATE TABLE [dbo].[CustomerAddressBase] (
    [ParentId]                  UNIQUEIDENTIFIER NOT NULL,
    [CustomerAddressId]         UNIQUEIDENTIFIER NOT NULL,
    [AddressNumber]             INT              NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [AddressTypeCode]           INT              NULL,
    [Name]                      NVARCHAR (200)   NULL,
    [PrimaryContactName]        NVARCHAR (150)   NULL,
    [Line1]                     NVARCHAR (4000)  NULL,
    [Line2]                     NVARCHAR (4000)  NULL,
    [Line3]                     NVARCHAR (4000)  NULL,
    [City]                      NVARCHAR (4000)  NULL,
    [StateOrProvince]           NVARCHAR (4000)  NULL,
    [County]                    NVARCHAR (4000)  NULL,
    [Country]                   NVARCHAR (4000)  NULL,
    [PostOfficeBox]             NVARCHAR (4000)  NULL,
    [PostalCode]                NVARCHAR (4000)  NULL,
    [UTCOffset]                 INT              NULL,
    [FreightTermsCode]          INT              NULL,
    [UPSZone]                   NVARCHAR (4)     NULL,
    [Latitude]                  FLOAT (53)       NULL,
    [Telephone1]                NVARCHAR (50)    NULL,
    [Longitude]                 FLOAT (53)       NULL,
    [ShippingMethodCode]        INT              NULL,
    [Telephone2]                NVARCHAR (50)    NULL,
    [Telephone3]                NVARCHAR (50)    NULL,
    [Fax]                       NVARCHAR (50)    NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [ParentIdTypeCode]          INT              NULL,
    [Composite]                 NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomerAddress] PRIMARY KEY NONCLUSTERED ([CustomerAddressId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_CustomerAddress] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_ParentIdAddressNumber]
    ON [dbo].[CustomerAddressBase]([ParentId] ASC, [AddressNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_NameCustomerAddressId]
    ON [dbo].[CustomerAddressBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomerAddressBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_Contact_CustomerAddress]
    ON [dbo].[CustomerAddressBase]([ParentId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

