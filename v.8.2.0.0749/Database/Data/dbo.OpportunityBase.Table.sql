USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OpportunityBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OpportunityBase](
	[OpportunityId] [uniqueidentifier] NOT NULL,
	[PriceLevelId] [uniqueidentifier] NULL,
	[OpportunityRatingCode] [int] NULL,
	[PriorityCode] [int] NULL,
	[Name] [nvarchar](300) NULL,
	[StepId] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[EstimatedValue] [money] NULL,
	[StepName] [nvarchar](200) NULL,
	[SalesStageCode] [int] NULL,
	[ParticipatesInWorkflow] [bit] NULL,
	[PricingErrorCode] [int] NULL,
	[EstimatedCloseDate] [datetime] NULL,
	[CloseProbability] [int] NULL,
	[ActualValue] [money] NULL,
	[ActualCloseDate] [datetime] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OriginatingLeadId] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[IsPrivate] [bit] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[StateCode] [int] NOT NULL,
	[StatusCode] [int] NULL,
	[IsRevenueSystemCalculated] [bit] NULL,
	[CampaignId] [uniqueidentifier] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[ImportSequenceNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ActualValue_Base] [money] NULL,
	[EstimatedValue_Base] [money] NULL,
	[TotalDiscountAmount] [money] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[TotalAmount] [money] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TotalAmountLessFreight] [money] NULL,
	[TotalLineItemDiscountAmount] [money] NULL,
	[CustomerId] [uniqueidentifier] NULL,
	[DiscountAmount] [money] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[FreightAmount] [money] NULL,
	[TotalTax] [money] NULL,
	[DiscountPercentage] [decimal](23, 10) NULL,
	[TotalLineItemAmount] [money] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[CustomerIdType] [int] NULL,
	[OwnerIdType] [int] NOT NULL,
	[TotalDiscountAmount_Base] [money] NULL,
	[FreightAmount_Base] [money] NULL,
	[TotalLineItemAmount_Base] [money] NULL,
	[TotalTax_Base] [money] NULL,
	[TotalLineItemDiscountAmount_Base] [money] NULL,
	[TotalAmount_Base] [money] NULL,
	[DiscountAmount_Base] [money] NULL,
	[TotalAmountLessFreight_Base] [money] NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
	[FileDebrief] [bit] NULL,
	[BudgetStatus] [int] NULL,
	[PresentProposal] [bit] NULL,
	[SendThankYouNote] [bit] NULL,
	[EvaluateFit] [bit] NULL,
	[FinalDecisionDate] [datetime] NULL,
	[ConfirmInterest] [bit] NULL,
	[CompleteInternalReview] [bit] NULL,
	[TimeLine] [int] NULL,
	[CustomerPainPoints] [nvarchar](max) NULL,
	[ResolveFeedback] [bit] NULL,
	[QuoteComments] [nvarchar](max) NULL,
	[PurchaseProcess] [int] NULL,
	[CaptureProposalFeedback] [bit] NULL,
	[ParentContactId] [uniqueidentifier] NULL,
	[IdentifyCustomerContacts] [bit] NULL,
	[CompleteFinalProposal] [bit] NULL,
	[BudgetAmount] [money] NULL,
	[ParentAccountId] [uniqueidentifier] NULL,
	[ScheduleFollowup_Qualify] [datetime] NULL,
	[Need] [int] NULL,
	[PursuitDecision] [bit] NULL,
	[ProcessId] [uniqueidentifier] NULL,
	[ScheduleProposalMeeting] [datetime] NULL,
	[StageId] [uniqueidentifier] NULL,
	[QualificationComments] [nvarchar](max) NULL,
	[SalesStage] [int] NULL,
	[InitialCommunication] [int] NULL,
	[IdentifyPursuitTeam] [bit] NULL,
	[ScheduleFollowup_Prospect] [datetime] NULL,
	[PurchaseTimeframe] [int] NULL,
	[IdentifyCompetitors] [bit] NULL,
	[DecisionMaker] [bit] NULL,
	[CurrentSituation] [nvarchar](max) NULL,
	[CustomerNeed] [nvarchar](max) NULL,
	[ProposedSolution] [nvarchar](max) NULL,
	[PresentFinalProposal] [bit] NULL,
	[DevelopProposal] [bit] NULL,
	[BudgetAmount_Base] [money] NULL,
	[TraversedPath] [nvarchar](1250) NULL,
	[TimeSpentByMeOnEmailAndMeetings] [nvarchar](1250) NULL,
	[SLAInvokedId] [uniqueidentifier] NULL,
	[LastOnHoldTime] [datetime] NULL,
	[OnHoldTime] [int] NULL,
	[SLAId] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_Opportunity] PRIMARY KEY CLUSTERED 
