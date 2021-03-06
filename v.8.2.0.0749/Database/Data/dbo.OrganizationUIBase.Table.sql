USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[OrganizationUIBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[OrganizationUIBase](
	[FormId] [uniqueidentifier] NOT NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[FormXml] [nvarchar](max) NULL,
	[FieldXml] [nvarchar](max) NULL,
	[ObjectTypeCode] [int] NULL,
	[PreviewXml] [nvarchar](max) NULL,
	[PreviewColumnsetXml] [nvarchar](max) NULL,
	[Version] [int] NULL,
	[OutlookShortcutIcon] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[GridIcon] [nvarchar](max) NULL,
	[FormIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[LargeEntityIcon] [nvarchar](max) NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[ComponentState] [int] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[IsManaged] [bit] NOT NULL,
	[IsCustomizable] [bit] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[OrganizationUIBase] ADD  CONSTRAINT [DF_OrganizationUIBase_FormIdUnique]  DEFAULT (newid()) FOR [FormIdUnique]
GO
ALTER TABLE [dbo].[OrganizationUIBase] ADD  CONSTRAINT [DF_OrganizationUIBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[OrganizationUIBase] ADD  CONSTRAINT [DF_OrganizationUIBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[OrganizationUIBase] ADD  CONSTRAINT [DF_OrganizationUIBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[OrganizationUIBase] ADD  CONSTRAINT [DF_OrganizationUIBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[OrganizationUIBase] ADD  CONSTRAINT [DF_OrganizationUIBase_IsCustomizable]  DEFAULT ((1)) FOR [IsCustomizable]
GO
