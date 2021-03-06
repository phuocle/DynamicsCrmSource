USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserEntityUISettingsBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserEntityUISettingsBase](
	[RecentlyViewedXml] [nvarchar](max) NULL,
	[UserEntityUISettingsId] [uniqueidentifier] NOT NULL,
	[LookupMRUXml] [nvarchar](max) NULL,
	[InsertIntoEmailMRUXml] [nvarchar](max) NULL,
	[VersionNumber] [timestamp] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[ObjectTypeCode] [int] NOT NULL,
	[ReadingPaneXml] [nvarchar](max) NULL,
	[TabOrderXml] [nvarchar](max) NULL,
	[LastViewedFormXml] [nvarchar](max) NULL,
	[MRUXml] [nvarchar](max) NULL,
	[ShowInAddressBook] [bit] NULL,
	[OwnerIdType] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [cndx_userentityuisettingsownerid]    Script Date: 4/10/2017 9:59:21 PM ******/
CREATE UNIQUE CLUSTERED INDEX [cndx_userentityuisettingsownerid] ON [dbo].[UserEntityUISettingsBase]
(
	[OwnerId] ASC,
	[ObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_PrimaryKey_UserEntityUISettings]    Script Date: 4/10/2017 9:59:57 PM ******/
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD  CONSTRAINT [ndx_PrimaryKey_UserEntityUISettings] PRIMARY KEY NONCLUSTERED 
(
	[UserEntityUISettingsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserEntityUISettingsBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD  CONSTRAINT [DF_UserEntityUISettingsBase_UserEntityUISettingsId]  DEFAULT (newid()) FOR [UserEntityUISettingsId]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD  CONSTRAINT [DF_UserEntityUISettingsBase_ObjectTypeCode]  DEFAULT ((0)) FOR [ObjectTypeCode]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD  CONSTRAINT [DF_UserEntityUISettingsBase_ShowInAddressBook]  DEFAULT ((0)) FOR [ShowInAddressBook]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD  CONSTRAINT [DF_UserEntityUISettingsBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase]  WITH CHECK ADD  CONSTRAINT [owner_userentityuisettings] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] CHECK CONSTRAINT [owner_userentityuisettings]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase]  WITH CHECK ADD  CONSTRAINT [userentityuisettings_businessunit] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] CHECK CONSTRAINT [userentityuisettings_businessunit]
GO
