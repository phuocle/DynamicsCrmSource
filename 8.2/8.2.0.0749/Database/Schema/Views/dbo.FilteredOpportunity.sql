SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO


--
-- report view for opportunity
--
create view [dbo].[FilteredOpportunity] (
    [accountid],
    [accountiddsc],
    [accountidname],
    [accountidyominame],
    [actualclosedate],
    [actualclosedateutc],
    [actualvalue],
    [actualvalue_base],
    [budgetamount],
    [budgetamount_base],
    [budgetstatus],
    [budgettypename],
    [campaignid],
    [campaigniddsc],
    [campaignidname],
    [captureproposalfeedback],
    [captureproposalfeedbackname],
    [closeprobability],
    [completefinalproposal],
    [completefinalproposalname],
    [completeinternalreview],
    [completeinternalreviewname],
    [confirminterest],
    [confirminterestname],
    [contactid],
    [contactiddsc],
    [contactidname],
    [contactidyominame],
    [createdby],
    [createdbydsc],
    [createdbyname],
    [createdbyyominame],
    [createdon],
    [createdonutc],
    [createdonbehalfby],
    [createdonbehalfbydsc],
    [createdonbehalfbyname],
    [createdonbehalfbyyominame],
    [currentsituation],
    [customerid],
    [customeriddsc],
    [customeridname],
    [customeridtype],
    [customeridyominame],
    [customerneed],
    [customerpainpoints],
    [decisionmaker],
    [decisionmakername],
    [description],
    [developproposal],
    [developproposalname],
    [discountamount],
    [discountamount_base],
    [discountpercentage],
    [estimatedclosedate],
    [estimatedclosedateutc],
    [estimatedvalue],
    [estimatedvalue_base],
    [evaluatefit],
    [evaluatefitname],
    [exchangerate],
    [filedebrief],
    [filedebriefname],
    [finaldecisiondate],
    [finaldecisiondateutc],
    [freightamount],
    [freightamount_base],
    [identifycompetitors],
    [identifycompetitorsname],
    [identifycustomercontacts],
    [identifycustomercontactsname],
    [identifypursuitteam],
    [identifypursuitteamname],
    [importsequencenumber],
    [initialcommunication],
    [initialcommunicationname],
    [isprivatename],
    [isrevenuesystemcalculated],
    [isrevenuesystemcalculatedname],
    [lastonholdtime],
    [lastonholdtimeutc],
    [modifiedby],
    [modifiedbydsc],
    [modifiedbyname],
    [modifiedbyyominame],
    [modifiedon],
    [modifiedonutc],
    [modifiedonbehalfby],
    [modifiedonbehalfbydsc],
    [modifiedonbehalfbyname],
    [modifiedonbehalfbyyominame],
    [name],
    [need],
    [needname],
    [onholdtime],
    [opportunityid],
    [opportunityratingcode],
    [opportunityratingcodename],
    [originatingleadid],
    [originatingleadiddsc],
    [originatingleadidname],
    [originatingleadidyominame],
    [overriddencreatedon],
    [overriddencreatedonutc],
    [ownerid],
    [owneriddsc],
    [owneridname],
    [owneridtype],
    [owneridyominame],
    [owningbusinessunit],
    [owningteam],
    [owninguser],
    [parentaccountid],
    [parentaccountidname],
    [parentaccountidyominame],
    [parentcontactid],
    [parentcontactidname],
    [parentcontactidyominame],
    [participatesinworkflow],
    [participatesinworkflowname],
    [presentfinalproposal],
    [presentfinalproposalname],
    [presentproposal],
    [presentproposalname],
    [pricelevelid],
    [priceleveliddsc],
    [pricelevelidname],
    [pricingerrorcode],
    [pricingerrorcodename],
    [prioritycode],
    [prioritycodename],
    [processid],
    [proposedsolution],
    [purchaseprocess],
    [purchaseprocessname],
    [purchasetimeframe],
    [purchasetimeframename],
    [pursuitdecision],
    [pursuitdecisionname],
    [qualificationcomments],
    [quotecomments],
    [resolvefeedback],
    [resolvefeedbackname],
    [salesstage],
    [salesstagecode],
    [salesstagecodename],
    [salesstagename],
    [schedulefollowup_prospect],
    [schedulefollowup_prospectutc],
    [schedulefollowup_qualify],
    [schedulefollowup_qualifyutc],
    [scheduleproposalmeeting],
    [scheduleproposalmeetingutc],
    [sendthankyounote],
    [sendthankyounotename],
    [slaid],
    [slainvokedid],
    [slainvokedidname],
    [slaname],
    [stageid],
    [statecode],
    [statecodename],
    [statuscode],
    [statuscodename],
    [stepid],
    [stepname],
    [timeline],
    [timelinename],
    [timespentbymeonemailandmeetings],
    [timezoneruleversionnumber],
    [totalamount],
    [totalamountlessfreight],
    [totalamountlessfreight_base],
    [totalamount_base],
    [totaldiscountamount],
    [totaldiscountamount_base],
    [totallineitemamount],
    [totallineitemamount_base],
    [totallineitemdiscountamount],
    [totallineitemdiscountamount_base],
    [totaltax],
    [totaltax_base],
    [transactioncurrencyid],
    [transactioncurrencyiddsc],
    [transactioncurrencyidname],
    [traversedpath],
    [utcconversiontimezonecode],
    [versionnumber],
    crm_moneyformatstring,
    crm_priceformatstring
) with view_metadata as
select
    [Opportunity].[AccountId],
    --[Opportunity].[AccountIdDsc]
    0,
    [Opportunity].[AccountIdName],
    [Opportunity].[AccountIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[ActualCloseDate],
			us.TimeZoneCode),
        [Opportunity].[ActualCloseDate],
    [Opportunity].[ActualValue],
    [Opportunity].[ActualValue_Base],
    [Opportunity].[BudgetAmount],
    [Opportunity].[BudgetAmount_Base],
    [Opportunity].[BudgetStatus],
    BudgetStatusPLTable.Value,
    [Opportunity].[CampaignId],
    --[Opportunity].[CampaignIdDsc]
    0,
    [Opportunity].[CampaignIdName],
    [Opportunity].[CaptureProposalFeedback],
    CaptureProposalFeedbackPLTable.Value,
    [Opportunity].[CloseProbability],
    [Opportunity].[CompleteFinalProposal],
    CompleteFinalProposalPLTable.Value,
    [Opportunity].[CompleteInternalReview],
    CompleteInternalReviewPLTable.Value,
    [Opportunity].[ConfirmInterest],
    ConfirmInterestPLTable.Value,
    [Opportunity].[ContactId],
    --[Opportunity].[ContactIdDsc]
    0,
    [Opportunity].[ContactIdName],
    [Opportunity].[ContactIdYomiName],
    [Opportunity].[CreatedBy],
    --[Opportunity].[CreatedByDsc]
    0,
    [Opportunity].[CreatedByName],
    [Opportunity].[CreatedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[CreatedOn],
			us.TimeZoneCode),
        [Opportunity].[CreatedOn],
    [Opportunity].[CreatedOnBehalfBy],
    --[Opportunity].[CreatedOnBehalfByDsc]
    0,
    [Opportunity].[CreatedOnBehalfByName],
    [Opportunity].[CreatedOnBehalfByYomiName],
    [Opportunity].[CurrentSituation],
    [Opportunity].[CustomerId],
    --[Opportunity].[CustomerIdDsc]
    0,
    [Opportunity].[CustomerIdName],
    [Opportunity].[CustomerIdType],
    [Opportunity].[CustomerIdYomiName],
    [Opportunity].[CustomerNeed],
    [Opportunity].[CustomerPainPoints],
    [Opportunity].[DecisionMaker],
    DecisionMakerPLTable.Value,
    [Opportunity].[Description],
    [Opportunity].[DevelopProposal],
    DevelopProposalPLTable.Value,
    [Opportunity].[DiscountAmount],
    [Opportunity].[DiscountAmount_Base],
    [Opportunity].[DiscountPercentage],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[EstimatedCloseDate],
			us.TimeZoneCode),
        [Opportunity].[EstimatedCloseDate],
    [Opportunity].[EstimatedValue],
    [Opportunity].[EstimatedValue_Base],
    [Opportunity].[EvaluateFit],
    EvaluateFitPLTable.Value,
    [Opportunity].[ExchangeRate],
    [Opportunity].[FileDebrief],
    FileDebriefPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[FinalDecisionDate],
			us.TimeZoneCode),
        [Opportunity].[FinalDecisionDate],
    [Opportunity].[FreightAmount],
    [Opportunity].[FreightAmount_Base],
    [Opportunity].[IdentifyCompetitors],
    IdentifyCompetitorsPLTable.Value,
    [Opportunity].[IdentifyCustomerContacts],
    IdentifyCustomerContactsPLTable.Value,
    [Opportunity].[IdentifyPursuitTeam],
    IdentifyPursuitTeamPLTable.Value,
    [Opportunity].[ImportSequenceNumber],
    [Opportunity].[InitialCommunication],
    InitialCommunicationPLTable.Value,
    IsPrivatePLTable.Value,
    [Opportunity].[IsRevenueSystemCalculated],
    IsRevenueSystemCalculatedPLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[LastOnHoldTime],
			us.TimeZoneCode),
        [Opportunity].[LastOnHoldTime],
    [Opportunity].[ModifiedBy],
    --[Opportunity].[ModifiedByDsc]
    0,
    [Opportunity].[ModifiedByName],
    [Opportunity].[ModifiedByYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[ModifiedOn],
			us.TimeZoneCode),
        [Opportunity].[ModifiedOn],
    [Opportunity].[ModifiedOnBehalfBy],
    --[Opportunity].[ModifiedOnBehalfByDsc]
    0,
    [Opportunity].[ModifiedOnBehalfByName],
    [Opportunity].[ModifiedOnBehalfByYomiName],
    [Opportunity].[Name],
    [Opportunity].[Need],
    NeedPLTable.Value,
    [Opportunity].[OnHoldTime],
    [Opportunity].[OpportunityId],
    [Opportunity].[OpportunityRatingCode],
    OpportunityRatingCodePLTable.Value,
    [Opportunity].[OriginatingLeadId],
    --[Opportunity].[OriginatingLeadIdDsc]
    0,
    [Opportunity].[OriginatingLeadIdName],
    [Opportunity].[OriginatingLeadIdYomiName],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[OverriddenCreatedOn],
			us.TimeZoneCode),
        [Opportunity].[OverriddenCreatedOn],
    [Opportunity].[OwnerId],
    --[Opportunity].[OwnerIdDsc]
    0,
    [Opportunity].[OwnerIdName],
    [Opportunity].[OwnerIdType],
    [Opportunity].[OwnerIdYomiName],
    [Opportunity].[OwningBusinessUnit],
    [Opportunity].[OwningTeam],
    [Opportunity].[OwningUser],
    [Opportunity].[ParentAccountId],
    [Opportunity].[ParentAccountIdName],
    [Opportunity].[ParentAccountIdYomiName],
    [Opportunity].[ParentContactId],
    [Opportunity].[ParentContactIdName],
    [Opportunity].[ParentContactIdYomiName],
    [Opportunity].[ParticipatesInWorkflow],
    ParticipatesInWorkflowPLTable.Value,
    [Opportunity].[PresentFinalProposal],
    PresentFinalProposalPLTable.Value,
    [Opportunity].[PresentProposal],
    PresentProposalPLTable.Value,
    [Opportunity].[PriceLevelId],
    --[Opportunity].[PriceLevelIdDsc]
    0,
    [Opportunity].[PriceLevelIdName],
    [Opportunity].[PricingErrorCode],
    PricingErrorCodePLTable.Value,
    [Opportunity].[PriorityCode],
    PriorityCodePLTable.Value,
    [Opportunity].[ProcessId],
    [Opportunity].[ProposedSolution],
    [Opportunity].[PurchaseProcess],
    PurchaseProcessPLTable.Value,
    [Opportunity].[PurchaseTimeframe],
    PurchaseTimeframePLTable.Value,
    [Opportunity].[PursuitDecision],
    PursuitDecisionPLTable.Value,
    [Opportunity].[QualificationComments],
    [Opportunity].[QuoteComments],
    [Opportunity].[ResolveFeedback],
    ResolveFeedbackPLTable.Value,
    [Opportunity].[SalesStage],
    [Opportunity].[SalesStageCode],
    SalesStageCodePLTable.Value,
    SalesStagePLTable.Value,
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[ScheduleFollowup_Prospect],
			us.TimeZoneCode),
        [Opportunity].[ScheduleFollowup_Prospect],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[ScheduleFollowup_Qualify],
			us.TimeZoneCode),
        [Opportunity].[ScheduleFollowup_Qualify],
    dbo.fn_UTCToTzCodeSpecificLocalTime([Opportunity].[ScheduleProposalMeeting],
			us.TimeZoneCode),
        [Opportunity].[ScheduleProposalMeeting],
    [Opportunity].[SendThankYouNote],
    SendThankYouNotePLTable.Value,
    [Opportunity].[SLAId],
    [Opportunity].[SLAInvokedId],
    [Opportunity].[SLAInvokedIdName],
    [Opportunity].[SLAName],
    [Opportunity].[StageId],
    [Opportunity].[StateCode],
    StateCodePLTable.Value,
    [Opportunity].[StatusCode],
    StatusCodePLTable.Value,
    [Opportunity].[StepId],
    [Opportunity].[StepName],
    [Opportunity].[TimeLine],
    TimeLinePLTable.Value,
    [Opportunity].[TimeSpentByMeOnEmailAndMeetings],
    [Opportunity].[TimeZoneRuleVersionNumber],
    [Opportunity].[TotalAmount],
    [Opportunity].[TotalAmountLessFreight],
    [Opportunity].[TotalAmountLessFreight_Base],
    [Opportunity].[TotalAmount_Base],
    [Opportunity].[TotalDiscountAmount],
    [Opportunity].[TotalDiscountAmount_Base],
    [Opportunity].[TotalLineItemAmount],
    [Opportunity].[TotalLineItemAmount_Base],
    [Opportunity].[TotalLineItemDiscountAmount],
    [Opportunity].[TotalLineItemDiscountAmount_Base],
    [Opportunity].[TotalTax],
    [Opportunity].[TotalTax_Base],
    [Opportunity].[TransactionCurrencyId],
    --[Opportunity].[TransactionCurrencyIdDsc]
    0,
    [Opportunity].[TransactionCurrencyIdName],
    [Opportunity].[TraversedPath],
    [Opportunity].[UTCConversionTimeZoneCode],
    [Opportunity].[VersionNumber],
   dbo.fn_GetNumberFormatString(t.CurrencyPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode),
   dbo.fn_GetNumberFormatString(o.PricingDecimalPrecision, us.NumberGroupFormat, us.NegativeCurrencyFormatCode, 1, case o.CurrencyDisplayOption when 0 then t.CurrencySymbol when 1 then t.ISOCurrencyCode end, us.CurrencyFormatCode)
