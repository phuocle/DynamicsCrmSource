USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[Notification]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[NotificationNumber] [int] IDENTITY(1,1) NOT NULL,
	[EventData] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NOT NULL,
	[EventId] [int] NOT NULL,
	[NotificationId] [uniqueidentifier] NOT NULL,
	[CreatedOnString] [nvarchar](40) NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [cndx_Notification]    Script Date: 4/10/2017 9:59:22 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_Notification] ON [dbo].[Notification]
(
	[NotificationNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrimaryKey_Notification]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[Notification] ADD  CONSTRAINT [ndx_PrimaryKey_Notification] PRIMARY KEY NONCLUSTERED 
(
	[NotificationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_NotificationCover]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_NotificationCover] ON [dbo].[Notification]
(
	[CreatedOn] ASC,
	[EventId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
