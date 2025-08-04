CREATE TABLE [dbo].[MatchCode8c418a76ef9945c89fcdc6dbd805ec61] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode8c418a76ef9945c89fcdc6dbd805ec61]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode8c418a76ef9945c89fcdc6dbd805ec61]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode8c418a76ef9945c89fcdc6dbd805ec61]([ModifiedOn] ASC);

