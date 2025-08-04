CREATE TABLE [dbo].[IsvConfigBase] (
    [ConfigXML]          NVARCHAR (MAX)   NULL,
    [CreatedBy]          UNIQUEIDENTIFIER NULL,
    [OrganizationId]     UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]      ROWVERSION       NULL,
    [CreatedOn]          DATETIME         NULL,
    [IsvConfigId]        UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]         DATETIME         NULL,
    [ModifiedOnBehalfBy] UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]  UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_IsvConfigBase] PRIMARY KEY CLUSTERED ([IsvConfigId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[IsvConfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);

