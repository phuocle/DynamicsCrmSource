USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RecommendationModelMappingAsIfPublished]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for RecommendationModelMappingAsIfPublished
--
create view [dbo].[RecommendationModelMappingAsIfPublished]
 with view_metadata as
select
* from [RecommendationModelMapping]
GO
