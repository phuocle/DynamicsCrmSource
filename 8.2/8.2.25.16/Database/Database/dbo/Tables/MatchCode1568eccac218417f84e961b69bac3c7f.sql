CREATE TABLE [dbo].[MatchCode1568eccac218417f84e961b69bac3c7f] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode1568eccac218417f84e961b69bac3c7f]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode1568eccac218417f84e961b69bac3c7f]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode1568eccac218417f84e961b69bac3c7f]([ModifiedOn] ASC);

