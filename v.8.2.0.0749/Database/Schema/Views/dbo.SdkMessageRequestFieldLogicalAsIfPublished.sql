SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageRequestFieldLogicalAsIfPublished
--
create view [dbo].[SdkMessageRequestFieldLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageRequestFieldLogical
GO
