SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageResponseFieldLogicalAsIfPublished
--
create view [dbo].[SdkMessageResponseFieldLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageResponseFieldLogical
GO
