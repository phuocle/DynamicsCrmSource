USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PostCommentBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostCommentBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[Text] [nvarchar](1000) NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[CreatedOn] [datetime] NOT NULL,
	[PostCommentId] [uniqueidentifier] NOT NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[PostId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_Post]    Script Date: 4/10/2017 9:59:20 PM ******/
CREATE CLUSTERED INDEX [ndx_Post] ON [dbo].[PostCommentBase]
(
	[PostId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [PK_PostCommentBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[PostCommentBase] ADD  CONSTRAINT [PK_PostCommentBase] PRIMARY KEY NONCLUSTERED 
(
	[PostCommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_CreatedOn]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_CreatedOn] ON [dbo].[PostCommentBase]
(
	[CreatedOn] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostCommentBase]  WITH CHECK ADD  CONSTRAINT [Post_Comments] FOREIGN KEY([PostId])
REFERENCES [dbo].[PostBase] ([PostId])
GO
ALTER TABLE [dbo].[PostCommentBase] CHECK CONSTRAINT [Post_Comments]
GO
