USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MetadataTimestamp]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MetadataTimestamp](
	[VersionNumber] [timestamp] NOT NULL,
	[CreatedOn] [datetime] NULL,
 CONSTRAINT [MetadataTimestamp_PK] PRIMARY KEY CLUSTERED 
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2015-09-17 07:52:02.643' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 13:54:48.110' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 13:56:50.027' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 13:56:59.453' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 13:56:59.527' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 13:57:50.460' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:08:48.917' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:10:12.757' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:10:24.857' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:10:36.243' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:10:41.193' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:10:45.820' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:10:50.433' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:11:00.170' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:11:26.313' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:11:58.410' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:20:44.590' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:21:54.663' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:27:25.300' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:28:48.293' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:29:04.083' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:29:20.323' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:17.783' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:18.807' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:18.957' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:19.070' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:19.220' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:19.343' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:19.647' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:19.853' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:19.950' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:20.057' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:23.440' AS DateTime))
INSERT [dbo].[MetadataTimestamp] ([CreatedOn]) VALUES (CAST(N'2017-04-10 14:30:25.010' AS DateTime))
