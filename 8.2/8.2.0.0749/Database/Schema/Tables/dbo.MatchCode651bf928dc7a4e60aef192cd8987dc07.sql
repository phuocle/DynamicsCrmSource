CREATE TABLE [dbo].[MatchCode651bf928dc7a4e60aef192cd8987dc07]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCode651bf928dc7a4e60aef192cd8987dc07] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCode651bf928dc7a4e60aef192cd8987dc07] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCode651bf928dc7a4e60aef192cd8987dc07] ([ObjectId]) ON [PRIMARY]
GO
