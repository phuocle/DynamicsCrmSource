CREATE TABLE [dbo].[MatchCoded92b7a5903594d95b68e1855e93dbd6d] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCoded92b7a5903594d95b68e1855e93dbd6d]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCoded92b7a5903594d95b68e1855e93dbd6d]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCoded92b7a5903594d95b68e1855e93dbd6d]([ModifiedOn] ASC);

