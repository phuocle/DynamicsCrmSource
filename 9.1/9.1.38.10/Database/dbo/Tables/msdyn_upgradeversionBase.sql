CREATE TABLE [dbo].[msdyn_upgradeversionBase] (
    [msdyn_upgradeversionId]    UNIQUEIDENTIFIER NOT NULL,
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
    [msdyn_summary]             NVARCHAR (4000)  NULL,
    [msdyn_Finished]            DATETIME         NULL,
    [msdyn_StartingVersion]     NVARCHAR (100)   NULL,
    [msdyn_Status]              INT              NULL,
    [msdyn_TargetVersion]       NVARCHAR (100)   NULL,
    [msdyn_UpgradeRun]          UNIQUEIDENTIFIER NULL,
    [msdyn_summary_QF_prefix]   AS               (CONVERT([nvarchar](850),substring([msdyn_summary],(1),(850)))),
    CONSTRAINT [PK_msdyn_upgradeversionBase] PRIMARY KEY CLUSTERED ([msdyn_upgradeversionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun] FOREIGN KEY ([msdyn_UpgradeRun]) REFERENCES [dbo].[msdyn_upgraderunBase] ([msdyn_upgraderunId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_upgradeversionBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_upgradeversionBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_upgradeversionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_msdyn_upgraderun_msdyn_upgradeversion_UpgradeRun]
    ON [dbo].[msdyn_upgradeversionBase]([msdyn_UpgradeRun] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_FBC026DC813F42F09AED03E81B4E87AA]
    ON [dbo].[msdyn_upgradeversionBase]([msdyn_upgradeversionId] ASC)
    INCLUDE([msdyn_summary]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_FBC026DC813F42F09AED03E81B4E87AA]
    ON [dbo].[msdyn_upgradeversionBase]([msdyn_upgradeversionId] ASC)
    INCLUDE([msdyn_summary], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_summary]
    ON [dbo].[msdyn_upgradeversionBase]([msdyn_summary_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

