CREATE TABLE [dbo].[WorkflowBase] (
    [UpdateStage]                                     INT              NULL,
    [OwningBusinessUnit]                              UNIQUEIDENTIFIER NULL,
    [OverwriteTime]                                   DATETIME         CONSTRAINT [DF_WorkflowBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [IntroducedVersion]                               NVARCHAR (48)    NULL,
    [TriggerOnCreate]                                 BIT              NULL,
    [VersionNumber]                                   ROWVERSION       NULL,
    [FormId]                                          UNIQUEIDENTIFIER NULL,
    [ActiveWorkflowId]                                UNIQUEIDENTIFIER NULL,
    [ProcessRoleAssignment]                           NVARCHAR (MAX)   NULL,
    [CreatedOnBehalfBy]                               UNIQUEIDENTIFIER NULL,
    [SyncWorkflowLogOnFailure]                        BIT              CONSTRAINT [DF_WorkflowBase_SyncWorkflowLogOnFailure] DEFAULT ((0)) NOT NULL,
    [ProcessOrder]                                    INT              NULL,
    [EntityImageId]                                   UNIQUEIDENTIFIER NULL,
    [ComponentState]                                  INT              CONSTRAINT [DF_WorkflowBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [CreatedBy]                                       UNIQUEIDENTIFIER NULL,
    [BusinessProcessType]                             INT              NULL,
    [Category]                                        INT              CONSTRAINT [DF_WorkflowBase_Category] DEFAULT ((0)) NOT NULL,
    [TriggerOnDelete]                                 BIT              NULL,
    [StateCode]                                       INT              NOT NULL,
    [CreateStage]                                     INT              NULL,
    [ModifiedOnBehalfBy]                              UNIQUEIDENTIFIER NULL,
    [Activities]                                      NVARCHAR (MAX)   NULL,
    [UIData]                                          NVARCHAR (MAX)   NULL,
    [IsManaged]                                       BIT              CONSTRAINT [DF_WorkflowBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [StatusCode]                                      INT              NULL,
    [ModifiedBy]                                      UNIQUEIDENTIFIER NULL,
    [ParentWorkflowId]                                UNIQUEIDENTIFIER NULL,
    [PrimaryEntity]                                   INT              NOT NULL,
    [Xaml]                                            NVARCHAR (MAX)   NULL,
    [WorkflowId]                                      UNIQUEIDENTIFIER NOT NULL,
    [LanguageCode]                                    INT              NULL,
    [IsTransacted]                                    BIT              NULL,
    [Type]                                            INT              NOT NULL,
    [Subprocess]                                      BIT              NULL,
    [AsyncAutoDelete]                                 BIT              CONSTRAINT [DF_WorkflowBase_AsyncAutoDelete] DEFAULT ((0)) NOT NULL,
    [ModifiedOn]                                      DATETIME         NULL,
    [IsCustomizable]                                  BIT              CONSTRAINT [DF_WorkflowBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [IsCrmUIWorkflow]                                 BIT              CONSTRAINT [DF_WorkflowBase_IsCrmUIWorkflow] DEFAULT ((0)) NULL,
    [SolutionId]                                      UNIQUEIDENTIFIER CONSTRAINT [DF_WorkflowBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [DeleteStage]                                     INT              NULL,
    [RunAs]                                           INT              NULL,
    [InputParameters]                                 NVARCHAR (MAX)   NULL,
    [Scope]                                           INT              CONSTRAINT [DF_WorkflowBase_Scope] DEFAULT ((4)) NOT NULL,
    [TriggerOnUpdateAttributeList]                    NVARCHAR (MAX)   NULL,
    [OnDemand]                                        BIT              NULL,
    [WorkflowIdUnique]                                UNIQUEIDENTIFIER CONSTRAINT [DF_WorkflowBase_WorkflowIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [Mode]                                            INT              CONSTRAINT [DF_WorkflowBase_Mode] DEFAULT ((0)) NOT NULL,
    [Rank]                                            INT              NULL,
    [CreatedOn]                                       DATETIME         NULL,
    [Rules]                                           NVARCHAR (MAX)   NULL,
    [SupportingSolutionId]                            UNIQUEIDENTIFIER NULL,
    [Description]                                     NVARCHAR (MAX)   NULL,
    [SdkMessageId]                                    UNIQUEIDENTIFIER NULL,
    [OwnerId]                                         UNIQUEIDENTIFIER CONSTRAINT [DF_WorkflowBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [UniqueName]                                      NVARCHAR (256)   NULL,
    [PluginTypeId]                                    UNIQUEIDENTIFIER NULL,
    [ClientData]                                      NVARCHAR (MAX)   NULL,
    [Name]                                            NVARCHAR (100)   NOT NULL,
    [RendererObjectTypeCode]                          INT              NULL,
    [OwnerIdType]                                     INT              CONSTRAINT [DF_WorkflowBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ProcessTriggerScope]                             INT              NULL,
    [ProcessTriggerFormId]                            UNIQUEIDENTIFIER NULL,
    [UIFlowType]                                      INT              NULL,
    [IsCustomProcessingStepAllowedForOtherPublishers] BIT              CONSTRAINT [DF_WorkflowBase_IsCustomProcessingStepAllowedForOtherPublishers] DEFAULT ((1)) NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_Workflow] PRIMARY KEY CLUSTERED ([WorkflowId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_WorkflowBase_WorkflowIdUnique] UNIQUE NONCLUSTERED ([WorkflowIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[WorkflowBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[WorkflowBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[WorkflowBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[WorkflowBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[WorkflowBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_workflow_active_workflow]
    ON [dbo].[WorkflowBase]([ActiveWorkflowId] ASC)
    INCLUDE([ComponentState]) WHERE ([ActiveWorkflowId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_workflow_parent_workflow]
    ON [dbo].[WorkflowBase]([ParentWorkflowId] ASC)
    INCLUDE([ComponentState]) WHERE ([ParentWorkflowId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_workflow]
    ON [dbo].[WorkflowBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_TypeCategory]
    ON [dbo].[WorkflowBase]([Type] ASC, [Category] ASC, [LanguageCode] ASC, [Name] ASC, [PrimaryEntity] ASC, [CreatedOn] ASC, [ModifiedOn] ASC)
    INCLUDE([StateCode]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_RecordCount]
    ON [dbo].[WorkflowBase]([WorkflowId] ASC) WHERE ([ComponentState]=(0) AND [OverwriteTime]=(0)) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_777BB20A311A4DC4BFC59A40B1959D6D]
    ON [dbo].[WorkflowBase]([WorkflowId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_777BB20A311A4DC4BFC59A40B1959D6D]
    ON [dbo].[WorkflowBase]([WorkflowId] ASC)
    INCLUDE([Name], [Category], [PrimaryEntity], [StateCode], [CreatedOn], [OwnerId], [OwnerIdType], [OwningBusinessUnit], [Type], [RendererObjectTypeCode], [LanguageCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

