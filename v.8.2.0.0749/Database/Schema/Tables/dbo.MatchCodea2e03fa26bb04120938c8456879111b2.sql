CREATE TABLE [dbo].[MatchCodea2e03fa26bb04120938c8456879111b2]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCodea2e03fa26bb04120938c8456879111b2] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCodea2e03fa26bb04120938c8456879111b2] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCodea2e03fa26bb04120938c8456879111b2] ([ObjectId]) ON [PRIMARY]
GO
