


--
-- base view for SocialActivity
--
create view dbo.[SocialActivity]
 (
    -- logical attributes
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [PostFromProfileIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [ActivityId],
    [ActivityTypeCode],
    [ActualDurationMinutes],
    [ActualEnd],
    [ActualStart],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [Description],
    [ImportSequenceNumber],
    [IsBilled],
    [IsRegularActivity],
    [IsWorkflowCreated],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OverriddenCreatedOn],
    [OwningBusinessUnit],
    [PriorityCode],
    [ProcessId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [ScheduledDurationMinutes],
    [ScheduledEnd],
    [ScheduledStart],
    [StageId],
    [StateCode],
    [StatusCode],
    [Subject],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [TransactionCurrencyId],
    [ExchangeRate],
    [RegardingObjectId],
    [Community],
    [SentimentValue],
    [PostedOn],
    [PostURL],
    [InResponseTo],
    [PostMessageType],
    [PostId],
    [ThreadId],
    [DirectionCode],
    [ServiceId],
    [PostFromProfileId],
    [PostToProfileId],
    [PostAuthorName],
    [PostAuthorYomiName],
    [PostAuthorType],
    [PostAuthorAccount],
    [PostAuthorAccountName],
    [PostAuthorAccountYomiName],
    [PostAuthorAccountType],
    [PostAuthor],
    [SocialAdditionalParams]
) with view_metadata as
select
    -- logical attributes
    [transactioncurrency_socialactivity].[CurrencyName],
    [lk_socialactivitybase_createdonbehalfby].[YomiFullName],
    [lk_socialactivitybase_createdonbehalfby].[FullName],
    [Socialprofile_SocialActivities].[ProfileName],
    [lk_socialactivitybase_modifiedonbehalfby].[YomiFullName],
    [lk_socialactivitybase_modifiedonbehalfby].[FullName],

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
    [ActivityPointerBase].[ActivityId],
    [ActivityPointerBase].[ActivityTypeCode],
    [ActivityPointerBase].[ActualDurationMinutes],
    [ActivityPointerBase].[ActualEnd],
    [ActivityPointerBase].[ActualStart],
    [ActivityPointerBase].[CreatedBy],
    [ActivityPointerBase].[CreatedOn],
    [ActivityPointerBase].[CreatedOnBehalfBy],
    [ActivityPointerBase].[Description],
    [ActivityPointerBase].[ImportSequenceNumber],
    [ActivityPointerBase].[IsBilled],
    [ActivityPointerBase].[IsRegularActivity],
    [ActivityPointerBase].[IsWorkflowCreated],
    [ActivityPointerBase].[ModifiedBy],
    [ActivityPointerBase].[ModifiedOn],
    [ActivityPointerBase].[ModifiedOnBehalfBy],
    [ActivityPointerBase].[OverriddenCreatedOn],
    [ActivityPointerBase].[OwningBusinessUnit],
    [ActivityPointerBase].[PriorityCode],
    [ActivityPointerBase].[ProcessId],
    [ActivityPointerBase].[RegardingObjectIdName],
    [ActivityPointerBase].[RegardingObjectIdYomiName],
    [ActivityPointerBase].[RegardingObjectTypeCode],
    [ActivityPointerBase].[ScheduledDurationMinutes],
    [ActivityPointerBase].[ScheduledEnd],
    [ActivityPointerBase].[ScheduledStart],
    [ActivityPointerBase].[StageId],
    [ActivityPointerBase].[StateCode],
    [ActivityPointerBase].[StatusCode],
    [ActivityPointerBase].[Subject],
    [ActivityPointerBase].[TimeZoneRuleVersionNumber],
    [ActivityPointerBase].[UTCConversionTimeZoneCode],
    [ActivityPointerBase].[TransactionCurrencyId],
    [ActivityPointerBase].[ExchangeRate],
    [ActivityPointerBase].[RegardingObjectId],
    [ActivityPointerBase].[Community],
    [ActivityPointerBase].[SentimentValue],
    [ActivityPointerBase].[PostedOn],
    [ActivityPointerBase].[PostURL],
    [ActivityPointerBase].[InResponseTo],
    [ActivityPointerBase].[PostMessageType],
    [ActivityPointerBase].[PostId],
    [ActivityPointerBase].[ThreadId],
    [ActivityPointerBase].[SocialActivityDirectionCode],
    [ActivityPointerBase].[ServiceId],
    [ActivityPointerBase].[PostFromProfileId],
    [ActivityPointerBase].[PostToProfileId],
    [ActivityPointerBase].[PostAuthorName],
    [ActivityPointerBase].[PostAuthorYomiName],
    [ActivityPointerBase].[PostAuthorType],
    [ActivityPointerBase].[PostAuthorAccount],
    [ActivityPointerBase].[PostAuthorAccountName],
    [ActivityPointerBase].[PostAuthorAccountYomiName],
    [ActivityPointerBase].[PostAuthorAccountType],
    [ActivityPointerBase].[PostAuthor],
    [ActivityPointerBase].[SocialAdditionalParams]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_socialactivitybase_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_socialactivitybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_socialactivitybase_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_socialactivitybase_modifiedonbehalfby].[SystemUserId])
    left join [SocialProfileBase] [Socialprofile_SocialActivities] on ([ActivityPointerBase].[PostFromProfileId] = [Socialprofile_SocialActivities].[SocialProfileId])
    left join [TransactionCurrencyBase] [transactioncurrency_socialactivity] on ([ActivityPointerBase].[TransactionCurrencyId] = [transactioncurrency_socialactivity].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4216