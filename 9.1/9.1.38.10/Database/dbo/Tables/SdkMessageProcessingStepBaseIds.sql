CREATE TABLE [dbo].[SdkMessageProcessingStepBaseIds] (
    [SdkMessageProcessingStepId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SdkMessageProcessingStepBaseIds] PRIMARY KEY CLUSTERED ([SdkMessageProcessingStepId] ASC)
);


GO
ALTER TABLE [dbo].[SdkMessageProcessingStepBaseIds] SET (LOCK_ESCALATION = DISABLE);

