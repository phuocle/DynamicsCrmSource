CREATE TABLE [dbo].[ResourceBase] (
    [DisplayInServiceViews] BIT              NULL,
    [ObjectTypeCode]        INT              NOT NULL,
    [BusinessUnitId]        UNIQUEIDENTIFIER NOT NULL,
    [CalendarId]            UNIQUEIDENTIFIER NULL,
    [IsDisabled]            BIT              NULL,
    [ResourceId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [OrganizationId]        UNIQUEIDENTIFIER NOT NULL,
    [Name]                  NVARCHAR (160)   NULL,
    [SiteId]                UNIQUEIDENTIFIER NULL,
    [EntityImageId]         UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Resource] PRIMARY KEY CLUSTERED ([ResourceId] ASC, [ObjectTypeCode] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_resources] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [site_resources] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ResourceBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ResourceBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SiteId]
    ON [dbo].[ResourceBase]([SiteId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ResourceBase]([Name] ASC) WITH (FILLFACTOR = 80);

