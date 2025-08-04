CREATE TABLE [dbo].[ContractDetailBase] (
    [ContractDetailId]          UNIQUEIDENTIFIER NOT NULL,
    [ServiceAddress]            UNIQUEIDENTIFIER NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [ProductSerialNumber]       NVARCHAR (100)   NULL,
    [ContractId]                UNIQUEIDENTIFIER NOT NULL,
    [LineItemOrder]             INT              NULL,
    [ServiceContractUnitsCode]  INT              NULL,
    [InitialQuantity]           INT              NULL,
    [Title]                     NVARCHAR (500)   NULL,
    [EffectivityCalendar]       NVARCHAR (168)   NULL,
    [ActiveOn]                  DATETIME         NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ExpiresOn]                 DATETIME         NOT NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [TotalAllotments]           INT              NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Rate]                      MONEY            NULL,
    [ModifiedOn]                DATETIME         NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [Price]                     MONEY            NOT NULL,
    [Discount]                  MONEY            NULL,
    [Net]                       MONEY            NULL,
    [StateCode]                 INT              NOT NULL,
    [AllotmentsRemaining]       INT              NULL,
    [StatusCode]                INT              NULL,
    [AllotmentsUsed]            INT              NULL,
    [UoMScheduleId]             UNIQUEIDENTIFIER NULL,
    [DiscountPercentage]        DECIMAL (23, 10) NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Discount_Base]             MONEY            NULL,
    [Rate_Base]                 MONEY            NULL,
    [Price_Base]                MONEY            NULL,
    [Net_Base]                  MONEY            NULL,
    [AllotmentsOverage]         INT              NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_ContractDetail] PRIMARY KEY CLUSTERED ([ContractDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contract_detail_unit_of_measure_schedule] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]) NOT FOR REPLICATION,
    CONSTRAINT [contract_line_items] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId]) NOT FOR REPLICATION,
    CONSTRAINT [customer_address_contract_line_items] FOREIGN KEY ([ServiceAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId]) NOT FOR REPLICATION,
    CONSTRAINT [product_contract_line_items] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_contractdetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION,
    CONSTRAINT [unit_of_measurement_contract_line_items] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ContractDetailBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contractlineitem_customer_accounts]
    ON [dbo].[ContractDetailBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_contract_line_items]
    ON [dbo].[ContractDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_unit_of_measure_schedule]
    ON [dbo].[ContractDetailBase]([UoMScheduleId] ASC) WHERE ([UoMScheduleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContractDetailBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contract_line_items]
    ON [dbo].[ContractDetailBase]([ServiceAddress] ASC) WHERE ([ServiceAddress] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_line_items]
    ON [dbo].[ContractDetailBase]([ContractId] ASC) WITH (FILLFACTOR = 80);

