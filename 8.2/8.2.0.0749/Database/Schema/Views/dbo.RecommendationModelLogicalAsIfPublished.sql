SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for RecommendationModelLogicalAsIfPublished
--
create view [dbo].[RecommendationModelLogicalAsIfPublished]
 with view_metadata as
select
* from RecommendationModelLogical
GO
