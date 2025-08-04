CREATE TABLE [dbo].[WorkflowDependencyBase] (
    [ParameterName]          NVARCHAR (256)   NULL,
    [RelatedEntityName]      NVARCHAR (50)    NULL,
    [RelatedAttributeName]   NVARCHAR (256)   NULL,
    [WorkflowId]             UNIQUEIDENTIFIER NOT NULL,
    [SdkMessageId]           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [ModifiedOn]             DATETIME         NULL,
    [Type]                   INT              NOT NULL,
    [EntityAttributes]       NVARCHAR (MAX)   NULL,
    [CustomEntityName]       NVARCHAR (50)    NULL,
    [DependentEntityName]    NVARCHAR (50)    NULL,
    [DependentAttributeName] NVARCHAR (100)   NULL,
    [WorkflowDependencyId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [CreatedOn]              DATETIME         NULL,
    [ParameterType]          NVARCHAR (256)   NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [VersionNumber]          ROWVERSION       NULL,
    CONSTRAINT [cndx_PrimaryKey_WorkflowDependency] PRIMARY KEY CLUSTERED ([WorkflowDependencyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [workflow_dependencies] FOREIGN KEY ([WorkflowId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId])
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[WorkflowDependencyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_workflowId]
    ON [dbo].[WorkflowDependencyBase]([WorkflowId] ASC, [SdkMessageId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_sdkMessageId]
    ON [dbo].[WorkflowDependencyBase]([SdkMessageId] ASC, [WorkflowId] ASC) WITH (FILLFACTOR = 80);

