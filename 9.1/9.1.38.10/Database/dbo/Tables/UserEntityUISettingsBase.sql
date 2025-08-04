CREATE TABLE [dbo].[UserEntityUISettingsBase] (
    [MRUXml]                 NVARCHAR (MAX)   NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [LookupMRUXml]           NVARCHAR (MAX)   NULL,
    [InsertIntoEmailMRUXml]  NVARCHAR (MAX)   NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [OwnerId]                UNIQUEIDENTIFIER NOT NULL,
    [RecentlyViewedXml]      NVARCHAR (MAX)   NULL,
    [ObjectTypeCode]         INT              CONSTRAINT [DF_UserEntityUISettingsBase_ObjectTypeCode] DEFAULT ((0)) NOT NULL,
    [ReadingPaneXml]         NVARCHAR (MAX)   NULL,
    [TabOrderXml]            NVARCHAR (MAX)   NULL,
    [UserEntityUISettingsId] UNIQUEIDENTIFIER CONSTRAINT [DF_UserEntityUISettingsBase_UserEntityUISettingsId] DEFAULT (newid()) NOT NULL,
    [ShowInAddressBook]      BIT              CONSTRAINT [DF_UserEntityUISettingsBase_ShowInAddressBook] DEFAULT ((0)) NULL,
    [LastViewedFormXml]      NVARCHAR (MAX)   NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_UserEntityUISettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_UserEntityUISettings] PRIMARY KEY CLUSTERED ([UserEntityUISettingsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_userentityuisettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [userentityuisettings_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[UserEntityUISettingsBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[UserEntityUISettingsBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserEntityUISettingsBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_userentityuisettingsownerid]
    ON [dbo].[UserEntityUISettingsBase]([OwnerId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

