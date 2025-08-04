


--
-- base view for SiteMap
--
create view dbo.[SiteMap]
 (
    -- logical attributes
    [CreatedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [CreatedByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [ComponentState],
    [OrganizationId],
    [OverwriteTime],
    [SiteMapId],
    [SiteMapIdUnique],
    [SiteMapXml],
    [SolutionId],
    [SupportingSolutionId],
    [VersionNumber],
    [IsManaged],
    [SiteMapXmlManaged],
    [IsAppAware],
    [SiteMapName],
    [SiteMapNameUnique],
    [ModifiedOn],
    [ModifiedBy],
    [ModifiedOnBehalfBy],
    [CreatedOn],
    [CreatedBy],
    [CreatedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_SiteMap_createdonbehalfby].[FullName],
    [lk_SiteMap_modifiedby].[FullName],
    [lk_SiteMap_createdonbehalfby].[YomiFullName],
    [lk_SiteMap_modifiedonbehalfby].[FullName],
    [lk_SiteMap_createdby].[FullName],
    [lk_SiteMap_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [T1].[ComponentState],
    [T1].[OrganizationId],
    [T1].[OverwriteTime],
    [T1].[SiteMapId],
    [T1].[SiteMapIdUnique],
    [T1].[SiteMapXml],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[VersionNumber],
    [T1].[IsManaged],
    [T1].[SiteMapXmlManaged],
    [T1].[IsAppAware],
    [T1].[SiteMapName],
    [T1].[SiteMapNameUnique],
    [T1].[ModifiedOn],
    [T1].[ModifiedBy],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOn],
    [T1].[CreatedBy],
    [T1].[CreatedOnBehalfBy]
from [SiteMapBase] [T1]
    left join [SystemUserBase] [lk_SiteMap_createdby] on ([T1].[CreatedBy] = [lk_SiteMap_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_SiteMap_createdonbehalfby] on ([T1].[CreatedOnBehalfBy] = [lk_SiteMap_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_SiteMap_modifiedby] on ([T1].[ModifiedBy] = [lk_SiteMap_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_SiteMap_modifiedonbehalfby] on ([T1].[ModifiedOnBehalfBy] = [lk_SiteMap_modifiedonbehalfby].[SystemUserId])
where T1.OverwriteTime = 0 AND T1.ComponentState = 0