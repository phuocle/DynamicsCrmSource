CREATE TABLE [dbo].[PrincipalObjectAttributeAccessBase]
(
[ObjectId] [uniqueidentifier] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[PrincipalId] [uniqueidentifier] NOT NULL,
[AttributeId] [uniqueidentifier] NOT NULL,
[ReadAccess] [bit] NOT NULL CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_ReadAccess] DEFAULT ((0)),
[PrincipalObjectAttributeAccessId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_PrincipalObjectAttributeAccessId] DEFAULT (newid()),
[UpdateAccess] [bit] NOT NULL CONSTRAINT [DF_PrincipalObjectAttributeAccessBase_UpdateAccess] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[PrincipalIdType] [int] NOT NULL,
[ObjectTypeCode] [int] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PrincipalObjectAttributeAccessBase] ADD CONSTRAINT [ndx_PrimaryKey_PrincipalObjectAttributeAccess] PRIMARY KEY NONCLUSTERED  ([PrincipalObjectAttributeAccessId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_SecuredEntity_PrincipalObjectAttributeAccess] ON [dbo].[PrincipalObjectAttributeAccessBase] ([ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Security] ON [dbo].[PrincipalObjectAttributeAccessBase] ([PrincipalId], [AttributeId], [ObjectId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_team_principalobjectattributeaccess_principalid] ON [dbo].[PrincipalObjectAttributeAccessBase] ([PrincipalId], [PrincipalIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[PrincipalObjectAttributeAccessBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
