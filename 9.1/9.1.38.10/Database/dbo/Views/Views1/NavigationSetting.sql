


--
-- base view for NavigationSetting
--
create view dbo.[NavigationSetting]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [CreatedByName],
    [ModifiedOnBehalfByName],

    -- physical attributes
    [NavigationSettingId],
    [Name],
    [Description],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [ResourceId],
    [PageUrl],
    [QuickSettingOrder],
    [SettingType],
    [GroupName],
    [ParentNavigationSettingId],
    [AppConfigId],
    [ProgressState],
    [Privileges],
    [ObjectTypeCode],
    [AppConfigIdUnique],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [IsManaged],
    [NavigationSettingIdUnique],
    [IntroducedVersion],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [IconResourceId],
    [AdvancedSettingOrder]
) with view_metadata as
select
    -- logical attributes
    [lk_navigationsetting_createdonbehalfby].[FullName],
    [lk_navigationsetting_createdonbehalfby].[YomiFullName],
    [organization_navigationsetting].[Name],
    [lk_navigationsetting_modifiedonbehalfby].[YomiFullName],
    [lk_navigationsetting_modifiedby].[FullName],
    [lk_navigationsetting_createdby].[FullName],
    [lk_navigationsetting_modifiedonbehalfby].[FullName],

    -- physical attribute
    [T1].[NavigationSettingId],
    [T1].[Name],
    [T1].[Description],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[ResourceId],
    [T1].[PageUrl],
    [T1].[QuickSettingOrder],
    [T1].[SettingType],
    [T1].[GroupName],
    [T1].[ParentNavigationSettingId],
    [T1].[AppConfigId],
    [T1].[ProgressState],
    [T1].[Privileges],
    [T1].[ObjectTypeCode],
    [T1].[AppConfigIdUnique],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[IsManaged],
    [T1].[NavigationSettingIdUnique],
    [T1].[IntroducedVersion],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[IconResourceId],
    [T1].[AdvancedSettingOrder]
from [NavigationSettingBase] [T1]
    left join [SystemUserBase] [lk_navigationsetting_createdby] on ([T1].[CreatedBy] = [lk_navigationsetting_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_navigationsetting_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_navigationsetting_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_navigationsetting_modifiedby] on ([T1].[ModifiedBy] = [lk_navigationsetting_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_navigationsetting_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_navigationsetting_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_navigationsetting] on ([T1].[OrganizationId] = [organization_navigationsetting].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0