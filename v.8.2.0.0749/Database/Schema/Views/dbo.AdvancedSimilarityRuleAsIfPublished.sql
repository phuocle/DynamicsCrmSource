SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for AdvancedSimilarityRuleAsIfPublished
--
create view [dbo].[AdvancedSimilarityRuleAsIfPublished]
 with view_metadata as
select
* from [AdvancedSimilarityRule]
GO
