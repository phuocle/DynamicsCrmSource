USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[SdkMessageResponseLogicalAsIfPublished]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical 'as if published' view for SdkMessageResponseLogicalAsIfPublished
--
create view [dbo].[SdkMessageResponseLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageResponseLogical
GO
