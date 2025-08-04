CREATE TABLE [dbo].[SiteMapBase] (
    [VersionNumber]        ROWVERSION       NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_SiteMapBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SiteMapXmlManaged]    NVARCHAR (MAX)   NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_SiteMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SiteMapIdUnique]      UNIQUEIDENTIFIER CONSTRAINT [DF_SiteMapBase_SiteMapIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SiteMapXml]           NVARCHAR (MAX)   NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_SiteMapBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SiteMapId]            UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_SiteMapBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_SiteMap] PRIMARY KEY CLUSTERED ([SiteMapId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_SiteMapBase_SiteMapIdUnique] UNIQUE NONCLUSTERED ([SiteMapIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SiteMapBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);

