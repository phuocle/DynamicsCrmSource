SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageResponseAsIfPublished
--
create view [dbo].[SdkMessageResponseAsIfPublished]
 with view_metadata as
select
* from SdkMessageResponse
GO
