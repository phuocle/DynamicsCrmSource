CREATE TABLE [dbo].[SiteBase] (
    [SiteId]                    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [EMailAddress]              NVARCHAR (100)   NULL,
    [TimeZoneCode]              INT              NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Site] PRIMARY KEY CLUSTERED ([SiteId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[SiteBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SiteBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9A60D280D59A4A309B25D82A48BD5DA7]
    ON [dbo].[SiteBase]([SiteId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9A60D280D59A4A309B25D82A48BD5DA7]
    ON [dbo].[SiteBase]([SiteId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9A60D280D59A4A309B25D82A48BD5DA7]
    ON [dbo].[SiteBase]([Name] ASC, [SiteId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SiteBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

