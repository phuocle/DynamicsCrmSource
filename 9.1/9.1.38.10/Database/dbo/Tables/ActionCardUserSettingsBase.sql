CREATE TABLE [dbo].[ActionCardUserSettingsBase] (
    [CardTypeId]               UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]            ROWVERSION       NULL,
    [OwningBusinessUnit]       UNIQUEIDENTIFIER NULL,
    [CardType]                 INT              NOT NULL,
    [OwnerId]                  UNIQUEIDENTIFIER NOT NULL,
    [IntCardOption]            INT              NULL,
    [BoolCardOption]           BIT              CONSTRAINT [DF_ActionCardUserSettingsBase_BoolCardOption] DEFAULT ((0)) NULL,
    [ActionCardUserSettingsId] UNIQUEIDENTIFIER CONSTRAINT [DF_ActionCardUserSettingsBase_ActionCardUserSettingsId] DEFAULT (newid()) NOT NULL,
    [StringCardOption]         NVARCHAR (MAX)   NULL,
    [IsEnabled]                BIT              CONSTRAINT [DF_ActionCardUserSettingsBase_IsEnabled] DEFAULT ((0)) NULL,
    [OwnerIdType]              INT              CONSTRAINT [DF_ActionCardUserSettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_ActionCardUserSettings] PRIMARY KEY NONCLUSTERED ([ActionCardUserSettingsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [actioncardusersettings_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_actioncardusersettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ActionCardUserSettingsBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ActionCardUserSettingsBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_PrimaryKey_ActionCardUserSettings]
    ON [dbo].[ActionCardUserSettingsBase]([ActionCardUserSettingsId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActionCardUserSettingsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsusersettingsownerid]
    ON [dbo].[ActionCardUserSettingsBase]([OwnerId] ASC, [CardTypeId] ASC, [CardType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_CardTypeIdIntCardOption]
    ON [dbo].[ActionCardUserSettingsBase]([CardTypeId] ASC)
    INCLUDE([IntCardOption]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

