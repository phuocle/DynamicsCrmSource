CREATE TABLE [dbo].[RelationshipRoleMapBase] (
    [ModifiedOn]              DATETIME         NULL,
    [CreatedOn]               DATETIME         NULL,
    [RelationshipRoleMapId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [AssociateObjectTypeCode] INT              NOT NULL,
    [RelationshipRoleId]      UNIQUEIDENTIFIER NOT NULL,
    [PrimaryObjectTypeCode]   INT              NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_RelationshipRoleMap] PRIMARY KEY CLUSTERED ([RelationshipRoleMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [relationship_role_relationship_role_map] FOREIGN KEY ([RelationshipRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId]) NOT FOR REPLICATION,
    CONSTRAINT [AK1_RelationshipRoleMapBase] UNIQUE NONCLUSTERED ([RelationshipRoleId] ASC, [PrimaryObjectTypeCode] ASC, [AssociateObjectTypeCode] ASC)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RelationshipRoleMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_relationship_role_relationship_role_map]
    ON [dbo].[RelationshipRoleMapBase]([RelationshipRoleId] ASC) WITH (FILLFACTOR = 80);

