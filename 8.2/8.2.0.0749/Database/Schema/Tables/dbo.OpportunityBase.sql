CREATE TABLE [dbo].[OpportunityBase]
(
[OpportunityId] [uniqueidentifier] NOT NULL,
[PriceLevelId] [uniqueidentifier] NULL,
[OpportunityRatingCode] [int] NULL,
[PriorityCode] [int] NULL,
[Name] [nvarchar] (300) COLLATE Latin1_General_CI_AI NULL,
[StepId] [uniqueidentifier] NULL,
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[EstimatedValue] [money] NULL,
[StepName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[SalesStageCode] [int] NULL,
[ParticipatesInWorkflow] [bit] NULL CONSTRAINT [Set_To_Zero119] DEFAULT ((0)),
[PricingErrorCode] [int] NULL,
[EstimatedCloseDate] [datetime] NULL,
[CloseProbability] [int] NULL,
[ActualValue] [money] NULL,
[ActualCloseDate] [datetime] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OriginatingLeadId] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[IsPrivate] [bit] NULL CONSTRAINT [Set_To_Zero120] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[StateCode] [int] NOT NULL,
[StatusCode] [int] NULL,
[IsRevenueSystemCalculated] [bit] NULL CONSTRAINT [Set_To_Zero121] DEFAULT ((0)),
[CampaignId] [uniqueidentifier] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
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
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_OpportunityBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[FreightAmount] [money] NULL,
[TotalTax] [money] NULL,
[DiscountPercentage] [decimal] (23, 10) NULL,
[TotalLineItemAmount] [money] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdType] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_OpportunityBase_OwnerIdType] DEFAULT ((8)),
[TotalDiscountAmount_Base] [money] NULL,
[FreightAmount_Base] [money] NULL,
[TotalLineItemAmount_Base] [money] NULL,
[TotalTax_Base] [money] NULL,
[TotalLineItemDiscountAmount_Base] [money] NULL,
[TotalAmount_Base] [money] NULL,
[DiscountAmount_Base] [money] NULL,
[TotalAmountLessFreight_Base] [money] NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[FileDebrief] [bit] NULL,
[BudgetStatus] [int] NULL,
[PresentProposal] [bit] NULL,
[SendThankYouNote] [bit] NULL,
[EvaluateFit] [bit] NULL,
[FinalDecisionDate] [datetime] NULL,
[ConfirmInterest] [bit] NULL,
[CompleteInternalReview] [bit] NULL,
[TimeLine] [int] NULL,
[CustomerPainPoints] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ResolveFeedback] [bit] NULL,
[QuoteComments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
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
[QualificationComments] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SalesStage] [int] NULL,
[InitialCommunication] [int] NULL,
[IdentifyPursuitTeam] [bit] NULL,
[ScheduleFollowup_Prospect] [datetime] NULL,
[PurchaseTimeframe] [int] NULL,
[IdentifyCompetitors] [bit] NULL,
[DecisionMaker] [bit] NULL,
[CurrentSituation] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CustomerNeed] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ProposedSolution] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PresentFinalProposal] [bit] NULL,
[DevelopProposal] [bit] NULL,
[BudgetAmount_Base] [money] NULL,
[TraversedPath] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[TimeSpentByMeOnEmailAndMeetings] [nvarchar] (1250) COLLATE Latin1_General_CI_AI NULL,
[SLAInvokedId] [uniqueidentifier] NULL,
[LastOnHoldTime] [datetime] NULL,
[OnHoldTime] [int] NULL,
[SLAId] [uniqueidentifier] NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [cndx_PrimaryKey_Opportunity] PRIMARY KEY CLUSTERED  ([OpportunityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_FiscalYear] ON [dbo].[OpportunityBase] ([ActualCloseDate]) INCLUDE ([ActualValue_Base], [EstimatedValue_Base], [OwnerId], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_campaign_opportunities] ON [dbo].[OpportunityBase] ([CampaignId]) WHERE ([CampaignId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[OpportunityBase] ([CreatedOn]) INCLUDE ([ActualCloseDate], [ActualValue_Base], [EstimatedValue_Base], [OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_accounts] ON [dbo].[OpportunityBase] ([CustomerId], [CustomerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Opportunity_EstimatedCloseDate] ON [dbo].[OpportunityBase] ([EstimatedCloseDate]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_Opportunity_Name] ON [dbo].[OpportunityBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_originating_lead] ON [dbo].[OpportunityBase] ([OriginatingLeadId]) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[OpportunityBase] ([OwnerId], [StateCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_opportunities] ON [dbo].[OpportunityBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_account] ON [dbo].[OpportunityBase] ([ParentAccountId]) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ParentAccountId] ON [dbo].[OpportunityBase] ([ParentAccountId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_opportunity_parent_contact] ON [dbo].[OpportunityBase] ([ParentContactId]) WHERE ([ParentContactId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_ParentContactId] ON [dbo].[OpportunityBase] ([ParentContactId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_OpenOpportunities] ON [dbo].[OpportunityBase] ([StateCode], [Name], [OpportunityId]) INCLUDE ([ActualValue_Base], [CampaignId], [CloseProbability], [CustomerId], [CustomerIdName], [CustomerIdType], [CustomerIdYomiName], [EstimatedCloseDate], [EstimatedValue], [EstimatedValue_Base], [OpportunityRatingCode], [OwnerId], [StepName], [TransactionCurrencyId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Core] ON [dbo].[OpportunityBase] ([StateCode], [StatusCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OpportunityBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [business_unit_opportunities] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [campaign_opportunities] FOREIGN KEY ([CampaignId]) REFERENCES [dbo].[CampaignBase] ([CampaignId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [manualsla_opportunity] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [opportunity_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [opportunity_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [opportunity_parent_contact] FOREIGN KEY ([ParentContactId]) REFERENCES [dbo].[ContactBase] ([ContactId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [owner_opportunitys] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [price_level_opportunties] FOREIGN KEY ([PriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId])
GO
ALTER TABLE [dbo].[OpportunityBase] ADD CONSTRAINT [transactioncurrency_opportunity] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
