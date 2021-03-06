USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AccountBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AccountBase](
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
	[ParticipatesInWorkflow] [bit] NULL,
	[Name] [nvarchar](160) NULL,
	[AccountNumber] [nvarchar](20) NULL,
	[Revenue] [money] NULL,
	[NumberOfEmployees] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[SIC] [nvarchar](20) NULL,
	[OwnershipCode] [int] NULL,
	[MarketCap] [money] NULL,
	[SharesOutstanding] [int] NULL,
	[TickerSymbol] [nvarchar](10) NULL,
	[StockExchange] [nvarchar](20) NULL,
	[WebSiteURL] [nvarchar](200) NULL,
	[FtpSiteURL] [nvarchar](200) NULL,
	[EMailAddress1] [nvarchar](100) NULL,
	[EMailAddress2] [nvarchar](100) NULL,
	[EMailAddress3] [nvarchar](100) NULL,
	[DoNotPhone] [bit] NULL,
	[DoNotFax] [bit] NULL,
	[Telephone1] [nvarchar](50) NULL,
	[DoNotEMail] [bit] NULL,
	[Telephone2] [nvarchar](50) NULL,
	[Fax] [nvarchar](50) NULL,
	[Telephone3] [nvarchar](50) NULL,
	[DoNotPostalMail] [bit] NULL,
	[DoNotBulkEMail] [bit] NULL,
	[DoNotBulkPostalMail] [bit] NULL,
	[CreditLimit] [money] NULL,
	[CreditOnHold] [bit] NULL,
	[IsPrivate] [bit] NULL,
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
	[Merged] [bit] NULL,
	[DoNotSendMM] [bit] NULL,
	[MasterId] [uniqueidentifier] NULL,
	[LastUsedInCampaign] [datetime] NULL,
	[PreferredServiceId] [uniqueidentifier] NULL,
	[PreferredEquipmentId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
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
	[YomiName] [nvarchar](160) NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerIdType] [int] NOT NULL,
	[StageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[OpenDeals] [int] NULL,
	[OpenRevenue] [money] NULL,
	[OpenDeals_State] [int] NULL,
	[OpenRevenue_State] [int] NULL,
	[OpenRevenue_Date] [datetime] NULL,
	[OpenRevenue_Base] [money] NULL,
	[OpenDeals_Date] [datetime] NULL,
	[PrimarySatoriId] [nvarchar](200) NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
	[PrimaryTwitterId] [nvarchar](20) NULL,
	[FollowEmail] [bit] NULL,
	[MarketingOnly] [bit] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[OnHoldTime] [int] NULL,
	[TimeSpentByMeOnEmailAndMeetings] [nvarchar](1250) NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[SLAId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Account] PRIMARY KEY CLUSTERED 
(
	[AccountId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Account_AccountNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Account_AccountNumber] ON [dbo].[AccountBase]
(
	[AccountNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Account_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Account_Name] ON [dbo].[AccountBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_account_master_account]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_master_account] ON [dbo].[AccountBase]
(
	[MasterId] ASC
)
WHERE ([MasterId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_account_originating_lead]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_originating_lead] ON [dbo].[AccountBase]
(
	[OriginatingLeadId] ASC
)
WHERE ([OriginatingLeadId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_for_cascaderelationship_account_parent_account]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_parent_account] ON [dbo].[AccountBase]
(
	[ParentAccountId] ASC,
	[Name] ASC
)
INCLUDE ( 	[PrimaryContactId],
	[StateCode],
	[StatusCode],
	[OwnerId],
	[EntityImageId]) 
WHERE ([ParentAccountId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_account_primary_contact]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_primary_contact] ON [dbo].[AccountBase]
(
	[PrimaryContactId] ASC
)
WHERE ([PrimaryContactId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_accounts] ON [dbo].[AccountBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_service_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_accounts] ON [dbo].[AccountBase]
(
	[PreferredServiceId] ASC
)
WHERE ([PreferredServiceId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_accounts] ON [dbo].[AccountBase]
(
	[PreferredSystemUserId] ASC
)
WHERE ([PreferredSystemUserId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[AccountBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[AccountBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)
INCLUDE ( 	[AccountId],
	[TerritoryId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_emailaddress1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_emailaddress1] ON [dbo].[AccountBase]
(
	[EMailAddress1] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[AccountBase]
(
	[OwnerId] ASC,
	[StateCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_telephone1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_telephone1] ON [dbo].[AccountBase]
(
	[Telephone1] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_telephone2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_telephone2] ON [dbo].[AccountBase]
(
	[Telephone2] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [Set_To_Zero93]  DEFAULT ((0)) FOR [ParticipatesInWorkflow]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotPhone]  DEFAULT ((0)) FOR [DoNotPhone]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotFax]  DEFAULT ((0)) FOR [DoNotFax]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotEMail]  DEFAULT ((0)) FOR [DoNotEMail]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotPostalMail]  DEFAULT ((0)) FOR [DoNotPostalMail]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotBulkEMail]  DEFAULT ((0)) FOR [DoNotBulkEMail]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotBulkPostalMail]  DEFAULT ((0)) FOR [DoNotBulkPostalMail]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [Set_To_Zero94]  DEFAULT ((0)) FOR [IsPrivate]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_Merged]  DEFAULT ((0)) FOR [Merged]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_DoNotSendMM]  DEFAULT ((0)) FOR [DoNotSendMM]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_FollowEmail]  DEFAULT ((1)) FOR [FollowEmail]
GO
ALTER TABLE [dbo].[AccountBase] ADD  CONSTRAINT [DF_AccountBase_MarketingOnly]  DEFAULT ((0)) FOR [MarketingOnly]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [account_master_account] FOREIGN KEY([MasterId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [account_master_account]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [account_originating_lead] FOREIGN KEY([OriginatingLeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [account_originating_lead]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [account_parent_account] FOREIGN KEY([ParentAccountId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [account_parent_account]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [account_primary_contact] FOREIGN KEY([PrimaryContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [account_primary_contact]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [business_unit_accounts] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [business_unit_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [equipment_accounts] FOREIGN KEY([PreferredEquipmentId])
REFERENCES [dbo].[EquipmentBase] ([EquipmentId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [equipment_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [manualsla_account] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [manualsla_account]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [owner_accounts] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [owner_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [price_level_accounts] FOREIGN KEY([DefaultPriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [price_level_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [service_accounts] FOREIGN KEY([PreferredServiceId])
REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [service_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [system_user_accounts] FOREIGN KEY([PreferredSystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [system_user_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [territory_accounts] FOREIGN KEY([TerritoryId])
REFERENCES [dbo].[TerritoryBase] ([TerritoryId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [territory_accounts]
GO
ALTER TABLE [dbo].[AccountBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_account] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[AccountBase] CHECK CONSTRAINT [transactioncurrency_account]
GO
