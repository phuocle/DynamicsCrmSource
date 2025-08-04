CREATE TABLE [dbo].[MultiEntitySearchEntities]
(
[MultiEntitySearchId] [uniqueidentifier] NOT NULL,
[EntityOrder] [int] NULL,
[MultiEntitySearchEntityId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_MultiEntitySearchEntities_MultiEntitySearchEntityId] DEFAULT (newid()),
[EntityName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MultiEntitySearchEntities] ADD CONSTRAINT [cndx_PrimaryKey_MultiEntitySearchEntities] PRIMARY KEY CLUSTERED  ([MultiEntitySearchEntityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MultiEntitySearchEntities] ADD CONSTRAINT [ndx_MultiEntitySearchEntities_Order] UNIQUE NONCLUSTERED  ([MultiEntitySearchEntityId], [EntityOrder]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[MultiEntitySearchEntities] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[MultiEntitySearchEntities] ADD CONSTRAINT [multientitysearch_multientitysearchentities] FOREIGN KEY ([MultiEntitySearchId]) REFERENCES [dbo].[MultiEntitySearchBase] ([MultiEntitySearchId])
GO
