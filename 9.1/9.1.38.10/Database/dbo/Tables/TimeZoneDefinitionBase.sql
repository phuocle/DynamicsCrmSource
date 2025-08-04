CREATE TABLE [dbo].[TimeZoneDefinitionBase] (
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [RetiredOrder]         INT              CONSTRAINT [DF_TimeZoneDefinitionBase_RetiredOrder] DEFAULT ((0)) NOT NULL,
    [UserInterfaceName]    NVARCHAR (100)   NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [TimeZoneCode]         INT              NOT NULL,
    [TimeZoneDefinitionId] UNIQUEIDENTIFIER NOT NULL,
    [DaylightName]         NVARCHAR (100)   NULL,
    [Bias]                 INT              NULL,
    [CreatedOn]            DATETIME         NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [StandardName]         NVARCHAR (100)   NOT NULL,
    CONSTRAINT [cndx_primarykey_timezonedefinition] PRIMARY KEY CLUSTERED ([TimeZoneDefinitionId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[TimeZoneDefinitionBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_timezonecode_timezonedefinition]
    ON [dbo].[TimeZoneDefinitionBase]([TimeZoneCode] ASC, [RetiredOrder] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TimeZoneDefinitionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName]
    ON [dbo].[TimeZoneDefinitionBase]([UserInterfaceName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_5C30E7BBAC3C4C56A04417AE8D8A9651]
    ON [dbo].[TimeZoneDefinitionBase]([TimeZoneDefinitionId] ASC)
    INCLUDE([UserInterfaceName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_5C30E7BBAC3C4C56A04417AE8D8A9651]
    ON [dbo].[TimeZoneDefinitionBase]([TimeZoneDefinitionId] ASC)
    INCLUDE([UserInterfaceName], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

