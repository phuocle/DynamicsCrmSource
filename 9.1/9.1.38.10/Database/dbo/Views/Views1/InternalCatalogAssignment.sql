


--
-- base view for InternalCatalogAssignment
--
create view dbo.[InternalCatalogAssignment]
 (
    -- logical attributes
    [CatalogIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [InternalCatalogAssignmentId],
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
    [Name],
    [OverwriteTime],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [ComponentIdUnique],
    [IsManaged],
    [IsCustomizable],
    [CatalogId],
    [Object],
    [ObjectIdType],
    [ObjectName],
    [ObjectYomiName]
) with view_metadata as
select
    -- logical attributes
    [catalog_internalcatalogassignment].[Name],
    [lk_internalcatalogassignment_createdby].[FullName],
    [lk_internalcatalogassignment_createdby].[YomiFullName],
    [lk_internalcatalogassignment_createdonbehalfby].[FullName],
    [lk_internalcatalogassignment_createdonbehalfby].[YomiFullName],
    [lk_internalcatalogassignment_modifiedby].[FullName],
    [lk_internalcatalogassignment_modifiedby].[YomiFullName],
    [organization_internalcatalogassignment].[Name],
    [lk_internalcatalogassignment_modifiedonbehalfby].[FullName],
    [lk_internalcatalogassignment_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[InternalCatalogAssignmentId],
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
    [T1].[Name],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[ComponentIdUnique],
    [T1].[IsManaged],
    [T1].[IsCustomizable],
    [T1].[CatalogId],
    [T1].[Object],
    [T1].[ObjectIdType],
    [T1].[ObjectName],
    [T1].[ObjectYomiName]
from [InternalCatalogAssignmentBase] [T1]
    left join [CatalogBase] [catalog_internalcatalogassignment] on ([T1].[CatalogId] = [catalog_internalcatalogassignment].[CatalogId] and [catalog_internalcatalogassignment].OverwriteTime = 0 and [catalog_internalcatalogassignment].ComponentState = 0)
    left join [SystemUserBase] [lk_internalcatalogassignment_createdby] on ([T1].[CreatedBy] = [lk_internalcatalogassignment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_internalcatalogassignment_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_internalcatalogassignment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_internalcatalogassignment_modifiedby] on ([T1].[ModifiedBy] = [lk_internalcatalogassignment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_internalcatalogassignment_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_internalcatalogassignment_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_internalcatalogassignment] on ([T1].[OrganizationId] = [organization_internalcatalogassignment].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0