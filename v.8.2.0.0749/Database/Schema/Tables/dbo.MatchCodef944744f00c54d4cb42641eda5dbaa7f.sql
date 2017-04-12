CREATE TABLE [dbo].[MatchCodef944744f00c54d4cb42641eda5dbaa7f]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCodef944744f00c54d4cb42641eda5dbaa7f] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCodef944744f00c54d4cb42641eda5dbaa7f] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCodef944744f00c54d4cb42641eda5dbaa7f] ([ObjectId]) ON [PRIMARY]
GO
