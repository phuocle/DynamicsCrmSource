


--
-- base view for msdyn_msteamssetting
--
create view dbo.[msdyn_msteamssetting]
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
    [msdyn_msteamssettingId],
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
    [msdyn_MSTeamsSettingsName],
    [msdyn_msteamssettingsId],
    [msdyn_TabServiceUrl]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_msteamssetting_createdby].[FullName],
    [lk_msdyn_msteamssetting_createdby].[YomiFullName],
    [lk_msdyn_msteamssetting_createdonbehalfby].[FullName],
    [lk_msdyn_msteamssetting_createdonbehalfby].[YomiFullName],
    [lk_msdyn_msteamssetting_modifiedby].[FullName],
    [lk_msdyn_msteamssetting_modifiedby].[YomiFullName],
    [lk_msdyn_msteamssetting_modifiedonbehalfby].[FullName],
    [lk_msdyn_msteamssetting_modifiedonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_msteamssettingBase].OwnerId,
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
    [msdyn_msteamssettingBase].[msdyn_msteamssettingId],
    [msdyn_msteamssettingBase].[CreatedOn],
    [msdyn_msteamssettingBase].[CreatedBy],
    [msdyn_msteamssettingBase].[ModifiedOn],
    [msdyn_msteamssettingBase].[ModifiedBy],
    [msdyn_msteamssettingBase].[CreatedOnBehalfBy],
    [msdyn_msteamssettingBase].[ModifiedOnBehalfBy],
    [msdyn_msteamssettingBase].[OwningBusinessUnit],
    [msdyn_msteamssettingBase].[statecode],
    [msdyn_msteamssettingBase].[statuscode],
    [msdyn_msteamssettingBase].[VersionNumber],
    [msdyn_msteamssettingBase].[ImportSequenceNumber],
    [msdyn_msteamssettingBase].[OverriddenCreatedOn],
    [msdyn_msteamssettingBase].[TimeZoneRuleVersionNumber],
    [msdyn_msteamssettingBase].[UTCConversionTimeZoneCode],
    [msdyn_msteamssettingBase].[msdyn_MSTeamsSettingsName],
    [msdyn_msteamssettingBase].[msdyn_msteamssettingsId],
    [msdyn_msteamssettingBase].[msdyn_TabServiceUrl]
from [msdyn_msteamssettingBase] 
    left join [SystemUserBase] [lk_msdyn_msteamssetting_createdby] on ([msdyn_msteamssettingBase].[CreatedBy] = [lk_msdyn_msteamssetting_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_msteamssetting_createdonbehalfby] on ([msdyn_msteamssettingBase].[CreatedOnBehalfBy] = [lk_msdyn_msteamssetting_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_msteamssetting_modifiedby] on ([msdyn_msteamssettingBase].[ModifiedBy] = [lk_msdyn_msteamssetting_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_msteamssetting_modifiedonbehalfby] on ([msdyn_msteamssettingBase].[ModifiedOnBehalfBy] = [lk_msdyn_msteamssetting_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_msteamssettingBase].OwnerId = XXowner.OwnerId)
