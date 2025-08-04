CREATE TABLE [dbo].[MatchCodef0ff810c7a434646969518c34afd3d2f] (
    [ObjectId]   UNIQUEIDENTIFIER NOT NULL,
    [MatchCode]  NVARCHAR (450)   NULL,
    [ModifiedOn] DATETIME         NULL
);


GO
CREATE UNIQUE CLUSTERED INDEX [Index3]
    ON [dbo].[MatchCodef0ff810c7a434646969518c34afd3d2f]([ObjectId] ASC);


GO
CREATE NONCLUSTERED INDEX [Index1]
    ON [dbo].[MatchCodef0ff810c7a434646969518c34afd3d2f]([MatchCode] ASC);


GO
CREATE NONCLUSTERED INDEX [Index2]
    ON [dbo].[MatchCodef0ff810c7a434646969518c34afd3d2f]([ModifiedOn] ASC);

