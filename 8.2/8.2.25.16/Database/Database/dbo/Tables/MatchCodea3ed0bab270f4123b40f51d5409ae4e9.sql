CREATE TABLE [dbo].[MatchCodea3ed0bab270f4123b40f51d5409ae4e9] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodea3ed0bab270f4123b40f51d5409ae4e9]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodea3ed0bab270f4123b40f51d5409ae4e9]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodea3ed0bab270f4123b40f51d5409ae4e9]([ModifiedOn] ASC);

