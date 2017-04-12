SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for MailMergeTemplateAsIfPublished
--
create view [dbo].[MailMergeTemplateAsIfPublished]
 with view_metadata as
select
* from [MailMergeTemplate]
GO
