


--
-- base view for GoalRollupQuery
--
create view dbo.[GoalRollupQuery]
 (
    -- logical attributes
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [GoalRollupQueryId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [StateCode],
    [StatusCode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [FetchXml],
    [QueryEntityType],
    [OwningBusinessUnit]
) with view_metadata as
select
    -- logical attributes
    [lk_goalrollupquery_createdonbehalfby].[YomiFullName],
    [lk_goalrollupquery_createdby].[FullName],
    [lk_goalrollupquery_modifiedby].[FullName],
    [lk_goalrollupquery_modifiedonbehalfby].[FullName],
    [lk_goalrollupquery_createdonbehalfby].[FullName],
    [lk_goalrollupquery_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [GoalRollupQueryBase].OwnerId,
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
    [GoalRollupQueryBase].[GoalRollupQueryId],
    [GoalRollupQueryBase].[CreatedOn],
    [GoalRollupQueryBase].[CreatedBy],
    [GoalRollupQueryBase].[ModifiedOn],
    [GoalRollupQueryBase].[ModifiedBy],
    [GoalRollupQueryBase].[CreatedOnBehalfBy],
    [GoalRollupQueryBase].[ModifiedOnBehalfBy],
    [GoalRollupQueryBase].[StateCode],
    [GoalRollupQueryBase].[StatusCode],
    [GoalRollupQueryBase].[VersionNumber],
    [GoalRollupQueryBase].[ImportSequenceNumber],
    [GoalRollupQueryBase].[OverriddenCreatedOn],
    [GoalRollupQueryBase].[TimeZoneRuleVersionNumber],
    [GoalRollupQueryBase].[UTCConversionTimeZoneCode],
    [GoalRollupQueryBase].[Name],
    [GoalRollupQueryBase].[FetchXml],
    [GoalRollupQueryBase].[QueryEntityType],
    [GoalRollupQueryBase].[OwningBusinessUnit]
from [GoalRollupQueryBase] 
    left join [SystemUserBase] [lk_goalrollupquery_createdby] with(nolock) on ([GoalRollupQueryBase].[CreatedBy] = [lk_goalrollupquery_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_goalrollupquery_createdonbehalfby] with(nolock) on ([GoalRollupQueryBase].[CreatedOnBehalfBy] = [lk_goalrollupquery_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_goalrollupquery_modifiedby] with(nolock) on ([GoalRollupQueryBase].[ModifiedBy] = [lk_goalrollupquery_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_goalrollupquery_modifiedonbehalfby] with(nolock) on ([GoalRollupQueryBase].[ModifiedOnBehalfBy] = [lk_goalrollupquery_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner with(nolock) on ([GoalRollupQueryBase].OwnerId = XXowner.OwnerId)
