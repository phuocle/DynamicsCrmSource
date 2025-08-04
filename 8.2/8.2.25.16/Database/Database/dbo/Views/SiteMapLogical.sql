


--
-- logical view for SiteMapLogical
--
create view dbo.[SiteMapLogical]
 (

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
    [SiteMapNameUnique]
) with view_metadata as
select

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
    [T1].[SiteMapNameUnique]
from [SiteMapBase] [T1]
where T1.OverwriteTime = 0