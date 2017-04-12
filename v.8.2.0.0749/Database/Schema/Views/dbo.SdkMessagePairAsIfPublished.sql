SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessagePairAsIfPublished
--
create view [dbo].[SdkMessagePairAsIfPublished]
 with view_metadata as
select
* from SdkMessagePair
GO
