CREATE TABLE [dbo].[EntityMapBase]
(
[TargetEntityName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[EntityMapId] [uniqueidentifier] NOT NULL,
[CreatedOn] [datetime] NULL,
[SourceEntityName] [nvarchar] (50) COLLATE Latin1_General_CI_AI NOT NULL,
[CreatedBy] [uniqueidentifier] NULL,
[OrganizationId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[VersionNumber] [timestamp] NULL,
[ModifiedOn] [datetime] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_EntityMapBase_ComponentState] DEFAULT ((0)),
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_EntityMapBase_IsManaged] DEFAULT ((0)),
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_EntityMapBase_OverwriteTime] DEFAULT ((0)),
[EntityMapIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_EntityMapBase_EntityMapIdUnique] DEFAULT (newid()),
[SupportingSolutionId] [uniqueidentifier] NULL,
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_EntityMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntityMapBase] ADD CONSTRAINT [cndx_PrimaryKey_EntityMap] PRIMARY KEY CLUSTERED  ([EntityMapId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[EntityMapBase] ADD CONSTRAINT [UQ_EntityMapBase_EntityMapIdUnique] UNIQUE NONCLUSTERED  ([EntityMapIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_SourceEntityName] ON [dbo].[EntityMapBase] ([SourceEntityName], [EntityMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_TargetEntityName] ON [dbo].[EntityMapBase] ([TargetEntityName], [EntityMapId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[EntityMapBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
