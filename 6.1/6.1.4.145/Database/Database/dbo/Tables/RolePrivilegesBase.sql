CREATE TABLE [dbo].[RolePrivilegesBase] (
    [PrivilegeId]           UNIQUEIDENTIFIER NOT NULL,
    [RoleId]                UNIQUEIDENTIFIER NOT NULL,
    [PrivilegeDepthMask]    INT              CONSTRAINT [Set_To_Zero140] DEFAULT ((0)) NOT NULL,
    [RolePrivilegeId]       UNIQUEIDENTIFIER CONSTRAINT [DF_RolePrivileges_RolePrivilegeId] DEFAULT (newid()) NOT NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [OverwriteTime]         DATETIME         CONSTRAINT [DF_RolePrivilegesBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]             BIT              CONSTRAINT [DF_RolePrivilegesBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]  UNIQUEIDENTIFIER NULL,
    [RolePrivilegeIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_RolePrivilegesBase_RolePrivilegeIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]        INT              CONSTRAINT [DF_RolePrivilegesBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]            UNIQUEIDENTIFIER CONSTRAINT [DF_RolePrivilegesBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RolePrivileges] PRIMARY KEY CLUSTERED ([RolePrivilegeId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RolePrivileges] UNIQUE NONCLUSTERED ([RoleId] ASC, [PrivilegeId] ASC, [SolutionId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RolePrivilegesBase_RolePrivilegeIdUnique] UNIQUE NONCLUSTERED ([RolePrivilegeIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_privilege_roles]
    ON [dbo].[RolePrivilegesBase]([PrivilegeId] ASC);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RolePrivilegesBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_privileges]
    ON [dbo].[RolePrivilegesBase]([RoleId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);

