USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RecommendationModelLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for RecommendationModelLogicalAsIfPublished
--
create view [dbo].[RecommendationModelLogicalAsIfPublished]
 with view_metadata as
select
* from RecommendationModelLogical
GO
