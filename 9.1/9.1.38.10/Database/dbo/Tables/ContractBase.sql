CREATE TABLE [dbo].[ContractBase] (
    [ContractId]                UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ContractBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ContractBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [EmailAddress]              NVARCHAR (256)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Title]                     NVARCHAR (100)   NULL,
    [ActiveOn]                  DATETIME         NOT NULL,
    [AllotmentTypeCode]         INT              NULL,
    [BillingCustomerId]         UNIQUEIDENTIFIER NULL,
    [BillingEndOn]              DATETIME         NULL,
    [BillingFrequencyCode]      INT              NULL,
    [BillingStartOn]            DATETIME         NULL,
    [BillToAddress]             UNIQUEIDENTIFIER NULL,
    [CancelOn]                  DATETIME         NULL,
    [ContractLanguage]          NVARCHAR (MAX)   NULL,
    [ContractNumber]            NVARCHAR (100)   NULL,
    [ContractServiceLevelCode]  INT              NULL,
    [ContractTemplateId]        UNIQUEIDENTIFIER NOT NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [Duration]                  INT              NULL,
    [EffectivityCalendar]       NVARCHAR (168)   NULL,
    [ExpiresOn]                 DATETIME         NOT NULL,
    [NetPrice]                  MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [NetPrice_Base]             MONEY            NULL,
    [OriginatingContract]       UNIQUEIDENTIFIER NULL,
    [ServiceAddress]            UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [TotalDiscount]             MONEY            NULL,
    [TotalDiscount_Base]        MONEY            NULL,
    [TotalPrice]                MONEY            NULL,
    [TotalPrice_Base]           MONEY            NULL,
    [UseDiscountAsPercentage]   BIT              NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    [BillingCustomerIdName]     NVARCHAR (4000)  NULL,
    [BillingCustomerIdType]     INT              NULL,
    [BillingCustomerIdYomiName] NVARCHAR (4000)  NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_Contract] PRIMARY KEY CLUSTERED ([ContractId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_service_contracts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [contract_originating_contract] FOREIGN KEY ([OriginatingContract]) REFERENCES [dbo].[ContractBase] ([ContractId]),
    CONSTRAINT [contract_template_contracts] FOREIGN KEY ([ContractTemplateId]) REFERENCES [dbo].[ContractTemplateBaseIds] ([ContractTemplateId]),
    CONSTRAINT [customer_address_contracts_as_billing_address] FOREIGN KEY ([BillToAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId]),
    CONSTRAINT [customer_address_contracts_as_service_address] FOREIGN KEY ([ServiceAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId]),
    CONSTRAINT [owner_contracts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [transactioncurrency_contract] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ContractBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ContractBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContractBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ContractBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ContractBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_originating_contract]
    ON [dbo].[ContractBase]([OriginatingContract] ASC) WHERE ([OriginatingContract] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_billing_address]
    ON [dbo].[ContractBase]([BillToAddress] ASC) WHERE ([BillToAddress] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_billingcustomer_accounts]
    ON [dbo].[ContractBase]([BillingCustomerId] ASC, [BillingCustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_service_address]
    ON [dbo].[ContractBase]([ServiceAddress] ASC) WHERE ([ServiceAddress] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_customer_accounts]
    ON [dbo].[ContractBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_service_contracts]
    ON [dbo].[ContractBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_template_contracts]
    ON [dbo].[ContractBase]([ContractTemplateId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[ContractBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_087DFD9640994C64B6700C7B94A964EC]
    ON [dbo].[ContractBase]([ContractId] ASC)
    INCLUDE([Title], [CustomerId], [CustomerIdType], [CustomerIdYomiName], [CustomerIdName], [ContractNumber], [StateCode], [ContractTemplateId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_087DFD9640994C64B6700C7B94A964EC]
    ON [dbo].[ContractBase]([Title] ASC, [ContractId] ASC)
    INCLUDE([CustomerId], [CustomerIdType], [CustomerIdYomiName], [CustomerIdName], [ContractNumber], [StateCode], [ContractTemplateId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_087DFD9640994C64B6700C7B94A964EC]
    ON [dbo].[ContractBase]([ContractId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

