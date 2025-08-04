CREATE TABLE [dbo].[MatchCode1a45a314cded4f24887f644fc68163f9] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode1a45a314cded4f24887f644fc68163f9]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode1a45a314cded4f24887f644fc68163f9]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode1a45a314cded4f24887f644fc68163f9]([ModifiedOn] ASC);

