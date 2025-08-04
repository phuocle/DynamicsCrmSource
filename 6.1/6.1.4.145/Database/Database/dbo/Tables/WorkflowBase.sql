CREATE TABLE [dbo].[WorkflowBase] (
    [OnDemand]                     BIT              NULL,
    [Activities]                   NVARCHAR (MAX)   NULL,
    [PluginTypeId]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                    DATETIME         NULL,
    [Type]                         INT              NOT NULL,
    [WorkflowId]                   UNIQUEIDENTIFIER NOT NULL,
    [ActiveWorkflowId]             UNIQUEIDENTIFIER NULL,
    [ParentWorkflowId]             UNIQUEIDENTIFIER NULL,
    [UIData]                       NVARCHAR (MAX)   NULL,
    [PrimaryEntity]                INT              NOT NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [IsCrmUIWorkflow]              BIT              CONSTRAINT [DF_WorkflowBase_IsCrmUIWorkflow] DEFAULT ((0)) NULL,
    [Subprocess]                   BIT              NULL,
    [Scope]                        INT              CONSTRAINT [DF_WorkflowBase_Scope] DEFAULT ((4)) NOT NULL,
    [StatusCode]                   INT              NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [Rules]                        NVARCHAR (MAX)   NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [Name]                         NVARCHAR (100)   NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [StateCode]                    INT              NOT NULL,
    [OverwriteTime]                DATETIME         CONSTRAINT [DF_WorkflowBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [TriggerOnCreate]              BIT              NULL,
    [AsyncAutoDelete]              BIT              CONSTRAINT [DF_WorkflowBase_AsyncAutoDelete] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]         UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [InputParameters]              NVARCHAR (MAX)   NULL,
    [Xaml]                         NVARCHAR (MAX)   NULL,
    [Category]                     INT              CONSTRAINT [DF_WorkflowBase_Category] DEFAULT ((0)) NOT NULL,
    [LanguageCode]                 INT              NULL,
    [TriggerOnDelete]              BIT              NULL,
    [SolutionId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_WorkflowBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [IsCustomizable]               BIT              CONSTRAINT [DF_WorkflowBase_IsCustomizable] DEFAULT ((1)) NOT NULL,
    [TriggerOnUpdateAttributeList] NVARCHAR (MAX)   NULL,
    [WorkflowIdUnique]             UNIQUEIDENTIFIER CONSTRAINT [DF_WorkflowBase_WorkflowIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [ComponentState]               INT              CONSTRAINT [DF_WorkflowBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [OwnerId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_WorkflowBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [IsManaged]                    BIT              CONSTRAINT [DF_WorkflowBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_WorkflowBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [UniqueName]                   NVARCHAR (256)   NULL,
    [ProcessOrder]                 INT              NULL,
    [Rank]                         INT              NULL,
    [CreateStage]                  INT              NULL,
    [ProcessRoleAssignment]        NVARCHAR (MAX)   NULL,
    [RunAs]                        INT              NULL,
    [IsTransacted]                 BIT              NULL,
    [SyncWorkflowLogOnFailure]     BIT              CONSTRAINT [DF_WorkflowBase_SyncWorkflowLogOnFailure] DEFAULT ((0)) NOT NULL,
    [DeleteStage]                  INT              NULL,
    [Mode]                         INT              CONSTRAINT [DF_WorkflowBase_Mode] DEFAULT ((0)) NOT NULL,
    [UpdateStage]                  INT              NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [SdkMessageId]                 UNIQUEIDENTIFIER NULL,
    [IntroducedVersion]            NVARCHAR (48)    NULL,
    [ClientData]                   NVARCHAR (MAX)   NULL,
    [RendererObjectTypeCode]       INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Workflow] PRIMARY KEY CLUSTERED ([WorkflowId] ASC, [SolutionId] ASC, [ComponentState] ASC, [OverwriteTime] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [UQ_WorkflowBase_WorkflowIdUnique] UNIQUE NONCLUSTERED ([WorkflowIdUnique] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[WorkflowBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_workflow_active_workflow]
    ON [dbo].[WorkflowBase]([ActiveWorkflowId] ASC)
    INCLUDE([ComponentState]) WHERE ([ActiveWorkflowId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[WorkflowBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[WorkflowBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


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

