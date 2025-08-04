CREATE TABLE [dbo].[DynamicPropertyOptionSetItemBase] (
    [DynamicPropertyOptionSetValueId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                                   DATETIME         NULL,
    [CreatedBy]                                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                  DATETIME         NULL,
    [ModifiedBy]                                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                          UNIQUEIDENTIFIER NULL,
    [OrganizationId]                              UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]                               ROWVERSION       NULL,
    [ImportSequenceNumber]                        INT              NULL,
    [OverriddenCreatedOn]                         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]                   INT              NULL,
    [UTCConversionTimeZoneCode]                   INT              NULL,
    [DynamicPropertyOptionName]                   NVARCHAR (100)   NULL,
    [DynamicPropertyOptionValue]                  INT              NULL,
    [DynamicPropertyOptionDescription]            NVARCHAR (100)   NULL,
    [DynamicPropertyId]                           UNIQUEIDENTIFIER NULL,
    [DynamicPropertyOptionSetValueSequenceNumber] INT              NULL,
    [ExchangeRate]                                DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]                       UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_DynamicPropertyOptionSetItem] PRIMARY KEY CLUSTERED ([DynamicPropertyOptionSetValueId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [DynamicProperty_DynamicPropertyOptionSetItem] FOREIGN KEY ([DynamicPropertyId]) REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId]),
    CONSTRAINT [DynamicPropertyOptionSetItem_TransactionCurrency] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionname]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyId] ASC, [DynamicPropertyOptionName] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionvalue]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyId] ASC, [DynamicPropertyOptionValue] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DynamicProperty_DynamicPropertyOptionSetItem]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_297A47A88EAF42D5B0759C408D5AB9B7]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyOptionSetValueId] ASC)
    INCLUDE([DynamicPropertyOptionName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_297A47A88EAF42D5B0759C408D5AB9B7]
    ON [dbo].[DynamicPropertyOptionSetItemBase]([DynamicPropertyOptionSetValueId] ASC)
    INCLUDE([DynamicPropertyOptionName], [DynamicPropertyOptionValue], [DynamicPropertyOptionDescription], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

