CREATE TABLE [dbo].[DependencyFeatureBase] (
    [IntroducedVersion]         NVARCHAR (48)    NULL,
    [DependencyFeatureId]       UNIQUEIDENTIFIER NOT NULL,
    [IsManaged]                 BIT              CONSTRAINT [DF_DependencyFeatureBase_IsManaged] DEFAULT ((0)) NOT NULL,
    [ComponentState]            INT              CONSTRAINT [DF_DependencyFeatureBase_ComponentState] DEFAULT ((0)) NOT NULL,
    [SolutionId]                UNIQUEIDENTIFIER CONSTRAINT [DF_DependencyFeatureBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238') NOT NULL,
    [DependencyFeatureIdUnique] UNIQUEIDENTIFIER CONSTRAINT [DF_DependencyFeatureBase_DependencyFeatureIdUnique] DEFAULT (newid()) ROWGUIDCOL NOT NULL,
    [OverwriteTime]             DATETIME         CONSTRAINT [DF_DependencyFeatureBase_OverwriteTime] DEFAULT ((0)) NOT NULL,
    [SupportingSolutionId]      UNIQUEIDENTIFIER NULL
);

