CREATE TABLE [dbo].[MatchCode8b1461ef1c1f4e4f8628dcc6899d9001] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode8b1461ef1c1f4e4f8628dcc6899d9001]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode8b1461ef1c1f4e4f8628dcc6899d9001]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode8b1461ef1c1f4e4f8628dcc6899d9001]([ModifiedOn] ASC);

