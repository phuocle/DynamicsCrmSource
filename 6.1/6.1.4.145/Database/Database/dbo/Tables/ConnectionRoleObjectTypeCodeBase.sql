CREATE TABLE [dbo].[ConnectionRoleObjectTypeCodeBase] (
    [VersionNumber]                  ROWVERSION       NULL,
    [AssociatedObjectTypeCode]       INT              NOT NULL,
    [ConnectionRoleId]               UNIQUEIDENTIFIER NOT NULL,
    [ConnectionRoleObjectTypeCodeId] UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_primarykey_connectionroleobjecttypecode] PRIMARY KEY CLUSTERED ([ConnectionRoleObjectTypeCodeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [connection_role_connection_role_object_type_codes] FOREIGN KEY ([ConnectionRoleId]) REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_Unique_connectionroleobjecttypecode]
    ON [dbo].[ConnectionRoleObjectTypeCodeBase]([ConnectionRoleId] ASC, [AssociatedObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_connection_role_connection_role_object_type_code]
    ON [dbo].[ConnectionRoleObjectTypeCodeBase]([ConnectionRoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_asscociated_object_type_code]
    ON [dbo].[ConnectionRoleObjectTypeCodeBase]([AssociatedObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ConnectionRoleObjectTypeCodeBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

