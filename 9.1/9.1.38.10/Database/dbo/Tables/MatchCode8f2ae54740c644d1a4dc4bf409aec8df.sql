CREATE TABLE [dbo].[MatchCode8f2ae54740c644d1a4dc4bf409aec8df] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
ALTER TABLE [dbo].[MatchCode8f2ae54740c644d1a4dc4bf409aec8df] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode8f2ae54740c644d1a4dc4bf409aec8df]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode8f2ae54740c644d1a4dc4bf409aec8df]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode8f2ae54740c644d1a4dc4bf409aec8df]([ModifiedOn] ASC);

