CREATE TABLE [dbo].[solutioncomponentconfigurationBase] (
    [solutioncomponentconfigurationId]       UNIQUEIDENTIFIER NOT NULL,
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
    [name]                                   NVARCHAR (100)   NULL,
    [OverwriteTime]                          DATETIME         CONSTRAINT [DF_solutioncomponentconfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                             UNIQUEIDENTIFIER CONSTRAINT [DF_solutioncomponentconfigurationBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                   UNIQUEIDENTIFIER NULL,
    [ComponentState]                         INT              CONSTRAINT [DF_solutioncomponentconfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]                      UNIQUEIDENTIFIER CONSTRAINT [DF_solutioncomponentconfigurationBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                              BIT              CONSTRAINT [DF_solutioncomponentconfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                         BIT              CONSTRAINT [DF_solutioncomponentconfigurationBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [EntityId]                               UNIQUEIDENTIFIER NULL,
    [FileFormat]                             INT              NULL,
    [FileScope]                              INT              NULL,
    [IsSoftDeleteEnabled]                    BIT              NULL,
    [isdisplayable]                          BIT              CONSTRAINT [DF_solutioncomponentconfigurationBase_isdisplayable] DEFAULT ((1)) NULL,
    [KeepActiveCustomizationAfterConversion] BIT              CONSTRAINT [DF_solutioncomponentconfigurationBase_KeepActiveCustomizationAfterConversion] DEFAULT ((0)) NULL,
    CONSTRAINT [cndx_PrimaryKey_solutioncomponentconfiguration] PRIMARY KEY CLUSTERED ([solutioncomponentconfigurationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [entity_solutioncomponentconfiguration] FOREIGN KEY ([EntityId]) REFERENCES [dbo].[EntityIds] ([EntityId]),
    CONSTRAINT [UQ_solutioncomponentconfigurationBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[solutioncomponentconfigurationBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[solutioncomponentconfigurationBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[solutioncomponentconfigurationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[solutioncomponentconfigurationBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[solutioncomponentconfigurationBase]([solutioncomponentconfigurationId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entity_solutioncomponentconfiguration]
    ON [dbo].[solutioncomponentconfigurationBase]([EntityId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_solutioncomponentconfigurationid]
    ON [dbo].[solutioncomponentconfigurationBase]([ComponentState] ASC, [EntityId] ASC, [OverwriteTime] ASC)
    INCLUDE([solutioncomponentconfigurationId]) WHERE ([ComponentState] IS NOT NULL AND [EntityId] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9998E55E873D441D8C3899CA680BFB58]
    ON [dbo].[solutioncomponentconfigurationBase]([solutioncomponentconfigurationId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9998E55E873D441D8C3899CA680BFB58]
    ON [dbo].[solutioncomponentconfigurationBase]([solutioncomponentconfigurationId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9998E55E873D441D8C3899CA680BFB58]
    ON [dbo].[solutioncomponentconfigurationBase]([name] ASC, [solutioncomponentconfigurationId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

