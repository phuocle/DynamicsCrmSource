SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for msdyn_wallsavedqueryusersettings
--
create view [dbo].[msdyn_wallsavedqueryusersettings]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [msdyn_wallsavedqueryidName],
    [msdyn_useridName],
    [msdyn_useridYomiName],

    -- ownership entries
    OwnerId,
    OwnerIdName,
    OwnerIdYomiName,
    OwnerIdDsc,
    OwnerIdType,
    OwningUser,
    OwningTeam,

    -- physical attributes
    [msdyn_wallsavedqueryusersettingsId],
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
    [msdyn_entityname],
    [msdyn_data],
    [msdyn_default],
    [msdyn_entitydisplayname],
    [msdyn_includewallinresponse],
    [msdyn_isfollowing],
    [msdyn_IsVirtual],
    [msdyn_isvisible],
    [msdyn_isvisiblebit],
    [msdyn_otc],
    [msdyn_savedqueryname],
    [msdyn_sortorder],
    [msdyn_type],
    [msdyn_userid],
    [msdyn_wallsavedqueryid]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_wallsavedqueryusersettings_createdby].[FullName],
    [lk_msdyn_wallsavedqueryusersettings_createdby].[YomiFullName],
    [lk_msdyn_wallsavedqueryusersettings_modifiedby].[FullName],
    [lk_msdyn_wallsavedqueryusersettings_modifiedby].[YomiFullName],
    [lk_msdyn_wallsavedqueryusersettings_modifiedonbehalfby].[FullName],
    [lk_msdyn_wallsavedqueryusersettings_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_wallsavedqueryusersettings_createdonbehalfby].[FullName],
    [lk_msdyn_wallsavedqueryusersettings_createdonbehalfby].[YomiFullName],
    [msdyn_wallsavedquery_wallsavedqueryusersettings].[msdyn_entityname],
    [msdyn_systemuser_wallsavedqueryusersettings_userid].[FullName],
    [msdyn_systemuser_wallsavedqueryusersettings_userid].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_wallsavedqueryusersettingsBase].OwnerId,
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
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_wallsavedqueryusersettingsId],
    [msdyn_wallsavedqueryusersettingsBase].[CreatedOn],
    [msdyn_wallsavedqueryusersettingsBase].[CreatedBy],
    [msdyn_wallsavedqueryusersettingsBase].[ModifiedOn],
    [msdyn_wallsavedqueryusersettingsBase].[ModifiedBy],
    [msdyn_wallsavedqueryusersettingsBase].[CreatedOnBehalfBy],
    [msdyn_wallsavedqueryusersettingsBase].[ModifiedOnBehalfBy],
    [msdyn_wallsavedqueryusersettingsBase].[OwningBusinessUnit],
    [msdyn_wallsavedqueryusersettingsBase].[statecode],
    [msdyn_wallsavedqueryusersettingsBase].[statuscode],
    [msdyn_wallsavedqueryusersettingsBase].[VersionNumber],
    [msdyn_wallsavedqueryusersettingsBase].[ImportSequenceNumber],
    [msdyn_wallsavedqueryusersettingsBase].[OverriddenCreatedOn],
    [msdyn_wallsavedqueryusersettingsBase].[TimeZoneRuleVersionNumber],
    [msdyn_wallsavedqueryusersettingsBase].[UTCConversionTimeZoneCode],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_entityname],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_data],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_default],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_entitydisplayname],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_includewallinresponse],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_isfollowing],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_IsVirtual],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_isvisible],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_isvisiblebit],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_otc],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_savedqueryname],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_sortorder],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_type],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_userid],
    [msdyn_wallsavedqueryusersettingsBase].[msdyn_wallsavedqueryid]
from [msdyn_wallsavedqueryusersettingsBase] 
    left join [SystemUserBase] [lk_msdyn_wallsavedqueryusersettings_createdby] with(nolock) on ([msdyn_wallsavedqueryusersettingsBase].[CreatedBy] = [lk_msdyn_wallsavedqueryusersettings_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_wallsavedqueryusersettings_createdonbehalfby] with(nolock) on ([msdyn_wallsavedqueryusersettingsBase].[CreatedOnBehalfBy] = [lk_msdyn_wallsavedqueryusersettings_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_wallsavedqueryusersettings_modifiedby] with(nolock) on ([msdyn_wallsavedqueryusersettingsBase].[ModifiedBy] = [lk_msdyn_wallsavedqueryusersettings_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_wallsavedqueryusersettings_modifiedonbehalfby] with(nolock) on ([msdyn_wallsavedqueryusersettingsBase].[ModifiedOnBehalfBy] = [lk_msdyn_wallsavedqueryusersettings_modifiedonbehalfby].[SystemUserId])
    left join [SystemUserBase] [msdyn_systemuser_wallsavedqueryusersettings_userid] with(nolock) on ([msdyn_wallsavedqueryusersettingsBase].[msdyn_userid] = [msdyn_systemuser_wallsavedqueryusersettings_userid].[SystemUserId])
    left join [msdyn_wallsavedqueryBase] [msdyn_wallsavedquery_wallsavedqueryusersettings] on ([msdyn_wallsavedqueryusersettingsBase].[msdyn_wallsavedqueryid] = [msdyn_wallsavedquery_wallsavedqueryusersettings].[msdyn_wallsavedqueryId])
    left join OwnerBase XXowner with(nolock) on ([msdyn_wallsavedqueryusersettingsBase].OwnerId = XXowner.OwnerId)
GO
