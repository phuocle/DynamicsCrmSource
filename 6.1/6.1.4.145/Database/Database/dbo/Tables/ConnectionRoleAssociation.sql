CREATE TABLE [dbo].[ConnectionRoleAssociation] (
    [AssociatedConnectionRoleId]  UNIQUEIDENTIFIER NOT NULL,
    [ConnectionRoleAssociationId] UNIQUEIDENTIFIER CONSTRAINT [DF_ConnectionRoleAssociation_ConnectionRoleAssociationId] DEFAULT (newid()) NOT NULL,
    [ConnectionRoleId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]               ROWVERSION       NULL,
    CONSTRAINT [cndx_primarykey_connectionroleassociation] PRIMARY KEY CLUSTERED ([ConnectionRoleAssociationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [associated_connection_roles] FOREIGN KEY ([AssociatedConnectionRoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]) NOT FOR REPLICATION,
    CONSTRAINT [connection_role_associations] FOREIGN KEY ([ConnectionRoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConnectionRoleAssociation]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_unique_connection_role_associations]
    ON [dbo].[ConnectionRoleAssociation]([ConnectionRoleId] ASC, [AssociatedConnectionRoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_connection_roles]
    ON [dbo].[ConnectionRoleAssociation]([AssociatedConnectionRoleId] ASC) WITH (FILLFACTOR = 80);

