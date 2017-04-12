CREATE TABLE [dbo].[MatchCodea2ccc673be3547498e436ad86ffd1656]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[MatchCode] [nvarchar] (450) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL
) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCodea2ccc673be3547498e436ad86ffd1656] ([MatchCode]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCodea2ccc673be3547498e436ad86ffd1656] ([ModifiedOn]) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCodea2ccc673be3547498e436ad86ffd1656] ([ObjectId]) ON [PRIMARY]
GO
