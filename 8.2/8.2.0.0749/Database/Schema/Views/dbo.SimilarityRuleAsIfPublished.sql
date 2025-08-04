SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SimilarityRuleAsIfPublished
--
create view [dbo].[SimilarityRuleAsIfPublished]
 with view_metadata as
select
* from [SimilarityRule]
GO
