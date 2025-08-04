CREATE TABLE [dbo].[MobileOfflineProfileItemAssociationBaseIds] (
    [MobileOfflineProfileItemAssociationId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_MobileOfflineProfileItemAssociationBaseIds] PRIMARY KEY CLUSTERED ([MobileOfflineProfileItemAssociationId] ASC)
);


GO
ALTER TABLE [dbo].[MobileOfflineProfileItemAssociationBaseIds] SET (LOCK_ESCALATION = DISABLE);

