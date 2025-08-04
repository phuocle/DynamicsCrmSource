CREATE TABLE [dbo].[TimeZoneDefinitionBase] (
    [ModifiedOn]           DATETIME         NULL,
    [TimeZoneCode]         INT              NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [TimeZoneDefinitionId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [Bias]                 INT              NULL,
    [DaylightName]         NVARCHAR (100)   NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [UserInterfaceName]    NVARCHAR (100)   NOT NULL,
    [StandardName]         NVARCHAR (100)   NOT NULL,
    [RetiredOrder]         INT              CONSTRAINT [DF_TimeZoneDefinitionBase_RetiredOrder] DEFAULT ((0)) NOT NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_primarykey_timezonedefinition] PRIMARY KEY CLUSTERED ([TimeZoneDefinitionId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_UserInterfaceName]
    ON [dbo].[TimeZoneDefinitionBase]([UserInterfaceName] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[TimeZoneDefinitionBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_timezonecode_timezonedefinition]
    ON [dbo].[TimeZoneDefinitionBase]([TimeZoneCode] ASC, [RetiredOrder] ASC) WITH (FILLFACTOR = 80);

