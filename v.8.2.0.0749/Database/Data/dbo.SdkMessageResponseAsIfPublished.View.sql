USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SdkMessageResponseAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- base 'as if published' view for SdkMessageResponseAsIfPublished
--
create view [dbo].[SdkMessageResponseAsIfPublished]
 with view_metadata as
select
* from SdkMessageResponse
GO
