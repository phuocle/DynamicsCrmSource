CREATE TABLE [dbo].[AccountBase]
(
[AccountId] [uniqueidentifier] NOT NULL,
[AccountCategoryCode] [int] NULL,
[TerritoryId] [uniqueidentifier] NULL,
[DefaultPriceLevelId] [uniqueidentifier] NULL,
[CustomerSizeCode] [int] NULL,
[PreferredContactMethodCode] [int] NULL,
[CustomerTypeCode] [int] NULL,
[AccountRatingCode] [int] NULL,
[IndustryCode] [int] NULL,
[TerritoryCode] [int] NULL,
[AccountClassificationCode] [int] NULL,
[BusinessTypeCode] [int] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OriginatingLeadId] [uniqueidentifier] NULL,
[PaymentTermsCode] [int] NULL,
[ShippingMethodCode] [int] NULL,
[PrimaryContactId] [uniqueidentifier] NULL,
[ParticipatesInWorkflow] [bit] NULL CONSTRAINT [Set_To_Zero93] DEFAULT ((0)),
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[AccountNumber] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[Revenue] [money] NULL,
[NumberOfEmployees] [int] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SIC] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[OwnershipCode] [int] NULL,
[MarketCap] [money] NULL,
[SharesOutstanding] [int] NULL,
[TickerSymbol] [nvarchar] (10) COLLATE Latin1_General_CI_AI NULL,
[StockExchange] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[WebSiteURL] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[FtpSiteURL] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress1] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress2] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress3] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DoNotPhone] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotPhone] DEFAULT ((0)),
[DoNotFax] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotFax] DEFAULT ((0)),
[Telephone1] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DoNotEMail] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotEMail] DEFAULT ((0)),
[Telephone2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone3] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DoNotPostalMail] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotPostalMail] DEFAULT ((0)),
[DoNotBulkEMail] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotBulkEMail] DEFAULT ((0)),
[DoNotBulkPostalMail] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotBulkPostalMail] DEFAULT ((0)),
[CreditLimit] [money] NULL,
[CreditOnHold] [bit] NULL,
[IsPrivate] [bit] NULL CONSTRAINT [Set_To_Zero94] DEFAULT ((0)),
[CreatedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ParentAccountId] [uniqueidentifier] NULL,
[Aging30] [money] NULL,
[StateCode] [int] NOT NULL,
[Aging60] [money] NULL,
[StatusCode] [int] NULL,
[Aging90] [money] NULL,
[PreferredAppointmentDayCode] [int] NULL,
[PreferredSystemUserId] [uniqueidentifier] NULL,
[PreferredAppointmentTimeCode] [int] NULL,
[Merged] [bit] NULL CONSTRAINT [DF_AccountBase_Merged] DEFAULT ((0)),
[DoNotSendMM] [bit] NULL CONSTRAINT [DF_AccountBase_DoNotSendMM] DEFAULT ((0)),
[MasterId] [uniqueidentifier] NULL,
[LastUsedInCampaign] [datetime] NULL,
[PreferredServiceId] [uniqueidentifier] NULL,
[PreferredEquipmentId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[ImportSequenceNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreditLimit_Base] [money] NULL,
[Aging30_Base] [money] NULL,
[Revenue_Base] [money] NULL,
[Aging90_Base] [money] NULL,
[MarketCap_Base] [money] NULL,
[Aging60_Base] [money] NULL,
[YomiName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AccountBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_AccountBase_OwnerIdType] DEFAULT ((8)),
[StageId] [uniqueidentifier] NULL,
[ProcessId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[OpenDeals] [int] NULL,
[OpenRevenue] [money] NULL,
[OpenDeals_State] [int] NULL,
[OpenRevenue_State] [int] NULL,
[OpenRevenue_Date] [datetime] NULL,
[OpenRevenue_Base] [money] NULL,
[OpenDeals_Date] [datetime] NULL,
[PrimarySatoriId] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL,
[PrimaryTwitterId] [nvarchar] (20) COLLATE Latin1_General_CI_AI NULL,
[FollowEmail] [bit] NULL CONSTRAINT [DF_AccountBase_FollowEmail] DEFAULT ((1)),
[MarketingOnly] [bit] NULL CONSTRAINT [DF_AccountBase_MarketingOnly] DEFAULT ((0)),
[LastOnHoldTime] [datetime] NULL,
[OnHoldTime] [int] NULL,
[TimeSpentByMeOnEmailAndMeetings] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[SLAId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [cndx_PrimaryKey_Account] PRIMARY KEY CLUSTERED  ([AccountId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Account_AccountNumber] ON [dbo].[AccountBase] ([AccountNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress1] ON [dbo].[AccountBase] ([EMailAddress1]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_master_account] ON [dbo].[AccountBase] ([MasterId]) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Account_Name] ON [dbo].[AccountBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_e10cdd445c7f4ac8a5d1b2118926f2bd] ON [dbo].[AccountBase] ([OpenDeals]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_306845ef446a42e58df811c31bafaded] ON [dbo].[AccountBase] ([OpenRevenue]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_fb4e42c39a134a9688f8d6820d1d0062] ON [dbo].[AccountBase] ([OpenRevenue_Base]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_originating_lead] ON [dbo].[AccountBase] ([OriginatingLeadId]) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[AccountBase] ([OwnerId], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_accounts] ON [dbo].[AccountBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_parent_account] ON [dbo].[AccountBase] ([ParentAccountId], [Name]) INCLUDE ([EntityImageId], [OwnerId], [PrimaryContactId], [SLAId], [SLAInvokedId], [StateCode], [StatusCode]) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_accounts] ON [dbo].[AccountBase] ([PreferredServiceId]) WHERE ([PreferredServiceId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_accounts] ON [dbo].[AccountBase] ([PreferredSystemUserId]) WHERE ([PreferredSystemUserId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_primary_contact] ON [dbo].[AccountBase] ([PrimaryContactId]) WHERE ([PrimaryContactId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[AccountBase] ([StateCode], [StatusCode]) INCLUDE ([AccountId], [TerritoryId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_telephone1] ON [dbo].[AccountBase] ([Telephone1]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_telephone2] ON [dbo].[AccountBase] ([Telephone2]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AccountBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [account_master_account] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [account_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [account_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [account_primary_contact] FOREIGN KEY ([PrimaryContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [business_unit_accounts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [equipment_accounts] FOREIGN KEY ([PreferredEquipmentId]) REFERENCES [dbo].[EquipmentBase] ([EquipmentId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [manualsla_account] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [owner_accounts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [price_level_accounts] FOREIGN KEY ([DefaultPriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [service_accounts] FOREIGN KEY ([PreferredServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [system_user_accounts] FOREIGN KEY ([PreferredSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [territory_accounts] FOREIGN KEY ([TerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId])
GO
ALTER TABLE [dbo].[AccountBase] ADD CONSTRAINT [transactioncurrency_account] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
