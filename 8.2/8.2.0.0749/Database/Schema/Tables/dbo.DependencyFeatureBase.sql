CREATE TABLE [dbo].[DependencyFeatureBase]
(
[IntroducedVersion] [nvarchar] (48) COLLATE Latin1_General_CI_AI NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_ComponentState] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_IsManaged] DEFAULT ((0)),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[DependencyFeatureIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_DependencyFeatureBase_DependencyFeatureIdUnique] DEFAULT (newid()),
[DependencyFeatureId] [uniqueidentifier] NOT NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_DependencyFeatureBase_OverwriteTime] DEFAULT ((0))
) ON [PRIMARY]
GO
