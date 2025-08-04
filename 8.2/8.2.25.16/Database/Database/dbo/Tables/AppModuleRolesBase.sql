CREATE TABLE [dbo].[AppModuleRolesBase] (
    [AppModuleId]           UNIQUEIDENTIFIER NOT NULL,
    [RoleId]                UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [ComponentState]        INT              CONSTRAINT [DF_AppModuleRolesBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [AppModuleRoleIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_AppModuleRolesBase_IsManaged] DEFAULT ((0)) NULL,
    [IntroducedVersion]     NVARCHAR (100)   NULL,
    [AppModuleRoleId]       UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleId] DEFAULT (newid()) NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_AppModuleRolesBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleRolesBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModuleRoles] PRIMARY KEY CLUSTERED ([AppModuleRoleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);

