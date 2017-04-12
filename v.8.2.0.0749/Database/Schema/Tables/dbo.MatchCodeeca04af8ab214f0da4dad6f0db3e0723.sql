CREATE TABLE [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723] ([ObjectId]) ON [PRIMARY]
GO