from Opportunity
    join SystemUserBase u on (u.SystemUserId = dbo.fn_FindUserGuid() and u.IsDisabled = 0)
    left join UserSettingsBase us on us.SystemUserId = u.SystemUserId
    left join OrganizationBase o on u.OrganizationId = o.OrganizationId
    left join TransactionCurrencyBase t on t.TransactionCurrencyId = [Opportunity].TransactionCurrencyId
    left outer join StringMap [BudgetStatusPLTable] on 
		([BudgetStatusPLTable].AttributeName = 'budgetstatus'
		and [BudgetStatusPLTable].ObjectTypeCode = 3
		and [BudgetStatusPLTable].AttributeValue = [Opportunity].[BudgetStatus]
		and [BudgetStatusPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CaptureProposalFeedbackPLTable] on 
		([CaptureProposalFeedbackPLTable].AttributeName = 'captureproposalfeedback'
		and [CaptureProposalFeedbackPLTable].ObjectTypeCode = 3
		and [CaptureProposalFeedbackPLTable].AttributeValue = [Opportunity].[CaptureProposalFeedback]
		and [CaptureProposalFeedbackPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CompleteFinalProposalPLTable] on 
		([CompleteFinalProposalPLTable].AttributeName = 'completefinalproposal'
		and [CompleteFinalProposalPLTable].ObjectTypeCode = 3
		and [CompleteFinalProposalPLTable].AttributeValue = [Opportunity].[CompleteFinalProposal]
		and [CompleteFinalProposalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [CompleteInternalReviewPLTable] on 
		([CompleteInternalReviewPLTable].AttributeName = 'completeinternalreview'
		and [CompleteInternalReviewPLTable].ObjectTypeCode = 3
		and [CompleteInternalReviewPLTable].AttributeValue = [Opportunity].[CompleteInternalReview]
		and [CompleteInternalReviewPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ConfirmInterestPLTable] on 
		([ConfirmInterestPLTable].AttributeName = 'confirminterest'
		and [ConfirmInterestPLTable].ObjectTypeCode = 3
		and [ConfirmInterestPLTable].AttributeValue = [Opportunity].[ConfirmInterest]
		and [ConfirmInterestPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DecisionMakerPLTable] on 
		([DecisionMakerPLTable].AttributeName = 'decisionmaker'
		and [DecisionMakerPLTable].ObjectTypeCode = 3
		and [DecisionMakerPLTable].AttributeValue = [Opportunity].[DecisionMaker]
		and [DecisionMakerPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [DevelopProposalPLTable] on 
		([DevelopProposalPLTable].AttributeName = 'developproposal'
		and [DevelopProposalPLTable].ObjectTypeCode = 3
		and [DevelopProposalPLTable].AttributeValue = [Opportunity].[DevelopProposal]
		and [DevelopProposalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [EvaluateFitPLTable] on 
		([EvaluateFitPLTable].AttributeName = 'evaluatefit'
		and [EvaluateFitPLTable].ObjectTypeCode = 3
		and [EvaluateFitPLTable].AttributeValue = [Opportunity].[EvaluateFit]
		and [EvaluateFitPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [FileDebriefPLTable] on 
		([FileDebriefPLTable].AttributeName = 'filedebrief'
		and [FileDebriefPLTable].ObjectTypeCode = 3
		and [FileDebriefPLTable].AttributeValue = [Opportunity].[FileDebrief]
		and [FileDebriefPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IdentifyCompetitorsPLTable] on 
		([IdentifyCompetitorsPLTable].AttributeName = 'identifycompetitors'
		and [IdentifyCompetitorsPLTable].ObjectTypeCode = 3
		and [IdentifyCompetitorsPLTable].AttributeValue = [Opportunity].[IdentifyCompetitors]
		and [IdentifyCompetitorsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IdentifyCustomerContactsPLTable] on 
		([IdentifyCustomerContactsPLTable].AttributeName = 'identifycustomercontacts'
		and [IdentifyCustomerContactsPLTable].ObjectTypeCode = 3
		and [IdentifyCustomerContactsPLTable].AttributeValue = [Opportunity].[IdentifyCustomerContacts]
		and [IdentifyCustomerContactsPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IdentifyPursuitTeamPLTable] on 
		([IdentifyPursuitTeamPLTable].AttributeName = 'identifypursuitteam'
		and [IdentifyPursuitTeamPLTable].ObjectTypeCode = 3
		and [IdentifyPursuitTeamPLTable].AttributeValue = [Opportunity].[IdentifyPursuitTeam]
		and [IdentifyPursuitTeamPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [InitialCommunicationPLTable] on 
		([InitialCommunicationPLTable].AttributeName = 'initialcommunication'
		and [InitialCommunicationPLTable].ObjectTypeCode = 3
		and [InitialCommunicationPLTable].AttributeValue = [Opportunity].[InitialCommunication]
		and [InitialCommunicationPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsPrivatePLTable] on 
		([IsPrivatePLTable].AttributeName = 'isprivate'
		and [IsPrivatePLTable].ObjectTypeCode = 3
		and [IsPrivatePLTable].AttributeValue = [Opportunity].[IsPrivate]
		and [IsPrivatePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [IsRevenueSystemCalculatedPLTable] on 
		([IsRevenueSystemCalculatedPLTable].AttributeName = 'isrevenuesystemcalculated'
		and [IsRevenueSystemCalculatedPLTable].ObjectTypeCode = 3
		and [IsRevenueSystemCalculatedPLTable].AttributeValue = [Opportunity].[IsRevenueSystemCalculated]
		and [IsRevenueSystemCalculatedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [NeedPLTable] on 
		([NeedPLTable].AttributeName = 'need'
		and [NeedPLTable].ObjectTypeCode = 3
		and [NeedPLTable].AttributeValue = [Opportunity].[Need]
		and [NeedPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [OpportunityRatingCodePLTable] on 
		([OpportunityRatingCodePLTable].AttributeName = 'opportunityratingcode'
		and [OpportunityRatingCodePLTable].ObjectTypeCode = 3
		and [OpportunityRatingCodePLTable].AttributeValue = [Opportunity].[OpportunityRatingCode]
		and [OpportunityRatingCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ParticipatesInWorkflowPLTable] on 
		([ParticipatesInWorkflowPLTable].AttributeName = 'participatesinworkflow'
		and [ParticipatesInWorkflowPLTable].ObjectTypeCode = 3
		and [ParticipatesInWorkflowPLTable].AttributeValue = [Opportunity].[ParticipatesInWorkflow]
		and [ParticipatesInWorkflowPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PresentFinalProposalPLTable] on 
		([PresentFinalProposalPLTable].AttributeName = 'presentfinalproposal'
		and [PresentFinalProposalPLTable].ObjectTypeCode = 3
		and [PresentFinalProposalPLTable].AttributeValue = [Opportunity].[PresentFinalProposal]
		and [PresentFinalProposalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PresentProposalPLTable] on 
		([PresentProposalPLTable].AttributeName = 'presentproposal'
		and [PresentProposalPLTable].ObjectTypeCode = 3
		and [PresentProposalPLTable].AttributeValue = [Opportunity].[PresentProposal]
		and [PresentProposalPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PricingErrorCodePLTable] on 
		([PricingErrorCodePLTable].AttributeName = 'pricingerrorcode'
		and [PricingErrorCodePLTable].ObjectTypeCode = 3
		and [PricingErrorCodePLTable].AttributeValue = [Opportunity].[PricingErrorCode]
		and [PricingErrorCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PriorityCodePLTable] on 
		([PriorityCodePLTable].AttributeName = 'prioritycode'
		and [PriorityCodePLTable].ObjectTypeCode = 3
		and [PriorityCodePLTable].AttributeValue = [Opportunity].[PriorityCode]
		and [PriorityCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PurchaseProcessPLTable] on 
		([PurchaseProcessPLTable].AttributeName = 'purchaseprocess'
		and [PurchaseProcessPLTable].ObjectTypeCode = 3
		and [PurchaseProcessPLTable].AttributeValue = [Opportunity].[PurchaseProcess]
		and [PurchaseProcessPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PurchaseTimeframePLTable] on 
		([PurchaseTimeframePLTable].AttributeName = 'purchasetimeframe'
		and [PurchaseTimeframePLTable].ObjectTypeCode = 3
		and [PurchaseTimeframePLTable].AttributeValue = [Opportunity].[PurchaseTimeframe]
		and [PurchaseTimeframePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [PursuitDecisionPLTable] on 
		([PursuitDecisionPLTable].AttributeName = 'pursuitdecision'
		and [PursuitDecisionPLTable].ObjectTypeCode = 3
		and [PursuitDecisionPLTable].AttributeValue = [Opportunity].[PursuitDecision]
		and [PursuitDecisionPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [ResolveFeedbackPLTable] on 
		([ResolveFeedbackPLTable].AttributeName = 'resolvefeedback'
		and [ResolveFeedbackPLTable].ObjectTypeCode = 3
		and [ResolveFeedbackPLTable].AttributeValue = [Opportunity].[ResolveFeedback]
		and [ResolveFeedbackPLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesStageCodePLTable] on 
		([SalesStageCodePLTable].AttributeName = 'salesstagecode'
		and [SalesStageCodePLTable].ObjectTypeCode = 3
		and [SalesStageCodePLTable].AttributeValue = [Opportunity].[SalesStageCode]
		and [SalesStageCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SalesStagePLTable] on 
		([SalesStagePLTable].AttributeName = 'salesstage'
		and [SalesStagePLTable].ObjectTypeCode = 3
		and [SalesStagePLTable].AttributeValue = [Opportunity].[SalesStage]
		and [SalesStagePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [SendThankYouNotePLTable] on 
		([SendThankYouNotePLTable].AttributeName = 'sendthankyounote'
		and [SendThankYouNotePLTable].ObjectTypeCode = 3
		and [SendThankYouNotePLTable].AttributeValue = [Opportunity].[SendThankYouNote]
		and [SendThankYouNotePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StateCodePLTable] on 
		([StateCodePLTable].AttributeName = 'statecode'
		and [StateCodePLTable].ObjectTypeCode = 3
		and [StateCodePLTable].AttributeValue = [Opportunity].[StateCode]
		and [StateCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [StatusCodePLTable] on 
		([StatusCodePLTable].AttributeName = 'statuscode'
		and [StatusCodePLTable].ObjectTypeCode = 3
		and [StatusCodePLTable].AttributeValue = [Opportunity].[StatusCode]
		and [StatusCodePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    left outer join StringMap [TimeLinePLTable] on 
		([TimeLinePLTable].AttributeName = 'timeline'
		and [TimeLinePLTable].ObjectTypeCode = 3
		and [TimeLinePLTable].AttributeValue = [Opportunity].[TimeLine]
		and [TimeLinePLTable].LangId = 
			case us.UILanguageId 
				when 0 then o.LanguageCode
				else us.UILanguageId
			end)
    cross join dbo.fn_GetMaxPrivilegeDepthMask(3) pdm
where
(
	-- privilege check
	pdm.PrivilegeDepthMask is not null and
	(
	
	-- Owner check
	-- If the user has global access, then skip the ownership check
	((pdm.PrivilegeDepthMask & 0x8) != 0) or
	[Opportunity].OwnerId in 
		(select OwnerId from [dbo].[fn_GetOwnerIdsForFilteredView](u.SystemUserId, 3))
		
	-- role based access
	or 
	
exists
(
	select 
	1
	where
	(
		-- deep/local security
		(((pdm.PrivilegeDepthMask & 0x4) != 0) or ((pdm.PrivilegeDepthMask & 0x2) != 0)) and 
		[Opportunity].[OwningBusinessUnit] in (select BusinessUnitId from SystemUserBusinessUnitEntityMap WITH (NOLOCK) where SystemUserId = u.SystemUserId and ObjectTypeCode = 3)
	) 
	or
	(
		-- global security
		((pdm.PrivilegeDepthMask & 0x8) != 0) and 
		[Opportunity].[OwningBusinessUnit] is not null 
	) 
)

	
	-- object shared to the user 
	or 
	[Opportunity].[OpportunityId] in 
		(select ObjectId from [dbo].[fn_GetSharedRecordIdsForFilteredView](u.SystemUserId, 3))
	)
)
GO
GRANT SELECT ON  [dbo].[FilteredOpportunity] TO [CRMReaderRole]
GO
GRANT SELECT ON  [dbo].[FilteredOpportunity] TO [PHUOCLE\ReportingGroup {8ff092ff-6d16-41c8-aeb9-43e799050400}]
GO
