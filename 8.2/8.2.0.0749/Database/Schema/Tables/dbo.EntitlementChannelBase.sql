CREATE TABLE [dbo].[EntitlementChannelBase]
(
[UTCConversionTimeZoneCode] [int] NULL,
[ModifiedOn] [datetime] NULL,
[TotalTerms] [decimal] (23, 10) NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[Channel] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[EntitlementChannelId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[EntitlementId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[RemainingTerms] [decimal] (23, 10) NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[TimeZoneRuleVersionNumber] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementChannelBase] ADD CONSTRAINT [cndx_PrimaryKey_EntitlementChannel] PRIMARY KEY CLUSTERED  ([EntitlementChannelId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_EntitlementId] ON [dbo].[EntitlementChannelBase] ([EntitlementId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementChannelBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntitlementChannelBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementChannelBase] ADD CONSTRAINT [entitlement_entitlementchannel_EntitlementId] FOREIGN KEY ([EntitlementId]) REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[EntitlementChannelBase] ADD CONSTRAINT [TransactionCurrency_entitlementchannel] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
