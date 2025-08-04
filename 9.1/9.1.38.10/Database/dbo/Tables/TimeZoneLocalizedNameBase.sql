CREATE TABLE [dbo].[TimeZoneLocalizedNameBase] (
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [CultureId]               INT              NOT NULL,
    [TimeZoneDefinitionId]    UNIQUEIDENTIFIER NOT NULL,
    [ModifiedOn]              DATETIME         NULL,
    [DaylightName]            NVARCHAR (100)   NULL,
    [StandardName]            NVARCHAR (100)   NOT NULL,
    [CreatedOn]               DATETIME         NULL,
    [UserInterfaceName]       NVARCHAR (100)   NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [TimeZoneLocalizedNameId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [OrganizationId]          UNIQUEIDENTIFIER NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_timezonelocalizedname] PRIMARY KEY CLUSTERED ([TimeZoneLocalizedNameId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [lk_timezonelocalizedname_timezonedefinitionid] FOREIGN KEY ([TimeZoneDefinitionId]) REFERENCES [dbo].[TimeZoneDefinitionBase] ([TimeZoneDefinitionId])
);


GO
ALTER TABLE [dbo].[TimeZoneLocalizedNameBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_cultureid_timezonelocalizedname]
    ON [dbo].[TimeZoneLocalizedNameBase]([TimeZoneDefinitionId] ASC, [CultureId] ASC, [StandardName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TimeZoneLocalizedNameBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName]
    ON [dbo].[TimeZoneLocalizedNameBase]([UserInterfaceName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_BC841632630B46F9B5034669F7BB265F]
    ON [dbo].[TimeZoneLocalizedNameBase]([TimeZoneLocalizedNameId] ASC)
    INCLUDE([UserInterfaceName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_BC841632630B46F9B5034669F7BB265F]
    ON [dbo].[TimeZoneLocalizedNameBase]([TimeZoneLocalizedNameId] ASC)
    INCLUDE([UserInterfaceName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

