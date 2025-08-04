CREATE TABLE [dbo].[MultiEntitySearchBase] (
    [ModifiedOn]          DATETIME         NULL,
    [Name]                NVARCHAR (100)   NULL,
    [VersionNumber]       ROWVERSION       NULL,
    [ModifiedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [MultiEntitySearchId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]           UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ModifiedBy]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]           DATETIME         NULL,
    CONSTRAINT [PK_MultiEntitySearchBase] PRIMARY KEY CLUSTERED ([MultiEntitySearchId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[MultiEntitySearchBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[MultiEntitySearchBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_MultiEntitySearchBase_Name]
    ON [dbo].[MultiEntitySearchBase]([Name] ASC) WITH (FILLFACTOR = 80);

