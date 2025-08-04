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
    [msdyn_EntityDisplayName]   NVARCHAR (100)   NULL,
    [msdyn_ConfigureWall]       BIT              NULL,
    [msdyn_EntityName]          NVARCHAR (100)   NULL,
    [msdyn_FollowingViewId]     NVARCHAR (100)   NULL,
    [msdyn_FollowingViewId2]    NVARCHAR (100)   NULL,
    [msdyn_Otc]                 INT              NULL,
    [msdyn_Status]              NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_msdyn_PostConfigBase] PRIMARY KEY CLUSTERED ([msdyn_PostConfigId] ASC) WITH (FILLFACTOR = 80)
);


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

