CREATE TABLE [dbo].[ActionCardUserSettingsBase] (
    [ActionCardUserSettingsId] UNIQUEIDENTIFIER CONSTRAINT [DF_ActionCardUserSettingsBase_ActionCardUserSettingsId] DEFAULT (newid()) NOT NULL,
    [CardTypeId]               UNIQUEIDENTIFIER NOT NULL,
    [IsEnabled]                BIT              CONSTRAINT [DF_ActionCardUserSettingsBase_IsEnabled] DEFAULT ((0)) NULL,
    [StringCardOption]         NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]       UNIQUEIDENTIFIER NULL,
    [IntCardOption]            INT              NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [OwnerId]                  UNIQUEIDENTIFIER NOT NULL,
    [BoolCardOption]           BIT              CONSTRAINT [DF_ActionCardUserSettingsBase_BoolCardOption] DEFAULT ((0)) NULL,
    [CardType]                 INT              NOT NULL,
    [OwnerIdType]              INT              CONSTRAINT [DF_ActionCardUserSettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_ActionCardUserSettings] PRIMARY KEY NONCLUSTERED ([ActionCardUserSettingsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [actioncardusersettings_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_actioncardusersettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActionCardUserSettingsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsusersettingsownerid]
    ON [dbo].[ActionCardUserSettingsBase]([OwnerId] ASC, [CardTypeId] ASC, [CardType] ASC) WITH (FILLFACTOR = 80);

