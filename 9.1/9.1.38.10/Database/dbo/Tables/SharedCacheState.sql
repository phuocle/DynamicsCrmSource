CREATE TABLE [dbo].[SharedCacheState] (
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [IsCacheSharingEnabled] BIT              NULL,
    PRIMARY KEY CLUSTERED ([OrganizationId] ASC)
);


GO
ALTER TABLE [dbo].[SharedCacheState] SET (LOCK_ESCALATION = DISABLE);

