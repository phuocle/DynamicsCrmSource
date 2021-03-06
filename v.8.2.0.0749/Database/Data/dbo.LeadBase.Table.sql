USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[LeadBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LeadBase](
	[LeadId] [uniqueidentifier] NOT NULL,
	[LeadSourceCode] [int] NULL,
	[LeadQualityCode] [int] NULL,
	[PriorityCode] [int] NULL,
	[IndustryCode] [int] NULL,
	[PreferredContactMethodCode] [int] NULL,
	[SalesStageCode] [int] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[Subject] [nvarchar](300) NULL,
	[ParticipatesInWorkflow] [bit] NULL,
	[Description] [nvarchar](max) NULL,
	[EstimatedValue] [float] NULL,
	[EstimatedCloseDate] [datetime] NULL,
	[CompanyName] [nvarchar](100) NULL,
	[FirstName] [nvarchar](50) NULL,
	[MiddleName] [nvarchar](50) NULL,
	[LastName] [nvarchar](50) NULL,
	[Revenue] [money] NULL,
	[NumberOfEmployees] [int] NULL,
	[DoNotPhone] [bit] NULL,
	[SIC] [nvarchar](20) NULL,
	[DoNotFax] [bit] NULL,
	[EMailAddress1] [nvarchar](100) NULL,
	[JobTitle] [nvarchar](100) NULL,
	[Salutation] [nvarchar](100) NULL,
	[DoNotEMail] [bit] NULL,
	[EMailAddress2] [nvarchar](100) NULL,
	[DoNotPostalMail] [bit] NULL,
	[EMailAddress3] [nvarchar](100) NULL,
	[FullName] [nvarchar](160) NULL,
	[YomiFirstName] [nvarchar](150) NULL,
	[WebSiteUrl] [nvarchar](200) NULL,
	[Telephone1] [nvarchar](50) NULL,
	[Telephone2] [nvarchar](50) NULL,
	[Telephone3] [nvarchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[IsPrivate] [bit] NULL,
	[Fax] [nvarchar](50) NULL,
	[YomiMiddleName] [nvarchar](150) NULL,
	[YomiLastName] [nvarchar](150) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[YomiFullName] [nvarchar](450) NULL,
	[MobilePhone] [nvarchar](20) NULL,
	[StateCode] [int] NOT NULL,
	[Pager] [nvarchar](20) NULL,
	[StatusCode] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[MasterId] [uniqueidentifier] NULL,
	[CampaignId] [uniqueidentifier] NULL,
	[DoNotSendMM] [bit] NULL,
	[Merged] [bit] NULL,
	[DoNotBulkEMail] [bit] NULL,
	[LastUsedInCampaign] [datetime] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[EstimatedAmount] [money] NULL,
	[EstimatedAmount_Base] [money] NULL,
	[Revenue_Base] [money] NULL,
	[YomiCompanyName] [nvarchar](100) NULL,
	[IsAutoCreate] [bit] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[StageId] [uniqueidentifier] NULL,
	[DecisionMaker] [bit] NULL,
	[Need] [int] NULL,
	[BudgetAmount] [money] NULL,
	[QualificationComments] [nvarchar](max) NULL,
	[QualifyingOpportunityId] [uniqueidentifier] NULL,
	[ScheduleFollowUp_Qualify] [datetime] NULL,
	[ConfirmInterest] [bit] NULL,
	[ParentAccountId] [uniqueidentifier] NULL,
	[OriginatingCaseId] [uniqueidentifier] NULL,
	[ScheduleFollowUp_Prospect] [datetime] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[ParentContactId] [uniqueidentifier] NULL,
	[InitialCommunication] [int] NULL,
	[SalesStage] [int] NULL,
	[BudgetStatus] [int] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[PurchaseTimeFrame] [int] NULL,
	[PurchaseProcess] [int] NULL,
	[RelatedObjectId] [uniqueidentifier] NULL,
	[EvaluateFit] [bit] NULL,
	[BudgetAmount_Base] [money] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[FollowEmail] [bit] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[TimeSpentByMeOnEmailAndMeetings] [nvarchar](1250) NULL,
	[SLAId] [uniqueidentifier] NULL,
	[OnHoldTime] [int] NULL,
	[LastOnHoldTime] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_Lead] PRIMARY KEY CLUSTERED 
(
	[LeadId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_leads]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_leads] ON [dbo].[LeadBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_campaign_leads]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_leads] ON [dbo].[LeadBase]
