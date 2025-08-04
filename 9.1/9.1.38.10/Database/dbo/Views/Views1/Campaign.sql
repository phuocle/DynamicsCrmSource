


--
-- base view for Campaign
--
create view dbo.[Campaign]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [EntityImage_Timestamp],
    [EntityImage],
    [EntityImage_URL],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [PriceListName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [TransactionCurrencyIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CampaignId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [VersionNumber],
    [EmailAddress],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [ActualEnd],
    [ActualStart],
    [BudgetedCost],
    [TransactionCurrencyId],
    [ExchangeRate],
    [BudgetedCost_Base],
    [CodeName],
    [Description],
    [ExpectedResponse],
    [ExpectedRevenue],
    [ExpectedRevenue_Base],
    [IsTemplate],
    [Message],
    [Objective],
    [OtherCost],
    [OtherCost_Base],
    [PromotionCodeName],
    [ProposedEnd],
    [ProposedStart],
    [StateCode],
    [StatusCode],
    [TotalActualCost],
    [TotalActualCost_Base],
    [TotalCampaignActivityActualCost],
    [TotalCampaignActivityActualCost_Base],
    [TypeCode],
    [PriceListId],
    [EntityImageId],
    [TmpRegardingObjectId]
) with view_metadata as
select
    -- logical attributes
    [lk_campaign_createdby].[FullName],
    [lk_campaign_createdby].[YomiFullName],
    [lk_campaign_createdonbehalfby].[FullName],
    [lk_campaign_createdonbehalfby].[YomiFullName],
    [lk_campaign_entityimage].[ImageTimestamp],
    [lk_campaign_entityimage].[ImageData],
    [lk_campaign_entityimage].[ImageURL],
    [lk_campaign_modifiedonbehalfby].[FullName],
    [lk_campaign_modifiedonbehalfby].[YomiFullName],
    [PriceList_Campaigns].[Name],
    [lk_campaign_modifiedby].[FullName],
    [lk_campaign_modifiedby].[YomiFullName],
    [transactioncurrency_campaign].[CurrencyName],

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
    [CampaignBase].[CampaignId],
    [CampaignBase].[CreatedOn],
    [CampaignBase].[CreatedBy],
    [CampaignBase].[ModifiedOn],
    [CampaignBase].[ModifiedBy],
    [CampaignBase].[CreatedOnBehalfBy],
    [CampaignBase].[ModifiedOnBehalfBy],
    [CampaignBase].[OwningBusinessUnit],
    [CampaignBase].[VersionNumber],
    [CampaignBase].[EmailAddress],
    [CampaignBase].[ImportSequenceNumber],
    [CampaignBase].[OverriddenCreatedOn],
    [CampaignBase].[TimeZoneRuleVersionNumber],
    [CampaignBase].[UTCConversionTimeZoneCode],
    [CampaignBase].[Name],
    [CampaignBase].[ProcessId],
    [CampaignBase].[StageId],
    [CampaignBase].[TraversedPath],
    [CampaignBase].[ActualEnd],
    [CampaignBase].[ActualStart],
    [CampaignBase].[BudgetedCost],
    [CampaignBase].[TransactionCurrencyId],
    [CampaignBase].[ExchangeRate],
    [CampaignBase].[BudgetedCost_Base],
    [CampaignBase].[CodeName],
    [CampaignBase].[Description],
    [CampaignBase].[ExpectedResponse],
    [CampaignBase].[ExpectedRevenue],
    [CampaignBase].[ExpectedRevenue_Base],
    [CampaignBase].[IsTemplate],
    [CampaignBase].[Message],
    [CampaignBase].[Objective],
    [CampaignBase].[OtherCost],
    [CampaignBase].[OtherCost_Base],
    [CampaignBase].[PromotionCodeName],
    [CampaignBase].[ProposedEnd],
    [CampaignBase].[ProposedStart],
    [CampaignBase].[StateCode],
    [CampaignBase].[StatusCode],
    [CampaignBase].[TotalActualCost],
    [CampaignBase].[TotalActualCost_Base],
    [CampaignBase].[TotalCampaignActivityActualCost],
    [CampaignBase].[TotalCampaignActivityActualCost_Base],
    [CampaignBase].[TypeCode],
    [CampaignBase].[PriceListId],
    [CampaignBase].[EntityImageId],
    [CampaignBase].[TmpRegardingObjectId]
from [CampaignBase] 
    left join [SystemUserBase] [lk_campaign_createdby] on ([CampaignBase].[CreatedBy] = [lk_campaign_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_campaign_createdonbehalfby] on ([CampaignBase].[CreatedOnBehalfBy] = [lk_campaign_createdonbehalfby].[SystemUserId])
    left join [ImageDescriptor] [lk_campaign_entityimage] on ([CampaignBase].[EntityImageId] = [lk_campaign_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_campaign_modifiedby] on ([CampaignBase].[ModifiedBy] = [lk_campaign_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_campaign_modifiedonbehalfby] on ([CampaignBase].[ModifiedOnBehalfBy] = [lk_campaign_modifiedonbehalfby].[SystemUserId])
    left join [PriceLevelBase] [PriceList_Campaigns] on ([CampaignBase].[PriceListId] = [PriceList_Campaigns].[PriceLevelId])
    left join [TransactionCurrencyBase] [transactioncurrency_campaign] on ([CampaignBase].[TransactionCurrencyId] = [transactioncurrency_campaign].[TransactionCurrencyId])
    left join OwnerBase XXowner on ([CampaignBase].OwnerId = XXowner.OwnerId)
