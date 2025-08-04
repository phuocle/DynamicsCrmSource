


--
-- base view for SocialActivity
--
create view dbo.[SocialActivity]
 (
    -- logical attributes
    [ModifiedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [SLAInvokedIdName],
    [TransactionCurrencyIdName],
    [SLAName],
    [PostFromProfileIdName],

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
    [TraversedPath],
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
    [VersionNumber],
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
    [SLAInvokedId],
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
    [SocialAdditionalParams],
    [ActivityAdditionalParams],
    [SLAId],
    [OnHoldTime],
    [LastOnHoldTime],
    [SortDate]
) with view_metadata as
select
    -- logical attributes
    [lk_socialactivitybase_modifiedonbehalfby].[YomiFullName],
    [lk_socialactivitybase_modifiedonbehalfby].[FullName],
    [lk_socialactivitybase_createdonbehalfby].[YomiFullName],
    [lk_socialactivitybase_createdonbehalfby].[FullName],
    [sla_socialactivity].[Name],
    [transactioncurrency_socialactivity].[CurrencyName],
    [manualsla_socialactivity].[Name],
    [Socialprofile_SocialActivities].[ProfileName],

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
    [ActivityPointerBase].[TraversedPath],
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
    [ActivityPointerBase].[VersionNumber],
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
    [ActivityPointerBase].[SLAInvokedId],
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
    [ActivityPointerBase].[SocialAdditionalParams],
    [ActivityPointerBase].[ActivityAdditionalParams],
    [ActivityPointerBase].[SLAId],
    [ActivityPointerBase].[OnHoldTime],
    [ActivityPointerBase].[LastOnHoldTime],
    [ActivityPointerBase].[SortDate]
from [ActivityPointerBase] 
    left join [SystemUserBase] [lk_socialactivitybase_createdonbehalfby] with(nolock) on ([ActivityPointerBase].[CreatedOnBehalfBy] = [lk_socialactivitybase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_socialactivitybase_modifiedonbehalfby] with(nolock) on ([ActivityPointerBase].[ModifiedOnBehalfBy] = [lk_socialactivitybase_modifiedonbehalfby].[SystemUserId])
    left join [SLABase] [manualsla_socialactivity] on ([ActivityPointerBase].[SLAId] = [manualsla_socialactivity].[SLAId] and [manualsla_socialactivity].OverwriteTime = 0 and [manualsla_socialactivity].ComponentState = 0)
    left join [SLABase] [sla_socialactivity] on ([ActivityPointerBase].[SLAInvokedId] = [sla_socialactivity].[SLAId] and [sla_socialactivity].OverwriteTime = 0 and [sla_socialactivity].ComponentState = 0)
    left join [SocialProfileBase] [Socialprofile_SocialActivities] on ([ActivityPointerBase].[PostFromProfileId] = [Socialprofile_SocialActivities].[SocialProfileId])
    left join [TransactionCurrencyBase] [transactioncurrency_socialactivity] on ([ActivityPointerBase].[TransactionCurrencyId] = [transactioncurrency_socialactivity].[TransactionCurrencyId])
    left join OwnerBase XXowner with(nolock) on ([ActivityPointerBase].OwnerId = XXowner.OwnerId)
where [ActivityPointerBase].[ActivityTypeCode] = 4216