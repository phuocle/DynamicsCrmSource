


--
-- base view for msdyn_helppage
--
create view dbo.[msdyn_helppage]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [msdyn_helppageId],
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
    [msdyn_displayname],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [msdyn_path],
    [msdyn_contenttype],
    [msdyn_content],
    [msdyn_locale]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_helppage_modifiedby].[FullName],
    [lk_msdyn_helppage_modifiedby].[YomiFullName],
    [lk_msdyn_helppage_createdby].[FullName],
    [lk_msdyn_helppage_createdby].[YomiFullName],
    [lk_msdyn_helppage_modifiedonbehalfby].[FullName],
    [lk_msdyn_helppage_modifiedonbehalfby].[YomiFullName],
    [organization_msdyn_helppage].[Name],
    [lk_msdyn_helppage_createdonbehalfby].[FullName],
    [lk_msdyn_helppage_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[msdyn_helppageId],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[OrganizationId],
    [T1].[statecode],
    [T1].[statuscode],
    [T1].[VersionNumber],
    [T1].[ImportSequenceNumber],
    [T1].[OverriddenCreatedOn],
    [T1].[TimeZoneRuleVersionNumber],
    [T1].[UTCConversionTimeZoneCode],
    [T1].[msdyn_displayname],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[msdyn_path],
    [T1].[msdyn_contenttype],
    [T1].[msdyn_content],
    [T1].[msdyn_locale]
from [msdyn_helppageBase] [T1]
    left join [SystemUserBase] [lk_msdyn_helppage_createdby] on ([T1].[CreatedBy] = [lk_msdyn_helppage_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_helppage_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_msdyn_helppage_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_helppage_modifiedby] on ([T1].[ModifiedBy] = [lk_msdyn_helppage_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_helppage_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_msdyn_helppage_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_msdyn_helppage] on ([T1].[OrganizationId] = [organization_msdyn_helppage].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0