


--
-- base view for msdyn_autocapturesettings
--
create view dbo.[msdyn_autocapturesettings]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
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
    [msdyn_autocapturesettingsId],
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
    [msdyn_autocapture],
    [msdyn_autocaptureV1],
    [msdyn_automaticactivityupdate],
    [msdyn_calendar],
    [msdyn_defaultassociation],
    [msdyn_emails],
    [msdyn_contacts],
    [msdyn_meetings],
    [msdyn_organizationid],
    [msdyn_UserId],
    [msdyn_V1TermsandConditionsCount],
    [msdyn_V2TermsandConditionsCount],
    [msdyn_DontShowSettingStatus],
    [msdyn_settingsuiaction]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_autocapturesettings_modifiedonbehalfby].[FullName],
    [lk_msdyn_autocapturesettings_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_autocapturesettings_createdby].[FullName],
    [lk_msdyn_autocapturesettings_createdby].[YomiFullName],
    [lk_msdyn_autocapturesettings_modifiedby].[FullName],
    [lk_msdyn_autocapturesettings_modifiedby].[YomiFullName],
    [lk_msdyn_autocapturesettings_createdonbehalfby].[FullName],
    [lk_msdyn_autocapturesettings_createdonbehalfby].[YomiFullName],

    -- ownership entries
    OwnerId = [msdyn_autocapturesettingsBase].OwnerId,
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
    [msdyn_autocapturesettingsBase].[msdyn_autocapturesettingsId],
    [msdyn_autocapturesettingsBase].[CreatedOn],
    [msdyn_autocapturesettingsBase].[CreatedBy],
    [msdyn_autocapturesettingsBase].[ModifiedOn],
    [msdyn_autocapturesettingsBase].[ModifiedBy],
    [msdyn_autocapturesettingsBase].[CreatedOnBehalfBy],
    [msdyn_autocapturesettingsBase].[ModifiedOnBehalfBy],
    [msdyn_autocapturesettingsBase].[OwningBusinessUnit],
    [msdyn_autocapturesettingsBase].[statecode],
    [msdyn_autocapturesettingsBase].[statuscode],
    [msdyn_autocapturesettingsBase].[VersionNumber],
    [msdyn_autocapturesettingsBase].[ImportSequenceNumber],
    [msdyn_autocapturesettingsBase].[OverriddenCreatedOn],
    [msdyn_autocapturesettingsBase].[TimeZoneRuleVersionNumber],
    [msdyn_autocapturesettingsBase].[UTCConversionTimeZoneCode],
    [msdyn_autocapturesettingsBase].[msdyn_name],
    [msdyn_autocapturesettingsBase].[msdyn_autocapture],
    [msdyn_autocapturesettingsBase].[msdyn_autocaptureV1],
    [msdyn_autocapturesettingsBase].[msdyn_automaticactivityupdate],
    [msdyn_autocapturesettingsBase].[msdyn_calendar],
    [msdyn_autocapturesettingsBase].[msdyn_defaultassociation],
    [msdyn_autocapturesettingsBase].[msdyn_emails],
    [msdyn_autocapturesettingsBase].[msdyn_contacts],
    [msdyn_autocapturesettingsBase].[msdyn_meetings],
    [msdyn_autocapturesettingsBase].[msdyn_organizationid],
    [msdyn_autocapturesettingsBase].[msdyn_UserId],
    [msdyn_autocapturesettingsBase].[msdyn_V1TermsandConditionsCount],
    [msdyn_autocapturesettingsBase].[msdyn_V2TermsandConditionsCount],
    [msdyn_autocapturesettingsBase].[msdyn_DontShowSettingStatus],
    [msdyn_autocapturesettingsBase].[msdyn_settingsuiaction]
from [msdyn_autocapturesettingsBase] 
    left join [SystemUserBase] [lk_msdyn_autocapturesettings_createdby] on ([msdyn_autocapturesettingsBase].[CreatedBy] = [lk_msdyn_autocapturesettings_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_autocapturesettings_createdonbehalfby] on ([msdyn_autocapturesettingsBase].[CreatedOnBehalfBy] = [lk_msdyn_autocapturesettings_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_autocapturesettings_modifiedby] on ([msdyn_autocapturesettingsBase].[ModifiedBy] = [lk_msdyn_autocapturesettings_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_autocapturesettings_modifiedonbehalfby] on ([msdyn_autocapturesettingsBase].[ModifiedOnBehalfBy] = [lk_msdyn_autocapturesettings_modifiedonbehalfby].[SystemUserId])
    left join OwnerBase XXowner on ([msdyn_autocapturesettingsBase].OwnerId = XXowner.OwnerId)
