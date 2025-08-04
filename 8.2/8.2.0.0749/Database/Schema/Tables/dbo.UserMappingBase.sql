CREATE TABLE [dbo].[UserMappingBase]
(
[ModifiedBy] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[UserMappingId] [uniqueidentifier] NOT NULL,
[PartnerApplicationType] [int] NULL CONSTRAINT [DF_UserMappingBase_PartnerApplicationType] DEFAULT ((0)),
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[SystemUserAttributeName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[OrganizationId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ClaimType] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserMappingBase] ADD CONSTRAINT [PK_UserMappingBase] PRIMARY KEY CLUSTERED  ([UserMappingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[UserMappingBase] ([OrganizationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserMappingBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserMappingBase] ADD CONSTRAINT [TransactionCurrency_UserMapping] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
