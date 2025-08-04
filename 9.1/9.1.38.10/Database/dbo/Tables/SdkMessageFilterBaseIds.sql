CREATE TABLE [dbo].[SdkMessageFilterBaseIds] (
    [SdkMessageFilterId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_SdkMessageFilterBaseIds] PRIMARY KEY CLUSTERED ([SdkMessageFilterId] ASC)
);


GO
ALTER TABLE [dbo].[SdkMessageFilterBaseIds] SET (LOCK_ESCALATION = DISABLE);

