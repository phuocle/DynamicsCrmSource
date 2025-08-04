CREATE TABLE [dbo].[EntitlementBase]
(
[OverriddenCreatedOn] [datetime] NULL,
[SLAId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[RemainingTerms] [decimal] (23, 10) NULL,
[CreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[CustomerId] [uniqueidentifier] NULL,
[StatusCode] [int] NULL,
[ModifiedOn] [datetime] NULL,
[KbAccessLevel] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[TotalTerms] [decimal] (23, 10) NULL,
[VersionNumber] [timestamp] NULL,
[EntitlementId] [uniqueidentifier] NOT NULL,
[AllocationTypeCode] [int] NULL,
[DecreaseRemainingOn] [int] NULL,
[EntitlementTemplateId] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[StartDate] [datetime] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EndDate] [datetime] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[StateCode] [int] NULL,
[RestrictCaseCreation] [bit] NULL,
[StageId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[AccountId] [uniqueidentifier] NULL,
[ContactId] [uniqueidentifier] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[AccountIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ContactIdName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdType] [int] NULL,
[OwnerIdType] [int] NULL CONSTRAINT [DF_EntitlementBase_OwnerIdType] DEFAULT ((8)),
[AccountIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ContactIdYomiName] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[IsDefault] [bit] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [cndx_PrimaryKey_Entitlement] PRIMARY KEY CLUSTERED  ([EntitlementId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_customerid] ON [dbo].[EntitlementBase] ([CustomerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_name] ON [dbo].[EntitlementBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[EntitlementBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[EntitlementBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [account_entitlement_Account] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [business_unit_entitlement] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [contact_entitlement_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [entitlementtemplateid_RelationShip] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId])
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [owner_entitlement] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[EntitlementBase] ADD CONSTRAINT [TransactionCurrency_Entitlement] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
