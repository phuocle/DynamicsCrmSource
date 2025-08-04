


--
-- base view for AppConfigInstance
--
create view dbo.[AppConfigInstance]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [OrganizationIdName],

    -- physical attributes
    [AppConfigInstanceId],
    [AppConfigId],
    [AppConfigMasterId],
    [AppConfigIdUnique],
    [ObjectId],
    [ComponentType],
    [Value],
    [VersionNumber],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged],
    [AppConfigInstanceIdUnique],
    [IntroducedVersion]
) with view_metadata as
select
    -- logical attributes
    [lk_appconfiginstance_createdonbehalfby].[FullName],
    [lk_appconfiginstance_modifiedonbehalfby].[FullName],
    [lk_appconfiginstance_createdby].[FullName],
    [lk_appconfiginstance_createdonbehalfby].[YomiFullName],
    [lk_appconfiginstance_modifiedonbehalfby].[YomiFullName],
    [lk_appconfiginstance_modifiedby].[FullName],
    [organization_appconfiginstance].[Name],

    -- physical attribute
    [T1].[AppConfigInstanceId],
    [T1].[AppConfigId],
    [T1].[AppConfigMasterId],
    [T1].[AppConfigIdUnique],
    [T1].[ObjectId],
    [T1].[ComponentType],
    [T1].[Value],
    [T1].[VersionNumber],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged],
    [T1].[AppConfigInstanceIdUnique],
    [T1].[IntroducedVersion]
from [AppConfigInstanceBase] [T1]
    left join [SystemUserBase] [lk_appconfiginstance_createdby] on ([T1].[CreatedBy] = [lk_appconfiginstance_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfiginstance_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_appconfiginstance_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfiginstance_modifiedby] on ([T1].[ModifiedBy] = [lk_appconfiginstance_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_appconfiginstance_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_appconfiginstance_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_appconfiginstance] on ([T1].[OrganizationId] = [organization_appconfiginstance].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0