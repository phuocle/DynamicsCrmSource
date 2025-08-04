CREATE TABLE [dbo].[RelationshipRoleMapBase] (
    [ModifiedOn]              DATETIME         NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [CreatedOn]               DATETIME         NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [AssociateObjectTypeCode] INT              NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [PrimaryObjectTypeCode]   INT              NOT NULL,
    [RelationshipRoleMapId]   UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [RelationshipRoleId]      UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RelationshipRoleMap] PRIMARY KEY CLUSTERED ([RelationshipRoleMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [relationship_role_relationship_role_map] FOREIGN KEY ([RelationshipRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId]),
    CONSTRAINT [AK1_RelationshipRoleMapBase] UNIQUE NONCLUSTERED ([RelationshipRoleId] ASC, [PrimaryObjectTypeCode] ASC, [AssociateObjectTypeCode] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RelationshipRoleMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RelationshipRoleMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_relationship_role_relationship_role_map]
    ON [dbo].[RelationshipRoleMapBase]([RelationshipRoleId] ASC) WITH (FILLFACTOR = 80);

