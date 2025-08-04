


--
-- base view for activitymonitor
--
create view dbo.[activitymonitor]
 (
    -- logical attributes
    [RuleIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ConditionIdName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [activitymonitorId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OwningBusinessUnit],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [EntitlementCheck],
    [ContactCreatedByRule],
    [CurrentState],
    [Reason],
    [MonitoredActivityItemId],
    [AdvancedSettings],
    [RuleId],
    [ConditionId],
    [MonitoredActivityItemIdName],
    [MonitoredActivityItemIdType]
) with view_metadata as
select
    -- logical attributes
    [convertrule_activitymonitor].[Name],
    [lk_activitymonitor_createdby].[FullName],
    [lk_activitymonitor_createdby].[YomiFullName],
    [lk_activitymonitor_createdonbehalfby].[FullName],
    [lk_activitymonitor_createdonbehalfby].[YomiFullName],
    [lk_activitymonitor_modifiedby].[FullName],
    [lk_activitymonitor_modifiedby].[YomiFullName],
    [lk_activitymonitor_modifiedonbehalfby].[FullName],
    [lk_activitymonitor_modifiedonbehalfby].[YomiFullName],
    [convertruleitem_activitymonitor].[Name],

    -- ownership entries
    OwnerId = [activitymonitorBase].OwnerId,
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
    [activitymonitorBase].[activitymonitorId],
    [activitymonitorBase].[CreatedOn],
    [activitymonitorBase].[CreatedBy],
    [activitymonitorBase].[ModifiedOn],
    [activitymonitorBase].[ModifiedBy],
    [activitymonitorBase].[CreatedOnBehalfBy],
    [activitymonitorBase].[ModifiedOnBehalfBy],
    [activitymonitorBase].[OwningBusinessUnit],
    [activitymonitorBase].[statecode],
    [activitymonitorBase].[statuscode],
    [activitymonitorBase].[VersionNumber],
    [activitymonitorBase].[ImportSequenceNumber],
    [activitymonitorBase].[OverriddenCreatedOn],
    [activitymonitorBase].[TimeZoneRuleVersionNumber],
    [activitymonitorBase].[UTCConversionTimeZoneCode],
    [activitymonitorBase].[Name],
    [activitymonitorBase].[EntitlementCheck],
    [activitymonitorBase].[ContactCreatedByRule],
    [activitymonitorBase].[CurrentState],
    [activitymonitorBase].[Reason],
    [activitymonitorBase].[MonitoredActivityItemId],
    [activitymonitorBase].[AdvancedSettings],
    [activitymonitorBase].[RuleId],
    [activitymonitorBase].[ConditionId],
    [activitymonitorBase].[MonitoredActivityItemIdName],
    [activitymonitorBase].[MonitoredActivityItemIdType]
from [activitymonitorBase] 
    left join [ConvertRuleBase] [convertrule_activitymonitor] on ([activitymonitorBase].[RuleId] = [convertrule_activitymonitor].[ConvertRuleId] and [convertrule_activitymonitor].OverwriteTime = 0 and [convertrule_activitymonitor].ComponentState = 0)
    left join [ConvertRuleItemBase] [convertruleitem_activitymonitor] on ([activitymonitorBase].[ConditionId] = [convertruleitem_activitymonitor].[ConvertRuleItemId] and [convertruleitem_activitymonitor].OverwriteTime = 0 and [convertruleitem_activitymonitor].ComponentState = 0)
    left join [SystemUserBase] [lk_activitymonitor_createdby] on ([activitymonitorBase].[CreatedBy] = [lk_activitymonitor_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_activitymonitor_createdonbehalfby] on ([activitymonitorBase].[CreatedOnBehalfBy] = [lk_activitymonitor_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_activitymonitor_modifiedby] on ([activitymonitorBase].[ModifiedBy] = [lk_activitymonitor_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_activitymonitor_modifiedonbehalfby] on ([activitymonitorBase].[ModifiedOnBehalfBy] = [lk_activitymonitor_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([activitymonitorBase].OwnerId = XXowner.OwnerId)
