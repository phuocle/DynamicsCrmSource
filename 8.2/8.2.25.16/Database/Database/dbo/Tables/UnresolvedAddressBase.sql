CREATE TABLE [dbo].[UnresolvedAddressBase] (
    [UnresolvedAddressId] UNIQUEIDENTIFIER NOT NULL,
    [FullName]            NVARCHAR (160)   NULL,
    [Telephone]           NVARCHAR (50)    NULL,
    [EMailAddress]        NVARCHAR (100)   NULL,
    [VersionNumber]       ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_UnresolvedAddress] PRIMARY KEY CLUSTERED ([UnresolvedAddressId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[UnresolvedAddressBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

