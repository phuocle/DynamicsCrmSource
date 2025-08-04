CREATE TABLE [dbo].[EntitlementTemplateChannelBase]
(
[ExchangeRate] [decimal] (23, 10) NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[EntitlementTemplateId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EntitlementTemplateChannelId] [uniqueidentifier] NOT NULL,
[Channel] [int] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[TotalTerms] [decimal] (23, 10) NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase] ADD CONSTRAINT [cndx_PrimaryKey_EntitlementTemplateChannel] PRIMARY KEY CLUSTERED  ([EntitlementTemplateChannelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntitlementTemplateId] ON [dbo].[EntitlementTemplateChannelBase] ([EntitlementTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementTemplateChannelBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementTemplateChannelBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase] ADD CONSTRAINT [entitlementtemplate_entitlementchannel_entitlementtemplateid] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId])
GO
ALTER TABLE [dbo].[EntitlementTemplateChannelBase] ADD CONSTRAINT [TransactionCurrency_entitlementtemplatechannel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
