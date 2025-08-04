CREATE TABLE [dbo].[MultiEntitySearchBase] (
    [ModifiedOn]          DATETIME         NULL,
    [Name]                NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    [MultiEntitySearchId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]           UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]          UNIQUEIDENTIFIER NULL,
    [CreatedOn]           DATETIME         NULL,
    [VersionNumber]       ROWVERSION       NULL,
    CONSTRAINT [PK_MultiEntitySearchBase] PRIMARY KEY CLUSTERED ([MultiEntitySearchId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_MultiEntitySearchBase_Name]
    ON [dbo].[MultiEntitySearchBase]([Name] ASC) WITH (FILLFACTOR = 80);

