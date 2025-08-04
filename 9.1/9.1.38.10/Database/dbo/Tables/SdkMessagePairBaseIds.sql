CREATE TABLE [dbo].[SdkMessagePairBaseIds] (
    [SdkMessagePairId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SdkMessagePairBaseIds] PRIMARY KEY CLUSTERED ([SdkMessagePairId] ASC)
);


GO
ALTER TABLE [dbo].[SdkMessagePairBaseIds] SET (LOCK_ESCALATION = DISABLE);

