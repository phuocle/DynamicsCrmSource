


--
-- base view for Catalog
--
create view dbo.[Catalog]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ParentCatalogIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [CatalogId],
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
    [Description],
    [DisplayName],
    [ParentCatalogId],
    [UniqueName]
) with view_metadata as
select
    -- logical attributes
    [organization_catalog].[Name],
    [lk_catalog_createdonbehalfby].[FullName],
    [lk_catalog_createdonbehalfby].[YomiFullName],
    [parentcatalog_catalog].[Name],
    [lk_catalog_createdby].[FullName],
    [lk_catalog_createdby].[YomiFullName],
    [lk_catalog_modifiedby].[FullName],
    [lk_catalog_modifiedby].[YomiFullName],
    [lk_catalog_modifiedonbehalfby].[FullName],
    [lk_catalog_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[CatalogId],
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
    [T1].[Description],
    [T1].[DisplayName],
    [T1].[ParentCatalogId],
    [T1].[UniqueName]
from [CatalogBase] [T1]
    left join [SystemUserBase] [lk_catalog_createdby] on ([T1].[CreatedBy] = [lk_catalog_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_catalog_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_catalog_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_catalog_modifiedby] on ([T1].[ModifiedBy] = [lk_catalog_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_catalog_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_catalog_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_catalog] on ([T1].[OrganizationId] = [organization_catalog].[OrganizationId])
    left join [CatalogBase] [parentcatalog_catalog] on ([T1].[ParentCatalogId] = [parentcatalog_catalog].[CatalogId] and [parentcatalog_catalog].OverwriteTime = 0 and [parentcatalog_catalog].ComponentState = 0)
where T1.OverwriteTime = 0 AND T1.ComponentState = 0