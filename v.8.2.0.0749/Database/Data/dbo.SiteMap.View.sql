USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SiteMap]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for SiteMap
--
create view [dbo].[SiteMap]
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
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
