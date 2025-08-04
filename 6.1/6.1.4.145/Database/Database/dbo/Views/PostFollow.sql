


--
-- base view for PostFollow
--
create view dbo.[PostFollow]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [PostFollowId],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectIdYomiName],
    [RegardingObjectTypeCode],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [OwningBusinessUnit],
    [PostToYammer],
    [YammerPostState],
    [YammerRetryCount]
) with view_metadata as
select
    -- logical attributes
    [lk_PostFollow_createdby].[YomiFullName],
    [lk_PostFollow_createdby].[FullName],
    [lk_postfollow_createdonbehalfby].[FullName],
    [lk_postfollow_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [PostFollowBase].OwnerId,
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
    [PostFollowBase].[CreatedBy],
    [PostFollowBase].[CreatedOn],
    [PostFollowBase].[CreatedOnBehalfBy],
    [PostFollowBase].[PostFollowId],
    [PostFollowBase].[RegardingObjectId],
    [PostFollowBase].[RegardingObjectIdName],
    [PostFollowBase].[RegardingObjectIdYomiName],
    [PostFollowBase].[RegardingObjectTypeCode],
    [PostFollowBase].[TimeZoneRuleVersionNumber],
    [PostFollowBase].[UTCConversionTimeZoneCode],
    [PostFollowBase].[OwningBusinessUnit],
    [PostFollowBase].[PostToYammer],
    [PostFollowBase].[YammerPostState],
    [PostFollowBase].[YammerRetryCount]
from [PostFollowBase] 
    left join [SystemUserBase] [lk_PostFollow_createdby] with(nolock) on ([PostFollowBase].[CreatedBy] = [lk_PostFollow_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_postfollow_createdonbehalfby] with(nolock) on ([PostFollowBase].[CreatedOnBehalfBy] = [lk_postfollow_createdonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([PostFollowBase].OwnerId = XXowner.OwnerId)
