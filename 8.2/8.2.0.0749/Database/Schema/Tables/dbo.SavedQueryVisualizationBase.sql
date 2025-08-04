CREATE TABLE [dbo].[SavedQueryVisualizationBase]
(
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_OverwriteTime] DEFAULT ((0)),
[ComponentState] [int] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_ComponentState] DEFAULT ((0)),
[Description] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PresentationDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[IsDefault] [bit] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_IsDefault] DEFAULT ((0)),
[ModifiedOn] [datetime] NULL,
[DataDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CreatedBy] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SavedQueryVisualizationIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_SavedQueryVisualizationBase_SavedQueryVisualizationIdUnique] DEFAULT (newid()),
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[IsCustomizable] [bit] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_IsCustomizable] DEFAULT ((1)),
[Name] [nvarchar] (100) COLLATE Latin1_General_CI_AI NOT NULL,
[SavedQueryVisualizationId] [uniqueidentifier] NOT NULL,
[PrimaryEntityTypeCode] [int] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_PrimaryEntityTypeCode] DEFAULT ((0)),
[WebResourceId] [uniqueidentifier] NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_IsManaged] DEFAULT ((0)),
[OrganizationId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[CanBeDeleted] [bit] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_CanBeDeleted] DEFAULT ((1)),
[Type] [int] NULL CONSTRAINT [DF_SavedQueryVisualizationBase_Type] DEFAULT ((0)),
[ChartType] [int] NOT NULL CONSTRAINT [DF_SavedQueryVisualizationBase_ChartType] DEFAULT ((0))
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[SavedQueryVisualizationBase] ADD CONSTRAINT [cndx_PrimaryKey_SavedQueryVisualization] PRIMARY KEY CLUSTERED  ([SavedQueryVisualizationId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SavedQueryVisualizationName] ON [dbo].[SavedQueryVisualizationBase] ([Name]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SavedQueryVisualizationBase] ADD CONSTRAINT [UQ_SavedQueryVisualizationBase_SavedQueryVisualizationIdUnique] UNIQUE NONCLUSTERED  ([SavedQueryVisualizationIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SavedQueryVisualizationBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_webresource_savedqueryvisualizations] ON [dbo].[SavedQueryVisualizationBase] ([WebResourceId]) WHERE ([WebResourceId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
