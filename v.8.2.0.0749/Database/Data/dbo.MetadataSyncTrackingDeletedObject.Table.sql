USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[MetadataSyncTrackingDeletedObject]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MetadataSyncTrackingDeletedObject](
	[CreatedOn] [datetime] NOT NULL CONSTRAINT [DF_MetadataSyncTrackingDeletedObject_CreatedOn]  DEFAULT (getutcdate()),
	[MetadataObjectTypeCode] [int] NOT NULL,
	[ObjectId] [uniqueidentifier] NOT NULL,
	[Timestamp] [timestamp] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_MetadataSyncTrackingDeletedObjects] PRIMARY KEY CLUSTERED 
(
	[Timestamp] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.083' AS DateTime), 7, N'4a4641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.580' AS DateTime), 7, N'4b4641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.587' AS DateTime), 7, N'4c4641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.593' AS DateTime), 7, N'4d4641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.603' AS DateTime), 7, N'4e4641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.610' AS DateTime), 7, N'4f4641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.617' AS DateTime), 7, N'504641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:27:56.627' AS DateTime), 7, N'514641e4-f61d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.007' AS DateTime), 7, N'89903702-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.017' AS DateTime), 7, N'8a903702-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.023' AS DateTime), 7, N'8b903702-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.030' AS DateTime), 7, N'8c903702-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.040' AS DateTime), 7, N'8d903702-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.047' AS DateTime), 7, N'8e903702-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.600' AS DateTime), 7, N'65d64a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.610' AS DateTime), 7, N'66d64a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.620' AS DateTime), 7, N'67d64a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.630' AS DateTime), 7, N'68d64a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.637' AS DateTime), 7, N'69d64a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:20.643' AS DateTime), 7, N'6ad64a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.267' AS DateTime), 7, N'6ed74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.277' AS DateTime), 7, N'6fd74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.283' AS DateTime), 7, N'70d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.293' AS DateTime), 7, N'71d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.303' AS DateTime), 7, N'72d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.310' AS DateTime), 7, N'73d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.320' AS DateTime), 7, N'74d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.327' AS DateTime), 7, N'75d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.333' AS DateTime), 7, N'76d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.340' AS DateTime), 7, N'77d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.350' AS DateTime), 7, N'78d74a08-f71d-e711-80d3-00155d00662d')
INSERT [dbo].[MetadataSyncTrackingDeletedObject] ([CreatedOn], [MetadataObjectTypeCode], [ObjectId]) VALUES (CAST(N'2017-04-10 14:28:21.357' AS DateTime), 7, N'79d74a08-f71d-e711-80d3-00155d00662d')
/****** Object:  Index [ndx_MetadataSyncTrackingDeletedObjects]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_MetadataSyncTrackingDeletedObjects] ON [dbo].[MetadataSyncTrackingDeletedObject]
(
	[ObjectId] ASC,
	[MetadataObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
