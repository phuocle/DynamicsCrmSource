USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DependencyFeatureLogical]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for DependencyFeatureLogical
--
create view [dbo].[DependencyFeatureLogical]
 (

    -- physical attributes
    [DependencyFeatureId],
    [IntroducedVersion],
    [SolutionId],
    [SupportingSolutionId],
    [OverwriteTime],
    [ComponentState],
    [IsManaged],
    [DependencyFeatureIdUnique]
) with view_metadata as
select

    -- physical attribute
    [T1].[DependencyFeatureId],
    [T1].[IntroducedVersion],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[OverwriteTime],
    [T1].[ComponentState],
    [T1].[IsManaged],
    [T1].[DependencyFeatureIdUnique]
from [DependencyFeatureBase] [T1]
where T1.OverwriteTime = 0
GO
