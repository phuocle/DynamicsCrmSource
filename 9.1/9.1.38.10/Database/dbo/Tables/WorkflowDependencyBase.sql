CREATE TABLE [dbo].[WorkflowDependencyBase] (
    [RelatedEntityName]      NVARCHAR (128)   NULL,
    [CreatedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [ParameterName]          NVARCHAR (256)   NULL,
    [CreatedBy]              UNIQUEIDENTIFIER NULL,
    [SdkMessageId]           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]             UNIQUEIDENTIFIER NULL,
    [Type]                   INT              NOT NULL,
    [WorkflowDependencyId]   UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]              DATETIME         NULL,
    [ModifiedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [RelatedAttributeName]   NVARCHAR (256)   NULL,
    [DependentAttributeName] NVARCHAR (128)   NULL,
    [ParameterType]          NVARCHAR (256)   NULL,
    [VersionNumber]          ROWVERSION       NULL,
    [DependentEntityName]    NVARCHAR (128)   NULL,
    [CustomEntityName]       NVARCHAR (128)   NULL,
    [EntityAttributes]       NVARCHAR (MAX)   NULL,
    [ModifiedOn]             DATETIME         NULL,
    [WorkflowId]             UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [cndx_PrimaryKey_WorkflowDependency] PRIMARY KEY CLUSTERED ([WorkflowDependencyId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [workflow_dependencies] FOREIGN KEY ([WorkflowId]) REFERENCES [dbo].[WorkflowBaseIds] ([WorkflowId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[WorkflowDependencyBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[WorkflowDependencyBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Sync_VersionNumber]
    ON [dbo].[WorkflowDependencyBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_workflowId]
    ON [dbo].[WorkflowDependencyBase]([WorkflowId] ASC, [SdkMessageId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_sdkMessageId]
    ON [dbo].[WorkflowDependencyBase]([SdkMessageId] ASC, [WorkflowId] ASC) WITH (FILLFACTOR = 80);