(
	[CampaignId] ASC
)
WHERE ([CampaignId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_lead_master_lead]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_master_lead] ON [dbo].[LeadBase]
(
	[MasterId] ASC
)
WHERE ([MasterId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_lead_parent_account]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_account] ON [dbo].[LeadBase]
(
	[ParentAccountId] ASC
)
WHERE ([ParentAccountId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_lead_parent_contact]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_lead_parent_contact] ON [dbo].[LeadBase]
(
	[ParentContactId] ASC
)
WHERE ([ParentContactId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_FullName]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_FullName] ON [dbo].[LeadBase]
(
	[FullName] ASC
)
WHERE ([FullName] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[LeadBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_campaign_leads]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_campaign_leads] ON [dbo].[LeadBase]
(
	[LastUsedInCampaign] ASC,
	[CampaignId] ASC
)
INCLUDE ( 	[LeadSourceCode],
	[LeadQualityCode],
	[OwnerId],
	[CreatedOn]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_companyname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_companyname] ON [dbo].[LeadBase]
(
	[CompanyName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[LeadBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_firstname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_firstname] ON [dbo].[LeadBase]
(
	[FirstName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_lead_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_lead_customer_accounts] ON [dbo].[LeadBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_for_lead_views]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_lead_views] ON [dbo].[LeadBase]
(
	[CreatedOn] DESC,
	[LeadId] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[Subject],
	[StatusCode],
	[FullName]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_oob_charts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_oob_charts] ON [dbo].[LeadBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)
INCLUDE ( 	[LeadQualityCode],
	[LeadSourceCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_for_oob_views]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_oob_views] ON [dbo].[LeadBase]
(
	[FullName] ASC,
	[LeadId] ASC
)
INCLUDE ( 	[Telephone1],
	[Subject],
	[CompanyName],
	[EMailAddress1],
	[CreatedOn],
	[Fax],
	[StatusCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_lastname]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_lastname] ON [dbo].[LeadBase]
(
	[LastName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[LeadBase]
(
	[OwnerId] ASC,
	[StateCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_subject]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_subject] ON [dbo].[LeadBase]
(
	[Subject] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [Set_To_Zero116]  DEFAULT ((0)) FOR [ParticipatesInWorkflow]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_DoNotPhone]  DEFAULT ((0)) FOR [DoNotPhone]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_DoNotFax]  DEFAULT ((0)) FOR [DoNotFax]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_DoNotEMail]  DEFAULT ((0)) FOR [DoNotEMail]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_DoNotPostalMail]  DEFAULT ((0)) FOR [DoNotPostalMail]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [Set_To_Zero117]  DEFAULT ((0)) FOR [IsPrivate]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_DoNotSendMM]  DEFAULT ((0)) FOR [DoNotSendMM]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_Merged]  DEFAULT ((0)) FOR [Merged]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_DoNotBulkEMail]  DEFAULT ((0)) FOR [DoNotBulkEMail]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_IsAutoCreate]  DEFAULT ((0)) FOR [IsAutoCreate]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[LeadBase] ADD  CONSTRAINT [DF_LeadBase_FollowEmail]  DEFAULT ((1)) FOR [FollowEmail]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [business_unit_leads] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [business_unit_leads]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [campaign_leads] FOREIGN KEY([CampaignId])
REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [campaign_leads]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [lead_master_lead] FOREIGN KEY([MasterId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [lead_master_lead]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [lead_parent_account] FOREIGN KEY([ParentAccountId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [lead_parent_account]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [lead_parent_contact] FOREIGN KEY([ParentContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [lead_parent_contact]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [lead_qualifying_opportunity] FOREIGN KEY([QualifyingOpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [lead_qualifying_opportunity]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [manualsla_lead] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [manualsla_lead]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [OriginatingCase_Lead] FOREIGN KEY([OriginatingCaseId])
REFERENCES [dbo].[IncidentBase] ([IncidentId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [OriginatingCase_Lead]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [owner_leads] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [owner_leads]
GO
ALTER TABLE [dbo].[LeadBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_lead] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[LeadBase] CHECK CONSTRAINT [transactioncurrency_lead]
GO
