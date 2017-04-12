USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[DisplayStringMap]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base view for DisplayStringMap
--
create view [dbo].[DisplayStringMap]
 (

    -- physical attributes
    [ObjectTypeCode],
    [DisplayStringMapId],
    [DisplayStringId],
    [ComponentState],
    [SupportingSolutionId],
    [DisplayStringMapIdUnique],
    [SolutionId],
    [OverwriteTime],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[ObjectTypeCode],
    [T1].[DisplayStringMapId],
    [T1].[DisplayStringId],
    [T1].[ComponentState],
    [T1].[SupportingSolutionId],
    [T1].[DisplayStringMapIdUnique],
    [T1].[SolutionId],
    [T1].[OverwriteTime],
    [T1].[IsManaged]
from [DisplayStringMapBase] [T1]
where T1.OverwriteTime = 0 AND T1.ComponentState = 0
GO
