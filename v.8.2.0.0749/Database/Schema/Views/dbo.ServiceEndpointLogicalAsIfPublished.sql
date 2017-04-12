SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for ServiceEndpointLogicalAsIfPublished
--
create view [dbo].[ServiceEndpointLogicalAsIfPublished]
 with view_metadata as
select
* from ServiceEndpointLogical
GO
