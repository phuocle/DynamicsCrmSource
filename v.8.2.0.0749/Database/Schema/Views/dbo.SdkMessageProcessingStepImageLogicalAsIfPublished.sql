SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageProcessingStepImageLogicalAsIfPublished
--
create view [dbo].[SdkMessageProcessingStepImageLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageProcessingStepImageLogical
GO
