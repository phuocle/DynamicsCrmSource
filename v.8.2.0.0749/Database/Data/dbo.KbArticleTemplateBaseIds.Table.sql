USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[KbArticleTemplateBaseIds]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[KbArticleTemplateBaseIds](
	[KbArticleTemplateId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [PK_KbArticleTemplateBaseIds] PRIMARY KEY CLUSTERED 
(
	[KbArticleTemplateId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId]) VALUES (N'c3f93721-91b6-475a-acd0-0a68aa1cb842')
INSERT [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId]) VALUES (N'49331898-0752-4670-ba0a-3ce95c6c88cd')
INSERT [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId]) VALUES (N'51a42583-f90f-416a-8abc-a10ac83fa6fa')
INSERT [dbo].[KbArticleTemplateBaseIds] ([KbArticleTemplateId]) VALUES (N'8d8e6b7f-1924-45e0-8120-bad79c95df5f')
