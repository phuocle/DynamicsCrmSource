


--
-- base view for msdyn_salesinsightssettings
--
create view dbo.[msdyn_salesinsightssettings]
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
    [msdyn_salesinsightssettingsId],
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
    [msdyn_ispreviewenabled],
    [msdyn_isoctpreviewenabled],
    [msdyn_islicensepurchased]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_salesinsightssettings_createdby].[FullName],
    [lk_msdyn_salesinsightssettings_createdby].[YomiFullName],
    [lk_msdyn_salesinsightssettings_createdonbehalfby].[FullName],
    [lk_msdyn_salesinsightssettings_createdonbehalfby].[YomiFullName],
    [lk_msdyn_salesinsightssettings_modifiedby].[FullName],
    [lk_msdyn_salesinsightssettings_modifiedby].[YomiFullName],
    [lk_msdyn_salesinsightssettings_modifiedonbehalfby].[FullName],
    [lk_msdyn_salesinsightssettings_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_salesinsightssettingsBase].OwnerId,
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
    [msdyn_salesinsightssettingsBase].[msdyn_salesinsightssettingsId],
    [msdyn_salesinsightssettingsBase].[CreatedOn],
    [msdyn_salesinsightssettingsBase].[CreatedBy],
    [msdyn_salesinsightssettingsBase].[ModifiedOn],
    [msdyn_salesinsightssettingsBase].[ModifiedBy],
    [msdyn_salesinsightssettingsBase].[CreatedOnBehalfBy],
    [msdyn_salesinsightssettingsBase].[ModifiedOnBehalfBy],
    [msdyn_salesinsightssettingsBase].[OwningBusinessUnit],
    [msdyn_salesinsightssettingsBase].[statecode],
    [msdyn_salesinsightssettingsBase].[statuscode],
    [msdyn_salesinsightssettingsBase].[VersionNumber],
    [msdyn_salesinsightssettingsBase].[ImportSequenceNumber],
    [msdyn_salesinsightssettingsBase].[OverriddenCreatedOn],
    [msdyn_salesinsightssettingsBase].[TimeZoneRuleVersionNumber],
    [msdyn_salesinsightssettingsBase].[UTCConversionTimeZoneCode],
    [msdyn_salesinsightssettingsBase].[msdyn_name],
    [msdyn_salesinsightssettingsBase].[msdyn_ispreviewenabled],
    [msdyn_salesinsightssettingsBase].[msdyn_isoctpreviewenabled],
    [msdyn_salesinsightssettingsBase].[msdyn_islicensepurchased]
from [msdyn_salesinsightssettingsBase] 
    left join [SystemUserBase] [lk_msdyn_salesinsightssettings_createdby] on ([msdyn_salesinsightssettingsBase].[CreatedBy] = [lk_msdyn_salesinsightssettings_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_salesinsightssettings_createdonbehalfby] on ([msdyn_salesinsightssettingsBase].[CreatedOnBehalfBy] = [lk_msdyn_salesinsightssettings_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_salesinsightssettings_modifiedby] on ([msdyn_salesinsightssettingsBase].[ModifiedBy] = [lk_msdyn_salesinsightssettings_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_salesinsightssettings_modifiedonbehalfby] on ([msdyn_salesinsightssettingsBase].[ModifiedOnBehalfBy] = [lk_msdyn_salesinsightssettings_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_salesinsightssettingsBase].OwnerId = XXowner.OwnerId)
