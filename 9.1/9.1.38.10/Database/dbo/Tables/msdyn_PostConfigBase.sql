CREATE TABLE [dbo].[msdyn_PostConfigBase] (
    [msdyn_PostConfigId]        UNIQUEIDENTIFIER NOT NULL,
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
    [msdyn_EntityDisplayName]   NVARCHAR (128)   NULL,
    [msdyn_ConfigureWall]       BIT              NULL,
    [msdyn_EntityName]          NVARCHAR (128)   NULL,
    [msdyn_FollowingViewId]     NVARCHAR (100)   NULL,
    [msdyn_FollowingViewId2]    NVARCHAR (100)   NULL,
    [msdyn_Otc]                 INT              NULL,
    [msdyn_Status]              NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_msdyn_PostConfigBase] PRIMARY KEY CLUSTERED ([msdyn_PostConfigId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[msdyn_PostConfigBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[msdyn_PostConfigBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_PostConfigBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_PostConfigBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_PostConfigBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_EntityDisplayName]
    ON [dbo].[msdyn_PostConfigBase]([msdyn_EntityDisplayName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7485BF5F9F1045F5B519CF9932FA8887]
    ON [dbo].[msdyn_PostConfigBase]([msdyn_EntityDisplayName] ASC, [msdyn_PostConfigId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7485BF5F9F1045F5B519CF9932FA8887]
    ON [dbo].[msdyn_PostConfigBase]([msdyn_PostConfigId] ASC)
    INCLUDE([msdyn_EntityDisplayName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7485BF5F9F1045F5B519CF9932FA8887]
    ON [dbo].[msdyn_PostConfigBase]([msdyn_PostConfigId] ASC)
    INCLUDE([msdyn_EntityDisplayName], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

