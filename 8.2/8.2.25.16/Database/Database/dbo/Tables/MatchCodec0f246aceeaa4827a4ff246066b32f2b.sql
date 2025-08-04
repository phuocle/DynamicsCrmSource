CREATE TABLE [dbo].[MatchCodec0f246aceeaa4827a4ff246066b32f2b] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodec0f246aceeaa4827a4ff246066b32f2b]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodec0f246aceeaa4827a4ff246066b32f2b]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodec0f246aceeaa4827a4ff246066b32f2b]([ModifiedOn] ASC);

