SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for KnowledgeSearchModelAsIfPublished
--
create view [dbo].[KnowledgeSearchModelAsIfPublished]
 with view_metadata as
select
* from [KnowledgeSearchModel]
GO
