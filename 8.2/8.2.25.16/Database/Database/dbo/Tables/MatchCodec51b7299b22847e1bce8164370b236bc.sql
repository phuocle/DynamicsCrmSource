CREATE TABLE [dbo].[MatchCodec51b7299b22847e1bce8164370b236bc] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodec51b7299b22847e1bce8164370b236bc]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodec51b7299b22847e1bce8164370b236bc]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodec51b7299b22847e1bce8164370b236bc]([ModifiedOn] ASC);

