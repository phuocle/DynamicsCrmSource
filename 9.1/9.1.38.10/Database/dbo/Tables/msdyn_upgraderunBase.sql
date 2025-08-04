CREATE TABLE [dbo].[msdyn_upgraderunBase] (
    [msdyn_upgraderunId]        UNIQUEIDENTIFIER NOT NULL,
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
    [msdyn_Summary]             NVARCHAR (4000)  NULL,
    [msdyn_FinishedDate]        DATETIME         NULL,
    [msdyn_Package]             NVARCHAR (200)   NULL,
    [msdyn_Solution]            NVARCHAR (200)   NULL,
    [msdyn_StartingVersion]     NVARCHAR (100)   NULL,
    [msdyn_Status]              INT              NULL,
    [msdyn_TargetVersion]       NVARCHAR (100)   NULL,
    [msdyn_Error]               NVARCHAR (MAX)   NULL,
    [msdyn_Summary_QF_prefix]   AS               (CONVERT([nvarchar](850),substring([msdyn_Summary],(1),(850)))),
    CONSTRAINT [PK_msdyn_upgraderunBase] PRIMARY KEY CLUSTERED ([msdyn_upgraderunId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_upgraderunBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_upgraderunBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_upgraderunBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_E5E9097C1C824ED49B6F7C98046E62AC]
    ON [dbo].[msdyn_upgraderunBase]([msdyn_upgraderunId] ASC)
    INCLUDE([msdyn_Summary]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_E5E9097C1C824ED49B6F7C98046E62AC]
    ON [dbo].[msdyn_upgraderunBase]([msdyn_upgraderunId] ASC)
    INCLUDE([msdyn_Summary], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_Summary]
    ON [dbo].[msdyn_upgraderunBase]([msdyn_Summary_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

