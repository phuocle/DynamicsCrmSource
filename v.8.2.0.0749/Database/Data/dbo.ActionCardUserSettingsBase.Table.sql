USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ActionCardUserSettingsBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionCardUserSettingsBase](
	[ActionCardUserSettingsId] [uniqueidentifier] NOT NULL,
	[CardTypeId] [uniqueidentifier] NOT NULL,
	[IsEnabled] [bit] NULL,
	[StringCardOption] [nvarchar](max) NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[IntCardOption] [int] NULL,
	[VersionNumber] [timestamp] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[BoolCardOption] [bit] NULL,
	[CardType] [int] NOT NULL,
	[OwnerIdType] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [ndx_PrimaryKey_ActionCardUserSettings]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD  CONSTRAINT [ndx_PrimaryKey_ActionCardUserSettings] PRIMARY KEY NONCLUSTERED 
(
	[ActionCardUserSettingsId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [cndx_actioncardsusersettingsownerid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsusersettingsownerid] ON [dbo].[ActionCardUserSettingsBase]
(
	[OwnerId] ASC,
	[CardTypeId] ASC,
	[CardType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActionCardUserSettingsBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD  CONSTRAINT [DF_ActionCardUserSettingsBase_ActionCardUserSettingsId]  DEFAULT (newid()) FOR [ActionCardUserSettingsId]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD  CONSTRAINT [DF_ActionCardUserSettingsBase_IsEnabled]  DEFAULT ((0)) FOR [IsEnabled]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD  CONSTRAINT [DF_ActionCardUserSettingsBase_BoolCardOption]  DEFAULT ((0)) FOR [BoolCardOption]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD  CONSTRAINT [DF_ActionCardUserSettingsBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase]  WITH CHECK ADD  CONSTRAINT [actioncardusersettings_businessunit] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] CHECK CONSTRAINT [actioncardusersettings_businessunit]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase]  WITH CHECK ADD  CONSTRAINT [owner_actioncardusersettings] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] CHECK CONSTRAINT [owner_actioncardusersettings]
GO
