USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[AppModuleRolesBase]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AppModuleRolesBase](
	[AppModuleId] [uniqueidentifier] NOT NULL,
	[RoleId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[ComponentState] [int] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NULL,
	[AppModuleRoleIdUnique] [uniqueidentifier] ROWGUIDCOL  NOT NULL,
	[IsManaged] [bit] NULL,
	[IntroducedVersion] [nvarchar](100) NULL,
	[AppModuleRoleId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
 CONSTRAINT [cndx_PrimaryKey_AppModuleRoles] PRIMARY KEY CLUSTERED 
(
	[AppModuleRoleId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD  CONSTRAINT [DF_AppModuleRolesBase_ComponentState]  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD  CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleIdUnique]  DEFAULT (newid()) FOR [AppModuleRoleIdUnique]
GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD  CONSTRAINT [DF_AppModuleRolesBase_IsManaged]  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD  CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleId]  DEFAULT (newid()) FOR [AppModuleRoleId]
GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD  CONSTRAINT [DF_AppModuleRolesBase_OverwriteTime]  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [dbo].[AppModuleRolesBase] ADD  CONSTRAINT [DF_AppModuleRolesBase_SolutionId]  DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
