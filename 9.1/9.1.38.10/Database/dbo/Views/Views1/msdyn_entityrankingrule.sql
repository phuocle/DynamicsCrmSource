


--
-- base view for msdyn_entityrankingrule
--
create view dbo.[msdyn_entityrankingrule]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
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
    [msdyn_entityrankingruleId],
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
    [msdyn_name],
    [msdyn_FetchXmlRule],
    [msdyn_entityname],
    [msdyn_ObjectTypeCode],
    [msdyn_OOBRule],
    [msdyn_enabled],
    [msdyn_overriddenrank],
    [msdyn_RulePriority]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_entityrankingrule_createdby].[FullName],
    [lk_msdyn_entityrankingrule_createdby].[YomiFullName],
    [lk_msdyn_entityrankingrule_createdonbehalfby].[FullName],
    [lk_msdyn_entityrankingrule_createdonbehalfby].[YomiFullName],
    [lk_msdyn_entityrankingrule_modifiedby].[FullName],
    [lk_msdyn_entityrankingrule_modifiedby].[YomiFullName],
    [lk_msdyn_entityrankingrule_modifiedonbehalfby].[FullName],
    [lk_msdyn_entityrankingrule_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_entityrankingruleBase].OwnerId,
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
    [msdyn_entityrankingruleBase].[msdyn_entityrankingruleId],
    [msdyn_entityrankingruleBase].[CreatedOn],
    [msdyn_entityrankingruleBase].[CreatedBy],
    [msdyn_entityrankingruleBase].[ModifiedOn],
    [msdyn_entityrankingruleBase].[ModifiedBy],
    [msdyn_entityrankingruleBase].[CreatedOnBehalfBy],
    [msdyn_entityrankingruleBase].[ModifiedOnBehalfBy],
    [msdyn_entityrankingruleBase].[OwningBusinessUnit],
    [msdyn_entityrankingruleBase].[statecode],
    [msdyn_entityrankingruleBase].[statuscode],
    [msdyn_entityrankingruleBase].[VersionNumber],
    [msdyn_entityrankingruleBase].[ImportSequenceNumber],
    [msdyn_entityrankingruleBase].[OverriddenCreatedOn],
    [msdyn_entityrankingruleBase].[TimeZoneRuleVersionNumber],
    [msdyn_entityrankingruleBase].[UTCConversionTimeZoneCode],
    [msdyn_entityrankingruleBase].[msdyn_name],
    [msdyn_entityrankingruleBase].[msdyn_FetchXmlRule],
    [msdyn_entityrankingruleBase].[msdyn_entityname],
    [msdyn_entityrankingruleBase].[msdyn_ObjectTypeCode],
    [msdyn_entityrankingruleBase].[msdyn_OOBRule],
    [msdyn_entityrankingruleBase].[msdyn_enabled],
    [msdyn_entityrankingruleBase].[msdyn_overriddenrank],
    [msdyn_entityrankingruleBase].[msdyn_RulePriority]
from [msdyn_entityrankingruleBase] 
    left join [SystemUserBase] [lk_msdyn_entityrankingrule_createdby] on ([msdyn_entityrankingruleBase].[CreatedBy] = [lk_msdyn_entityrankingrule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_entityrankingrule_createdonbehalfby] on ([msdyn_entityrankingruleBase].[CreatedOnBehalfBy] = [lk_msdyn_entityrankingrule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_entityrankingrule_modifiedby] on ([msdyn_entityrankingruleBase].[ModifiedBy] = [lk_msdyn_entityrankingrule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_entityrankingrule_modifiedonbehalfby] on ([msdyn_entityrankingruleBase].[ModifiedOnBehalfBy] = [lk_msdyn_entityrankingrule_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_entityrankingruleBase].OwnerId = XXowner.OwnerId)
