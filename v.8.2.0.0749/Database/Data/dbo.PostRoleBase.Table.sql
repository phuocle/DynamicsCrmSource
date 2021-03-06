USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[PostRoleBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PostRoleBase](
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[RegardingObjectId] [uniqueidentifier] NOT NULL,
	[PostRoleId] [uniqueidentifier] NOT NULL,
	[Type] [int] NULL,
	[PostId] [uniqueidentifier] NOT NULL,
	[RegardingObjectTypeCode] [int] NULL,
 CONSTRAINT [PK_PostRoleBase] PRIMARY KEY CLUSTERED 
(
	[PostRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_Regarding]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Regarding] ON [dbo].[PostRoleBase]
(
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_UniqueRolePerPost]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueRolePerPost] ON [dbo].[PostRoleBase]
(
	[PostId] ASC,
	[RegardingObjectId] ASC,
	[RegardingObjectTypeCode] ASC
)
INCLUDE ( 	[Type]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PostRoleBase]  WITH CHECK ADD  CONSTRAINT [postrole_Post] FOREIGN KEY([PostId])
REFERENCES [dbo].[PostBase] ([PostId])
GO
ALTER TABLE [dbo].[PostRoleBase] CHECK CONSTRAINT [postrole_Post]
GO
