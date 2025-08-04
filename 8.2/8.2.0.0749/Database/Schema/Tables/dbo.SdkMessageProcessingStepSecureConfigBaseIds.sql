CREATE TABLE [dbo].[SdkMessageProcessingStepSecureConfigBaseIds]
(
[SdkMessageProcessingStepSecureConfigId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBaseIds] ADD CONSTRAINT [PK_SdkMessageProcessingStepSecureConfigBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessageProcessingStepSecureConfigId]) ON [PRIMARY]
GO
