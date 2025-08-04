SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for MailMergeTemplateLogicalAsIfPublished
--
create view [dbo].[MailMergeTemplateLogicalAsIfPublished]
 with view_metadata as
select
* from MailMergeTemplateLogical
GO
