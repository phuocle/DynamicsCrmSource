SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base 'as if published' view for SdkMessageProcessingStepSecureConfigAsIfPublished
--
create view [dbo].[SdkMessageProcessingStepSecureConfigAsIfPublished]
 with view_metadata as
select
* from SdkMessageProcessingStepSecureConfig
GO
