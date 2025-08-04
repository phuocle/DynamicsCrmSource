CREATE TABLE [dbo].[LeadAddressBase] (
    [ParentId]              UNIQUEIDENTIFIER NOT NULL,
    [LeadAddressId]         UNIQUEIDENTIFIER NOT NULL,
    [AddressNumber]         INT              NULL,
    [AddressTypeCode]       INT              NULL,
    [Name]                  NVARCHAR (200)   NULL,
    [Line1]                 NVARCHAR (4000)  NULL,
    [Line2]                 NVARCHAR (4000)  NULL,
    [Line3]                 NVARCHAR (4000)  NULL,
    [City]                  NVARCHAR (4000)  NULL,
    [StateOrProvince]       NVARCHAR (4000)  NULL,
    [County]                NVARCHAR (4000)  NULL,
    [Country]               NVARCHAR (4000)  NULL,
    [PostOfficeBox]         NVARCHAR (4000)  NULL,
    [PostalCode]            NVARCHAR (4000)  NULL,
    [UTCOffset]             INT              NULL,
    [UPSZone]               NVARCHAR (4)     NULL,
    [Latitude]              FLOAT (53)       NULL,
    [Telephone1]            NVARCHAR (50)    NULL,
    [Longitude]             FLOAT (53)       NULL,
    [ShippingMethodCode]    INT              NULL,
    [Telephone2]            NVARCHAR (50)    NULL,
    [Telephone3]            NVARCHAR (50)    NULL,
    [Fax]                   NVARCHAR (50)    NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [CreatedOn]             DATETIME         NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [Composite]             NVARCHAR (MAX)   NULL,
    CONSTRAINT [cndx_PrimaryKey_LeadAddress] PRIMARY KEY CLUSTERED ([LeadAddressId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lead_addresses] FOREIGN KEY ([ParentId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_LeadAddress] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_LeadAddressBase] UNIQUE NONCLUSTERED ([ParentId] ASC, [AddressNumber] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[LeadAddressBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_addresses]
    ON [dbo].[LeadAddressBase]([ParentId] ASC) WITH (FILLFACTOR = 80);

