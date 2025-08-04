


--
-- base view for msdyn_autocapturerule
--
create view dbo.[msdyn_autocapturerule]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
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
    [msdyn_autocaptureruleId],
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
    [msdyn_ruledatasource],
    [msdyn_rulename],
    [msdyn_rulevalue]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_autocapturerule_modifiedby].[FullName],
    [lk_msdyn_autocapturerule_modifiedby].[YomiFullName],
    [lk_msdyn_autocapturerule_createdonbehalfby].[FullName],
    [lk_msdyn_autocapturerule_createdonbehalfby].[YomiFullName],
    [lk_msdyn_autocapturerule_createdby].[FullName],
    [lk_msdyn_autocapturerule_createdby].[YomiFullName],
    [lk_msdyn_autocapturerule_modifiedonbehalfby].[FullName],
    [lk_msdyn_autocapturerule_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_autocaptureruleBase].OwnerId,
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
    [msdyn_autocaptureruleBase].[msdyn_autocaptureruleId],
    [msdyn_autocaptureruleBase].[CreatedOn],
    [msdyn_autocaptureruleBase].[CreatedBy],
    [msdyn_autocaptureruleBase].[ModifiedOn],
    [msdyn_autocaptureruleBase].[ModifiedBy],
    [msdyn_autocaptureruleBase].[CreatedOnBehalfBy],
    [msdyn_autocaptureruleBase].[ModifiedOnBehalfBy],
    [msdyn_autocaptureruleBase].[OwningBusinessUnit],
    [msdyn_autocaptureruleBase].[statecode],
    [msdyn_autocaptureruleBase].[statuscode],
    [msdyn_autocaptureruleBase].[VersionNumber],
    [msdyn_autocaptureruleBase].[ImportSequenceNumber],
    [msdyn_autocaptureruleBase].[OverriddenCreatedOn],
    [msdyn_autocaptureruleBase].[TimeZoneRuleVersionNumber],
    [msdyn_autocaptureruleBase].[UTCConversionTimeZoneCode],
    [msdyn_autocaptureruleBase].[msdyn_name],
    [msdyn_autocaptureruleBase].[msdyn_ruledatasource],
    [msdyn_autocaptureruleBase].[msdyn_rulename],
    [msdyn_autocaptureruleBase].[msdyn_rulevalue]
from [msdyn_autocaptureruleBase] 
    left join [SystemUserBase] [lk_msdyn_autocapturerule_createdby] on ([msdyn_autocaptureruleBase].[CreatedBy] = [lk_msdyn_autocapturerule_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_autocapturerule_createdonbehalfby] on ([msdyn_autocaptureruleBase].[CreatedOnBehalfBy] = [lk_msdyn_autocapturerule_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_autocapturerule_modifiedby] on ([msdyn_autocaptureruleBase].[ModifiedBy] = [lk_msdyn_autocapturerule_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_autocapturerule_modifiedonbehalfby] on ([msdyn_autocaptureruleBase].[ModifiedOnBehalfBy] = [lk_msdyn_autocapturerule_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_autocaptureruleBase].OwnerId = XXowner.OwnerId)
