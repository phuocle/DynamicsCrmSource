


--
-- base view for msdyn_msteamssettingsv2
--
create view dbo.[msdyn_msteamssettingsv2]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [msdyn_msteamssettingsv2Id],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_MSTeamsSettingsName],
    [msdyn_TabServiceUrl],
    [OwningBusinessUnit]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_msteamssettingsv2_createdonbehalfby].[FullName],
    [lk_msdyn_msteamssettingsv2_createdonbehalfby].[YomiFullName],
    [lk_msdyn_msteamssettingsv2_modifiedby].[FullName],
    [lk_msdyn_msteamssettingsv2_modifiedby].[YomiFullName],
    [lk_msdyn_msteamssettingsv2_createdby].[FullName],
    [lk_msdyn_msteamssettingsv2_createdby].[YomiFullName],
    [lk_msdyn_msteamssettingsv2_modifiedonbehalfby].[FullName],
    [lk_msdyn_msteamssettingsv2_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [msdyn_msteamssettingsv2Base].[msdyn_msteamssettingsv2Id],
    [msdyn_msteamssettingsv2Base].[CreatedOn],
    [msdyn_msteamssettingsv2Base].[CreatedBy],
    [msdyn_msteamssettingsv2Base].[ModifiedOn],
    [msdyn_msteamssettingsv2Base].[ModifiedBy],
    [msdyn_msteamssettingsv2Base].[CreatedOnBehalfBy],
    [msdyn_msteamssettingsv2Base].[ModifiedOnBehalfBy],
    [msdyn_msteamssettingsv2Base].[statecode],
    [msdyn_msteamssettingsv2Base].[statuscode],
    [msdyn_msteamssettingsv2Base].[VersionNumber],
    [msdyn_msteamssettingsv2Base].[ImportSequenceNumber],
    [msdyn_msteamssettingsv2Base].[OverriddenCreatedOn],
    [msdyn_msteamssettingsv2Base].[TimeZoneRuleVersionNumber],
    [msdyn_msteamssettingsv2Base].[UTCConversionTimeZoneCode],
    [msdyn_msteamssettingsv2Base].[msdyn_MSTeamsSettingsName],
    [msdyn_msteamssettingsv2Base].[msdyn_TabServiceUrl],
    [msdyn_msteamssettingsv2Base].[OwningBusinessUnit]
from [msdyn_msteamssettingsv2Base] 
    left join [SystemUserBase] [lk_msdyn_msteamssettingsv2_createdby] on ([msdyn_msteamssettingsv2Base].[CreatedBy] = [lk_msdyn_msteamssettingsv2_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_msteamssettingsv2_createdonbehalfby] on ([msdyn_msteamssettingsv2Base].[CreatedOnBehalfBy] = [lk_msdyn_msteamssettingsv2_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_msteamssettingsv2_modifiedby] on ([msdyn_msteamssettingsv2Base].[ModifiedBy] = [lk_msdyn_msteamssettingsv2_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_msteamssettingsv2_modifiedonbehalfby] on ([msdyn_msteamssettingsv2Base].[ModifiedOnBehalfBy] = [lk_msdyn_msteamssettingsv2_modifiedonbehalfby].[SystemUserId])
