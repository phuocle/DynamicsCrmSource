SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for TopicModelConfigurationLogicalAsIfPublished
--
create view [dbo].[TopicModelConfigurationLogicalAsIfPublished]
 with view_metadata as
select
* from TopicModelConfigurationLogical
GO
