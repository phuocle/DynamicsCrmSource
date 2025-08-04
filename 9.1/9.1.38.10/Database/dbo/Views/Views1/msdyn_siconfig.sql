


--
-- base view for msdyn_siconfig
--
create view dbo.[msdyn_siconfig]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_siconfigId],
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
    [msdyn_version]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_siconfig_modifiedby].[FullName],
    [lk_msdyn_siconfig_modifiedby].[YomiFullName],
    [lk_msdyn_siconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_siconfig_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_siconfig_createdonbehalfby].[FullName],
    [lk_msdyn_siconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_siconfig_createdby].[FullName],
    [lk_msdyn_siconfig_createdby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_siconfigBase].OwnerId,
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
    [msdyn_siconfigBase].[msdyn_siconfigId],
    [msdyn_siconfigBase].[CreatedOn],
    [msdyn_siconfigBase].[CreatedBy],
    [msdyn_siconfigBase].[ModifiedOn],
    [msdyn_siconfigBase].[ModifiedBy],
    [msdyn_siconfigBase].[CreatedOnBehalfBy],
    [msdyn_siconfigBase].[ModifiedOnBehalfBy],
    [msdyn_siconfigBase].[OwningBusinessUnit],
    [msdyn_siconfigBase].[statecode],
    [msdyn_siconfigBase].[statuscode],
    [msdyn_siconfigBase].[VersionNumber],
    [msdyn_siconfigBase].[ImportSequenceNumber],
    [msdyn_siconfigBase].[OverriddenCreatedOn],
    [msdyn_siconfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_siconfigBase].[UTCConversionTimeZoneCode],
    [msdyn_siconfigBase].[msdyn_version]
from [msdyn_siconfigBase] 
    left join [SystemUserBase] [lk_msdyn_siconfig_createdby] on ([msdyn_siconfigBase].[CreatedBy] = [lk_msdyn_siconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_siconfig_createdonbehalfby] on ([msdyn_siconfigBase].[CreatedOnBehalfBy] = [lk_msdyn_siconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_siconfig_modifiedby] on ([msdyn_siconfigBase].[ModifiedBy] = [lk_msdyn_siconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_siconfig_modifiedonbehalfby] on ([msdyn_siconfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_siconfig_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_siconfigBase].OwnerId = XXowner.OwnerId)
