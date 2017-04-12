SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageProcessingStepLogicalAsIfPublished
--
create view [dbo].[SdkMessageProcessingStepLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageProcessingStepLogical
GO
