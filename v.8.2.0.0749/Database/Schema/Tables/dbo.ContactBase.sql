CREATE TABLE [dbo].[ContactBase]
(
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
[ParticipatesInWorkflow] [bit] NULL CONSTRAINT [Set_To_Zero103] DEFAULT ((0)),
[IsBackofficeCustomer] [bit] NULL,
[Salutation] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[JobTitle] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[FirstName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Department] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[NickName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[MiddleName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[LastName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Suffix] [nvarchar] (10) COLLATE Latin1_General_CI_AI NULL,
[YomiFirstName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[FullName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[YomiMiddleName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[YomiLastName] [nvarchar] (150) COLLATE Latin1_General_CI_AI NULL,
[Anniversary] [datetime] NULL,
[BirthDate] [datetime] NULL,
[GovernmentId] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[YomiFullName] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EmployeeId] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[GenderCode] [int] NULL,
[AnnualIncome] [money] NULL,
[HasChildrenCode] [int] NULL,
[EducationCode] [int] NULL,
[WebSiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[FamilyStatusCode] [int] NULL,
[FtpSiteUrl] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress1] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[SpousesName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AssistantName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress2] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AssistantPhone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress3] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[DoNotPhone] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotPhone] DEFAULT ((0)),
[ManagerName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ManagerPhone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[DoNotFax] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotFax] DEFAULT ((0)),
[DoNotEMail] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotEMail] DEFAULT ((0)),
[DoNotPostalMail] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotPostalMail] DEFAULT ((0)),
[DoNotBulkEMail] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotBulkEMail] DEFAULT ((0)),
[DoNotBulkPostalMail] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotBulkPostalMail] DEFAULT ((0)),
[AccountRoleCode] [int] NULL,
[TerritoryCode] [int] NULL,
[IsPrivate] [bit] NULL CONSTRAINT [Set_To_Zero104] DEFAULT ((0)),
[CreditLimit] [money] NULL,
[CreatedOn] [datetime] NULL,
[CreditOnHold] [bit] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[NumberOfChildren] [int] NULL,
[ChildrensNames] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[MobilePhone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Pager] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone1] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Telephone3] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Fax] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
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
[DoNotSendMM] [bit] NULL CONSTRAINT [DF_ContactBase_DoNotSendMM] DEFAULT ((0)),
[Merged] [bit] NULL CONSTRAINT [DF_ContactBase_Merged] DEFAULT ((0)),
[ExternalUserIdentifier] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[SubscriptionId] [uniqueidentifier] NULL,
[PreferredEquipmentId] [uniqueidentifier] NULL,
[LastUsedInCampaign] [datetime] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ImportSequenceNumber] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[AnnualIncome_Base] [money] NULL,
[CreditLimit_Base] [money] NULL,
[Aging60_Base] [money] NULL,
[Aging90_Base] [money] NULL,
[Aging30_Base] [money] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ContactBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IsAutoCreate] [bit] NULL CONSTRAINT [DF_ContactBase_IsAutoCreate] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[ParentCustomerId] [uniqueidentifier] NULL,
[ParentCustomerIdType] [int] NULL,
[ParentCustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ContactBase_OwnerIdType] DEFAULT ((8)),
[ParentCustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[ProcessId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL,
[StageId] [uniqueidentifier] NULL,
[Business2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Company] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[Home2] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[Callback] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[CreatedByExternalParty] [uniqueidentifier] NULL,
[ModifiedByExternalParty] [uniqueidentifier] NULL,
[LastOnHoldTime] [datetime] NULL,
[SLAId] [uniqueidentifier] NULL,
[TimeSpentByMeOnEmailAndMeetings] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[OnHoldTime] [int] NULL,
[FollowEmail] [bit] NULL CONSTRAINT [DF_ContactBase_FollowEmail] DEFAULT ((1)),
[SLAInvokedId] [uniqueidentifier] NULL,
[MarketingOnly] [bit] NULL CONSTRAINT [DF_ContactBase_MarketingOnly] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [cndx_PrimaryKey_Contact] PRIMARY KEY CLUSTERED  ([ContactId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Email2] ON [dbo].[ContactBase] ([DoNotEMail], [DoNotBulkEMail]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress1] ON [dbo].[ContactBase] ([EMailAddress1]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_ContactCover] ON [dbo].[ContactBase] ([FirstName], [LastName], [FullName], [YomiFirstName], [YomiLastName], [YomiFullName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_FullName] ON [dbo].[ContactBase] ([FullName]) INCLUDE ([TransactionCurrencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_lastname] ON [dbo].[ContactBase] ([LastName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_master_contact] ON [dbo].[ContactBase] ([MasterId]) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_middlename] ON [dbo].[ContactBase] ([MiddleName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_mobilephone] ON [dbo].[ContactBase] ([MobilePhone]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_originating_lead] ON [dbo].[ContactBase] ([OriginatingLeadId]) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ContactBase] ([OwnerId], [StateCode], [FullName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_contacts] ON [dbo].[ContactBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_accounts] ON [dbo].[ContactBase] ([ParentCustomerId], [ParentCustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_parentcustomeridname] ON [dbo].[ContactBase] ([ParentCustomerIdName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_contacts] ON [dbo].[ContactBase] ([PreferredServiceId]) WHERE ([PreferredServiceId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_contacts] ON [dbo].[ContactBase] ([PreferredSystemUserId]) WHERE ([PreferredSystemUserId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[ContactBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_telephone1] ON [dbo].[ContactBase] ([Telephone1]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ContactBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [business_unit_contacts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [contact_master_contact] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [contact_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [equipment_contacts] FOREIGN KEY ([PreferredEquipmentId]) REFERENCES [dbo].[EquipmentBase] ([EquipmentId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [manualsla_contact] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [owner_contacts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [price_level_contacts] FOREIGN KEY ([DefaultPriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [service_contacts] FOREIGN KEY ([PreferredServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [system_user_contacts] FOREIGN KEY ([PreferredSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[ContactBase] ADD CONSTRAINT [transactioncurrency_contact] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
