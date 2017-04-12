CREATE TABLE [dbo].[SiteMapBase]
(
[VersionNumber] [timestamp] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SiteMapBase_OverwriteTime] DEFAULT ((0)),
[SiteMapXmlManaged] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SiteMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SiteMapIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SiteMapBase_SiteMapIdUnique] DEFAULT (newid()),
[SiteMapXml] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SiteMapBase_IsManaged] DEFAULT ((0)),
[SiteMapId] [uniqueidentifier] NOT NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SiteMapBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[SiteMapName] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[SiteMapNameUnique] [nvarchar] (200) COLLATE Latin1_General_CI_AI NULL,
[IsAppAware] [bit] NOT NULL CONSTRAINT [DF_SiteMapBase_IsAppAware] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SiteMapBase] ADD CONSTRAINT [cndx_PrimaryKey_SiteMap] PRIMARY KEY CLUSTERED  ([SiteMapId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SiteMapBase] ADD CONSTRAINT [UQ_SiteMapBase_SiteMapIdUnique] UNIQUE NONCLUSTERED  ([SiteMapIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SiteMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
