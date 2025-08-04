CREATE TABLE [dbo].[msdyn_TeamsCollaborationBase] (
    [msdyn_TeamsCollaborationId]     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                      DATETIME         NULL,
    [CreatedBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                     DATETIME         NULL,
    [ModifiedBy]                     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]             UNIQUEIDENTIFIER NULL,
    [statecode]                      INT              NOT NULL,
    [statuscode]                     INT              NULL,
    [VersionNumber]                  ROWVERSION       NULL,
    [ImportSequenceNumber]           INT              NULL,
    [OverriddenCreatedOn]            DATETIME         NULL,
    [TimeZoneRuleVersionNumber]      INT              NULL,
    [UTCConversionTimeZoneCode]      INT              NULL,
    [msdyn_TeamName]                 NVARCHAR (300)   NULL,
    [msdyn_GroupId]                  UNIQUEIDENTIFIER NULL,
    [msdyn_TenantId]                 UNIQUEIDENTIFIER NULL,
    [msdyn_TeamId]                   NVARCHAR (100)   NULL,
    [msdyn_ChannelName]              NVARCHAR (300)   NULL,
    [msdyn_ChannelId]                NVARCHAR (100)   NULL,
    [msdyn_WebUrl]                   NVARCHAR (600)   NULL,
    [msdyn_AppId]                    NVARCHAR (50)    NULL,
    [msdyn_pipedEntityId]            NVARCHAR (200)   NULL,
    [msdyn_ContentUrl]               NVARCHAR (600)   NULL,
    [RegardingObjectId]              UNIQUEIDENTIFIER NULL,
    [RegardingObjectTypeCode]        INT              NULL,
    [RegardingObjectTypeName]        NVARCHAR (200)   NULL,
    [OrganizationId]                 UNIQUEIDENTIFIER NULL,
    [msdyn_TeamSiteUrl]              NVARCHAR (300)   NULL,
    [msdyn_ChannelFolderRelativeUrl] NVARCHAR (300)   NULL,
    [msdyn_channelType]              NVARCHAR (10)    NULL,
    CONSTRAINT [PK_msdyn_TeamsCollaborationBase] PRIMARY KEY CLUSTERED ([msdyn_TeamsCollaborationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_TeamsCollaborationBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_TeamsCollaborationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_msdyn_TeamName]
    ON [dbo].[msdyn_TeamsCollaborationBase]([msdyn_TeamName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

