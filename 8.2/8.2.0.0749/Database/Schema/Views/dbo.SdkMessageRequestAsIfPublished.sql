SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageRequestAsIfPublished
--
create view [dbo].[SdkMessageRequestAsIfPublished]
 with view_metadata as
select
* from SdkMessageRequest
GO
