CREATE TABLE [dbo].[SdkMessageRequestBaseIds] (
    [SdkMessageRequestId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SdkMessageRequestBaseIds] PRIMARY KEY CLUSTERED ([SdkMessageRequestId] ASC)
);


GO
ALTER TABLE [dbo].[SdkMessageRequestBaseIds] SET (LOCK_ESCALATION = DISABLE);

