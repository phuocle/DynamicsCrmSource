CREATE TABLE [dbo].[SolutionBase]
(
[ModifiedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[PinpointAssetId] [nvarchar] (255) COLLATE Latin1_General_CI_AI NULL,
[UniqueName] [nvarchar] (65) COLLATE Latin1_General_CI_AI NOT NULL,
[Description] [nvarchar] (2000) COLLATE Latin1_General_CI_AI NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[PinpointSolutionId] [bigint] NULL,
[PinpointSolutionDefaultLocale] [nvarchar] (16) COLLATE Latin1_General_CI_AI NULL,
[SolutionId] [uniqueidentifier] NOT NULL,
[FriendlyName] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[IsVisible] [bit] NULL CONSTRAINT [DF_SolutionBase_IsVisible] DEFAULT ((1)),
[Version] [nvarchar] (256) COLLATE Latin1_General_CI_AI NOT NULL CONSTRAINT [DF_SolutionBase_Version] DEFAULT (''),
[ConfigurationPageId] [uniqueidentifier] NULL,
[IsManaged] [bit] NULL,
[CreatedOn] [datetime] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[PublisherId] [uniqueidentifier] NOT NULL,
[InstalledOn] [datetime] NULL,
[SolutionPackageVersion] [nvarchar] (256) COLLATE Latin1_General_CI_AI NULL,
[ParentSolutionId] [uniqueidentifier] NULL,
[IsInternal] [bit] NULL CONSTRAINT [DF_SolutionBase_IsInternal] DEFAULT ((0)),
[SolutionType] [int] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SolutionBase] ADD CONSTRAINT [cndx_PrimaryKey_Solution] PRIMARY KEY CLUSTERED  ([SolutionId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_UniqueName] ON [dbo].[SolutionBase] ([UniqueName]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[SolutionBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[SolutionBase] ADD CONSTRAINT [publisher_solution] FOREIGN KEY ([PublisherId]) REFERENCES [dbo].[PublisherBase] ([PublisherId])
GO
ALTER TABLE [dbo].[SolutionBase] ADD CONSTRAINT [solution_configuration_webresource] FOREIGN KEY ([ConfigurationPageId]) REFERENCES [dbo].[WebResourceBaseIds] ([WebResourceId])
GO
ALTER TABLE [dbo].[SolutionBase] ADD CONSTRAINT [solution_parent_solution] FOREIGN KEY ([ParentSolutionId]) REFERENCES [dbo].[SolutionBase] ([SolutionId])
GO
