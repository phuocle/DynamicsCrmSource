CREATE TABLE [dbo].[RoleBase] (
    [RoleId]               UNIQUEIDENTIFIER NOT NULL,
    [RoleTemplateId]       UNIQUEIDENTIFIER NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [BusinessUnitId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]            DATETIME         NULL,
    [ModifiedOn]           DATETIME         NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [ParentRoleId]         UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]  DATETIME         NULL,
    [ImportSequenceNumber] INT              NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_RoleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ComponentState]       INT              CONSTRAINT [DF_RoleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [RoleIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_RoleBase_RoleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_RoleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_RoleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_RoleBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [ParentRootRoleId]     UNIQUEIDENTIFIER CONSTRAINT [DF_RoleBase_ParentRootRoleId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Role] PRIMARY KEY CLUSTERED ([RoleId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_RoleBase_RoleIdUnique] UNIQUE NONCLUSTERED ([RoleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RoleBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_parent_role]
    ON [dbo].[RoleBase]([ParentRoleId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_parent_root_role]
    ON [dbo].[RoleBase]([ParentRootRoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RoleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_template_roles]
    ON [dbo].[RoleBase]([RoleTemplateId] ASC) WHERE ([RoleTemplateId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[RoleBase]([Name] ASC) WITH (FILLFACTOR = 80);

