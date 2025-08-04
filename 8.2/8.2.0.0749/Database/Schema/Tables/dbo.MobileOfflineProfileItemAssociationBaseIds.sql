CREATE TABLE [dbo].[MobileOfflineProfileItemAssociationBaseIds]
(
[MobileOfflineProfileItemAssociationId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBaseIds] ADD CONSTRAINT [PK_MobileOfflineProfileItemAssociationBaseIds] PRIMARY KEY CLUSTERED  ([MobileOfflineProfileItemAssociationId]) ON [PRIMARY]
GO
