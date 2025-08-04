SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical view for ChannelAccessProfileEntityAccessLevelLogical
--
create view [dbo].[ChannelAccessProfileEntityAccessLevelLogical]
 (

    -- physical attributes
    [EntityAccessLevelId],
    [ChannelAccessProfileId],
    [EntityAccessLevelDepthMask],
    [ChannelAccessProfileEntityAccessLevelId],
    [VersionNumber],
    [ChannelAccessProfileEntityAccessLevelIdUnique],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [SolutionId],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[EntityAccessLevelId],
    [T1].[ChannelAccessProfileId],
    [T1].[EntityAccessLevelDepthMask],
    [T1].[ChannelAccessProfileEntityAccessLevelId],
    [T1].[VersionNumber],
    [T1].[ChannelAccessProfileEntityAccessLevelIdUnique],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[SolutionId],
    [T1].[IsManaged]
from [ChannelAccessProfileEntityAccessLevelBase] [T1]
where T1.OverwriteTime = 0
GO
