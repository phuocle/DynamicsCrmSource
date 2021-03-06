USE [D365_MSCRM]
GO
/****** Object:  Table [MetadataSchema].[OrganizationLanguagePack]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [MetadataSchema].[OrganizationLanguagePack](
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[LanguageId] [int] NOT NULL,
	[IsEnabled] [bit] NOT NULL DEFAULT ((0)),
	[Version] [nvarchar](19) NOT NULL,
	[LabelCacheSharingEnabled] [bit] NOT NULL CONSTRAINT [DF_OgLangPack_LabelCacheSharingEnabled]  DEFAULT ((0))
) ON [PRIMARY]

GO
INSERT [MetadataSchema].[OrganizationLanguagePack] ([OrganizationId], [LanguageId], [IsEnabled], [Version], [LabelCacheSharingEnabled]) VALUES (N'94f9b696-f31d-e711-80d3-00155d00662d', 1033, 1, N'8.2.0000.0749', 1)
