USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ContactBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ContactBase](
	[ContactId] [uniqueidentifier] NOT NULL,
	[DefaultPriceLevelId] [uniqueidentifier] NULL,
	[CustomerSizeCode] [int] NULL,
	[CustomerTypeCode] [int] NULL,
	[PreferredContactMethodCode] [int] NULL,
	[LeadSourceCode] [int] NULL,
	[OriginatingLeadId] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[PaymentTermsCode] [int] NULL,
	[ShippingMethodCode] [int] NULL,
	[ParticipatesInWorkflow] [bit] NULL,
	[IsBackofficeCustomer] [bit] NULL,
	[Salutation] [nvarchar](100) NULL,
	[JobTitle] [nvarchar](100) NULL,
	[FirstName] [nvarchar](50) NULL,
	[Department] [nvarchar](100) NULL,
	[NickName] [nvarchar](50) NULL,
	[MiddleName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Suffix] [nvarchar](10) NULL,
	[YomiFirstName] [nvarchar](150) NULL,
	[FullName] [nvarchar](160) NULL,
	[YomiMiddleName] [nvarchar](150) NULL,
	[YomiLastName] [nvarchar](150) NULL,
	[Anniversary] [datetime] NULL,
	[BirthDate] [datetime] NULL,
	[GovernmentId] [nvarchar](50) NULL,
	[YomiFullName] [nvarchar](450) NULL,
	[Description] [nvarchar](max) NULL,
	[EmployeeId] [nvarchar](50) NULL,
	[GenderCode] [int] NULL,
	[AnnualIncome] [money] NULL,
	[HasChildrenCode] [int] NULL,
	[EducationCode] [int] NULL,
	[WebSiteUrl] [nvarchar](200) NULL,
	[FamilyStatusCode] [int] NULL,
	[FtpSiteUrl] [nvarchar](200) NULL,
	[EMailAddress1] [nvarchar](100) NULL,
	[SpousesName] [nvarchar](100) NULL,
	[AssistantName] [nvarchar](100) NULL,
	[EMailAddress2] [nvarchar](100) NULL,
	[AssistantPhone] [nvarchar](50) NULL,
	[EMailAddress3] [nvarchar](100) NULL,
	[DoNotPhone] [bit] NULL,
	[ManagerName] [nvarchar](100) NULL,
	[ManagerPhone] [nvarchar](50) NULL,
	[DoNotFax] [bit] NULL,
	[DoNotEMail] [bit] NULL,
	[DoNotPostalMail] [bit] NULL,
	[DoNotBulkEMail] [bit] NULL,
	[DoNotBulkPostalMail] [bit] NULL,
	[AccountRoleCode] [int] NULL,
	[TerritoryCode] [int] NULL,
	[IsPrivate] [bit] NULL,
	[CreditLimit] [money] NULL,
	[CreatedOn] [datetime] NULL,
	[CreditOnHold] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[NumberOfChildren] [int] NULL,
	[ChildrensNames] [nvarchar](255) NULL,
	[VersionNumber] [timestamp] NULL,
	[MobilePhone] [nvarchar](50) NULL,
	[Pager] [nvarchar](50) NULL,
	[Telephone1] [nvarchar](50) NULL,
	[Telephone2] [nvarchar](50) NULL,
	[Telephone3] [nvarchar](50) NULL,
	[Fax] [nvarchar](50) NULL,
	[Aging30] [money] NULL,
	[StateCode] [int] NOT NULL,
	[Aging60] [money] NULL,
	[StatusCode] [int] NULL,
	[Aging90] [money] NULL,
	[PreferredSystemUserId] [uniqueidentifier] NULL,
	[PreferredServiceId] [uniqueidentifier] NULL,
	[MasterId] [uniqueidentifier] NULL,
	[PreferredAppointmentDayCode] [int] NULL,
	[PreferredAppointmentTimeCode] [int] NULL,
	[DoNotSendMM] [bit] NULL,
	[Merged] [bit] NULL,
	[ExternalUserIdentifier] [nvarchar](50) NULL,
	[SubscriptionId] [uniqueidentifier] NULL,
	[PreferredEquipmentId] [uniqueidentifier] NULL,
	[LastUsedInCampaign] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ImportSequenceNumber] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[AnnualIncome_Base] [money] NULL,
	[CreditLimit_Base] [money] NULL,
	[Aging60_Base] [money] NULL,
	[Aging90_Base] [money] NULL,
	[Aging30_Base] [money] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[IsAutoCreate] [bit] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[ParentCustomerId] [uniqueidentifier] NULL,
	[ParentCustomerIdType] [int] NULL,
	[ParentCustomerIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[ParentCustomerIdYomiName] [nvarchar](4000) NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[StageId] [uniqueidentifier] NULL,
	[Business2] [nvarchar](50) NULL,
	[Company] [nvarchar](50) NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[Home2] [nvarchar](50) NULL,
	[Callback] [nvarchar](50) NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[SLAId] [uniqueidentifier] NULL,
	[TimeSpentByMeOnEmailAndMeetings] [nvarchar](1250) NULL,
	[OnHoldTime] [int] NULL,
	[FollowEmail] [bit] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[MarketingOnly] [bit] NULL,
 CONSTRAINT [cndx_PrimaryKey_Contact] PRIMARY KEY CLUSTERED 
(
	[ContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_contacts] ON [dbo].[ContactBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contact_master_contact]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_master_contact] ON [dbo].[ContactBase]
(
	[MasterId] ASC
)
WHERE ([MasterId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contact_originating_lead]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_originating_lead] ON [dbo].[ContactBase]
(
	[OriginatingLeadId] ASC
)
WHERE ([OriginatingLeadId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_service_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_contacts] ON [dbo].[ContactBase]
(
	[PreferredServiceId] ASC
)
WHERE ([PreferredServiceId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_contacts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_contacts] ON [dbo].[ContactBase]
(
	[PreferredSystemUserId] ASC
)
WHERE ([PreferredSystemUserId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_FullName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_FullName] ON [dbo].[ContactBase]
(
	[FullName] ASC
)
INCLUDE ( 	[TransactionCurrencyId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_ContactCover]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_ContactCover] ON [dbo].[ContactBase]
(
	[FirstName] ASC,
	[LastName] ASC,
	[FullName] ASC,
	[YomiFirstName] ASC,
	[YomiLastName] ASC,
	[YomiFullName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ContactBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Email2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Email2] ON [dbo].[ContactBase]
(
	[DoNotEMail] ASC,
	[DoNotBulkEMail] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_emailaddress1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_emailaddress1] ON [dbo].[ContactBase]
(
	[EMailAddress1] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contact_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_accounts] ON [dbo].[ContactBase]
(
	[ParentCustomerId] ASC,
	[ParentCustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_lastname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_lastname] ON [dbo].[ContactBase]
(
	[LastName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_middlename]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_middlename] ON [dbo].[ContactBase]
(
	[MiddleName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_mobilephone]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_mobilephone] ON [dbo].[ContactBase]
(
	[MobilePhone] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_parentcustomeridname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_parentcustomeridname] ON [dbo].[ContactBase]
(
	[ParentCustomerIdName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ContactBase]
(
	[OwnerId] ASC,
	[StateCode] ASC,
	[FullName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_telephone1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_telephone1] ON [dbo].[ContactBase]
(
	[Telephone1] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [Set_To_Zero103]  DEFAULT ((0)) FOR [ParticipatesInWorkflow]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotPhone]  DEFAULT ((0)) FOR [DoNotPhone]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotFax]  DEFAULT ((0)) FOR [DoNotFax]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotEMail]  DEFAULT ((0)) FOR [DoNotEMail]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotPostalMail]  DEFAULT ((0)) FOR [DoNotPostalMail]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotBulkEMail]  DEFAULT ((0)) FOR [DoNotBulkEMail]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotBulkPostalMail]  DEFAULT ((0)) FOR [DoNotBulkPostalMail]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [Set_To_Zero104]  DEFAULT ((0)) FOR [IsPrivate]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_DoNotSendMM]  DEFAULT ((0)) FOR [DoNotSendMM]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_Merged]  DEFAULT ((0)) FOR [Merged]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_IsAutoCreate]  DEFAULT ((0)) FOR [IsAutoCreate]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_FollowEmail]  DEFAULT ((1)) FOR [FollowEmail]
GO
ALTER TABLE [dbo].[ContactBase] ADD  CONSTRAINT [DF_ContactBase_MarketingOnly]  DEFAULT ((0)) FOR [MarketingOnly]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [business_unit_contacts] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [business_unit_contacts]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [contact_master_contact] FOREIGN KEY([MasterId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [contact_master_contact]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [contact_originating_lead] FOREIGN KEY([OriginatingLeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [contact_originating_lead]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [equipment_contacts] FOREIGN KEY([PreferredEquipmentId])
REFERENCES [dbo].[EquipmentBase] ([EquipmentId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [equipment_contacts]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [manualsla_contact] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [manualsla_contact]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [owner_contacts] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [owner_contacts]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [price_level_contacts] FOREIGN KEY([DefaultPriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [price_level_contacts]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [service_contacts] FOREIGN KEY([PreferredServiceId])
REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [service_contacts]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [system_user_contacts] FOREIGN KEY([PreferredSystemUserId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [system_user_contacts]
GO
ALTER TABLE [dbo].[ContactBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_contact] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ContactBase] CHECK CONSTRAINT [transactioncurrency_contact]
GO
