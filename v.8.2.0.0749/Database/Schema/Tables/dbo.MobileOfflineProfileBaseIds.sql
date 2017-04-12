CREATE TABLE [dbo].[MobileOfflineProfileBaseIds]
(
[MobileOfflineProfileId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileBaseIds] ADD CONSTRAINT [PK_MobileOfflineProfileBaseIds] PRIMARY KEY CLUSTERED  ([MobileOfflineProfileId]) ON [PRIMARY]
GO
