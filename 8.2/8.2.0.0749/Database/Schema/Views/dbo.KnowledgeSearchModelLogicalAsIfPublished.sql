SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for KnowledgeSearchModelLogicalAsIfPublished
--
create view [dbo].[KnowledgeSearchModelLogicalAsIfPublished]
 with view_metadata as
select
* from KnowledgeSearchModelLogical
GO
