CREATE TABLE [dbo].[PrivilegeObjectTypeCodes] (
    [VersionNumber]             ROWVERSION       NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [PrivilegeId]               UNIQUEIDENTIFIER NOT NULL,
    [PrivilegeObjectTypeCodeId] UNIQUEIDENTIFIER CONSTRAINT [DF_PrivilegeObjectTypeCodes_PrivilegeObjectTypeCodeId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_PrivilegeObjectTypeCodes] PRIMARY KEY CLUSTERED ([PrivilegeObjectTypeCodeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [FK_PrivilegeObjectTypeCodes] FOREIGN KEY ([PrivilegeId]) REFERENCES [dbo].[PrivilegeBase] ([PrivilegeId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrivilegeObjectTypeCodes]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_PrivilegeObjectTypeCodePrivilegeId]
    ON [dbo].[PrivilegeObjectTypeCodes]([ObjectTypeCode] ASC, [PrivilegeId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_FK_PrivilegeObjectTypeCodes]
    ON [dbo].[PrivilegeObjectTypeCodes]([PrivilegeId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[PrivilegeObjectTypeCodes]([ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);

