SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for TextAnalyticsEntityMappingAsIfPublished
--
create view [dbo].[TextAnalyticsEntityMappingAsIfPublished]
 with view_metadata as
select
* from [TextAnalyticsEntityMapping]
GO
