USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[TemplateLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for TemplateLogicalAsIfPublished
--
create view [dbo].[TemplateLogicalAsIfPublished]
 with view_metadata as
select
* from TemplateLogical
GO
