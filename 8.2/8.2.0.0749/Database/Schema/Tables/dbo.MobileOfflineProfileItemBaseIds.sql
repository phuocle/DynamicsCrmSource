CREATE TABLE [dbo].[MobileOfflineProfileItemBaseIds]
(
[MobileOfflineProfileItemId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemBaseIds] ADD CONSTRAINT [PK_MobileOfflineProfileItemBaseIds] PRIMARY KEY CLUSTERED  ([MobileOfflineProfileItemId]) ON [PRIMARY]
GO
