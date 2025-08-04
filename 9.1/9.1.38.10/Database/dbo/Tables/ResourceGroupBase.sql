CREATE TABLE [dbo].[ResourceGroupBase] (
    [ResourceGroupId]           UNIQUEIDENTIFIER NOT NULL,
    [BusinessUnitId]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [GroupTypeCode]             INT              NULL,
    [ObjectTypeCode]            INT              NOT NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_ResourceGroup] PRIMARY KEY CLUSTERED ([ResourceGroupId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_resource_groups] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
);


GO
ALTER TABLE [dbo].[ResourceGroupBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ResourceGroupBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_Security]
    ON [dbo].[ResourceGroupBase]([BusinessUnitId] ASC) WHERE ([BusinessUnitId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DEF0A770DE8C44DB8F27868C30E1B736]
    ON [dbo].[ResourceGroupBase]([Name] ASC, [ResourceGroupId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DEF0A770DE8C44DB8F27868C30E1B736]
    ON [dbo].[ResourceGroupBase]([ResourceGroupId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DEF0A770DE8C44DB8F27868C30E1B736]
    ON [dbo].[ResourceGroupBase]([ResourceGroupId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[ResourceGroupBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

