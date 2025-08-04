CREATE TABLE [dbo].[MatchCode5fbda0914ebc4ec4851328884b813b25] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode5fbda0914ebc4ec4851328884b813b25]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode5fbda0914ebc4ec4851328884b813b25]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode5fbda0914ebc4ec4851328884b813b25]([ModifiedOn] ASC);

