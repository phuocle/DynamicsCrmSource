SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageResponseLogicalAsIfPublished
--
create view [dbo].[SdkMessageResponseLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageResponseLogical
GO
