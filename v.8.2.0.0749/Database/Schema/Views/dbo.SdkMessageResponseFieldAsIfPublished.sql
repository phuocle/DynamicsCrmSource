SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageResponseFieldAsIfPublished
--
create view [dbo].[SdkMessageResponseFieldAsIfPublished]
 with view_metadata as
select
* from SdkMessageResponseField
GO