USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[IncidentBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[IncidentBase](
	[IncidentId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ContractDetailId] [uniqueidentifier] NULL,
	[SubjectId] [uniqueidentifier] NULL,
	[ContractId] [uniqueidentifier] NULL,
	[ActualServiceUnits] [int] NULL,
	[CaseOriginCode] [int] NULL,
	[BilledServiceUnits] [int] NULL,
	[CaseTypeCode] [int] NULL,
	[ProductSerialNumber] [nvarchar](100) NULL,
	[Title] [nvarchar](200) NULL,
	[ProductId] [uniqueidentifier] NULL,
	[ContractServiceLevelCode] [int] NULL,
	[Description] [nvarchar](max) NULL,
	[IsDecrementing] [bit] NULL,
	[CreatedOn] [datetime] NULL,
	[TicketNumber] [nvarchar](100) NULL,
	[PriorityCode] [int] NULL,
	[CustomerSatisfactionCode] [int] NULL,
	[IncidentStageCode] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[FollowupBy] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[StateCode] [int] NOT NULL,
	[SeverityCode] [int] NULL,
	[StatusCode] [int] NULL,
	[ResponsibleContactId] [uniqueidentifier] NULL,
	[KbArticleId] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[ImportSequenceNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdType] [int] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[ActivitiesComplete] [bit] NULL,
	[StageId] [uniqueidentifier] NULL,
	[ExistingCase] [uniqueidentifier] NULL,
	[ServiceStage] [int] NULL,
	[CheckEmail] [bit] NULL,
	[FollowUpTaskCreated] [bit] NULL,
	[EntityImageId] [uniqueidentifier] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[FirstResponseSLAStatus] [int] NULL,
	[OnHoldTime] [int] NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[CustomerContacted] [bit] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[SocialProfileId] [uniqueidentifier] NULL,
	[RouteCase] [bit] NULL,
	[IsEscalated] [bit] NULL,
	[MasterId] [uniqueidentifier] NULL,
	[BlockedProfile] [bit] NULL,
	[PrimaryContactId] [uniqueidentifier] NULL,
	[ResolveByKPIId] [uniqueidentifier] NULL,
	[ResolveBySLAStatus] [int] NULL,
	[SentimentValue] [float] NULL,
	[Merged] [bit] NULL,
	[ResponseBy] [datetime] NULL,
	[EscalatedOn] [datetime] NULL,
	[ParentCaseId] [uniqueidentifier] NULL,
	[FirstResponseByKPIId] [uniqueidentifier] NULL,
	[MessageTypeCode] [int] NULL,
	[ResolveBy] [datetime] NULL,
	[InfluenceScore] [float] NULL,
	[EntitlementId] [uniqueidentifier] NULL,
	[FirstResponseSent] [bit] NULL,
	[SLAId] [uniqueidentifier] NULL,
	[CreatedByExternalParty] [uniqueidentifier] NULL,
	[ModifiedByExternalParty] [uniqueidentifier] NULL,
	[DecrementEntitlementTerm] [bit] NULL,
 CONSTRAINT [cndx_PrimaryKey_Incident] PRIMARY KEY CLUSTERED 
(
	[IncidentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [AK1_IncidentBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [AK1_IncidentBase] UNIQUE NONCLUSTERED 
(
	[OwningBusinessUnit] ASC,
	[TicketNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_case_master_case]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_master_case] ON [dbo].[IncidentBase]
(
	[MasterId] ASC
)
WHERE ([MasterId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_case_parent_case]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_case_parent_case] ON [dbo].[IncidentBase]
(
	[ParentCaseId] ASC
)
WHERE ([ParentCaseId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contact_as_responsible_contact]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contact_as_responsible_contact] ON [dbo].[IncidentBase]
(
	[ResponsibleContactId] ASC
)
WHERE ([ResponsibleContactId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contract_cases]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_cases] ON [dbo].[IncidentBase]
(
	[ContractId] ASC
)
WHERE ([ContractId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_contract_detail_cases]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_contract_detail_cases] ON [dbo].[IncidentBase]
(
	[ContractDetailId] ASC
)
WHERE ([ContractDetailId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_entitlement_cases]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_entitlement_cases] ON [dbo].[IncidentBase]
(
	[EntitlementId] ASC
)
WHERE ([EntitlementId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_kbarticle_incidents]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_kbarticle_incidents] ON [dbo].[IncidentBase]
(
	[KbArticleId] ASC
)
WHERE ([KbArticleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_product_incidents]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_product_incidents] ON [dbo].[IncidentBase]
(
	[ProductId] ASC
)
WHERE ([ProductId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_sla_cases]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_sla_cases] ON [dbo].[IncidentBase]
(
	[SLAId] ASC
)
WHERE ([SLAId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_subject_incidents]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_subject_incidents] ON [dbo].[IncidentBase]
(
	[SubjectId] ASC
)
WHERE ([SubjectId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cases_origin_per_day]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cases_origin_per_day] ON [dbo].[IncidentBase]
(
	[CreatedOn] ASC,
	[CaseOriginCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[IncidentBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_TicketNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_TicketNumber] ON [dbo].[IncidentBase]
(
	[TicketNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Title]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Title] ON [dbo].[IncidentBase]
(
	[Title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_active_cases]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_active_cases] ON [dbo].[IncidentBase]
(
	[StateCode] ASC
)
INCLUDE ( 	[IncidentId],
	[CaseOriginCode],
	[Title],
	[ModifiedOn]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[IncidentBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)
INCLUDE ( 	[CaseTypeCode],
	[CaseOriginCode]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_incident_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_incident_customer_accounts] ON [dbo].[IncidentBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_report]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_report] ON [dbo].[IncidentBase]
(
	[StateCode] ASC
)
INCLUDE ( 	[OwningBusinessUnit],
	[ModifiedOn],
	[OwnerId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[IncidentBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_ServiceStage]  DEFAULT ((0)) FOR [ServiceStage]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_CustomerContacted]  DEFAULT ((0)) FOR [CustomerContacted]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_RouteCase]  DEFAULT ((1)) FOR [RouteCase]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_IsEscalated]  DEFAULT ((0)) FOR [IsEscalated]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_Merged]  DEFAULT ((0)) FOR [Merged]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_FirstResponseSent]  DEFAULT ((0)) FOR [FirstResponseSent]
GO
ALTER TABLE [dbo].[IncidentBase] ADD  CONSTRAINT [DF_IncidentBase_DecrementEntitlementTerm]  DEFAULT ((1)) FOR [DecrementEntitlementTerm]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [business_unit_incidents] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [business_unit_incidents]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [contact_as_primary_contact] FOREIGN KEY([PrimaryContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [contact_as_primary_contact]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [contact_as_responsible_contact] FOREIGN KEY([ResponsibleContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [contact_as_responsible_contact]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [contract_cases] FOREIGN KEY([ContractId])
REFERENCES [dbo].[ContractBase] ([ContractId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [contract_cases]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [contract_detail_cases] FOREIGN KEY([ContractDetailId])
REFERENCES [dbo].[ContractDetailBase] ([ContractDetailId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [contract_detail_cases]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [entitlement_cases] FOREIGN KEY([EntitlementId])
REFERENCES [dbo].[EntitlementBase] ([EntitlementId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [entitlement_cases]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [kbarticle_incidents] FOREIGN KEY([KbArticleId])
REFERENCES [dbo].[KbArticleBase] ([KbArticleId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [kbarticle_incidents]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [manualsla_cases] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [manualsla_cases]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [owner_incidents] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [owner_incidents]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [product_incidents] FOREIGN KEY([ProductId])
REFERENCES [dbo].[ProductBase] ([ProductId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [product_incidents]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [slakpiinstance_incident_firstresponsebykpi] FOREIGN KEY([FirstResponseByKPIId])
REFERENCES [dbo].[SLAKPIInstanceBase] ([SLAKPIInstanceId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [slakpiinstance_incident_firstresponsebykpi]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [slakpiinstance_incident_resolvebykpi] FOREIGN KEY([ResolveByKPIId])
REFERENCES [dbo].[SLAKPIInstanceBase] ([SLAKPIInstanceId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [slakpiinstance_incident_resolvebykpi]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [socialprofile_cases] FOREIGN KEY([SocialProfileId])
REFERENCES [dbo].[SocialProfileBase] ([SocialProfileId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [socialprofile_cases]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [subject_incidents] FOREIGN KEY([SubjectId])
REFERENCES [dbo].[SubjectBase] ([SubjectId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [subject_incidents]
GO
ALTER TABLE [dbo].[IncidentBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_Incident] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[IncidentBase] CHECK CONSTRAINT [TransactionCurrency_Incident]
GO
