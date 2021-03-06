USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RibbonRuleLogical]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for RibbonRuleLogical
--
create view [dbo].[RibbonRuleLogical]
 (

    -- physical attributes
    [RuleId],
    [RuleDefinition],
    [Entity],
    [RuleType],
    [RibbonRuleUniqueId],
    [VersionNumber],
    [OrganizationId],
    [RibbonRuleId],
    [RibbonCustomizationId],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [IsManaged]
) with view_metadata as
select

    -- physical attribute
    [T1].[RuleId],
    [T1].[RuleDefinition],
    [T1].[Entity],
    [T1].[RuleType],
    [T1].[RibbonRuleUniqueId],
    [T1].[VersionNumber],
    [T1].[OrganizationId],
    [T1].[RibbonRuleId],
    [T1].[RibbonCustomizationId],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[IsManaged]
from [RibbonRuleBase] [T1]
where T1.OverwriteTime = 0
GO
