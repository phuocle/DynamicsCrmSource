CREATE TABLE [dbo].[MultiEntitySearchEntities] (
    [MultiEntitySearchId]       UNIQUEIDENTIFIER NOT NULL,
    [EntityOrder]               INT              NULL,
    [MultiEntitySearchEntityId] UNIQUEIDENTIFIER CONSTRAINT [DF_MultiEntitySearchEntities_MultiEntitySearchEntityId] DEFAULT (newid()) NOT NULL,
    [EntityName]                NVARCHAR (128)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_MultiEntitySearchEntities] PRIMARY KEY CLUSTERED ([MultiEntitySearchEntityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [multientitysearch_multientitysearchentities] FOREIGN KEY ([MultiEntitySearchId]) REFERENCES [dbo].[MultiEntitySearchBase] ([MultiEntitySearchId]),
    CONSTRAINT [ndx_MultiEntitySearchEntities_Order] UNIQUE NONCLUSTERED ([MultiEntitySearchEntityId] ASC, [EntityOrder] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[MultiEntitySearchEntities] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MultiEntitySearchEntities]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

