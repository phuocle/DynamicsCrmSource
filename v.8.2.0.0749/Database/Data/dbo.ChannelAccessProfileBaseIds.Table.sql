USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ChannelAccessProfileBaseIds]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ChannelAccessProfileBaseIds](
	[ChannelAccessProfileId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_ChannelAccessProfileBaseIds] PRIMARY KEY CLUSTERED 
(
	[ChannelAccessProfileId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ChannelAccessProfileBaseIds] ([ChannelAccessProfileId]) VALUES (N'ad781ef1-8c15-e511-a1ce-0023ae753112')
