CREATE TABLE [dbo].[RoleBase]
(
[RoleId] [uniqueidentifier] NOT NULL,
[RoleTemplateId] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[BusinessUnitId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOn] [datetime] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ParentRoleId] [uniqueidentifier] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_RoleBase_IsManaged] DEFAULT ((0)),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_RoleBase_ComponentState] DEFAULT ((0)),
[RoleIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_RoleBase_RoleIdUnique] DEFAULT (newid()),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_RoleBase_OverwriteTime] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_RoleBase_IsCustomizable] DEFAULT ((1)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ParentRootRoleId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_RoleBase_ParentRootRoleId] DEFAULT ('00000000-0000-0000-0000-000000000000')
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleBase] ADD CONSTRAINT [cndx_PrimaryKey_Role] PRIMARY KEY CLUSTERED  ([RoleId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[RoleBase] ([BusinessUnitId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name] ON [dbo].[RoleBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_parent_role] ON [dbo].[RoleBase] ([ParentRoleId]) INCLUDE ([ComponentState]) WHERE ([ParentRoleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_parent_root_role] ON [dbo].[RoleBase] ([ParentRootRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RoleBase] ADD CONSTRAINT [UQ_RoleBase_RoleIdUnique] UNIQUE NONCLUSTERED  ([RoleIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_template_roles] ON [dbo].[RoleBase] ([RoleTemplateId]) WHERE ([RoleTemplateId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RoleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
