CREATE TABLE [dbo].[RolePrivilegesBase] (
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RolePrivilegesBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [RolePrivilegeId]       UNIQUEIDENTIFIER CONSTRAINT [DF_RolePrivilegesBase_RolePrivilegeId] DEFAULT (newid()) NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RolePrivilegesBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [RoleId]                UNIQUEIDENTIFIER NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [RolePrivilegeIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_RolePrivilegesBase_RolePrivilegeIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RolePrivilegesBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CanBeDeleted]          BIT              CONSTRAINT [DF_RolePrivilegesBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [PrivilegeDepthMask]    INT              CONSTRAINT [DF_RolePrivilegesBase_PrivilegeDepthMask] DEFAULT ((0)) NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RolePrivilegesBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [PrivilegeId]           UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RolePrivileges] PRIMARY KEY CLUSTERED ([RolePrivilegeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_roleprivileges] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]),
    CONSTRAINT [UQ_RolePrivileges] UNIQUE NONCLUSTERED ([RoleId] ASC, [PrivilegeId] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RolePrivilegesBase_RolePrivilegeIdUnique] UNIQUE NONCLUSTERED ([RolePrivilegeIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RolePrivilegesBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RolePrivilegesBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_privilege_roles]
    ON [dbo].[RolePrivilegesBase]([PrivilegeId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_privileges]
    ON [dbo].[RolePrivilegesBase]([RoleId] ASC)
    INCLUDE([ComponentState], [OverwriteTime], [PrivilegeId], [PrivilegeDepthMask], [VersionNumber], [SolutionId]) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RolePrivilegesBase]([RolePrivilegeId] ASC) WHERE ([OverwriteTime]=(0) AND [ComponentState]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_OverwriteTime_ComponentState]
    ON [dbo].[RolePrivilegesBase]([OverwriteTime] ASC, [ComponentState] ASC)
    INCLUDE([PrivilegeId], [RoleId], [PrivilegeDepthMask]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_solution_roleprivileges]
    ON [dbo].[RolePrivilegesBase]([SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

