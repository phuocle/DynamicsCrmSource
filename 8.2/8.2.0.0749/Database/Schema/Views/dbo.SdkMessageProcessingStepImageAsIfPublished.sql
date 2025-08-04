SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageProcessingStepImageAsIfPublished
--
create view [dbo].[SdkMessageProcessingStepImageAsIfPublished]
 with view_metadata as
select
* from [SdkMessageProcessingStepImage]
GO
