USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[Opportunity]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for Opportunity
--
create view [dbo].[Opportunity]
 (
    -- logical attributes
    [CampaignIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ParentContactIdName],
    [ParentContactIdYomiName],
    [SLAInvokedIdName],
    [ParentAccountIdYomiName],
    [ParentAccountIdName],
    [OriginatingLeadIdName],
    [OriginatingLeadIdYomiName],
    [TransactionCurrencyIdName],
    [PriceLevelIdName],
    [SLAName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,


	[AccountId],
	[AccountIdName],
	[AccountIdYomiName],
	[ContactId],
	[ContactIdName],
	[ContactIdYomiName],
    -- physical attributes
    [OpportunityId],
    [PriceLevelId],
    [OpportunityRatingCode],
    [PriorityCode],
    [Name],
    [StepId],
    [Description],
    [EstimatedValue],
    [StepName],
    [SalesStageCode],
    [ParticipatesInWorkflow],
    [PricingErrorCode],
    [EstimatedCloseDate],
    [CloseProbability],
    [ActualValue],
    [ActualCloseDate],
    [OwningBusinessUnit],
    [OriginatingLeadId],
    [CreatedOn],
    [IsPrivate],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [VersionNumber],
    [StateCode],
    [StatusCode],
    [IsRevenueSystemCalculated],
    [CustomerId],
    [CustomerIdName],
    [CustomerIdType],
    [CampaignId],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ImportSequenceNumber],
    [UTCConversionTimeZoneCode],
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [ActualValue_Base],
    [EstimatedValue_Base],
    [CustomerIdYomiName],
    [TotalTax],
    [DiscountPercentage],
    [TotalAmount],
    [DiscountAmount],
    [TotalAmountLessFreight],
    [FreightAmount],
    [TotalLineItemDiscountAmount],
    [TotalLineItemAmount],
    [TotalDiscountAmount],
    [TotalLineItemAmount_Base],
    [TotalDiscountAmount_Base],
    [TotalTax_Base],
    [DiscountAmount_Base],
    [TotalLineItemDiscountAmount_Base],
    [TotalAmount_Base],
    [TotalAmountLessFreight_Base],
    [FreightAmount_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [BudgetStatus],
    [DecisionMaker],
    [Need],
    [TimeLine],
    [BudgetAmount],
    [BudgetAmount_Base],
    [ParentAccountId],
    [ParentContactId],
    [EvaluateFit],
    [InitialCommunication],
    [ConfirmInterest],
    [ScheduleFollowup_Prospect],
    [ScheduleFollowup_Qualify],
    [ScheduleProposalMeeting],
    [FinalDecisionDate],
    [DevelopProposal],
    [CompleteInternalReview],
    [CaptureProposalFeedback],
    [ResolveFeedback],
    [PresentProposal],
    [SendThankYouNote],
    [SalesStage],
    [TraversedPath],
    [CompleteFinalProposal],
    [FileDebrief],
    [PursuitDecision],
    [CustomerPainPoints],
    [CustomerNeed],
    [ProposedSolution],
    [QualificationComments],
    [QuoteComments],
    [PurchaseProcess],
    [PurchaseTimeframe],
    [IdentifyCustomerContacts],
    [IdentifyCompetitors],
    [IdentifyPursuitTeam],
    [CurrentSituation],
    [PresentFinalProposal],
    [OnHoldTime],
    [StageId],
    [ProcessId],
    [LastOnHoldTime],
    [SLAId],
    [SLAInvokedId],
    [TimeSpentByMeOnEmailAndMeetings]
) with view_metadata as
select
    -- logical attributes
    [campaign_opportunities].[Name],
    [lk_opportunitybase_modifiedby].[FullName],
    [lk_opportunitybase_modifiedby].[YomiFullName],
    [lk_opportunitybase_createdonbehalfby].[YomiFullName],
    [lk_opportunitybase_createdonbehalfby].[FullName],
    [lk_opportunitybase_createdby].[FullName],
    [lk_opportunitybase_createdby].[YomiFullName],
    [lk_opportunitybase_modifiedonbehalfby].[YomiFullName],
    [lk_opportunitybase_modifiedonbehalfby].[FullName],
    [opportunity_parent_contact].[FullName],
    [opportunity_parent_contact].[YomiFullName],
    [sla_opportunity].[Name],
    [opportunity_parent_account].[YomiName],
    [opportunity_parent_account].[Name],
    [opportunity_originating_lead].[FullName],
    [opportunity_originating_lead].[YomiFullName],
    [transactioncurrency_opportunity].[CurrencyName],
    [price_level_opportunties].[Name],
    [manualsla_opportunity].[Name],

    -- ownership entries
    OwnerId = [OpportunityBase].OwnerId,
    OwnerName = XXowner.Name,
    OwnerYomiName =  XXowner.YomiName,
    OwnerDsc = 0, -- DSC is removed, stub it to 0
    OwnerIdType = XXowner.OwnerIdType,
    OwningUser = case 
 		when XXowner.OwnerIdType= 8 then XXowner.OwnerId
		else null
		end,
    OwningTeam = case 
 		when XXowner.OwnerIdType= 9 then XXowner.OwnerId
		else null
		end,


	[AccountId] = case 
		when [OpportunityBase].[CustomerIdType] = 1 AND [OpportunityBase].[CustomerId] IS NOT NULL then [OpportunityBase].[CustomerId]
		else NULL
		end,
	[AccountIdName] = case 
		when [OpportunityBase].[CustomerIdType] = 1 AND [OpportunityBase].[CustomerId] IS NOT NULL then [OpportunityBase].[CustomerIdName]
		else NULL
		end,
	[AccountIdYomiName] = case 
		when [OpportunityBase].[CustomerIdType] = 1 AND [OpportunityBase].[CustomerId] IS NOT NULL then [OpportunityBase].[CustomerIdYomiName]
		else NULL
		end,
	[ContactId] = case 
		when [OpportunityBase].[CustomerIdType] = 2 AND [OpportunityBase].[CustomerId] IS NOT NULL then [OpportunityBase].[CustomerId]
		else NULL
		end,
	[ContactIdName] = case 
		when [OpportunityBase].[CustomerIdType] = 2 AND [OpportunityBase].[CustomerId] IS NOT NULL then [OpportunityBase].[CustomerIdName]
		else NULL
		end,
	[ContactIdYomiName] = case 
		when [OpportunityBase].[CustomerIdType] = 2 AND [OpportunityBase].[CustomerId] IS NOT NULL then [OpportunityBase].[CustomerIdYomiName]
		else NULL
		end,
    -- physical attribute
    [OpportunityBase].[OpportunityId],
    [OpportunityBase].[PriceLevelId],
    [OpportunityBase].[OpportunityRatingCode],
    [OpportunityBase].[PriorityCode],
    [OpportunityBase].[Name],
    [OpportunityBase].[StepId],
    [OpportunityBase].[Description],
    [OpportunityBase].[EstimatedValue],
    [OpportunityBase].[StepName],
    [OpportunityBase].[SalesStageCode],
    [OpportunityBase].[ParticipatesInWorkflow],
    [OpportunityBase].[PricingErrorCode],
    [OpportunityBase].[EstimatedCloseDate],
    [OpportunityBase].[CloseProbability],
    [OpportunityBase].[ActualValue],
    [OpportunityBase].[ActualCloseDate],
    [OpportunityBase].[OwningBusinessUnit],
    [OpportunityBase].[OriginatingLeadId],
    [OpportunityBase].[CreatedOn],
    [OpportunityBase].[IsPrivate],
    [OpportunityBase].[CreatedBy],
    [OpportunityBase].[ModifiedOn],
    [OpportunityBase].[ModifiedBy],
    [OpportunityBase].[VersionNumber],
    [OpportunityBase].[StateCode],
    [OpportunityBase].[StatusCode],
    [OpportunityBase].[IsRevenueSystemCalculated],
    [OpportunityBase].[CustomerId],
    [OpportunityBase].[CustomerIdName],
    [OpportunityBase].[CustomerIdType],
    [OpportunityBase].[CampaignId],
    [OpportunityBase].[TransactionCurrencyId],
    [OpportunityBase].[ExchangeRate],
    [OpportunityBase].[ImportSequenceNumber],
    [OpportunityBase].[UTCConversionTimeZoneCode],
    [OpportunityBase].[TimeZoneRuleVersionNumber],
    [OpportunityBase].[OverriddenCreatedOn],
    [OpportunityBase].[ActualValue_Base],
    [OpportunityBase].[EstimatedValue_Base],
    [OpportunityBase].[CustomerIdYomiName],
    [OpportunityBase].[TotalTax],
    [OpportunityBase].[DiscountPercentage],
    [OpportunityBase].[TotalAmount],
    [OpportunityBase].[DiscountAmount],
    [OpportunityBase].[TotalAmountLessFreight],
    [OpportunityBase].[FreightAmount],
    [OpportunityBase].[TotalLineItemDiscountAmount],
    [OpportunityBase].[TotalLineItemAmount],
    [OpportunityBase].[TotalDiscountAmount],
    [OpportunityBase].[TotalLineItemAmount_Base],
    [OpportunityBase].[TotalDiscountAmount_Base],
    [OpportunityBase].[TotalTax_Base],
    [OpportunityBase].[DiscountAmount_Base],
    [OpportunityBase].[TotalLineItemDiscountAmount_Base],
    [OpportunityBase].[TotalAmount_Base],
    [OpportunityBase].[TotalAmountLessFreight_Base],
    [OpportunityBase].[FreightAmount_Base],
    [OpportunityBase].[CreatedOnBehalfBy],
    [OpportunityBase].[ModifiedOnBehalfBy],
    [OpportunityBase].[BudgetStatus],
    [OpportunityBase].[DecisionMaker],
    [OpportunityBase].[Need],
    [OpportunityBase].[TimeLine],
    [OpportunityBase].[BudgetAmount],
    [OpportunityBase].[BudgetAmount_Base],
    [OpportunityBase].[ParentAccountId],
    [OpportunityBase].[ParentContactId],
    [OpportunityBase].[EvaluateFit],
    [OpportunityBase].[InitialCommunication],
    [OpportunityBase].[ConfirmInterest],
    [OpportunityBase].[ScheduleFollowup_Prospect],
    [OpportunityBase].[ScheduleFollowup_Qualify],
    [OpportunityBase].[ScheduleProposalMeeting],
    [OpportunityBase].[FinalDecisionDate],
    [OpportunityBase].[DevelopProposal],
    [OpportunityBase].[CompleteInternalReview],
    [OpportunityBase].[CaptureProposalFeedback],
    [OpportunityBase].[ResolveFeedback],
    [OpportunityBase].[PresentProposal],
    [OpportunityBase].[SendThankYouNote],
    [OpportunityBase].[SalesStage],
    [OpportunityBase].[TraversedPath],
    [OpportunityBase].[CompleteFinalProposal],
    [OpportunityBase].[FileDebrief],
    [OpportunityBase].[PursuitDecision],
    [OpportunityBase].[CustomerPainPoints],
    [OpportunityBase].[CustomerNeed],
    [OpportunityBase].[ProposedSolution],
    [OpportunityBase].[QualificationComments],
    [OpportunityBase].[QuoteComments],
    [OpportunityBase].[PurchaseProcess],
    [OpportunityBase].[PurchaseTimeframe],
    [OpportunityBase].[IdentifyCustomerContacts],
    [OpportunityBase].[IdentifyCompetitors],
    [OpportunityBase].[IdentifyPursuitTeam],
    [OpportunityBase].[CurrentSituation],
    [OpportunityBase].[PresentFinalProposal],
    [OpportunityBase].[OnHoldTime],
    [OpportunityBase].[StageId],
    [OpportunityBase].[ProcessId],
    [OpportunityBase].[LastOnHoldTime],
    [OpportunityBase].[SLAId],
    [OpportunityBase].[SLAInvokedId],
    [OpportunityBase].[TimeSpentByMeOnEmailAndMeetings]
from [OpportunityBase] 
    left join [CampaignBase] [campaign_opportunities] on ([OpportunityBase].[CampaignId] = [campaign_opportunities].[CampaignId])
    left join [SystemUserBase] [lk_opportunitybase_createdby] with(nolock) on ([OpportunityBase].[CreatedBy] = [lk_opportunitybase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitybase_createdonbehalfby] with(nolock) on ([OpportunityBase].[CreatedOnBehalfBy] = [lk_opportunitybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitybase_modifiedby] with(nolock) on ([OpportunityBase].[ModifiedBy] = [lk_opportunitybase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_opportunitybase_modifiedonbehalfby] with(nolock) on ([OpportunityBase].[ModifiedOnBehalfBy] = [lk_opportunitybase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_opportunity] on ([OpportunityBase].[SLAId] = [manualsla_opportunity].[SLAId] and [manualsla_opportunity].OverwriteTime = 0 and [manualsla_opportunity].ComponentState = 0)
    left join [LeadBase] [opportunity_originating_lead] on ([OpportunityBase].[OriginatingLeadId] = [opportunity_originating_lead].[LeadId])
    left join [AccountBase] [opportunity_parent_account] on ([OpportunityBase].[ParentAccountId] = [opportunity_parent_account].[AccountId])
    left join [ContactBase] [opportunity_parent_contact] on ([OpportunityBase].[ParentContactId] = [opportunity_parent_contact].[ContactId])
    left join [PriceLevelBase] [price_level_opportunties] on ([OpportunityBase].[PriceLevelId] = [price_level_opportunties].[PriceLevelId])
    left join [SLABase] [sla_opportunity] on ([OpportunityBase].[SLAInvokedId] = [sla_opportunity].[SLAId] and [sla_opportunity].OverwriteTime = 0 and [sla_opportunity].ComponentState = 0)
    left join [TransactionCurrencyBase] [transactioncurrency_opportunity] on ([OpportunityBase].[TransactionCurrencyId] = [transactioncurrency_opportunity].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([OpportunityBase].OwnerId = XXowner.OwnerId)

GO
