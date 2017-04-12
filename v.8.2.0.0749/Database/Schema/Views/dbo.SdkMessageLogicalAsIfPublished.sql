SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageLogicalAsIfPublished
--
create view [dbo].[SdkMessageLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageLogical
GO
