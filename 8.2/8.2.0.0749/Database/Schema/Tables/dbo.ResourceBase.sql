CREATE TABLE [dbo].[ResourceBase]
(
[DisplayInServiceViews] [bit] NULL,
[ObjectTypeCode] [int] NOT NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[CalendarId] [uniqueidentifier] NULL,
[IsDisabled] [bit] NULL,
[ResourceId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (160) COLLATE Latin1_General_CI_AI NULL,
[SiteId] [uniqueidentifier] NULL,
[EntityImageId] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceBase] ADD CONSTRAINT [cndx_PrimaryKey_Resource] PRIMARY KEY CLUSTERED  ([ResourceId], [ObjectTypeCode]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[ResourceBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[ResourceBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_SiteId] ON [dbo].[ResourceBase] ([SiteId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ResourceBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ResourceBase] ADD CONSTRAINT [business_unit_resources] FOREIGN KEY ([BusinessUnitId]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[ResourceBase] ADD CONSTRAINT [site_resources] FOREIGN KEY ([SiteId]) REFERENCES [dbo].[SiteBase] ([SiteId])
GO
