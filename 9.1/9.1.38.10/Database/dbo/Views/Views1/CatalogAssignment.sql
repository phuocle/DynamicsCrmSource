


--
-- base view for CatalogAssignment
--
create view dbo.[CatalogAssignment]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CatalogIdName],
    [OrganizationIdName],

    -- physical attributes
    [CatalogAssignmentId],
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
    [lk_catalogassignment_createdby].[FullName],
    [lk_catalogassignment_createdby].[YomiFullName],
    [lk_catalogassignment_createdonbehalfby].[FullName],
    [lk_catalogassignment_createdonbehalfby].[YomiFullName],
    [lk_catalogassignment_modifiedby].[FullName],
    [lk_catalogassignment_modifiedby].[YomiFullName],
    [lk_catalogassignment_modifiedonbehalfby].[FullName],
    [lk_catalogassignment_modifiedonbehalfby].[YomiFullName],
    [catalog_catalogassignment].[Name],
    [organization_catalogassignment].[Name],

    -- physical attribute
    [T1].[CatalogAssignmentId],
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
from [CatalogAssignmentBase] [T1]
    left join [CatalogBase] [catalog_catalogassignment] on ([T1].[CatalogId] = [catalog_catalogassignment].[CatalogId] and [catalog_catalogassignment].OverwriteTime = 0 and [catalog_catalogassignment].ComponentState = 0)
    left join [SystemUserBase] [lk_catalogassignment_createdby] on ([T1].[CreatedBy] = [lk_catalogassignment_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_catalogassignment_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_catalogassignment_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_catalogassignment_modifiedby] on ([T1].[ModifiedBy] = [lk_catalogassignment_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_catalogassignment_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_catalogassignment_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_catalogassignment] on ([T1].[OrganizationId] = [organization_catalogassignment].[OrganizationId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0