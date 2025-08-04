SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for msdyn_wallsavedquery
--
create view [dbo].[msdyn_wallsavedquery]
 (
    -- logical attributes
    [msdyn_postconfigurationidName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],

    -- physical attributes
    [msdyn_wallsavedqueryId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [statecode],
    [statuscode],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [msdyn_entityname],
    [msdyn_entitydisplayname],
    [msdyn_IsVirtual],
    [msdyn_IsVisible],
    [msdyn_isvisiblebit],
    [msdyn_otc],
    [msdyn_SavedQueryId],
    [msdyn_savedqueryname],
    [msdyn_postconfigurationid]
) with view_metadata as
select
    -- logical attributes
    [msdyn_postconfig_wallsavedquery].[msdyn_EntityDisplayName],
    [organization_msdyn_wallsavedquery].[Name],
    [lk_msdyn_wallsavedquery_modifiedonbehalfby].[FullName],
    [lk_msdyn_wallsavedquery_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_wallsavedquery_createdby].[FullName],
    [lk_msdyn_wallsavedquery_createdby].[YomiFullName],
    [lk_msdyn_wallsavedquery_createdonbehalfby].[FullName],
    [lk_msdyn_wallsavedquery_createdonbehalfby].[YomiFullName],
    [lk_msdyn_wallsavedquery_modifiedby].[FullName],
    [lk_msdyn_wallsavedquery_modifiedby].[YomiFullName],

    -- physical attribute
    [msdyn_wallsavedqueryBase].[msdyn_wallsavedqueryId],
    [msdyn_wallsavedqueryBase].[CreatedOn],
    [msdyn_wallsavedqueryBase].[CreatedBy],
    [msdyn_wallsavedqueryBase].[ModifiedOn],
    [msdyn_wallsavedqueryBase].[ModifiedBy],
    [msdyn_wallsavedqueryBase].[CreatedOnBehalfBy],
    [msdyn_wallsavedqueryBase].[ModifiedOnBehalfBy],
    [msdyn_wallsavedqueryBase].[OrganizationId],
    [msdyn_wallsavedqueryBase].[statecode],
    [msdyn_wallsavedqueryBase].[statuscode],
    [msdyn_wallsavedqueryBase].[VersionNumber],
    [msdyn_wallsavedqueryBase].[ImportSequenceNumber],
    [msdyn_wallsavedqueryBase].[OverriddenCreatedOn],
    [msdyn_wallsavedqueryBase].[TimeZoneRuleVersionNumber],
    [msdyn_wallsavedqueryBase].[UTCConversionTimeZoneCode],
    [msdyn_wallsavedqueryBase].[msdyn_entityname],
    [msdyn_wallsavedqueryBase].[msdyn_entitydisplayname],
    [msdyn_wallsavedqueryBase].[msdyn_IsVirtual],
    [msdyn_wallsavedqueryBase].[msdyn_IsVisible],
    [msdyn_wallsavedqueryBase].[msdyn_isvisiblebit],
    [msdyn_wallsavedqueryBase].[msdyn_otc],
    [msdyn_wallsavedqueryBase].[msdyn_SavedQueryId],
    [msdyn_wallsavedqueryBase].[msdyn_savedqueryname],
    [msdyn_wallsavedqueryBase].[msdyn_postconfigurationid]
from [msdyn_wallsavedqueryBase] 
    left join [SystemUserBase] [lk_msdyn_wallsavedquery_createdby] with(nolock) on ([msdyn_wallsavedqueryBase].[CreatedBy] = [lk_msdyn_wallsavedquery_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_wallsavedquery_createdonbehalfby] with(nolock) on ([msdyn_wallsavedqueryBase].[CreatedOnBehalfBy] = [lk_msdyn_wallsavedquery_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_wallsavedquery_modifiedby] with(nolock) on ([msdyn_wallsavedqueryBase].[ModifiedBy] = [lk_msdyn_wallsavedquery_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_wallsavedquery_modifiedonbehalfby] with(nolock) on ([msdyn_wallsavedqueryBase].[ModifiedOnBehalfBy] = [lk_msdyn_wallsavedquery_modifiedonbehalfby].[SystemUserId])
    left join [msdyn_PostConfigBase] [msdyn_postconfig_wallsavedquery] on ([msdyn_wallsavedqueryBase].[msdyn_postconfigurationid] = [msdyn_postconfig_wallsavedquery].[msdyn_PostConfigId])
    left join [OrganizationBase] [organization_msdyn_wallsavedquery] with(nolock) on ([msdyn_wallsavedqueryBase].[OrganizationId] = [organization_msdyn_wallsavedquery].[OrganizationId])
GO
