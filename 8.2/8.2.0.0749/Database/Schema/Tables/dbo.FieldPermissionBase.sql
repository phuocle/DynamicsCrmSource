CREATE TABLE [dbo].[FieldPermissionBase]
(
[FieldPermissionIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_FieldPermissionBase_FieldPermissionIdUnique] DEFAULT (newid()),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_ComponentState] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_FieldPermissionBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CanRead] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_CanRead] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_FieldPermissionBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[CanCreate] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_CanCreate] DEFAULT ((0)),
[FieldSecurityProfileId] [uniqueidentifier] NOT NULL,
[EntityName] [int] NOT NULL,
[FieldPermissionId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_FieldPermissionBase_OverwriteTime] DEFAULT ((0)),
[VersionNumber] [timestamp] NULL,
[CanUpdate] [int] NOT NULL CONSTRAINT [DF_FieldPermissionBase_CanUpdate] DEFAULT ((0)),
[AttributeLogicalName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FieldPermissionBase] ADD CONSTRAINT [cndx_PrimaryKey_FieldPermission] PRIMARY KEY CLUSTERED  ([FieldPermissionId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[FieldPermissionBase] ADD CONSTRAINT [UQ_FieldPermissionBase_FieldPermissionIdUnique] UNIQUE NONCLUSTERED  ([FieldPermissionIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_fieldsecurityprofile_permissions] ON [dbo].[FieldPermissionBase] ([FieldSecurityProfileId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[FieldPermissionBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
