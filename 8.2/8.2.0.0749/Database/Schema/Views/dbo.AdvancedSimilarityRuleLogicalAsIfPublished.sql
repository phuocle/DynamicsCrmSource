SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for AdvancedSimilarityRuleLogicalAsIfPublished
--
create view [dbo].[AdvancedSimilarityRuleLogicalAsIfPublished]
 with view_metadata as
select
* from AdvancedSimilarityRuleLogical
GO
