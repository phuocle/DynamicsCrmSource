SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageFilterAsIfPublished
--
create view [dbo].[SdkMessageFilterAsIfPublished]
 with view_metadata as
select
* from SdkMessageFilter
GO
