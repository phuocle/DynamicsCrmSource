CREATE TABLE [dbo].[MatchCodeec57f593a17b4c40bbb2ab93809c75b6] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
ALTER TABLE [dbo].[MatchCodeec57f593a17b4c40bbb2ab93809c75b6] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodeec57f593a17b4c40bbb2ab93809c75b6]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodeec57f593a17b4c40bbb2ab93809c75b6]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodeec57f593a17b4c40bbb2ab93809c75b6]([ModifiedOn] ASC);

