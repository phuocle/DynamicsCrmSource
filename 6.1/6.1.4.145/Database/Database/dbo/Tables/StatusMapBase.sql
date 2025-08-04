CREATE TABLE [dbo].[StatusMapBase] (
    [ObjectTypeCode] INT              NOT NULL,
    [OrganizationId] UNIQUEIDENTIFIER NOT NULL,
    [State]          INT              NOT NULL,
    [Status]         INT              NOT NULL,
    [IsDefault]      BIT              NULL,
    [StatusMapId]    UNIQUEIDENTIFIER CONSTRAINT [DF_StatusMap_StatusMapId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]  ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_StatusMap] PRIMARY KEY CLUSTERED ([StatusMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_StatusMap] UNIQUE NONCLUSTERED ([ObjectTypeCode] ASC, [State] ASC, [Status] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[StatusMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

