CREATE TABLE [dbo].[ResourceBase] (
    [ResourceId]                UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [CalendarId]                UNIQUEIDENTIFIER NULL,
    [DisplayInServiceViews]     BIT              NULL,
    [IsDisabled]                BIT              NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [SiteId]                    UNIQUEIDENTIFIER NULL,
    [EntityImageId]             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Resource] PRIMARY KEY CLUSTERED ([ResourceId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_resources] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [site_resources] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId])
);


GO
ALTER TABLE [dbo].[ResourceBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ResourceBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[ResourceBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DE79B82F62DF4FB58946E98CBF1E34C9]
    ON [dbo].[ResourceBase]([Name] ASC, [ResourceId] ASC)
    INCLUDE([SiteId], [BusinessUnitId], [ObjectTypeCode], [IsDisabled], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DE79B82F62DF4FB58946E98CBF1E34C9]
    ON [dbo].[ResourceBase]([ResourceId] ASC)
    INCLUDE([Name], [SiteId], [BusinessUnitId], [ObjectTypeCode], [IsDisabled], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SiteId]
    ON [dbo].[ResourceBase]([SiteId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ResourceBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DE79B82F62DF4FB58946E98CBF1E34C9]
    ON [dbo].[ResourceBase]([ResourceId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

