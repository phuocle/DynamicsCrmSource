CREATE TABLE [dbo].[SiteMapBase] (
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [SiteMapXmlManaged]    NVARCHAR (MAX)   NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_SiteMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SiteMapId]            UNIQUEIDENTIFIER NOT NULL,
    [SiteMapIdUnique]      UNIQUEIDENTIFIER CONSTRAINT [DF_SiteMapBase_SiteMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [SiteMapName]          NVARCHAR (200)   NULL,
    [SiteMapNameUnique]    NVARCHAR (200)   NULL,
    [IsAppAware]           BIT              CONSTRAINT [DF_SiteMapBase_IsAppAware] DEFAULT ((0)) NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_SiteMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_SiteMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ComponentState]       INT              CONSTRAINT [DF_SiteMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SiteMapXml]           NVARCHAR (MAX)   NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_SiteMap] PRIMARY KEY CLUSTERED ([SiteMapId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SiteMapBase_SiteMapIdUnique] UNIQUE NONCLUSTERED ([SiteMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SiteMapBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SiteMapBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SiteMapBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SiteMapBase]([SiteMapId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

