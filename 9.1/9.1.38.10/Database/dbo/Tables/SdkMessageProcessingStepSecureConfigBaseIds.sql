CREATE TABLE [dbo].[SdkMessageProcessingStepSecureConfigBaseIds] (
    [SdkMessageProcessingStepSecureConfigId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SdkMessageProcessingStepSecureConfigBaseIds] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepSecureConfigId] ASC)
);


GO
ALTER TABLE [dbo].[SdkMessageProcessingStepSecureConfigBaseIds] SET (LOCK_ESCALATION = DISABLE);

