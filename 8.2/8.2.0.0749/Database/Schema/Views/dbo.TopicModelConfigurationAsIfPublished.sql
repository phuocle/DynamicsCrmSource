SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for TopicModelConfigurationAsIfPublished
--
create view [dbo].[TopicModelConfigurationAsIfPublished]
 with view_metadata as
select
* from [TopicModelConfiguration]
GO
