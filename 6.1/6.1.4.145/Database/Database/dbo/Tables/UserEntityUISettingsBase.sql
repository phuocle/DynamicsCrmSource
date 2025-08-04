CREATE TABLE [dbo].[UserEntityUISettingsBase] (
    [RecentlyViewedXml]      NVARCHAR (MAX)   NULL,
    [UserEntityUISettingsId] UNIQUEIDENTIFIER CONSTRAINT [DF_UserEntityUISettingsBase_UserEntityUISettingsId] DEFAULT (newid()) NOT NULL,
    [LookupMRUXml]           NVARCHAR (MAX)   NULL,
    [InsertIntoEmailMRUXml]  NVARCHAR (MAX)   NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [OwningBusinessUnit]     UNIQUEIDENTIFIER NULL,
    [OwnerId]                UNIQUEIDENTIFIER NOT NULL,
    [ObjectTypeCode]         INT              CONSTRAINT [DF_UserEntityUISettingsBase_ObjectTypeCode] DEFAULT ((0)) NOT NULL,
    [ReadingPaneXml]         NVARCHAR (MAX)   NULL,
    [TabOrderXml]            NVARCHAR (MAX)   NULL,
    [LastViewedFormXml]      NVARCHAR (MAX)   NULL,
    [MRUXml]                 NVARCHAR (MAX)   NULL,
    [ShowInAddressBook]      BIT              CONSTRAINT [DF_UserEntityUISettingsBase_ShowInAddressBook] DEFAULT ((0)) NULL,
    [OwnerIdType]            INT              CONSTRAINT [DF_UserEntityUISettingsBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_UserEntityUISettings] PRIMARY KEY NONCLUSTERED ([UserEntityUISettingsId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [owner_userentityuisettings] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [userentityuisettings_businessunit] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_userentityuisettingsownerid]
    ON [dbo].[UserEntityUISettingsBase]([OwnerId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UserEntityUISettingsBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

