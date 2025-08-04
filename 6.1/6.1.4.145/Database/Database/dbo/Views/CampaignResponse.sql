


--
-- base view for CampaignResponse
--
create view dbo.[CampaignResponse]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],
    [ModifiedByName],
    [CreatedByName],
    [CreatedByYomiName],
    [OriginatingActivityName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [IsBilled],
    [OwningBusinessUnit],
    [ModifiedOn],
    [StatusCode],
    [IsWorkflowCreated],
    [LastName],
    [PromotionCodeName],
    [ActualStart],
    [Fax],
    [Category],
    [ScheduledEnd],
    [PriorityCode],
    [ScheduledStart],
    [CreatedBy],
    [RegardingObjectId],
    [Telephone],
    [ResponseCode],
    [ActualDurationMinutes],
    [Subcategory],
    [CompanyName],
    [ChannelTypeCode],
    [FirstName],
    [ActivityId],
    [EMailAddress],
    [ServiceId],
    [ActualEnd],
    [ScheduledDurationMinutes],
    [ReceivedOn],
    [OriginatingActivityId],
    [StateCode],
    [VersionNumber],
    [CreatedOn],
    [ModifiedBy],
    [Subject],
    [Description],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [OriginatingActivityIdTypeCode],
    [UTCConversionTimeZoneCode],
    [TimeZoneRuleVersionNumber],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [YomiLastName],
    [YomiFirstName],
    [RegardingObjectIdYomiName],
    [YomiCompanyName],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [ActivityTypeCode],
    [IsRegularActivity],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ProcessId],
    [StageId]
) with view_metadata as
select
    -- logical attributes
    [lk_campaignresponse_createdonbehalfby].[FullName],
    [lk_campaignresponse_modifiedonbehalfby].[YomiFullName],
    [lk_campaignresponse_modifiedby].[YomiFullName],
    [lk_campaignresponse_modifiedonbehalfby].[FullName],
    [lk_campaignresponse_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_CampaignResponse].[CurrencyName],
    [lk_campaignresponse_modifiedby].[FullName],
    [lk_campaignresponse_createdby].[FullName],
    [lk_campaignresponse_createdby].[YomiFullName],
    [activity_campaignresponse].[Subject],

    -- ownership entries
    OwnerId = [ActivityPointerBase].OwnerId,
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
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[LastName],
    [ActivityPointerBase].[PromotionCodeName],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[Fax],
    [ActivityPointerBase].[CampResCategory],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[Telephone],
    [ActivityPointerBase].[ResponseCode],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[CampResSubcategory],
    [ActivityPointerBase].[CompanyName],
    [ActivityPointerBase].[CampResChannelTypeCode],
    [ActivityPointerBase].[FirstName],
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[EMailAddress],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ReceivedOn],
    [ActivityPointerBase].[OriginatingActivityId],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[VersionNumber],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[OriginatingActivityIdTypeCode],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[CampResOverriddenCreatedOn],
    [ActivityPointerBase].[CampResImportSequenceNumber],
    [ActivityPointerBase].[YomiLastName],
    [ActivityPointerBase].[YomiFirstName],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[YomiCompanyName],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[StageId]
from [ActivityPointerBase] 
    left join [ActivityPointerBase] [activity_campaignresponse] with(nolock) on ([ActivityPointerBase].[OriginatingActivityId] = [activity_campaignresponse].[ActivityId])
    left join [SystemUserBase] [lk_campaignresponse_createdby] with(nolock) on ([ActivityPointerBase].[CreatedBy] = [lk_campaignresponse_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_campaignresponse_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_campaignresponse_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_campaignresponse_modifiedby] with(nolock) on ([ActivityPointerBase].[ModifiedBy] = [lk_campaignresponse_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_campaignresponse_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_campaignresponse_modifiedonbehalfby].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_CampaignResponse] on ([ActivityPointerBase].[TransactionCurrencyId] = [TransactionCurrency_CampaignResponse].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4401