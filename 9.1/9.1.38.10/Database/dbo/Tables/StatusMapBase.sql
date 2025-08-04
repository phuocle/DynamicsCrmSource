CREATE TABLE [dbo].[StatusMapBase] (
    [State]          INT              NOT NULL,
    [VersionNumber]  ROWVERSION       NULL,
    [StatusMapId]    UNIQUEIDENTIFIER CONSTRAINT [DF_StatusMapBase_StatusMapId] DEFAULT (newid()) NOT NULL,
    [ObjectTypeCode] INT              NOT NULL,
    [OrganizationId] UNIQUEIDENTIFIER NOT NULL,
    [Status]         INT              NOT NULL,
    [IsDefault]      BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_StatusMap] PRIMARY KEY CLUSTERED ([StatusMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_StatusMap] UNIQUE NONCLUSTERED ([ObjectTypeCode] ASC, [State] ASC, [Status] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[StatusMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[StatusMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);

