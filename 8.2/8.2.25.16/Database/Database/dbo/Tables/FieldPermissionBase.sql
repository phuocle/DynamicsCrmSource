CREATE TABLE [dbo].[FieldPermissionBase] (
    [FieldPermissionIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_FieldPermissionBase_FieldPermissionIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]          INT              CONSTRAINT [DF_FieldPermissionBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]              UNIQUEIDENTIFIER CONSTRAINT [DF_FieldPermissionBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [CanRead]                 INT              CONSTRAINT [DF_FieldPermissionBase_CanRead] DEFAULT ((0)) NOT NULL,
    [IsManaged]               BIT              CONSTRAINT [DF_FieldPermissionBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]    UNIQUEIDENTIFIER NULL,
    [CanCreate]               INT              CONSTRAINT [DF_FieldPermissionBase_CanCreate] DEFAULT ((0)) NOT NULL,
    [FieldSecurityProfileId]  UNIQUEIDENTIFIER NOT NULL,
    [EntityName]              INT              NOT NULL,
    [FieldPermissionId]       UNIQUEIDENTIFIER NOT NULL,
    [OverwriteTime]           DATETIME         CONSTRAINT [DF_FieldPermissionBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [CanUpdate]               INT              CONSTRAINT [DF_FieldPermissionBase_CanUpdate] DEFAULT ((0)) NOT NULL,
    [AttributeLogicalName]    NVARCHAR (50)    NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_FieldPermission] PRIMARY KEY CLUSTERED ([FieldPermissionId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_FieldPermissionBase_FieldPermissionIdUnique] UNIQUE NONCLUSTERED ([FieldPermissionIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[FieldPermissionBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_fieldsecurityprofile_permissions]
    ON [dbo].[FieldPermissionBase]([FieldSecurityProfileId] ASC)
    INCLUDE([ComponentState]) WITH (FILLFACTOR = 80);

