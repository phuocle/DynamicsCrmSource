SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for RecommendationModelMappingLogicalAsIfPublished
--
create view [dbo].[RecommendationModelMappingLogicalAsIfPublished]
 with view_metadata as
select
* from RecommendationModelMappingLogical
GO
