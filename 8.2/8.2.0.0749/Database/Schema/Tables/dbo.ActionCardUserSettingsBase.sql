CREATE TABLE [dbo].[ActionCardUserSettingsBase]
(
[ActionCardUserSettingsId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ActionCardUserSettingsBase_ActionCardUserSettingsId] DEFAULT (newid()),
[CardTypeId] [uniqueidentifier] NOT NULL,
[IsEnabled] [bit] NULL CONSTRAINT [DF_ActionCardUserSettingsBase_IsEnabled] DEFAULT ((0)),
[StringCardOption] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[IntCardOption] [int] NULL,
[VersionNumber] [timestamp] NULL,
[OwnerId] [uniqueidentifier] NOT NULL,
[BoolCardOption] [bit] NULL CONSTRAINT [DF_ActionCardUserSettingsBase_BoolCardOption] DEFAULT ((0)),
[CardType] [int] NOT NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ActionCardUserSettingsBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD CONSTRAINT [ndx_PrimaryKey_ActionCardUserSettings] PRIMARY KEY NONCLUSTERED  ([ActionCardUserSettingsId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsusersettingsownerid] ON [dbo].[ActionCardUserSettingsBase] ([OwnerId], [CardTypeId], [CardType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActionCardUserSettingsBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD CONSTRAINT [actioncardusersettings_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] ADD CONSTRAINT [owner_actioncardusersettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
