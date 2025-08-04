CREATE TABLE [dbo].[ResourceGroupBase] (
    [Name]            NVARCHAR (160)   NULL,
    [ObjectTypeCode]  INT              NOT NULL,
    [ResourceGroupId] UNIQUEIDENTIFIER NOT NULL,
    [GroupTypeCode]   INT              NULL,
    [BusinessUnitId]  UNIQUEIDENTIFIER NULL,
    [VersionNumber]   ROWVERSION       NULL,
    [OrganizationId]  UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ResourceGroup] PRIMARY KEY CLUSTERED ([ResourceGroupId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_resource_groups] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [fndx_Security]
    ON [dbo].[ResourceGroupBase]([BusinessUnitId] ASC) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ResourceGroupBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ResourceGroupBase]([Name] ASC) WITH (FILLFACTOR = 80);

