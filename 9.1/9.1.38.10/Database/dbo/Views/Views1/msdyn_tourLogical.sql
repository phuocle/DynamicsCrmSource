


--
-- logical view for msdyn_tourLogical
--
create view dbo.[msdyn_tourLogical]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

    -- physical attributes
    [msdyn_tourId],
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
    [msdyn_labelsresource],
    [msdyn_tourdefinition]
) with view_metadata as
select
    -- logical attributes
    [lk_msdyn_tour_createdby].[FullName],
    [lk_msdyn_tour_createdby].[YomiFullName],
    [lk_msdyn_tour_createdonbehalfby].[FullName],
    [lk_msdyn_tour_createdonbehalfby].[YomiFullName],
    [lk_msdyn_tour_modifiedonbehalfby].[FullName],
    [lk_msdyn_tour_modifiedonbehalfby].[YomiFullName],
    [lk_msdyn_tour_modifiedby].[FullName],
    [lk_msdyn_tour_modifiedby].[YomiFullName],
    [organization_msdyn_tour].[Name],

    -- physical attribute
    [T1].[msdyn_tourId],
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
    [T1].[msdyn_labelsresource],
    [T1].[msdyn_tourdefinition]
from [msdyn_tourBase] [T1]
    left join [SystemUserBase] [lk_msdyn_tour_createdby] on ([T1].[CreatedBy] = [lk_msdyn_tour_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_tour_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_msdyn_tour_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_tour_modifiedby] on ([T1].[ModifiedBy] = [lk_msdyn_tour_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_msdyn_tour_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_msdyn_tour_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_msdyn_tour] on ([T1].[OrganizationId] = [organization_msdyn_tour].[OrganizationId])
where T1.OverwriteTime = 0