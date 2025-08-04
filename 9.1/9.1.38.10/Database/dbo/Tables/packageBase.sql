CREATE TABLE [dbo].[packageBase] (
    [packageId]                  UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                  DATETIME         NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NULL,
    [statecode]                  INT              NOT NULL,
    [statuscode]                 INT              NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [ImportSequenceNumber]       INT              NULL,
    [OverriddenCreatedOn]        DATETIME         NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [PackageUniqueName]          NVARCHAR (100)   NULL,
    [AppId]                      UNIQUEIDENTIFIER NULL,
    [ApplicationName]            NVARCHAR (100)   NULL,
    [InstalledOn]                DATETIME         NULL,
    [PackageInstanceId]          UNIQUEIDENTIFIER NULL,
    [PackageInstanceOperationId] UNIQUEIDENTIFIER NULL,
    [PackageVersion]             NVARCHAR (100)   NULL,
    [PublisherId]                UNIQUEIDENTIFIER NULL,
    [PublisherName]              NVARCHAR (100)   NULL,
    [TPSPackageId]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_packageBase] PRIMARY KEY CLUSTERED ([packageId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[packageBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[packageBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[packageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_PackageUniqueName]
    ON [dbo].[packageBase]([PackageUniqueName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_0AD967B2A2524F13A0C9AE2B4AEFEE7E]
    ON [dbo].[packageBase]([packageId] ASC)
    INCLUDE([PackageUniqueName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_0AD967B2A2524F13A0C9AE2B4AEFEE7E]
    ON [dbo].[packageBase]([PackageUniqueName] ASC, [packageId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0AD967B2A2524F13A0C9AE2B4AEFEE7E]
    ON [dbo].[packageBase]([packageId] ASC)
    INCLUDE([PackageUniqueName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

