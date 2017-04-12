CREATE TABLE [dbo].[MatchCodea38c930945b64455957204bc60cf9080]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCodea38c930945b64455957204bc60cf9080] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCodea38c930945b64455957204bc60cf9080] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCodea38c930945b64455957204bc60cf9080] ([ObjectId]) ON [PRIMARY]
GO