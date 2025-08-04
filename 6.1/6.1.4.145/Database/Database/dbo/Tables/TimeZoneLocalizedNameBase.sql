CREATE TABLE [dbo].[TimeZoneLocalizedNameBase] (
    [CultureId]               INT              NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [CreatedOn]               DATETIME         NULL,
    [TimeZoneDefinitionId]    UNIQUEIDENTIFIER NOT NULL,
    [StandardName]            NVARCHAR (100)   NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [TimeZoneLocalizedNameId] UNIQUEIDENTIFIER NOT NULL,
    [UserInterfaceName]       NVARCHAR (100)   NOT NULL,
    [DaylightName]            NVARCHAR (100)   NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_timezonelocalizedname] PRIMARY KEY CLUSTERED ([TimeZoneLocalizedNameId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_timezonelocalizedname_timezonedefinitionid] FOREIGN KEY ([TimeZoneDefinitionId]) REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_cultureid_timezonelocalizedname]
    ON [dbo].[TimeZoneLocalizedNameBase]([TimeZoneDefinitionId] ASC, [CultureId] ASC, [StandardName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TimeZoneLocalizedNameBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName]
    ON [dbo].[TimeZoneLocalizedNameBase]([UserInterfaceName] ASC) WITH (FILLFACTOR = 80);

