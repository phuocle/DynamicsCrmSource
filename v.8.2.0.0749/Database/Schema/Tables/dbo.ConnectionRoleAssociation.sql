CREATE TABLE [dbo].[ConnectionRoleAssociation]
(
[AssociatedConnectionRoleId] [uniqueidentifier] NOT NULL,
[ConnectionRoleAssociationId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ConnectionRoleAssociation_ConnectionRoleAssociationId] DEFAULT (newid()),
[ConnectionRoleId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation] ADD CONSTRAINT [cndx_primarykey_connectionroleassociation] PRIMARY KEY CLUSTERED  ([ConnectionRoleAssociationId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_connection_roles] ON [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_unique_connection_role_associations] ON [dbo].[ConnectionRoleAssociation] ([ConnectionRoleId], [AssociatedConnectionRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionRoleAssociation] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation] ADD CONSTRAINT [associated_connection_roles] FOREIGN KEY ([AssociatedConnectionRoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation] ADD CONSTRAINT [connection_role_associations] FOREIGN KEY ([ConnectionRoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
