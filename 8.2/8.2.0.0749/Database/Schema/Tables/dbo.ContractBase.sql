CREATE TABLE [dbo].[ContractBase]
(
[ContractId] [uniqueidentifier] NOT NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[ContractTemplateId] [uniqueidentifier] NOT NULL,
[ContractServiceLevelCode] [int] NULL,
[ServiceAddress] [uniqueidentifier] NULL,
[BillToAddress] [uniqueidentifier] NULL,
[ContractNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ActiveOn] [datetime] NOT NULL,
[ExpiresOn] [datetime] NOT NULL,
[CancelOn] [datetime] NULL,
[Title] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ContractLanguage] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[BillingStartOn] [datetime] NULL,
[EffectivityCalendar] [nvarchar] (168) COLLATE Latin1_General_CI_AI NULL,
[BillingEndOn] [datetime] NULL,
[BillingFrequencyCode] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[AllotmentTypeCode] [int] NULL,
[UseDiscountAsPercentage] [bit] NULL,
[ModifiedOn] [datetime] NULL,
[TotalPrice] [money] NULL,
[VersionNumber] [timestamp] NULL,
[TotalDiscount] [money] NULL,
[StateCode] [int] NOT NULL,
[NetPrice] [money] NULL,
[StatusCode] [int] NULL,
[OriginatingContract] [uniqueidentifier] NULL,
[Duration] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TotalDiscount_Base] [money] NULL,
[NetPrice_Base] [money] NULL,
[TotalPrice_Base] [money] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CustomerId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContractBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[BillingCustomerId] [uniqueidentifier] NULL,
[CustomerIdType] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ContractBase_OwnerIdType] DEFAULT ((8)),
[BillingCustomerIdType] [int] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BillingCustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[BillingCustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [cndx_PrimaryKey_Contract] PRIMARY KEY CLUSTERED  ([ContractId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_billingcustomer_accounts] ON [dbo].[ContractBase] ([BillingCustomerId], [BillingCustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_billing_address] ON [dbo].[ContractBase] ([BillToAddress]) WHERE ([BillToAddress] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_template_contracts] ON [dbo].[ContractBase] ([ContractTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_customer_accounts] ON [dbo].[ContractBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_originating_contract] ON [dbo].[ContractBase] ([OriginatingContract]) WHERE ([OriginatingContract] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ContractBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_service_contracts] ON [dbo].[ContractBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_service_address] ON [dbo].[ContractBase] ([ServiceAddress]) WHERE ([ServiceAddress] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ContractBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title] ON [dbo].[ContractBase] ([Title]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContractBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [business_unit_service_contracts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [contract_originating_contract] FOREIGN KEY ([OriginatingContract]) REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [contract_template_contracts] FOREIGN KEY ([ContractTemplateId]) REFERENCES [dbo].[ContractTemplateBaseIds] ([ContractTemplateId])
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [customer_address_contracts_as_billing_address] FOREIGN KEY ([BillToAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId])
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [customer_address_contracts_as_service_address] FOREIGN KEY ([ServiceAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId])
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [owner_contracts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ContractBase] ADD CONSTRAINT [transactioncurrency_contract] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
