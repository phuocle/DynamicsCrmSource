CREATE TABLE [dbo].[AppModuleRolesBase]
(
[AppModuleId] [uniqueidentifier] NOT NULL,
[RoleId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_AppModuleRolesBase_ComponentState] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[AppModuleRoleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleIdUnique] DEFAULT (newid()),
[IsManaged] [bit] NULL CONSTRAINT [DF_AppModuleRolesBase_IsManaged] DEFAULT ((0)),
[IntroducedVersion] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[AppModuleRoleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleId] DEFAULT (newid()),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_AppModuleRolesBase_OverwriteTime] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_AppModuleRolesBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238')
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD CONSTRAINT [cndx_PrimaryKey_AppModuleRoles] PRIMARY KEY CLUSTERED  ([AppModuleRoleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
