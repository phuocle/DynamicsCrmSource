CREATE TABLE [dbo].[MobileOfflineProfileItemBaseIds] (
    [MobileOfflineProfileItemId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_MobileOfflineProfileItemBaseIds] PRIMARY KEY CLUSTERED ([MobileOfflineProfileItemId] ASC)
);


GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBaseIds] SET (LOCK_ESCALATION = DISABLE);

