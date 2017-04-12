CREATE TABLE [dbo].[ConnectionRoleObjectTypeCodeBase]
(
[VersionNumber] [timestamp] NULL,
[AssociatedObjectTypeCode] [int] NOT NULL,
[ConnectionRoleId] [uniqueidentifier] NOT NULL,
[ConnectionRoleObjectTypeCodeId] [uniqueidentifier] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleObjectTypeCodeBase] ADD CONSTRAINT [cndx_primarykey_connectionroleobjecttypecode] PRIMARY KEY CLUSTERED  ([ConnectionRoleObjectTypeCodeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_asscociated_object_type_code] ON [dbo].[ConnectionRoleObjectTypeCodeBase] ([AssociatedObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_connection_role_connection_role_object_type_code] ON [dbo].[ConnectionRoleObjectTypeCodeBase] ([ConnectionRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_Unique_connectionroleobjecttypecode] ON [dbo].[ConnectionRoleObjectTypeCodeBase] ([ConnectionRoleId], [AssociatedObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionRoleObjectTypeCodeBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleObjectTypeCodeBase] ADD CONSTRAINT [connection_role_connection_role_object_type_codes] FOREIGN KEY ([ConnectionRoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
