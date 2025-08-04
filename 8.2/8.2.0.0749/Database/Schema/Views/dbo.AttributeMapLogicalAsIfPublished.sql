SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for AttributeMapLogicalAsIfPublished
--
create view [dbo].[AttributeMapLogicalAsIfPublished]
 with view_metadata as
select
* from AttributeMapLogical
GO
