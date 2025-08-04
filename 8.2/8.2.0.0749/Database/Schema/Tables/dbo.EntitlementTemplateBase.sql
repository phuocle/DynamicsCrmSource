CREATE TABLE [dbo].[EntitlementTemplateBase]
(
[OverriddenCreatedOn] [datetime] NULL,
[TotalTerms] [decimal] (23, 10) NULL,
[DecreaseRemainingOn] [int] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[EntitlementTemplateId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[EndDate] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[RestrictCaseCreation] [bit] NULL,
[ImportSequenceNumber] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[AllocationTypeCode] [int] NULL,
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[KbAccessLevel] [int] NULL,
[StartDate] [datetime] NULL,
[SLAId] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[UTCConversionTimeZoneCode] [int] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateBase] ADD CONSTRAINT [cndx_PrimaryKey_EntitlementTemplate] PRIMARY KEY CLUSTERED  ([EntitlementTemplateId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementTemplateBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementTemplateBase] ADD CONSTRAINT [TransactionCurrency_entitlementtemplate] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
