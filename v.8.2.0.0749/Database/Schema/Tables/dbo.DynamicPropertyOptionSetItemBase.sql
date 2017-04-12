CREATE TABLE [dbo].[DynamicPropertyOptionSetItemBase]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[DynamicPropertyOptionSetValueId] [uniqueidentifier] NOT NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[DynamicPropertyOptionSetValueSequenceNumber] [int] NULL,
[DynamicPropertyId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[DynamicPropertyOptionName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[DynamicPropertyOptionValue] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[DynamicPropertyOptionDescription] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase] ADD CONSTRAINT [cndx_PrimaryKey_DynamicPropertyOptionSetItem] PRIMARY KEY CLUSTERED  ([DynamicPropertyOptionSetValueId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_DynamicProperty_DynamicPropertyOptionSetItem] ON [dbo].[DynamicPropertyOptionSetItemBase] ([DynamicPropertyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionname] ON [dbo].[DynamicPropertyOptionSetItemBase] ([DynamicPropertyId], [DynamicPropertyOptionName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_dynamicpropertyid_dynamicpropertyoptionvalue] ON [dbo].[DynamicPropertyOptionSetItemBase] ([DynamicPropertyId], [DynamicPropertyOptionValue]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[DynamicPropertyOptionSetItemBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase] ADD CONSTRAINT [DynamicProperty_DynamicPropertyOptionSetItem] FOREIGN KEY ([DynamicPropertyId]) REFERENCES [dbo].[DynamicPropertyBase] ([DynamicPropertyId])
GO
ALTER TABLE [dbo].[DynamicPropertyOptionSetItemBase] ADD CONSTRAINT [DynamicPropertyOptionSetItem_TransactionCurrency] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
