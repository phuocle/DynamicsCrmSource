CREATE TABLE [dbo].[ApplicationFileBase] (
    [FileId]             UNIQUEIDENTIFIER NOT NULL,
    [Name]               NVARCHAR (256)   NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [ModifiedOn]         DATETIME         NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [Body]               NVARCHAR (MAX)   NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [CreatedOn]          DATETIME         NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_ApplicationFile] PRIMARY KEY CLUSTERED ([FileId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[ApplicationFileBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[ApplicationFileBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ApplicationFileBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);

