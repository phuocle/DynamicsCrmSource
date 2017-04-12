CREATE TABLE [dbo].[PrivilegeObjectTypeCodes]
(
[VersionNumber] [timestamp] NULL,
[ObjectTypeCode] [int] NOT NULL,
[PrivilegeId] [uniqueidentifier] NOT NULL,
[PrivilegeObjectTypeCodeId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrivilegeObjectTypeCodes_PrivilegeObjectTypeCodeId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrivilegeObjectTypeCodes] ADD CONSTRAINT [cndx_PrimaryKey_PrivilegeObjectTypeCodes] PRIMARY KEY CLUSTERED  ([PrivilegeObjectTypeCodeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[PrivilegeObjectTypeCodes] ([ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_PrivilegeObjectTypeCodePrivilegeId] ON [dbo].[PrivilegeObjectTypeCodes] ([ObjectTypeCode], [PrivilegeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_FK_PrivilegeObjectTypeCodes] ON [dbo].[PrivilegeObjectTypeCodes] ([PrivilegeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrivilegeObjectTypeCodes] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrivilegeObjectTypeCodes] ADD CONSTRAINT [FK_PrivilegeObjectTypeCodes] FOREIGN KEY ([PrivilegeId]) REFERENCES [dbo].[PrivilegeBase] ([PrivilegeId])
GO
