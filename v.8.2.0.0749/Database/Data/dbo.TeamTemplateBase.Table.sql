USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[TeamTemplateBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamTemplateBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[DefaultAccessRightsMask] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[TeamTemplateName] [nvarchar](100) NULL,
	[TeamTemplateId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[Description] [nvarchar](max) NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[IsSystem] [bit] NOT NULL CONSTRAINT [DF_TeamTemplateBase_IsSystem]  DEFAULT ((0)),
 CONSTRAINT [cndx_PrimaryKey_TeamTemplate] PRIMARY KEY CLUSTERED 
(
	[TeamTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
INSERT [dbo].[TeamTemplateBase] ([CreatedBy], [ModifiedBy], [DefaultAccessRightsMask], [CreatedOnBehalfBy], [CreatedOn], [ObjectTypeCode], [TeamTemplateName], [TeamTemplateId], [ModifiedOn], [Description], [ModifiedOnBehalfBy], [IsSystem]) VALUES (N'd9f5ecca-f31d-e711-80d3-00155d00662d', N'd9f5ecca-f31d-e711-80d3-00155d00662d', 23, N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', CAST(N'2017-04-10 13:52:05.000' AS DateTime), 3, N'Opportunity Sales Team Template', N'b3228218-b8f6-4a1b-a18d-552c6f980831', CAST(N'2017-04-10 13:52:05.000' AS DateTime), N'Out of box Opportunity Sales Team Template', N'c89f1087-e0a6-4be0-9464-6e9cca8279b5', 1)
