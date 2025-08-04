CREATE TABLE [dbo].[SharedCacheState] (
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [IsCacheSharingEnabled] BIT              NULL,
    PRIMARY KEY CLUSTERED ([OrganizationId] ASC)
);

