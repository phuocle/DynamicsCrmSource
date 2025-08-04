CREATE TABLE [dbo].[OwnerBase] (
    [OwnerIdType]   INT              CONSTRAINT [DF_OwnerBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwnerId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]          NVARCHAR (160)   NULL,
    [VersionNumber] ROWVERSION       NULL,
    [YomiName]      NVARCHAR (160)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Owner] PRIMARY KEY CLUSTERED ([OwnerId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[OwnerBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[OwnerBase]([Name] ASC) WITH (FILLFACTOR = 80);

