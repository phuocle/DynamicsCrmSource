SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageAsIfPublished
--
create view [dbo].[SdkMessageAsIfPublished]
 with view_metadata as
select
* from SdkMessage
GO