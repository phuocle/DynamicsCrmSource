CREATE TABLE [dbo].[MatchCode6f2e770cd0164decb69af91176f00bc9] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
ALTER TABLE [dbo].[MatchCode6f2e770cd0164decb69af91176f00bc9] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode6f2e770cd0164decb69af91176f00bc9]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode6f2e770cd0164decb69af91176f00bc9]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode6f2e770cd0164decb69af91176f00bc9]([ModifiedOn] ASC);

