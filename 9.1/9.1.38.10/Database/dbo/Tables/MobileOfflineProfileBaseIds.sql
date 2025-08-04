CREATE TABLE [dbo].[MobileOfflineProfileBaseIds] (
    [MobileOfflineProfileId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_MobileOfflineProfileBaseIds] PRIMARY KEY CLUSTERED ([MobileOfflineProfileId] ASC)
);


GO
ALTER TABLE [dbo].[MobileOfflineProfileBaseIds] SET (LOCK_ESCALATION = DISABLE);

