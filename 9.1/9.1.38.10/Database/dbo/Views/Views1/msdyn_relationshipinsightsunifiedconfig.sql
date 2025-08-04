


--
-- base view for msdyn_relationshipinsightsunifiedconfig
--
create view dbo.[msdyn_relationshipinsightsunifiedconfig]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [msdyn_relationshipinsightsunifiedconfigId],
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
    [new_name],
    [msdyn_usenewconfigexperience]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_relationshipinsightsunifiedconfig_createdonbehalfby].[FullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_createdby].[FullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_createdby].[YomiFullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_modifiedby].[FullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_modifiedby].[YomiFullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_relationshipinsightsunifiedconfig_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_relationshipinsightsunifiedconfigBase].OwnerId,
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
    [msdyn_relationshipinsightsunifiedconfigBase].[msdyn_relationshipinsightsunifiedconfigId],
    [msdyn_relationshipinsightsunifiedconfigBase].[CreatedOn],
    [msdyn_relationshipinsightsunifiedconfigBase].[CreatedBy],
    [msdyn_relationshipinsightsunifiedconfigBase].[ModifiedOn],
    [msdyn_relationshipinsightsunifiedconfigBase].[ModifiedBy],
    [msdyn_relationshipinsightsunifiedconfigBase].[CreatedOnBehalfBy],
    [msdyn_relationshipinsightsunifiedconfigBase].[ModifiedOnBehalfBy],
    [msdyn_relationshipinsightsunifiedconfigBase].[OwningBusinessUnit],
    [msdyn_relationshipinsightsunifiedconfigBase].[statecode],
    [msdyn_relationshipinsightsunifiedconfigBase].[statuscode],
    [msdyn_relationshipinsightsunifiedconfigBase].[VersionNumber],
    [msdyn_relationshipinsightsunifiedconfigBase].[ImportSequenceNumber],
    [msdyn_relationshipinsightsunifiedconfigBase].[OverriddenCreatedOn],
    [msdyn_relationshipinsightsunifiedconfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_relationshipinsightsunifiedconfigBase].[UTCConversionTimeZoneCode],
    [msdyn_relationshipinsightsunifiedconfigBase].[new_name],
    [msdyn_relationshipinsightsunifiedconfigBase].[msdyn_usenewconfigexperience]
from [msdyn_relationshipinsightsunifiedconfigBase] 
    left join [SystemUserBase] [lk_msdyn_relationshipinsightsunifiedconfig_createdby] on ([msdyn_relationshipinsightsunifiedconfigBase].[CreatedBy] = [lk_msdyn_relationshipinsightsunifiedconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_relationshipinsightsunifiedconfig_createdonbehalfby] on ([msdyn_relationshipinsightsunifiedconfigBase].[CreatedOnBehalfBy] = [lk_msdyn_relationshipinsightsunifiedconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_relationshipinsightsunifiedconfig_modifiedby] on ([msdyn_relationshipinsightsunifiedconfigBase].[ModifiedBy] = [lk_msdyn_relationshipinsightsunifiedconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_relationshipinsightsunifiedconfig_modifiedonbehalfby] on ([msdyn_relationshipinsightsunifiedconfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_relationshipinsightsunifiedconfig_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_relationshipinsightsunifiedconfigBase].OwnerId = XXowner.OwnerId)
