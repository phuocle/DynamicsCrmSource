CREATE TABLE [dbo].[OwnerBase]
(
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_OwnerBase_OwnerIdType] DEFAULT ((8)),
[OwnerId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[YomiName] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[OwnerBase] ADD CONSTRAINT [cndx_PrimaryKey_Owner] PRIMARY KEY CLUSTERED  ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[OwnerBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[OwnerBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
