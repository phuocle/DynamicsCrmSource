CREATE TABLE [dbo].[ContractDetailBase] (
    [ContractDetailId]          UNIQUEIDENTIFIER NOT NULL,
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
    [Title]                     NVARCHAR (500)   NULL,
    [ActiveOn]                  DATETIME         NOT NULL,
    [AllotmentsOverage]         INT              NULL,
    [AllotmentsRemaining]       INT              NULL,
    [AllotmentsUsed]            INT              NULL,
    [ContractId]                UNIQUEIDENTIFIER NOT NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [Discount]                  MONEY            NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Discount_Base]             MONEY            NULL,
    [DiscountPercentage]        DECIMAL (23, 10) NULL,
    [EffectivityCalendar]       NVARCHAR (168)   NULL,
    [ExpiresOn]                 DATETIME         NOT NULL,
    [InitialQuantity]           INT              NULL,
    [LineItemOrder]             INT              NULL,
    [Net]                       MONEY            NULL,
    [Net_Base]                  MONEY            NULL,
    [Price]                     MONEY            NOT NULL,
    [Price_Base]                MONEY            NULL,
    [ProductId]                 UNIQUEIDENTIFIER NULL,
    [ProductSerialNumber]       NVARCHAR (100)   NULL,
    [Rate]                      MONEY            NULL,
    [Rate_Base]                 MONEY            NULL,
    [ServiceAddress]            UNIQUEIDENTIFIER NULL,
    [ServiceContractUnitsCode]  INT              NULL,
    [StateCode]                 INT              NOT NULL,
    [StatusCode]                INT              NULL,
    [TotalAllotments]           INT              NOT NULL,
    [UoMId]                     UNIQUEIDENTIFIER NULL,
    [UoMScheduleId]             UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_ContractDetail] PRIMARY KEY CLUSTERED ([ContractDetailId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [contract_detail_unit_of_measure_schedule] FOREIGN KEY ([UoMScheduleId]) REFERENCES [dbo].[UoMScheduleBase] ([UoMScheduleId]),
    CONSTRAINT [contract_line_items] FOREIGN KEY ([ContractId]) REFERENCES [dbo].[ContractBase] ([ContractId]),
    CONSTRAINT [customer_address_contract_line_items] FOREIGN KEY ([ServiceAddress]) REFERENCES [dbo].[CustomerAddressBase] ([CustomerAddressId]),
    CONSTRAINT [product_contract_line_items] FOREIGN KEY ([ProductId]) REFERENCES [dbo].[ProductBase] ([ProductId]),
    CONSTRAINT [transactioncurrency_contractdetail] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [unit_of_measurement_contract_line_items] FOREIGN KEY ([UoMId]) REFERENCES [dbo].[UoMBase] ([UoMId])
);


GO
ALTER TABLE [dbo].[ContractDetailBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ContractDetailBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[ContractDetailBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contract_line_items]
    ON [dbo].[ContractDetailBase]([ContractId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_address_contract_line_items]
    ON [dbo].[ContractDetailBase]([ServiceAddress] ASC) WHERE ([ServiceAddress] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_contract_line_items]
    ON [dbo].[ContractDetailBase]([ProductId] ASC) WHERE ([ProductId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_unit_of_measure_schedule]
    ON [dbo].[ContractDetailBase]([UoMScheduleId] ASC) WHERE ([UoMScheduleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contractlineitem_customer_accounts]
    ON [dbo].[ContractDetailBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8242010249044520B2B6DBB6CC4AFD0C]
    ON [dbo].[ContractDetailBase]([ContractDetailId] ASC)
    INCLUDE([Title], [ProductId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Title]
    ON [dbo].[ContractDetailBase]([Title] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_8242010249044520B2B6DBB6CC4AFD0C]
    ON [dbo].[ContractDetailBase]([ContractDetailId] ASC)
    INCLUDE([Title]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

