CREATE TABLE [dbo].[HierarchySecurityConfiguration] (
    [VersionNumber]                      ROWVERSION       NULL,
    [ObjectTypeCode]                     INT              NOT NULL,
    [EntityName]                         NVARCHAR (128)   NULL,
    [HierarchySecurityModelingSettingId] UNIQUEIDENTIFIER CONSTRAINT [DF_HierarchySecurityConfiguration_HierarchySecurityModelingSettingId] DEFAULT (newid()) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_HsmConfiguration] PRIMARY KEY CLUSTERED ([HierarchySecurityModelingSettingId] ASC) WITH (FILLFACTOR = 80)
);


GO
ALTER TABLE [dbo].[HierarchySecurityConfiguration] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[HierarchySecurityConfiguration]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Name]
    ON [dbo].[HierarchySecurityConfiguration]([EntityName] ASC) WITH (FILLFACTOR = 80);

