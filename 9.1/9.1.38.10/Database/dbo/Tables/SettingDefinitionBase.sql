CREATE TABLE [dbo].[SettingDefinitionBase] (
    [SettingDefinitionId]                    UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                              DATETIME         NULL,
    [CreatedBy]                              UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                             DATETIME         NULL,
    [ModifiedBy]                             UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                     UNIQUEIDENTIFIER NULL,
    [OrganizationId]                         UNIQUEIDENTIFIER NULL,
    [statecode]                              INT              NOT NULL,
    [statuscode]                             INT              NULL,
    [VersionNumber]                          ROWVERSION       NULL,
    [ImportSequenceNumber]                   INT              NULL,
    [OverriddenCreatedOn]                    DATETIME         NULL,
    [TimeZoneRuleVersionNumber]              INT              NULL,
    [UTCConversionTimeZoneCode]              INT              NULL,
    [DisplayName]                            NVARCHAR (400)   NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_SettingDefinitionBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_SettingDefinitionBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_SettingDefinitionBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]                      UNIQUEIDENTIFIER CONSTRAINT [DF_SettingDefinitionBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_SettingDefinitionBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                         BIT              CONSTRAINT [DF_SettingDefinitionBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [DefaultValue]                           NVARCHAR (2000)  NULL,
    [UniqueName]                             NVARCHAR (100)   NULL,
    [Description]                            NVARCHAR (1000)  NULL,
    [HelpUrl]                                NVARCHAR (1000)  NULL,
    [DataType]                               INT              NULL,
    [Category]                               INT              NULL,
    [Scope]                                  INT              NULL,
    [Type]                                   INT              NULL,
    [CanBeCreatedByComponentOwningPublisher] BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_SettingDefinition] PRIMARY KEY CLUSTERED ([SettingDefinitionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [UQ_SettingDefinitionBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SettingDefinitionBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SettingDefinitionBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[SettingDefinitionBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_DisplayName]
    ON [dbo].[SettingDefinitionBase]([DisplayName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[SettingDefinitionBase]([SettingDefinitionId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_uniquename]
    ON [dbo].[SettingDefinitionBase]([ComponentState] ASC, [OverwriteTime] ASC, [UniqueName] ASC)
    INCLUDE([SettingDefinitionId]) WHERE ([ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL AND [UniqueName] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

