CREATE TABLE [dbo].[MatchCodef42dc21aed314fc9a6d7e9391121ea3b] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
ALTER TABLE [dbo].[MatchCodef42dc21aed314fc9a6d7e9391121ea3b] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodef42dc21aed314fc9a6d7e9391121ea3b]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodef42dc21aed314fc9a6d7e9391121ea3b]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodef42dc21aed314fc9a6d7e9391121ea3b]([ModifiedOn] ASC);

