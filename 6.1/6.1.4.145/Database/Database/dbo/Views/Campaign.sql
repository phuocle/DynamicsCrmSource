


--
-- base view for Campaign
--
create view dbo.[Campaign]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [ModifiedOnBehalfByName],
    [EntityImage_Timestamp],
    [PriceListName],
    [CreatedByName],
    [ModifiedByName],
    [CreatedByYomiName],
    [EntityImage_URL],
    [ModifiedByYomiName],
    [EntityImage],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [TypeCode],
    [ProposedEnd],
    [BudgetedCost],
    [CreatedOn],
    [PromotionCodeName],
    [ModifiedOn],
    [PriceListId],
    [StatusCode],
    [CreatedBy],
    [IsTemplate],
    [CampaignId],
    [ActualStart],
    [OwningBusinessUnit],
    [TotalActualCost],
    [Message],
    [ModifiedBy],
    [ExpectedRevenue],
    [VersionNumber],
    [CodeName],
    [ProposedStart],
    [Objective],
    [ActualEnd],
    [StateCode],
    [OtherCost],
    [Description],
    [TotalCampaignActivityActualCost],
    [ExpectedResponse],
    [Name],
    [ExchangeRate],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [UTCConversionTimeZoneCode],
    [TotalCampaignActivityActualCost_Base],
    [BudgetedCost_Base],
    [ExpectedRevenue_Base],
    [OtherCost_Base],
    [TotalActualCost_Base],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ProcessId],
    [StageId],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_campaign_modifiedonbehalfby].[YomiFullName],
    [transactioncurrency_campaign].[CurrencyName],
    [lk_campaign_modifiedonbehalfby].[FullName],
    [lk_campaign_entityimage].[ImageTimestamp],
    [PriceList_Campaigns].[Name],
    [lk_campaign_createdby].[FullName],
    [lk_campaign_modifiedby].[FullName],
    [lk_campaign_createdby].[YomiFullName],
    [lk_campaign_entityimage].[ImageURL],
    [lk_campaign_modifiedby].[YomiFullName],
    [lk_campaign_entityimage].[ImageData],
    [lk_campaign_createdonbehalfby].[YomiFullName],
    [lk_campaign_createdonbehalfby].[FullName],

    -- ownership entries
    OwnerId = [CampaignBase].OwnerId,
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

    -- physical attribute
    [CampaignBase].[TypeCode],
    [CampaignBase].[ProposedEnd],
    [CampaignBase].[BudgetedCost],
    [CampaignBase].[CreatedOn],
    [CampaignBase].[PromotionCodeName],
    [CampaignBase].[ModifiedOn],
    [CampaignBase].[PriceListId],
    [CampaignBase].[StatusCode],
    [CampaignBase].[CreatedBy],
    [CampaignBase].[IsTemplate],
    [CampaignBase].[CampaignId],
    [CampaignBase].[ActualStart],
    [CampaignBase].[OwningBusinessUnit],
    [CampaignBase].[TotalActualCost],
    [CampaignBase].[Message],
    [CampaignBase].[ModifiedBy],
    [CampaignBase].[ExpectedRevenue],
    [CampaignBase].[VersionNumber],
    [CampaignBase].[CodeName],
    [CampaignBase].[ProposedStart],
    [CampaignBase].[Objective],
    [CampaignBase].[ActualEnd],
    [CampaignBase].[StateCode],
    [CampaignBase].[OtherCost],
    [CampaignBase].[Description],
    [CampaignBase].[TotalCampaignActivityActualCost],
    [CampaignBase].[ExpectedResponse],
    [CampaignBase].[Name],
    [CampaignBase].[ExchangeRate],
    [CampaignBase].[TimeZoneRuleVersionNumber],
    [CampaignBase].[TransactionCurrencyId],
    [CampaignBase].[ImportSequenceNumber],
    [CampaignBase].[OverriddenCreatedOn],
    [CampaignBase].[UTCConversionTimeZoneCode],
    [CampaignBase].[TotalCampaignActivityActualCost_Base],
    [CampaignBase].[BudgetedCost_Base],
    [CampaignBase].[ExpectedRevenue_Base],
    [CampaignBase].[OtherCost_Base],
    [CampaignBase].[TotalActualCost_Base],
    [CampaignBase].[CreatedOnBehalfBy],
    [CampaignBase].[ModifiedOnBehalfBy],
    [CampaignBase].[ProcessId],
    [CampaignBase].[StageId],
    [CampaignBase].[EntityImageId]
from [CampaignBase] 
    left join [SystemUserBase] [lk_campaign_createdby] with(nolock) on ([CampaignBase].[CreatedBy] = [lk_campaign_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_campaign_createdonbehalfby] with(nolock) on ([CampaignBase].[CreatedOnBehalfBy] = [lk_campaign_createdonbehalfby].[SystemUserId])
    left join [ImageDescriptor] [lk_campaign_entityimage] on ([CampaignBase].[EntityImageId] = [lk_campaign_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_campaign_modifiedby] with(nolock) on ([CampaignBase].[ModifiedBy] = [lk_campaign_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_campaign_modifiedonbehalfby] with(nolock) on ([CampaignBase].[ModifiedOnBehalfBy] = [lk_campaign_modifiedonbehalfby].[SystemUserId])
    left join [PriceLevelBase] [PriceList_Campaigns] on ([CampaignBase].[PriceListId] = [PriceList_Campaigns].[PriceLevelId])
    left join [TransactionCurrencyBase] [transactioncurrency_campaign] on ([CampaignBase].[TransactionCurrencyId] = [transactioncurrency_campaign].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([CampaignBase].OwnerId = XXowner.OwnerId)
