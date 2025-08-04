CREATE TABLE [dbo].[ApplicationFileBase] (
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [Body]               NVARCHAR (MAX)   NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedOn]          DATETIME         NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [FileId]             UNIQUEIDENTIFIER NOT NULL,
    [Name]               NVARCHAR (256)   NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ApplicationFile] PRIMARY KEY CLUSTERED ([FileId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ApplicationFileBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

