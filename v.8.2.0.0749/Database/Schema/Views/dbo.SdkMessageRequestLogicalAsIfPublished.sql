SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageRequestLogicalAsIfPublished
--
create view [dbo].[SdkMessageRequestLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageRequestLogical
GO
