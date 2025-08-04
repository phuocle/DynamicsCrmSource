SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- logical 'as if published' view for SdkMessageProcessingStepSecureConfigLogicalAsIfPublished
--
create view [dbo].[SdkMessageProcessingStepSecureConfigLogicalAsIfPublished]
 with view_metadata as
select
* from SdkMessageProcessingStepSecureConfigLogical
GO
