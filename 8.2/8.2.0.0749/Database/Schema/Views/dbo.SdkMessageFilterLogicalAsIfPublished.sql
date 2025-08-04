SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageFilterLogicalAsIfPublished
--
create view [dbo].[SdkMessageFilterLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageFilterLogical
GO
