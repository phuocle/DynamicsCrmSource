USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RibbonDiffLogical]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for RibbonDiffLogical
--
create view [dbo].[RibbonDiffLogical]
 (

    -- physical attributes
    [TabId],
    [RDX],
    [ContextGroupId],
    [OrganizationId],
    [VersionNumber],
    [RibbonDiffUniqueId],
    [Entity],
    [Sequence],
    [RibbonDiffId],
    [DiffType],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [RibbonCustomizationId],
    [DiffId],
    [IsManaged],
    [IsAppAware]
) with view_metadata as
select

    -- physical attribute
    [T1].[TabId],
    [T1].[RDX],
    [T1].[ContextGroupId],
    [T1].[OrganizationId],
    [T1].[VersionNumber],
    [T1].[RibbonDiffUniqueId],
    [T1].[Entity],
    [T1].[Sequence],
    [T1].[RibbonDiffId],
    [T1].[DiffType],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[RibbonCustomizationId],
    [T1].[DiffId],
    [T1].[IsManaged],
    [T1].[IsAppAware]
from [RibbonDiffBase] [T1]
where T1.OverwriteTime = 0
GO
