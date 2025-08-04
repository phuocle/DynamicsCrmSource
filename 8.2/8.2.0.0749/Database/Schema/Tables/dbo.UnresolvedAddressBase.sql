CREATE TABLE [dbo].[UnresolvedAddressBase]
(
[UnresolvedAddressId] [uniqueidentifier] NOT NULL,
[FullName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[Telephone] [nvarchar] (50) COLLATE Latin1_General_CI_AI NULL,
[EMailAddress] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UnresolvedAddressBase] ADD CONSTRAINT [cndx_PrimaryKey_UnresolvedAddress] PRIMARY KEY CLUSTERED  ([UnresolvedAddressId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[UnresolvedAddressBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
