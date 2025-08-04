CREATE TABLE [dbo].[DynamicPropertyOptionSetItemBase] (
    [OrganizationId]                              UNIQUEIDENTIFIER NOT NULL,
    [DynamicPropertyOptionSetValueId]             UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]                       UNIQUEIDENTIFIER NULL,
    [DynamicPropertyOptionSetValueSequenceNumber] INT              NULL,
    [DynamicPropertyId]                           UNIQUEIDENTIFIER NULL,
    [VersionNumber]                               ROWVERSION       NULL,
    [DynamicPropertyOptionName]                   NVARCHAR (100)   NULL,
    [ModifiedOn]                                  DATETIME         NULL,
    [ExchangeRate]                                DECIMAL (23, 10) NULL,
    [DynamicPropertyOptionValue]                  INT              NULL,
    [OverriddenCreatedOn]                         DATETIME         NULL,
    [CreatedBy]                                   UNIQUEIDENTIFIER NULL,
    [DynamicPropertyOptionDescription]            NVARCHAR (100)   NULL,
    [CreatedOn]                                   DATETIME         NULL,
    [ImportSequenceNumber]                        INT              NULL,
    [CreatedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                                  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                          UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicPropertyOptionSetItem] PRIMARY KEY CLUSTERED ([DynamicPropertyOptionSetValueId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [DynamicProperty_DynamicPropertyOptionSetItem] FOREIGN KEY ([DynamicPropertyId]) REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId]),
    CONSTRAINT [DynamicPropertyOptionSetItem_TransactionCurrency] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DynamicProperty_DynamicPropertyOptionSetItem]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionvalue]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyId] ASC, [DynamicPropertyOptionValue] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionname]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyId] ASC, [DynamicPropertyOptionName] ASC) WITH (FILLFACTOR = 80);

