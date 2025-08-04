CREATE TABLE [dbo].[MatchCode25fb4c796b7d4854821aeabba31d8e1f] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCode25fb4c796b7d4854821aeabba31d8e1f]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCode25fb4c796b7d4854821aeabba31d8e1f]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCode25fb4c796b7d4854821aeabba31d8e1f]([ModifiedOn] ASC);

