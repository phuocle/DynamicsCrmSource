CREATE TABLE [dbo].[msdyn_helppageBase] (
    [msdyn_helppageId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                   DATETIME         NULL,
    [CreatedBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                  DATETIME         NULL,
    [ModifiedBy]                  UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [OrganizationId]              UNIQUEIDENTIFIER NULL,
    [statecode]                   INT              NOT NULL,
    [statuscode]                  INT              NULL,
    [VersionNumber]               ROWVERSION       NULL,
    [ImportSequenceNumber]        INT              NULL,
    [OverriddenCreatedOn]         DATETIME         NULL,
    [TimeZoneRuleVersionNumber]   INT              NULL,
    [UTCConversionTimeZoneCode]   INT              NULL,
    [msdyn_displayname]           NVARCHAR (1024)  NULL,
    [OverwriteTime]               DATETIME         CONSTRAINT [DF_msdyn_helppageBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                  UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_helppageBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]        UNIQUEIDENTIFIER NULL,
    [ComponentState]              INT              CONSTRAINT [DF_msdyn_helppageBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]           UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_helppageBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                   BIT              CONSTRAINT [DF_msdyn_helppageBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]              BIT              CONSTRAINT [DF_msdyn_helppageBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [msdyn_path]                  NVARCHAR (1024)  NULL,
    [msdyn_contenttype]           NVARCHAR (255)   NULL,
    [msdyn_content]               NVARCHAR (MAX)   NULL,
    [msdyn_locale]                INT              NULL,
    [msdyn_displayname_QF_prefix] AS               (CONVERT([nvarchar](850),substring([msdyn_displayname],(1),(850)))),
    CONSTRAINT [cndx_PrimaryKey_msdyn_helppage] PRIMARY KEY CLUSTERED ([msdyn_helppageId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_msdyn_helppageBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[msdyn_helppageBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[msdyn_helppageBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[msdyn_helppageBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[msdyn_helppageBase]([msdyn_helppageId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_09469D596B2149E4B2E5558E056A2CDB]
    ON [dbo].[msdyn_helppageBase]([msdyn_helppageId] ASC)
    INCLUDE([msdyn_displayname]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_09469D596B2149E4B2E5558E056A2CDB]
    ON [dbo].[msdyn_helppageBase]([msdyn_helppageId] ASC)
    INCLUDE([msdyn_displayname], [msdyn_path], [msdyn_locale], [CreatedOn], [CreatedBy], [ModifiedBy], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_displayname]
    ON [dbo].[msdyn_helppageBase]([msdyn_displayname_QF_prefix] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

