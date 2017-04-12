CREATE TABLE [dbo].[RolePrivilegesBase]
(
[PrivilegeId] [uniqueidentifier] NOT NULL,
[RoleId] [uniqueidentifier] NOT NULL,
[PrivilegeDepthMask] [int] NOT NULL CONSTRAINT [Set_To_Zero140] DEFAULT ((0)),
[RolePrivilegeId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RolePrivileges_RolePrivilegeId] DEFAULT (newid()),
[VersionNumber] [timestamp] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RolePrivilegesBase_OverwriteTime] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RolePrivilegesBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[RolePrivilegeIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RolePrivilegesBase_RolePrivilegeIdUnique] DEFAULT (newid()),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RolePrivilegesBase_ComponentState] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RolePrivilegesBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238')
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RolePrivilegesBase] ADD CONSTRAINT [cndx_PrimaryKey_RolePrivileges] PRIMARY KEY CLUSTERED  ([RolePrivilegeId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_privilege_roles] ON [dbo].[RolePrivilegesBase] ([PrivilegeId]) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_privileges] ON [dbo].[RolePrivilegesBase] ([RoleId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RolePrivilegesBase] ADD CONSTRAINT [UQ_RolePrivileges] UNIQUE NONCLUSTERED  ([RoleId], [PrivilegeId], [SolutionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RolePrivilegesBase] ADD CONSTRAINT [UQ_RolePrivilegesBase_RolePrivilegeIdUnique] UNIQUE NONCLUSTERED  ([RolePrivilegeIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RolePrivilegesBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
