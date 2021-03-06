USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CascadeDeleteEntitiesSelfReferencing]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CascadeDeleteEntitiesSelfReferencing](
	[ObjectTypeCode] [int] NOT NULL,
	[ColumnNumber] [int] NOT NULL,
 CONSTRAINT [PK_CascadeDeleteEntitiesSelfReferencing] PRIMARY KEY CLUSTERED 
(
	[ObjectTypeCode] ASC,
	[ColumnNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (10, 24)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (50, 28)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (112, 141)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1010, 37)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1024, 80)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1036, 40)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1048, 8)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1055, 2)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1083, 71)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1085, 90)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1089, 94)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (1091, 93)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (4601, 12)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (4703, 7)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (7100, 40)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (7103, 22)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (8050, 34)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9502, 22)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9508, 4)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9869, 28)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9934, 26)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9953, 109)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9958, 14)
INSERT [dbo].[CascadeDeleteEntitiesSelfReferencing] ([ObjectTypeCode], [ColumnNumber]) VALUES (9959, 4)
