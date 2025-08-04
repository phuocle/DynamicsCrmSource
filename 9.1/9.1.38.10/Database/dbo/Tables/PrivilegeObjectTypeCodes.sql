CREATE TABLE [dbo].[PrivilegeObjectTypeCodes] (
    [VersionNumber]                ROWVERSION       NULL,
    [ObjectTypeCode]               INT              NOT NULL,
    [PrivilegeId]                  UNIQUEIDENTIFIER NOT NULL,
    [PrivilegeObjectTypeCodeId]    UNIQUEIDENTIFIER CONSTRAINT [DF_PrivilegeObjectTypeCodes_PrivilegeObjectTypeCodeId] DEFAULT (newid()) NOT NULL,
    [SolutionId]                   UNIQUEIDENTIFIER DEFAULT ('FD140AAD-4DF4-11DD-BD17-0019B9312238') NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ComponentState]               TINYINT          DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                DATETIME         DEFAULT ((0)) NOT NULL,
    [PrivilegeObjectTypeCodeRowId] UNIQUEIDENTIFIER DEFAULT (newid()) NOT NULL,
    [IntroducedVersion]            NVARCHAR (48)    NULL,
    [IsCustomizable]               BIT              NULL,
    [IsManaged]                    BIT              DEFAULT ((0)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_PrivilegeObjectTypeCodes] PRIMARY KEY CLUSTERED ([PrivilegeObjectTypeCodeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[PrivilegeObjectTypeCodes] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[PrivilegeObjectTypeCodes]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_FK_PrivilegeObjectTypeCodes]
    ON [dbo].[PrivilegeObjectTypeCodes]([PrivilegeId] ASC)
    INCLUDE([ObjectTypeCode]) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_PrivilegeObjectTypeCodePrivilegeId]
    ON [dbo].[PrivilegeObjectTypeCodes]([ObjectTypeCode] ASC, [PrivilegeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Cover]
    ON [dbo].[PrivilegeObjectTypeCodes]([ObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[PrivilegeObjectTypeCodes]([PrivilegeObjectTypeCodeId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

