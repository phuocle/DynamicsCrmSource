CREATE TABLE [dbo].[MatchCode390a05425afb4f3fb41a27620c0207c9]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCode390a05425afb4f3fb41a27620c0207c9] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCode390a05425afb4f3fb41a27620c0207c9] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCode390a05425afb4f3fb41a27620c0207c9] ([ObjectId]) ON [PRIMARY]
GO
