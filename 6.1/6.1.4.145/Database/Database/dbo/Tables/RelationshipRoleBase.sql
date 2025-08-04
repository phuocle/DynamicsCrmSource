CREATE TABLE [dbo].[RelationshipRoleBase] (
    [Description]          NVARCHAR (500)   NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [StatusCode]           INT              NULL,
    [RelationshipRoleId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [StateCode]            INT              NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_RelationshipRole] PRIMARY KEY CLUSTERED ([RelationshipRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [AK1_RelationshipRoleBase] UNIQUE NONCLUSTERED ([Name] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[RelationshipRoleBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RelationshipRoleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

