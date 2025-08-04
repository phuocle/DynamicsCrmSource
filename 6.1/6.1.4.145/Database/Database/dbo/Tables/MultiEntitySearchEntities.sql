CREATE TABLE [dbo].[MultiEntitySearchEntities] (
    [MultiEntitySearchId]       UNIQUEIDENTIFIER NOT NULL,
    [EntityOrder]               INT              NULL,
    [MultiEntitySearchEntityId] UNIQUEIDENTIFIER CONSTRAINT [DF_MultiEntitySearchEntities_MultiEntitySearchEntityId] DEFAULT (newid()) NOT NULL,
    [EntityName]                NVARCHAR (64)    NULL,
    [VersionNumber]             ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_MultiEntitySearchEntities] PRIMARY KEY CLUSTERED ([MultiEntitySearchEntityId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [multientitysearch_multientitysearchentities] FOREIGN KEY ([MultiEntitySearchId]) REFERENCES [dbo].[MultiEntitySearchBase] ([MultiEntitySearchId]) NOT FOR REPLICATION,
    CONSTRAINT [ndx_MultiEntitySearchEntities_Order] UNIQUE NONCLUSTERED ([MultiEntitySearchEntityId] ASC, [EntityOrder] ASC) WITH (FILLFACTOR = 80)
);

