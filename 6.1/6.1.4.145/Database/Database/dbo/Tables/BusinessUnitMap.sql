CREATE TABLE [dbo].[BusinessUnitMap] (
    [BusinessUnitMapId] UNIQUEIDENTIFIER CONSTRAINT [DF_BusinessUnitMap_BusinessUnitMapId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]     ROWVERSION       NULL,
    [SubBusinessId]     UNIQUEIDENTIFIER NOT NULL,
    [BusinessId]        UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [ndx_PrimaryKey_BusinessUnitMap] PRIMARY KEY NONCLUSTERED ([BusinessUnitMapId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [bizmap_businessid_businessunit] FOREIGN KEY ([BusinessId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [bizmap_subbusinessid_businessunit] FOREIGN KEY ([SubBusinessId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE CLUSTERED INDEX [cndx_Cover]
    ON [dbo].[BusinessUnitMap]([BusinessId] ASC, [SubBusinessId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[BusinessUnitMap]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_map_constraint]
    ON [dbo].[BusinessUnitMap]([SubBusinessId] ASC) WITH (FILLFACTOR = 80);

