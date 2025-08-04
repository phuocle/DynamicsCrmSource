CREATE TABLE [dbo].[AppModuleRolesBase] (
    [AppModuleId]           UNIQUEIDENTIFIER NOT NULL,
    [RoleId]                UNIQUEIDENTIFIER NOT NULL,
    [AppModuleRoleIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [IntroducedVersion]     NVARCHAR (100)   NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleRolesBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_AppModuleRolesBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [AppModuleRoleId]       UNIQUEIDENTIFIER CONSTRAINT [DF_AppModuleRolesBase_AppModuleRoleId] DEFAULT (newid()) NOT NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_AppModuleRolesBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_AppModuleRolesBase_IsManaged] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_AppModuleRoles] PRIMARY KEY CLUSTERED ([AppModuleRoleId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[AppModuleRolesBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[AppModuleRolesBase]([AppModuleRoleId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

