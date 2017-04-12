CREATE TABLE [dbo].[StringMapBase]
(
[ObjectTypeCode] [int] NOT NULL,
[AttributeName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[AttributeValue] [int] NOT NULL,
[LangId] [int] NOT NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Value] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[DisplayOrder] [int] NULL,
[VersionNumber] [timestamp] NULL,
[StringMapId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_StringMap_StringMapId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[StringMapBase] ADD CONSTRAINT [cndx_PrimaryKey_StringMap] PRIMARY KEY CLUSTERED  ([StringMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_StringMap_FilteredViews] ON [dbo].[StringMapBase] ([LangId], [ObjectTypeCode], [AttributeName], [AttributeValue]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[StringMapBase] ADD CONSTRAINT [UQ_StringMap] UNIQUE NONCLUSTERED  ([ObjectTypeCode], [AttributeName], [AttributeValue], [LangId], [OrganizationId]) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[StringMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
