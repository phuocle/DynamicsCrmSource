CREATE TABLE [dbo].[msdyn_upgradestepBase] (
    [msdyn_upgradestepId]       UNIQUEIDENTIFIER NOT NULL,
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
    [msdyn_Name]                NVARCHAR (200)   NULL,
    [msdyn_Details]             NVARCHAR (MAX)   NULL,
    [msdyn_Errors]              NVARCHAR (MAX)   NULL,
    [msdyn_FinishedDate]        DATETIME         NULL,
    [msdyn_Status]              INT              NULL,
    [msdyn_StepID]              UNIQUEIDENTIFIER NULL,
    [msdyn_dbversion]           INT              NULL,
    [msdyn_UpgradeVersion]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_upgradestepBase] PRIMARY KEY CLUSTERED ([msdyn_upgradestepId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion] FOREIGN KEY ([msdyn_UpgradeVersion]) REFERENCES [dbo].[msdyn_upgradeversionBase] ([msdyn_upgradeversionId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_upgradestepBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_upgradestepBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_upgradestepBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_Name]
    ON [dbo].[msdyn_upgradestepBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_msdyn_msdyn_upgradeversion_msdyn_upgradestep_UpgradeVersion]
    ON [dbo].[msdyn_upgradestepBase]([msdyn_UpgradeVersion] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1E8BC6A5487545EEA5C1943CEB05C68C]
    ON [dbo].[msdyn_upgradestepBase]([msdyn_upgradestepId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1E8BC6A5487545EEA5C1943CEB05C68C]
    ON [dbo].[msdyn_upgradestepBase]([msdyn_upgradestepId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

