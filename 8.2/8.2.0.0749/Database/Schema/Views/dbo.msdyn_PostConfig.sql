SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for msdyn_PostConfig
--
create view [dbo].[msdyn_PostConfig]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],

    -- physical attributes
    [msdyn_PostConfigId],
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
    [msdyn_EntityDisplayName],
    [msdyn_ConfigureWall],
    [msdyn_EntityName],
    [msdyn_FollowingViewId],
    [msdyn_FollowingViewId2],
    [msdyn_Otc],
    [msdyn_Status]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_postconfig_modifiedonbehalfby].[FullName],
    [lk_msdyn_postconfig_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_postconfig_createdonbehalfby].[FullName],
    [lk_msdyn_postconfig_createdonbehalfby].[YomiFullName],
    [lk_msdyn_postconfig_modifiedby].[FullName],
    [lk_msdyn_postconfig_modifiedby].[YomiFullName],
    [organization_msdyn_postconfig].[Name],
    [lk_msdyn_postconfig_createdby].[FullName],
    [lk_msdyn_postconfig_createdby].[YomiFullName],

    -- physical attribute
    [msdyn_PostConfigBase].[msdyn_PostConfigId],
    [msdyn_PostConfigBase].[CreatedOn],
    [msdyn_PostConfigBase].[CreatedBy],
    [msdyn_PostConfigBase].[ModifiedOn],
    [msdyn_PostConfigBase].[ModifiedBy],
    [msdyn_PostConfigBase].[CreatedOnBehalfBy],
    [msdyn_PostConfigBase].[ModifiedOnBehalfBy],
    [msdyn_PostConfigBase].[OrganizationId],
    [msdyn_PostConfigBase].[statecode],
    [msdyn_PostConfigBase].[statuscode],
    [msdyn_PostConfigBase].[VersionNumber],
    [msdyn_PostConfigBase].[ImportSequenceNumber],
    [msdyn_PostConfigBase].[OverriddenCreatedOn],
    [msdyn_PostConfigBase].[TimeZoneRuleVersionNumber],
    [msdyn_PostConfigBase].[UTCConversionTimeZoneCode],
    [msdyn_PostConfigBase].[msdyn_EntityDisplayName],
    [msdyn_PostConfigBase].[msdyn_ConfigureWall],
    [msdyn_PostConfigBase].[msdyn_EntityName],
    [msdyn_PostConfigBase].[msdyn_FollowingViewId],
    [msdyn_PostConfigBase].[msdyn_FollowingViewId2],
    [msdyn_PostConfigBase].[msdyn_Otc],
    [msdyn_PostConfigBase].[msdyn_Status]
from [msdyn_PostConfigBase] 
    left join [SystemUserBase] [lk_msdyn_postconfig_createdby] with(nolock) on ([msdyn_PostConfigBase].[CreatedBy] = [lk_msdyn_postconfig_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postconfig_createdonbehalfby] with(nolock) on ([msdyn_PostConfigBase].[CreatedOnBehalfBy] = [lk_msdyn_postconfig_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postconfig_modifiedby] with(nolock) on ([msdyn_PostConfigBase].[ModifiedBy] = [lk_msdyn_postconfig_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_postconfig_modifiedonbehalfby] with(nolock) on ([msdyn_PostConfigBase].[ModifiedOnBehalfBy] = [lk_msdyn_postconfig_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_msdyn_postconfig] with(nolock) on ([msdyn_PostConfigBase].[OrganizationId] = [organization_msdyn_postconfig].[OrganizationId])
GO
