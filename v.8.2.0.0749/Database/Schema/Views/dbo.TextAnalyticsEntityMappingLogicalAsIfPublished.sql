SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for TextAnalyticsEntityMappingLogicalAsIfPublished
--
create view [dbo].[TextAnalyticsEntityMappingLogicalAsIfPublished]
 with view_metadata as
select
* from TextAnalyticsEntityMappingLogical
GO
