USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[SocialActivityBase]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[SocialActivityBase](
	[ActivityId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_SocialActivityBase] PRIMARY KEY CLUSTERED 
(
	[ActivityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[SocialActivityBase]  WITH CHECK ADD  CONSTRAINT [FK_SocialActivityBase_ActivityPointerBase] FOREIGN KEY([ActivityId])
REFERENCES [dbo].[ActivityPointerBase] ([ActivityId])
GO
ALTER TABLE [dbo].[SocialActivityBase] CHECK CONSTRAINT [FK_SocialActivityBase_ActivityPointerBase]
GO
