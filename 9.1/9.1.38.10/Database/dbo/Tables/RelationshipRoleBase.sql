CREATE TABLE [dbo].[RelationshipRoleBase] (
    [StatusCode]           INT              NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [StateCode]            INT              NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [RelationshipRoleId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber] INT              NULL,
    [Description]          NVARCHAR (500)   NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    CONSTRAINT [cndx_PrimaryKey_RelationshipRole] PRIMARY KEY CLUSTERED ([RelationshipRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [AK1_RelationshipRoleBase] UNIQUE NONCLUSTERED ([Name] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RelationshipRoleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RelationshipRoleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[RelationshipRoleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_25AE00E441994470A680390C7D544D6F]
    ON [dbo].[RelationshipRoleBase]([RelationshipRoleId] ASC)
    INCLUDE([Name], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_25AE00E441994470A680390C7D544D6F]
    ON [dbo].[RelationshipRoleBase]([RelationshipRoleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_25AE00E441994470A680390C7D544D6F]
    ON [dbo].[RelationshipRoleBase]([Name] ASC, [RelationshipRoleId] ASC)
    INCLUDE([StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

