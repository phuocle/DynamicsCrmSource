CREATE TABLE [dbo].[SharedCacheState]
(
[OrganizationId] [uniqueidentifier] NOT NULL,
[IsCacheSharingEnabled] [bit] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SharedCacheState] ADD CONSTRAINT [PK__SharedCa__CADB0B1277F737C0] PRIMARY KEY CLUSTERED  ([OrganizationId]) ON [PRIMARY]
GO
