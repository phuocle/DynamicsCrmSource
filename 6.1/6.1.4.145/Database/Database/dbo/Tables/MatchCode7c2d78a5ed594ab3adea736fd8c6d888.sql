CREATE TABLE [dbo].[MatchCode7c2d78a5ed594ab3adea736fd8c6d888] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode7c2d78a5ed594ab3adea736fd8c6d888]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode7c2d78a5ed594ab3adea736fd8c6d888]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode7c2d78a5ed594ab3adea736fd8c6d888]([ModifiedOn] ASC);