(
	[OpportunityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_opportunities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_opportunities] ON [dbo].[OpportunityBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_campaign_opportunities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_opportunities] ON [dbo].[OpportunityBase]
(
	[CampaignId] ASC
)
WHERE ([CampaignId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_originating_lead]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_originating_lead] ON [dbo].[OpportunityBase]
(
	[OriginatingLeadId] ASC
)
WHERE ([OriginatingLeadId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_parent_account]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_account] ON [dbo].[OpportunityBase]
(
	[ParentAccountId] ASC
)
WHERE ([ParentAccountId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_opportunity_parent_contact]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_contact] ON [dbo].[OpportunityBase]
(
	[ParentContactId] ASC
)
WHERE ([ParentContactId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Opportunity_EstimatedCloseDate]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Opportunity_EstimatedCloseDate] ON [dbo].[OpportunityBase]
(
	[EstimatedCloseDate] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [fndx_Opportunity_Name]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_Opportunity_Name] ON [dbo].[OpportunityBase]
(
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunityBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Core]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[OpportunityBase]
(
	[StateCode] ASC,
	[StatusCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_CreatedOn]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[OpportunityBase]
(
	[CreatedOn] ASC
)
INCLUDE ( 	[ActualCloseDate],
	[ActualValue_Base],
	[EstimatedValue_Base],
	[OwnerId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_FiscalYear]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_FiscalYear] ON [dbo].[OpportunityBase]
(
	[ActualCloseDate] ASC,
	[StateCode] ASC
)
INCLUDE ( 	[ActualValue_Base],
	[EstimatedValue_Base],
	[OwnerId]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_opportunity_customer_accounts]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_accounts] ON [dbo].[OpportunityBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [ndx_OpenOpportunities]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_OpenOpportunities] ON [dbo].[OpportunityBase]
(
	[StateCode] ASC,
	[Name] ASC,
	[OpportunityId] ASC
)
INCLUDE ( 	[OpportunityRatingCode],
	[EstimatedValue],
	[EstimatedCloseDate],
	[CloseProbability],
	[TransactionCurrencyId],
	[CustomerId],
	[CustomerIdName],
	[CustomerIdType],
	[CustomerIdYomiName],
	[ActualValue_Base],
	[EstimatedValue_Base],
	[CampaignId],
	[OwnerId],
	[StepName]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[OpportunityBase]
(
	[OwnerId] ASC,
	[StateCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD  CONSTRAINT [Set_To_Zero119]  DEFAULT ((0)) FOR [ParticipatesInWorkflow]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD  CONSTRAINT [Set_To_Zero120]  DEFAULT ((0)) FOR [IsPrivate]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD  CONSTRAINT [Set_To_Zero121]  DEFAULT ((0)) FOR [IsRevenueSystemCalculated]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD  CONSTRAINT [DF_OpportunityBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD  CONSTRAINT [DF_OpportunityBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [business_unit_opportunities] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [business_unit_opportunities]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [campaign_opportunities] FOREIGN KEY([CampaignId])
REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [campaign_opportunities]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [manualsla_opportunity] FOREIGN KEY([SLAId])
REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [manualsla_opportunity]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [opportunity_originating_lead] FOREIGN KEY([OriginatingLeadId])
REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [opportunity_originating_lead]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [opportunity_parent_account] FOREIGN KEY([ParentAccountId])
REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [opportunity_parent_account]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [opportunity_parent_contact] FOREIGN KEY([ParentContactId])
REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [opportunity_parent_contact]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [owner_opportunitys] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [owner_opportunitys]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [price_level_opportunties] FOREIGN KEY([PriceLevelId])
REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [price_level_opportunties]
GO
ALTER TABLE [dbo].[OpportunityBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_opportunity] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[OpportunityBase] CHECK CONSTRAINT [transactioncurrency_opportunity]
GO
