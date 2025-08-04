SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for RecommendationModelMappingAsIfPublished
--
create view [dbo].[RecommendationModelMappingAsIfPublished]
 with view_metadata as
select
* from [RecommendationModelMapping]
GO
