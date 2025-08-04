CREATE TABLE [dbo].[UserEntityUISettingsBase]
(
[RecentlyViewedXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[UserEntityUISettingsId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_UserEntityUISettingsBase_UserEntityUISettingsId] DEFAULT (newid()),
[LookupMRUXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[InsertIntoEmailMRUXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[ObjectTypeCode] [int] NOT NULL CONSTRAINT [DF_UserEntityUISettingsBase_ObjectTypeCode] DEFAULT ((0)),
[ReadingPaneXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TabOrderXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[LastViewedFormXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[MRUXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ShowInAddressBook] [bit] NULL CONSTRAINT [DF_UserEntityUISettingsBase_ShowInAddressBook] DEFAULT ((0)),
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_UserEntityUISettingsBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD CONSTRAINT [ndx_PrimaryKey_UserEntityUISettings] PRIMARY KEY NONCLUSTERED  ([UserEntityUISettingsId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_userentityuisettingsownerid] ON [dbo].[UserEntityUISettingsBase] ([OwnerId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UserEntityUISettingsBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD CONSTRAINT [owner_userentityuisettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] ADD CONSTRAINT [userentityuisettings_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
