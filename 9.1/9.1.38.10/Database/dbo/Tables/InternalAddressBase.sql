CREATE TABLE [dbo].[InternalAddressBase] (
    [Composite]          NVARCHAR (MAX)   NULL,
    [ShippingMethodCode] INT              NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [PostalCode]         NVARCHAR (4000)  NULL,
    [Telephone2]         NVARCHAR (50)    NULL,
    [City]               NVARCHAR (4000)  NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [Line3]              NVARCHAR (4000)  NULL,
    [County]             NVARCHAR (4000)  NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [InternalAddressId]  UNIQUEIDENTIFIER NOT NULL,
    [Name]               NVARCHAR (200)   NULL,
    [AddressNumber]      INT              NULL,
    [Country]            NVARCHAR (4000)  NULL,
    [CreatedOn]          DATETIME         NULL,
    [Telephone3]         NVARCHAR (50)    NULL,
    [StateOrProvince]    NVARCHAR (4000)  NULL,
    [UTCOffset]          INT              NULL,
    [Line2]              NVARCHAR (4000)  NULL,
    [ObjectTypeCode]     INT              NOT NULL,
    [Latitude]           FLOAT (53)       NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [PostOfficeBox]      NVARCHAR (4000)  NULL,
    [Longitude]          FLOAT (53)       NULL,
    [Fax]                NVARCHAR (64)    NULL,
    [Line1]              NVARCHAR (4000)  NULL,
    [AddressTypeCode]    INT              NULL,
    [ParentId]           UNIQUEIDENTIFIER NOT NULL,
    [Telephone1]         NVARCHAR (64)    NULL,
    [UPSZone]            NVARCHAR (4)     NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_InternalAddress] PRIMARY KEY CLUSTERED ([InternalAddressId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [AK1_InternalAddressBase] UNIQUE NONCLUSTERED ([ParentId] ASC, [AddressNumber] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[InternalAddressBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[InternalAddressBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[InternalAddressBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_site_internal_addresses]
    ON [dbo].[InternalAddressBase]([ParentId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

