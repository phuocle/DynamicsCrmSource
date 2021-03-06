USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContractBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContractBase](
	[ContractId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ContractTemplateId] [uniqueidentifier] NOT NULL,
	[ContractServiceLevelCode] [int] NULL,
	[ServiceAddress] [uniqueidentifier] NULL,
	[BillToAddress] [uniqueidentifier] NULL,
	[ContractNumber] [nvarchar](100) NULL,
	[ActiveOn] [datetime] NOT NULL,
	[ExpiresOn] [datetime] NOT NULL,
	[CancelOn] [datetime] NULL,
	[Title] [nvarchar](100) NULL,
	[ContractLanguage] [nvarchar](max) NULL,
	[BillingStartOn] [datetime] NULL,
	[EffectivityCalendar] [nvarchar](168) NULL,
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
	[ExchangeRate] [decimal](23, 10) NULL,
	[TotalDiscount_Base] [money] NULL,
	[NetPrice_Base] [money] NULL,
	[TotalPrice_Base] [money] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[BillingCustomerId] [uniqueidentifier] NULL,
	[CustomerIdType] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[BillingCustomerIdType] [int] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[BillingCustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[BillingCustomerIdYomiName] [nvarchar](4000) NULL,
	[EntityImageId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Contract] PRIMARY KEY CLUSTERED 
(
	[ContractId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_service_contracts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_service_contracts] ON [dbo].[ContractBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contract_originating_contract]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_originating_contract] ON [dbo].[ContractBase]
(
	[OriginatingContract] ASC
)
WHERE ([OriginatingContract] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_customer_address_contracts_as_billing_address]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_billing_address] ON [dbo].[ContractBase]
(
	[BillToAddress] ASC
)
WHERE ([BillToAddress] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_customer_address_contracts_as_service_address]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contracts_as_service_address] ON [dbo].[ContractBase]
(
	[ServiceAddress] ASC
)
WHERE ([ServiceAddress] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContractBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ContractBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contract_billingcustomer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_billingcustomer_accounts] ON [dbo].[ContractBase]
(
	[BillingCustomerId] ASC,
	[BillingCustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contract_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_customer_accounts] ON [dbo].[ContractBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contract_template_contracts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_template_contracts] ON [dbo].[ContractBase]
(
	[ContractTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ContractBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractBase] ADD  CONSTRAINT [DF_ContractBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ContractBase] ADD  CONSTRAINT [DF_ContractBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [business_unit_service_contracts] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [business_unit_service_contracts]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [contract_originating_contract] FOREIGN KEY([OriginatingContract])
REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [contract_originating_contract]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [contract_template_contracts] FOREIGN KEY([ContractTemplateId])
REFERENCES [dbo].[ContractTemplateBaseIds] ([ContractTemplateId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [contract_template_contracts]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [customer_address_contracts_as_billing_address] FOREIGN KEY([BillToAddress])
REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [customer_address_contracts_as_billing_address]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [customer_address_contracts_as_service_address] FOREIGN KEY([ServiceAddress])
REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [customer_address_contracts_as_service_address]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [owner_contracts] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [owner_contracts]
GO
ALTER TABLE [dbo].[ContractBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_contract] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ContractBase] CHECK CONSTRAINT [transactioncurrency_contract]
GO
