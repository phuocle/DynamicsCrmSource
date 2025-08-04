SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ContractTemplateLogicalAsIfPublished
--
create view [dbo].[ContractTemplateLogicalAsIfPublished]
 with view_metadata as
select
* from ContractTemplateLogical
GO
