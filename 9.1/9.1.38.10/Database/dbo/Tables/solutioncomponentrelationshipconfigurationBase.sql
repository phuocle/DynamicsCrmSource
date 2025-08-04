CREATE TABLE [dbo].[solutioncomponentrelationshipconfigurationBase] (
    [solutioncomponentrelationshipconfigurationId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                                    DATETIME         NULL,
    [CreatedBy]                                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                                   DATETIME         NULL,
    [ModifiedBy]                                   UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                            UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                           UNIQUEIDENTIFIER NULL,
    [OrganizationId]                               UNIQUEIDENTIFIER NULL,
    [statecode]                                    INT              NOT NULL,
    [statuscode]                                   INT              NULL,
    [VersionNumber]                                ROWVERSION       NULL,
    [ImportSequenceNumber]                         INT              NULL,
    [OverriddenCreatedOn]                          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]                    INT              NULL,
    [UTCConversionTimeZoneCode]                    INT              NULL,
    [name]                                         NVARCHAR (100)   NULL,
    [OverwriteTime]                                DATETIME         CONSTRAINT [DF_solutioncomponentrelationshipconfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SolutionId]                                   UNIQUEIDENTIFIER CONSTRAINT [DF_solutioncomponentrelationshipconfigurationBase_SolutionId] DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                         UNIQUEIDENTIFIER NULL,
    [ComponentState]                               INT              CONSTRAINT [DF_solutioncomponentrelationshipconfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [ComponentIdUnique]                            UNIQUEIDENTIFIER CONSTRAINT [DF_solutioncomponentrelationshipconfigurationBase_ComponentIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [IsManaged]                                    BIT              CONSTRAINT [DF_solutioncomponentrelationshipconfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IsCustomizable]                               BIT              CONSTRAINT [DF_solutioncomponentrelationshipconfigurationBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [EntityRelationshipId]                         UNIQUEIDENTIFIER NULL,
    [PrimaryEntityDependencyType]                  INT              NULL,
    [SecondaryEntityDependencyType]                INT              NULL,
    [AddRelatedComponents]                         BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_solutioncomponentrelationshipconfiguration] PRIMARY KEY CLUSTERED ([solutioncomponentrelationshipconfigurationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [entityrelationship_config] FOREIGN KEY ([EntityRelationshipId]) REFERENCES [dbo].[EntityRelationshipIds] ([EntityRelationshipId]),
    CONSTRAINT [UQ_solutioncomponentrelationshipconfigurationBase_ComponentIdUnique] UNIQUE NONCLUSTERED ([ComponentIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([OrganizationId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([statecode] ASC, [statuscode] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Sync]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([solutioncomponentrelationshipconfigurationId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_entityrelationship_config]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([EntityRelationshipId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_for_entitykey_EntityRelationship]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([ComponentState] ASC, [EntityRelationshipId] ASC, [OverwriteTime] ASC)
    INCLUDE([solutioncomponentrelationshipconfigurationId]) WHERE ([ComponentState] IS NOT NULL AND [EntityRelationshipId] IS NOT NULL AND [OverwriteTime] IS NOT NULL) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_DB7C25CA61FA43F2A6DCE9308AC07BC3]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([solutioncomponentrelationshipconfigurationId] ASC)
    INCLUDE([name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_DB7C25CA61FA43F2A6DCE9308AC07BC3]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([solutioncomponentrelationshipconfigurationId] ASC)
    INCLUDE([name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_DB7C25CA61FA43F2A6DCE9308AC07BC3]
    ON [dbo].[solutioncomponentrelationshipconfigurationBase]([name] ASC, [solutioncomponentrelationshipconfigurationId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

