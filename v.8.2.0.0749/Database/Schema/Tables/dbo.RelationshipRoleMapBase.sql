CREATE TABLE [dbo].[RelationshipRoleMapBase]
(
[ModifiedOn] [datetime] NULL,
[CreatedOn] [datetime] NULL,
[RelationshipRoleMapId] [uniqueidentifier] NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[AssociateObjectTypeCode] [int] NOT NULL,
[RelationshipRoleId] [uniqueidentifier] NOT NULL,
[PrimaryObjectTypeCode] [int] NOT NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipRoleMapBase] ADD CONSTRAINT [cndx_PrimaryKey_RelationshipRoleMap] PRIMARY KEY CLUSTERED  ([RelationshipRoleMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_relationship_role_relationship_role_map] ON [dbo].[RelationshipRoleMapBase] ([RelationshipRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipRoleMapBase] ADD CONSTRAINT [AK1_RelationshipRoleMapBase] UNIQUE NONCLUSTERED  ([RelationshipRoleId], [PrimaryObjectTypeCode], [AssociateObjectTypeCode]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RelationshipRoleMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipRoleMapBase] ADD CONSTRAINT [relationship_role_relationship_role_map] FOREIGN KEY ([RelationshipRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
