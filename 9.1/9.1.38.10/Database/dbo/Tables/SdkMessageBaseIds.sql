CREATE TABLE [dbo].[SdkMessageBaseIds] (
    [SdkMessageId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SdkMessageBaseIds] PRIMARY KEY CLUSTERED ([SdkMessageId] ASC)
);


GO
ALTER TABLE [dbo].[SdkMessageBaseIds] SET (LOCK_ESCALATION = DISABLE);

