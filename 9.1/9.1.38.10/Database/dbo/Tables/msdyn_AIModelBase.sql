CREATE TABLE [dbo].[msdyn_AIModelBase] (
    [msdyn_AIModelId]                     UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                           DATETIME         NULL,
    [CreatedBy]                           UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                          DATETIME         NULL,
    [ModifiedBy]                          UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                  UNIQUEIDENTIFIER NULL,
    [OwnerId]                             UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                         INT              CONSTRAINT [DF_msdyn_AIModelBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                  UNIQUEIDENTIFIER NULL,
    [statecode]                           INT              NOT NULL,
    [statuscode]                          INT              NULL,
    [VersionNumber]                       ROWVERSION       NULL,
    [ImportSequenceNumber]                INT              NULL,
    [OverriddenCreatedOn]                 DATETIME         NULL,
    [TimeZoneRuleVersionNumber]           INT              NULL,
    [UTCConversionTimeZoneCode]           INT              NULL,
    [msdyn_AIModelIdUnique]               UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_AIModelBase_msdyn_AIModelIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [SolutionId]                          UNIQUEIDENTIFIER CONSTRAINT [DF_msdyn_AIModelBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [SupportingSolutionId]                UNIQUEIDENTIFIER NULL,
    [ComponentState]                      INT              CONSTRAINT [DF_msdyn_AIModelBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OverwriteTime]                       DATETIME         CONSTRAINT [DF_msdyn_AIModelBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IsManaged]                           BIT              CONSTRAINT [DF_msdyn_AIModelBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                   NVARCHAR (48)    NULL,
    [IsCustomizable]                      BIT              CONSTRAINT [DF_msdyn_AIModelBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [msdyn_Name]                          NVARCHAR (100)   NOT NULL,
    [msdyn_TemplateId]                    UNIQUEIDENTIFIER NOT NULL,
    [msdyn_ActiveRunConfigurationId]      UNIQUEIDENTIFIER NULL,
    [msdyn_ShareWithOrganizationOnCreate] BIT              CONSTRAINT [DF_msdyn_AIModelBase_msdyn_ShareWithOrganizationOnCreate] DEFAULT ((0)) NULL,
    [msdyn_ModelCreationContext]          NVARCHAR (MAX)   NULL,
    [msdyn_RetrainWorkflowId]             UNIQUEIDENTIFIER NULL,
    [msdyn_ScheduleInferenceWorkflowId]   UNIQUEIDENTIFIER NULL,
    CONSTRAINT [PK_msdyn_AIModelBase] PRIMARY KEY CLUSTERED ([msdyn_AIModelId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW),
    CONSTRAINT [business_unit_msdyn_aimodel] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [msdyn_aitemplate_msdyn_aimodel] FOREIGN KEY ([msdyn_TemplateId]) REFERENCES [dbo].[msdyn_AITemplateBaseIds] ([msdyn_AITemplateId]),
    CONSTRAINT [msdyn_retrainworkflow_msdyn_toaimodel] FOREIGN KEY ([msdyn_RetrainWorkflowId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId]),
    CONSTRAINT [msdyn_scheduleinferenceworkflow_msdyn_toaimodel] FOREIGN KEY ([msdyn_ScheduleInferenceWorkflowId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId]),
    CONSTRAINT [owner_msdyn_aimodel] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [UQ_msdyn_AIModelBase_msdyn_AIModelIdUnique] UNIQUE NONCLUSTERED ([msdyn_AIModelIdUnique] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Uniquename]
    ON [dbo].[msdyn_AIModelBase]([msdyn_Name] ASC, [msdyn_TemplateId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_0177D66F9EEC409ABBC84C73ACAE39BD]
    ON [dbo].[msdyn_AIModelBase]([msdyn_Name] ASC, [msdyn_AIModelId] ASC)
    INCLUDE([CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_0177D66F9EEC409ABBC84C73ACAE39BD]
    ON [dbo].[msdyn_AIModelBase]([msdyn_AIModelId] ASC)
    INCLUDE([msdyn_Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_0177D66F9EEC409ABBC84C73ACAE39BD]
    ON [dbo].[msdyn_AIModelBase]([msdyn_AIModelId] ASC)
    INCLUDE([msdyn_Name], [CreatedOn], [statecode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

