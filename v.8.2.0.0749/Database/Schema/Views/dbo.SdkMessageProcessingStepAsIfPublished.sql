SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageProcessingStepAsIfPublished
--
create view [dbo].[SdkMessageProcessingStepAsIfPublished]
 with view_metadata as
select
* from [SdkMessageProcessingStep]
GO
