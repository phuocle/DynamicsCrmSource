CREATE TABLE [dbo].[SdkMessageProcessingStepBaseIds]
(
[SdkMessageProcessingStepId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SdkMessageProcessingStepBaseIds] ADD CONSTRAINT [PK_SdkMessageProcessingStepBaseIds] PRIMARY KEY CLUSTERED  ([SdkMessageProcessingStepId]) ON [PRIMARY]
GO
