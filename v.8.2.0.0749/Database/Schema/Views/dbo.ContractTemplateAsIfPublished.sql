SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for ContractTemplateAsIfPublished
--
create view [dbo].[ContractTemplateAsIfPublished]
 with view_metadata as
select
* from [ContractTemplate]
GO
