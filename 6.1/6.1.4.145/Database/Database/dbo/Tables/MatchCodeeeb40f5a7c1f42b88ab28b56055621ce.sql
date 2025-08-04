CREATE TABLE [dbo].[MatchCodeeeb40f5a7c1f42b88ab28b56055621ce] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodeeeb40f5a7c1f42b88ab28b56055621ce]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodeeeb40f5a7c1f42b88ab28b56055621ce]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodeeeb40f5a7c1f42b88ab28b56055621ce]([ModifiedOn] ASC);

