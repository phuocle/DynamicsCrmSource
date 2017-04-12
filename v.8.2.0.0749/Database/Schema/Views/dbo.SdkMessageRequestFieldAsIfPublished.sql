SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageRequestFieldAsIfPublished
--
create view [dbo].[SdkMessageRequestFieldAsIfPublished]
 with view_metadata as
select
* from SdkMessageRequestField
GO
