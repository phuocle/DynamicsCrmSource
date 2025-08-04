SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for RecommendationModelAsIfPublished
--
create view [dbo].[RecommendationModelAsIfPublished]
 with view_metadata as
select
* from [RecommendationModel]
GO
