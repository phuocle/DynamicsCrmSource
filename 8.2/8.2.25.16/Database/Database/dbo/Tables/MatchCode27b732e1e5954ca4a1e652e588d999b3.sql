CREATE TABLE [dbo].[MatchCode27b732e1e5954ca4a1e652e588d999b3] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode27b732e1e5954ca4a1e652e588d999b3]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode27b732e1e5954ca4a1e652e588d999b3]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode27b732e1e5954ca4a1e652e588d999b3]([ModifiedOn] ASC);

