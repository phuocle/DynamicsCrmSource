CREATE TABLE [dbo].[msdyn_msteamssettingsv2Base] (
    [msdyn_msteamssettingsv2Id] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [statecode]                 INT              NOT NULL,
    [statuscode]                INT              NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [msdyn_MSTeamsSettingsName] NVARCHAR (300)   NULL,
    [msdyn_TabServiceUrl]       NVARCHAR (300)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_msteamssettingsv2Base] PRIMARY KEY CLUSTERED ([msdyn_msteamssettingsv2Id] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_msteamssettingsv2Base]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_msteamssettingsv2Base]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_MSTeamsSettingsName]
    ON [dbo].[msdyn_msteamssettingsv2Base]([msdyn_MSTeamsSettingsName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_4A7C466620F04AEDBA6FF92E523E7CB7]
    ON [dbo].[msdyn_msteamssettingsv2Base]([msdyn_MSTeamsSettingsName] ASC, [msdyn_msteamssettingsv2Id] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_4A7C466620F04AEDBA6FF92E523E7CB7]
    ON [dbo].[msdyn_msteamssettingsv2Base]([msdyn_msteamssettingsv2Id] ASC)
    INCLUDE([msdyn_MSTeamsSettingsName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_4A7C466620F04AEDBA6FF92E523E7CB7]
    ON [dbo].[msdyn_msteamssettingsv2Base]([msdyn_msteamssettingsv2Id] ASC)
    INCLUDE([msdyn_MSTeamsSettingsName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

