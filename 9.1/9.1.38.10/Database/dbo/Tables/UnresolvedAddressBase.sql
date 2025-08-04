CREATE TABLE [dbo].[UnresolvedAddressBase] (
    [VersionNumber]       ROWVERSION       NULL,
    [Telephone]           NVARCHAR (50)    NULL,
    [FullName]            NVARCHAR (160)   NULL,
    [UnresolvedAddressId] UNIQUEIDENTIFIER NOT NULL,
    [EMailAddress]        NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_UnresolvedAddress] PRIMARY KEY CLUSTERED ([UnresolvedAddressId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[UnresolvedAddressBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UnresolvedAddressBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);

