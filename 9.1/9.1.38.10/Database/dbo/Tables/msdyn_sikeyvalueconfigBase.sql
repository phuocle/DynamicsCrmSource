CREATE TABLE [dbo].[msdyn_sikeyvalueconfigBase] (
    [msdyn_sikeyvalueconfigId]  UNIQUEIDENTIFIER NOT NULL,
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
    [msdyn_ConfigKey]           NVARCHAR (300)   NULL,
    [msdyn_ConfigValue]         NVARCHAR (3000)  NULL,
    CONSTRAINT [PK_msdyn_sikeyvalueconfigBase] PRIMARY KEY CLUSTERED ([msdyn_sikeyvalueconfigId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_ConfigKey]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([msdyn_ConfigKey] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_CDE3F1410FB74D5E99E943A07400EB29]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([msdyn_ConfigKey] ASC, [msdyn_sikeyvalueconfigId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CDE3F1410FB74D5E99E943A07400EB29]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([msdyn_sikeyvalueconfigId] ASC)
    INCLUDE([msdyn_ConfigKey], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CDE3F1410FB74D5E99E943A07400EB29]
    ON [dbo].[msdyn_sikeyvalueconfigBase]([msdyn_sikeyvalueconfigId] ASC)
    INCLUDE([msdyn_ConfigKey]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

