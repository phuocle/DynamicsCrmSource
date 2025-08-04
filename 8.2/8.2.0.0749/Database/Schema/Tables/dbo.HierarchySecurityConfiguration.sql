CREATE TABLE [dbo].[HierarchySecurityConfiguration]
(
[VersionNumber] [timestamp] NULL,
[EntityName] [nvarchar] (64) COLLATE Latin1_General_CI_AI NULL,
[ObjectTypeCode] [int] NOT NULL,
[HierarchySecurityModelingSettingId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_HierarchySecurityConfiguration_HierarchySecurityModelingSettingId] DEFAULT (newid())
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[HierarchySecurityConfiguration] ADD CONSTRAINT [cndx_PrimaryKey_HsmConfiguration] PRIMARY KEY CLUSTERED  ([HierarchySecurityModelingSettingId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Name] ON [dbo].[HierarchySecurityConfiguration] ([EntityName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Sync] ON [dbo].[HierarchySecurityConfiguration] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
