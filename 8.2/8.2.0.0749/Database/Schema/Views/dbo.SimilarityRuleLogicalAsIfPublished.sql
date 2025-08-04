SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SimilarityRuleLogicalAsIfPublished
--
create view [dbo].[SimilarityRuleLogicalAsIfPublished]
 with view_metadata as
select
* from SimilarityRuleLogical
GO
