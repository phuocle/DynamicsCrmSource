CREATE TABLE [dbo].[solutioncomponentattributeconfigurationBase] (
    [solutioncomponentattributeconfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                                 DATETIME         NULL,
    [CreatedBy]                                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                DATETIME         NULL,
    [ModifiedBy]                                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                        UNIQUEIDENTIFIER NULL,
    [OrganizationId]                            UNIQUEIDENTIFIER NULL,
    [statecode]                                 INT              NOT NULL,
    [statuscode]                                INT              NULL,
    [VersionNumber]                             ROWVERSION       NULL,
    [ImportSequenceNumber]                      INT              NULL,
    [OverriddenCreatedOn]                       DATETIME         NULL,
    [TimeZoneRuleVersionNumber]                 INT              NULL,
    [UTCConversionTimeZoneCode]                 INT              NULL,
    [name]                                      NVARCHAR (100)   NULL,
    [OverwriteTime]                             DATETIME         CONSTRAINT [DF_solutioncomponentattributeconfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                                UNIQUEIDENTIFIER CONSTRAINT [DF_solutioncomponentattributeconfigurationBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                      UNIQUEIDENTIFIER NULL,
    [ComponentState]                            INT              CONSTRAINT [DF_solutioncomponentattributeconfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]                         UNIQUEIDENTIFIER CONSTRAINT [DF_solutioncomponentattributeconfigurationBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                                 BIT              CONSTRAINT [DF_solutioncomponentattributeconfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                            BIT              CONSTRAINT [DF_solutioncomponentattributeconfigurationBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [AttributeId]                               UNIQUEIDENTIFIER NULL,
    [SolutionComponentConfigurationId]          UNIQUEIDENTIFIER NULL,
    [EncodingFormat]                            INT              NULL,
    [IsExportDisabled]                          BIT              NULL,
    [FileExtension]                             NVARCHAR (30)    NULL,
    [IsExportedAsFile]                          BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_solutioncomponentattributeconfiguration] PRIMARY KEY CLUSTERED ([solutioncomponentattributeconfigurationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [attribute_solutioncomponentattrconfig] FOREIGN KEY ([AttributeId]) REFERENCES [dbo].[AttributeIds] ([AttributeId]),
    CONSTRAINT [solutioncomponentconfig_solutioncomponentattrconfig] FOREIGN KEY ([SolutionComponentConfigurationId]) REFERENCES [dbo].[solutioncomponentconfigurationBaseIds] ([solutioncomponentconfigurationId]),
    CONSTRAINT [UQ_solutioncomponentattributeconfigurationBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([solutioncomponentattributeconfigurationId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_attribute_solutioncomponentattrconfig]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([AttributeId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_solutioncomponentattributeconfigurationid]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([AttributeId] ASC, [ComponentState] ASC, [OverwriteTime] ASC)
    INCLUDE([solutioncomponentattributeconfigurationId]) WHERE ([AttributeId] IS NOT NULL AND [ComponentState] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_1BA79AA46B064AC6B31A85156E43717A]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([solutioncomponentattributeconfigurationId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_1BA79AA46B064AC6B31A85156E43717A]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([name] ASC, [solutioncomponentattributeconfigurationId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_1BA79AA46B064AC6B31A85156E43717A]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([solutioncomponentattributeconfigurationId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_solutioncomponentconfig_solutioncomponentattrconfig]
    ON [dbo].[solutioncomponentattributeconfigurationBase]([SolutionComponentConfigurationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

