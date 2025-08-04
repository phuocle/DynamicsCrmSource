CREATE TABLE [dbo].[ContractBase] (
    [ContractId]                UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ContractTemplateId]        UNIQUEIDENTIFIER NOT NULL,
    [ContractServiceLevelCode]  INT              NULL,
    [ServiceAddress]            UNIQUEIDENTIFIER NULL,
    [BillToAddress]             UNIQUEIDENTIFIER NULL,
    [ContractNumber]            NVARCHAR (100)   NULL,
    [ActiveOn]                  DATETIME         NOT NULL,
    [ExpiresOn]                 DATETIME         NOT NULL,
    [CancelOn]                  DATETIME         NULL,
    [Title]                     NVARCHAR (100)   NULL,
    [ContractLanguage]          NVARCHAR (MAX)   NULL,
    [BillingStartOn]            DATETIME         NULL,
    [EffectivityCalendar]       NVARCHAR (168)   NULL,
    [BillingEndOn]              DATETIME         NULL,
    [BillingFrequencyCode]      INT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [AllotmentTypeCode]         INT              NULL,
    [UseDiscountAsPercentage]   BIT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [TotalPrice]                MONEY            NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [TotalDiscount]             MONEY            NULL,
    [StateCode]                 INT              NOT NULL,
    [NetPrice]                  MONEY            NULL,
    [StatusCode]                INT              NULL,
    [OriginatingContract]       UNIQUEIDENTIFIER NULL,
    [Duration]                  INT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TotalDiscount_Base]        MONEY            NULL,
    [NetPrice_Base]             MONEY            NULL,
    [TotalPrice_Base]           MONEY            NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_ContractBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [BillingCustomerId]         UNIQUEIDENTIFIER NULL,
    [CustomerIdType]            INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_ContractBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [BillingCustomerIdType]     INT              NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [BillingCustomerIdName]     NVARCHAR (4000)  NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [BillingCustomerIdYomiName] NVARCHAR (4000)  NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Contract] PRIMARY KEY CLUSTERED ([ContractId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_service_contracts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [contract_originating_contract] FOREIGN KEY ([OriginatingContract]) REFERENCES [dbo].[ContractBase] ([ContractId]) NOT FOR REPLICATION,
    CONSTRAINT [contract_template_contracts] FOREIGN KEY ([ContractTemplateId]) REFERENCES [dbo].[ContractTemplateBaseIds] ([ContractTemplateId]) NOT FOR REPLICATION,
    CONSTRAINT [customer_address_contracts_as_billing_address] FOREIGN KEY ([BillToAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId]) NOT FOR REPLICATION,
    CONSTRAINT [customer_address_contracts_as_service_address] FOREIGN KEY ([ServiceAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_contracts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_contract] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ContractBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_service_contracts]
    ON [dbo].[ContractBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContractBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_template_contracts]
    ON [dbo].[ContractBase]([ContractTemplateId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_billing_address]
    ON [dbo].[ContractBase]([BillToAddress] ASC) WHERE ([BillToAddress] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_originating_contract]
    ON [dbo].[ContractBase]([OriginatingContract] ASC) WHERE ([OriginatingContract] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_billingcustomer_accounts]
    ON [dbo].[ContractBase]([BillingCustomerId] ASC, [BillingCustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ContractBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_service_address]
    ON [dbo].[ContractBase]([ServiceAddress] ASC) WHERE ([ServiceAddress] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_customer_accounts]
    ON [dbo].[ContractBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ContractBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[ContractBase]([Title] ASC) WITH (FILLFACTOR = 80);

