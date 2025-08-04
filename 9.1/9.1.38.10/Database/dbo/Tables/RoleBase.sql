CREATE TABLE [dbo].[RoleBase] (
    [OverriddenCreatedOn]  DATETIME         NULL,
    [CanBeDeleted]         BIT              CONSTRAINT [DF_RoleBase_CanBeDeleted] DEFAULT ((1)) NOT NULL,
    [IsManaged]            BIT              CONSTRAINT [DF_RoleBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OrganizationId]       UNIQUEIDENTIFIER NOT NULL,
    [CreatedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [IsCustomizable]       BIT              CONSTRAINT [DF_RoleBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [VersionNumber]        ROWVERSION       NULL,
    [ModifiedBy]           UNIQUEIDENTIFIER NULL,
    [Name]                 NVARCHAR (100)   NOT NULL,
    [RoleTemplateId]       UNIQUEIDENTIFIER NULL,
    [ModifiedOn]           DATETIME         NULL,
    [ParentRootRoleId]     UNIQUEIDENTIFIER CONSTRAINT [DF_RoleBase_ParentRootRoleId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [RoleIdUnique]         UNIQUEIDENTIFIER CONSTRAINT [DF_RoleBase_RoleIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OverwriteTime]        DATETIME         CONSTRAINT [DF_RoleBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [ModifiedOnBehalfBy]   UNIQUEIDENTIFIER NULL,
    [RoleId]               UNIQUEIDENTIFIER NOT NULL,
    [ComponentState]       INT              CONSTRAINT [DF_RoleBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId] UNIQUEIDENTIFIER NULL,
    [BusinessUnitId]       UNIQUEIDENTIFIER NOT NULL,
    [ImportSequenceNumber] INT              NULL,
    [SolutionId]           UNIQUEIDENTIFIER CONSTRAINT [DF_RoleBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CreatedBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOn]            DATETIME         NULL,
    [ParentRoleId]         UNIQUEIDENTIFIER NULL,
    [IsInherited]          INT              CONSTRAINT [DF_RoleBase_IsInherited] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Role] PRIMARY KEY CLUSTERED ([RoleId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [solution_role] FOREIGN KEY ([SolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId]),
    CONSTRAINT [UQ_RoleBase_RoleIdUnique] UNIQUE NONCLUSTERED ([RoleIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[RoleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[RoleBase]([BusinessUnitId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[RoleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_template_roles]
    ON [dbo].[RoleBase]([RoleTemplateId] ASC) WHERE ([RoleTemplateId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_role_parent_role]
    ON [dbo].[RoleBase]([ParentRoleId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_role_parent_root_role]
    ON [dbo].[RoleBase]([ParentRootRoleId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[RoleBase]([RoleId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_6D553B13189E4A01B8376D572010CCAC]
    ON [dbo].[RoleBase]([Name] ASC, [RoleId] ASC)
    INCLUDE([VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_6D553B13189E4A01B8376D572010CCAC]
    ON [dbo].[RoleBase]([RoleId] ASC)
    INCLUDE([Name], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[RoleBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_6D553B13189E4A01B8376D572010CCAC]
    ON [dbo].[RoleBase]([RoleId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_solution_role]
    ON [dbo].[RoleBase]([SolutionId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

