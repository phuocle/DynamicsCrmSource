USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723](
	[ObjectId] [uniqueidentifier] NOT NULL,
	[MatchCode] [nvarchar](450) NULL,
	[ModifiedOn] [datetime] NULL
) ON [PRIMARY]

GO
/****** Object:  Index [Index3]    Script Date: 4/10/2017 9:59:22 PM ******/
CREATE UNIQUE CLUSTERED INDEX [Index3] ON [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723]
(
	[ObjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [Index1]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [Index1] ON [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723]
(
	[MatchCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [Index2]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [Index2] ON [dbo].[MatchCodeeca04af8ab214f0da4dad6f0db3e0723]
(
	[ModifiedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
