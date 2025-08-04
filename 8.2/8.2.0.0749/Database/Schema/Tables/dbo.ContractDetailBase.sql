CREATE TABLE [dbo].[ContractDetailBase]
(
[ContractDetailId] [uniqueidentifier] NOT NULL,
[ServiceAddress] [uniqueidentifier] NULL,
[UoMId] [uniqueidentifier] NULL,
[ProductId] [uniqueidentifier] NULL,
[ProductSerialNumber] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ContractId] [uniqueidentifier] NOT NULL,
[LineItemOrder] [int] NULL,
[ServiceContractUnitsCode] [int] NULL,
[InitialQuantity] [int] NULL,
[Title] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
[EffectivityCalendar] [nvarchar] (168) COLLATE Latin1_General_CI_AI NULL,
[ActiveOn] [datetime] NOT NULL,
[CreatedOn] [datetime] NULL,
[ExpiresOn] [datetime] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[TotalAllotments] [int] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Rate] [money] NULL,
[ModifiedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[Price] [money] NOT NULL,
[Discount] [money] NULL,
[Net] [money] NULL,
[StateCode] [int] NOT NULL,
[AllotmentsRemaining] [int] NULL,
[StatusCode] [int] NULL,
[AllotmentsUsed] [int] NULL,
[UoMScheduleId] [uniqueidentifier] NULL,
[DiscountPercentage] [decimal] (23, 10) NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[Discount_Base] [money] NULL,
[Rate_Base] [money] NULL,
[Price_Base] [money] NULL,
[Net_Base] [money] NULL,
[AllotmentsOverage] [int] NULL,
[CustomerId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CustomerIdType] [int] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [cndx_PrimaryKey_ContractDetail] PRIMARY KEY CLUSTERED  ([ContractDetailId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_line_items] ON [dbo].[ContractDetailBase] ([ContractId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contractlineitem_customer_accounts] ON [dbo].[ContractDetailBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_contract_line_items] ON [dbo].[ContractDetailBase] ([ProductId]) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contract_line_items] ON [dbo].[ContractDetailBase] ([ServiceAddress]) WHERE ([ServiceAddress] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ContractDetailBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_unit_of_measure_schedule] ON [dbo].[ContractDetailBase] ([UoMScheduleId]) WHERE ([UoMScheduleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContractDetailBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [contract_detail_unit_of_measure_schedule] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId])
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [contract_line_items] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [customer_address_contract_line_items] FOREIGN KEY ([ServiceAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId])
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [product_contract_line_items] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [transactioncurrency_contractdetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ContractDetailBase] ADD CONSTRAINT [unit_of_measurement_contract_line_items] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
GO
