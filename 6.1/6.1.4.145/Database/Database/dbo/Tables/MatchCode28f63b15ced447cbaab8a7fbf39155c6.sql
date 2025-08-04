CREATE TABLE [dbo].[MatchCode28f63b15ced447cbaab8a7fbf39155c6] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode28f63b15ced447cbaab8a7fbf39155c6]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode28f63b15ced447cbaab8a7fbf39155c6]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode28f63b15ced447cbaab8a7fbf39155c6]([ModifiedOn] ASC);

