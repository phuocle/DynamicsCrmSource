USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PostLikeBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostLikeBase](
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[PostId] [uniqueidentifier] NOT NULL,
	[PostLikeId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_PostLikeBase] PRIMARY KEY CLUSTERED 
(
	[PostLikeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_createdby]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_createdby] ON [dbo].[PostLikeBase]
(
	[CreatedBy] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_CreatedByPostId]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_CreatedByPostId] ON [dbo].[PostLikeBase]
(
	[PostId] ASC,
	[CreatedBy] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostLikeBase]  WITH CHECK ADD  CONSTRAINT [Post_Likes] FOREIGN KEY([PostId])
REFERENCES [dbo].[PostBase] ([PostId])
GO
ALTER TABLE [dbo].[PostLikeBase] CHECK CONSTRAINT [Post_Likes]
GO
