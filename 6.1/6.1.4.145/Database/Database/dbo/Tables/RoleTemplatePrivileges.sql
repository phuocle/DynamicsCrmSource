CREATE TABLE [dbo].[RoleTemplatePrivileges] (
    [RoleTemplateId]          UNIQUEIDENTIFIER NOT NULL,
    [PrivilegeId]             UNIQUEIDENTIFIER NOT NULL,
    [IsBasic]                 BIT              CONSTRAINT [Set_To_Zero141] DEFAULT ((0)) NOT NULL,
    [IsLocal]                 BIT              CONSTRAINT [Set_To_Zero142] DEFAULT ((0)) NOT NULL,
    [IsDeep]                  BIT              CONSTRAINT [Set_To_Zero143] DEFAULT ((0)) NOT NULL,
    [IsGlobal]                BIT              CONSTRAINT [Set_To_Zero144] DEFAULT ((0)) NOT NULL,
    [Upgrading]               BIT              CONSTRAINT [DF_RoleTemplatePrivileges_Upgrading] DEFAULT ((1)) NOT NULL,
    [RoleTemplatePrivilegeId] UNIQUEIDENTIFIER CONSTRAINT [DF_RoleTemplatePrivileges_RoleTemplatePrivilegeId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_RoleTemplatePrivileges] PRIMARY KEY CLUSTERED ([RoleTemplatePrivilegeId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [privilege_role_templates] FOREIGN KEY ([PrivilegeId]) REFERENCES [dbo].[PrivilegeBase] ([PrivilegeId]) NOT FOR REPLICATION,
    CONSTRAINT [UQ_RoleTemplatePrivileges] UNIQUE NONCLUSTERED ([RoleTemplateId] ASC, [PrivilegeId] ASC)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_privilege_role_templates]
    ON [dbo].[RoleTemplatePrivileges]([PrivilegeId] ASC) WITH (FILLFACTOR = 80);

