USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AppModuleBase]    Script Date: 4/10/2017 9:59:17 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppModuleBase](
	[VersionNumber] [timestamp] NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[ComponentState] [int] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[Description] [nvarchar](max) NULL,
	[ConfigXML] [nvarchar](max) NULL,
	[ImportSequenceNumber] [int] NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[WebResourceId] [uniqueidentifier] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[AppModuleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[IsDefault] [bit] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[IsFeatured] [bit] NOT NULL,
	[URL] [nvarchar](200) NULL,
	[Name] [nvarchar](100) NOT NULL,
	[AppModuleId] [uniqueidentifier] NOT NULL,
	[IsManaged] [bit] NULL,
	[OrganizationId] [uniqueidentifier] NOT NULL,
	[ModifiedOn] [datetime] NULL,
	[UniqueName] [nvarchar](100) NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[PublisherId] [uniqueidentifier] NULL,
	[ClientType] [int] NULL,
	[AppModuleVersion] [nvarchar](48) NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[PublishedOn] [datetime] NULL,
	[FormFactor] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[IntroducedVersion] [nvarchar](100) NULL,
	[AppModuleXmlManaged] [nvarchar](max) NULL,
	[CreatedOn] [datetime] NULL,
 CONSTRAINT [cndx_PrimaryKey_AppModule] PRIMARY KEY CLUSTERED 
(
	[AppModuleId] ASC,
	[UniqueName] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [cndx_uniquename_AppModule]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [cndx_uniquename_AppModule] ON [dbo].[AppModuleBase]
(
	[UniqueName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
SET ANSI_PADDING ON

GO
/****** Object:  Index [cndx_url_AppModule]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [cndx_url_AppModule] ON [dbo].[AppModuleBase]
(
	[URL] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_AppModuleIdUnique]  DEFAULT (newid()) FOR [AppModuleIdUnique]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_IsDefault]  DEFAULT ((0)) FOR [IsDefault]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_IsFeatured]  DEFAULT ((0)) FOR [IsFeatured]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_AppModuleId]  DEFAULT (newid()) FOR [AppModuleId]
GO
ALTER TABLE [dbo].[AppModuleBase] ADD  CONSTRAINT [DF_AppModuleBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
