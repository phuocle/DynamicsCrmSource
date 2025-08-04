CREATE TABLE [dbo].[msdyn_AIConfigurationBase] (
    [msdyn_AIConfigurationId]                 UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                               DATETIME         NULL,
    [CreatedBy]                               UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                              DATETIME         NULL,
    [ModifiedBy]                              UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                      UNIQUEIDENTIFIER NULL,
    [OwnerId]                                 UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                             INT              CONSTRAINT [DF_msdyn_AIConfigurationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                      UNIQUEIDENTIFIER NULL,
    [statecode]                               INT              NOT NULL,
    [statuscode]                              INT              NULL,
    [VersionNumber]                           ROWVERSION       NULL,
    [ImportSequenceNumber]                    INT              NULL,
    [OverriddenCreatedOn]                     DATETIME         NULL,
    [TimeZoneRuleVersionNumber]               INT              NULL,
    [UTCConversionTimeZoneCode]               INT              NULL,
    [msdyn_AIConfigurationIdUnique]           UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_AIConfigurationBase_msdyn_AIConfigurationIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]                              UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_AIConfigurationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                    UNIQUEIDENTIFIER NULL,
    [ComponentState]                          INT              CONSTRAINT [DF_msdyn_AIConfigurationBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                           DATETIME         CONSTRAINT [DF_msdyn_AIConfigurationBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                               BIT              CONSTRAINT [DF_msdyn_AIConfigurationBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                       NVARCHAR (48)    NULL,
    [IsCustomizable]                          BIT              CONSTRAINT [DF_msdyn_AIConfigurationBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [msdyn_AIModelId]                         UNIQUEIDENTIFIER NOT NULL,
    [msdyn_CustomConfiguration]               NVARCHAR (MAX)   NULL,
    [msdyn_DataBinding]                       NVARCHAR (MAX)   NULL,
    [msdyn_MajorIterationNumber]              INT              NOT NULL,
    [msdyn_MinorIterationNumber]              INT              NOT NULL,
    [msdyn_ModelData]                         NVARCHAR (MAX)   NULL,
    [msdyn_ModelPerformance]                  NVARCHAR (MAX)   NULL,
    [msdyn_Name]                              NVARCHAR (100)   NOT NULL,
    [msdyn_ModelRunDataSpecification]         NVARCHAR (MAX)   NULL,
    [msdyn_ResourceInfo]                      NVARCHAR (MAX)   NULL,
    [msdyn_SchedulingOptions]                 NVARCHAR (MAX)   NULL,
    [msdyn_TrainedModelAIConfigurationPareId] UNIQUEIDENTIFIER NULL,
    [msdyn_Type]                              INT              NOT NULL,
    [msdyn_lasterrors]                        NVARCHAR (MAX)   NULL,
    [msdyn_lasttrainorrundate]                DATETIME         NULL,
    [msdyn_modelglobalexplainability]         NVARCHAR (MAX)   NULL,
    [msdyn_TemplateVersion]                   INT              CONSTRAINT [DF_msdyn_AIConfigurationBase_msdyn_TemplateVersion] DEFAULT ((1)) NULL,
    [msdyn_ModelProvisioningMetadata]         NVARCHAR (MAX)   NULL,
    [msdyn_ModelProvisioningStatus]           NVARCHAR (MAX)   NULL,
    [msdyn_RunConfiguration]                  NVARCHAR (MAX)   NULL,
    [msdyn_CreatedFromConfigurationId]        UNIQUEIDENTIFIER NULL,
    [msdyn_Model]                             UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_AIConfigurationBase] PRIMARY KEY CLUSTERED ([msdyn_AIConfigurationId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aiconfiguration] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [FileAttachment_msdyn_AIConfiguration_msdyn_Model] FOREIGN KEY ([msdyn_Model]) REFERENCES [dbo].[FileAttachmentBase] ([FileAttachmentId]),
    CONSTRAINT [msdyn_aiconfiguration_msdyn_aiconfiguration] FOREIGN KEY ([msdyn_TrainedModelAIConfigurationPareId]) REFERENCES [dbo].[msdyn_AIConfigurationBaseIds] ([msdyn_AIConfigurationId]),
    CONSTRAINT [msdyn_aimodel_msdyn_aiconfiguration] FOREIGN KEY ([msdyn_AIModelId]) REFERENCES [dbo].[msdyn_AIModelBaseIds] ([msdyn_AIModelId]),
    CONSTRAINT [msdyn_createdfromconfiguration_msdyn_toconfiguration] FOREIGN KEY ([msdyn_CreatedFromConfigurationId]) REFERENCES [dbo].[msdyn_AIConfigurationBaseIds] ([msdyn_AIConfigurationId]),
    CONSTRAINT [owner_msdyn_aiconfiguration] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_msdyn_AIConfigurationBase_msdyn_AIConfigurationIdUnique] UNIQUE NONCLUSTERED ([msdyn_AIConfigurationIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_FileAttachment_msdyn_AIConfiguration_msdyn_Model]
    ON [dbo].[msdyn_AIConfigurationBase]([msdyn_Model] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_ConfigurationVersion]
    ON [dbo].[msdyn_AIConfigurationBase]([msdyn_AIModelId] ASC, [msdyn_Type] ASC, [msdyn_MajorIterationNumber] ASC, [msdyn_MinorIterationNumber] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7AB16FF224E84F2AB8B82947BB577C0A]
    ON [dbo].[msdyn_AIConfigurationBase]([msdyn_Name] ASC, [msdyn_AIConfigurationId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7AB16FF224E84F2AB8B82947BB577C0A]
    ON [dbo].[msdyn_AIConfigurationBase]([msdyn_AIConfigurationId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7AB16FF224E84F2AB8B82947BB577C0A]
    ON [dbo].[msdyn_AIConfigurationBase]([msdyn_AIConfigurationId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_msdyn_Name]
    ON [dbo].[msdyn_AIConfigurationBase]([msdyn_Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

