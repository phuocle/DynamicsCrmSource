CREATE TABLE [dbo].[PrincipalObjectAccess]
(
[PrincipalId] [uniqueidentifier] NOT NULL,
[ObjectId] [uniqueidentifier] NOT NULL,
[ObjectTypeCode] [int] NOT NULL,
[PrincipalTypeCode] [int] NULL,
[AccessRightsMask] [int] NULL,
[ChangedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[InheritedAccessRightsMask] [int] NOT NULL CONSTRAINT [DF_PrincipalObjectAccess_InheritedAccessRightsMask] DEFAULT ((0)),
[PrincipalObjectAccessId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalObjectAccess_PrincipalObjectAccessId] DEFAULT (newid()),
[UTCConversionTimeZoneCode] [int] NULL,
[TimeZoneRuleVersionNumber] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalObjectAccess] ADD CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAccess] PRIMARY KEY NONCLUSTERED  ([PrincipalObjectAccessId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE CLUSTERED INDEX [cndx_PrincipalObjectAccess] ON [dbo].[PrincipalObjectAccess] ([ObjectId], [PrincipalId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Cover] ON [dbo].[PrincipalObjectAccess] ([ObjectTypeCode], [PrincipalId], [ObjectId], [AccessRightsMask], [InheritedAccessRightsMask]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalObjectAccess] ADD CONSTRAINT [UQ_PrincipalObjectAccess] UNIQUE NONCLUSTERED  ([PrincipalId], [ObjectId], [ObjectTypeCode]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalObjectAccess] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
