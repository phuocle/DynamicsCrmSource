CREATE TABLE [dbo].[msdyn_databaseversionBase] (
    [msdyn_databaseversionId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_solutionname]        NVARCHAR (200)   NULL,
    [msdyn_dbversion]           INT              NULL,
    CONSTRAINT [PK_msdyn_databaseversionBase] PRIMARY KEY CLUSTERED ([msdyn_databaseversionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_databaseversionBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_databaseversionBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_databaseversionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_solutionname]
    ON [dbo].[msdyn_databaseversionBase]([msdyn_solutionname] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_B75D161FCBD44C82B991FB41F802E96E]
    ON [dbo].[msdyn_databaseversionBase]([msdyn_databaseversionId] ASC)
    INCLUDE([msdyn_solutionname]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_B75D161FCBD44C82B991FB41F802E96E]
    ON [dbo].[msdyn_databaseversionBase]([msdyn_solutionname] ASC, [msdyn_databaseversionId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B75D161FCBD44C82B991FB41F802E96E]
    ON [dbo].[msdyn_databaseversionBase]([msdyn_databaseversionId] ASC)
    INCLUDE([msdyn_solutionname], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

