CREATE TABLE [dbo].[DisplayStringMapBase]
(
[ObjectTypeCode] [int] NOT NULL,
[DisplayStringMapId] [uniqueidentifier] NOT NULL,
[DisplayStringId] [uniqueidentifier] NOT NULL,
[IsManaged] [bit] NOT NULL CONSTRAINT [DF_DisplayStringMapBase_IsManaged] DEFAULT ((0)),
[SolutionId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_DisplayStringMapBase_SolutionId] DEFAULT ('fd140aad-4df4-11dd-bd17-0019b9312238'),
[SupportingSolutionId] [uniqueidentifier] NULL,
[ComponentState] [int] NOT NULL CONSTRAINT [DF_DisplayStringMapBase_ComponentState] DEFAULT ((0)),
[DisplayStringMapIdUnique] [uniqueidentifier] NOT NULL ROWGUIDCOL CONSTRAINT [DF_DisplayStringMapBase_DisplayStringMapIdUnique] DEFAULT (newid()),
[OverwriteTime] [datetime] NOT NULL CONSTRAINT [DF_DisplayStringMapBase_OverwriteTime] DEFAULT ((0))
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DisplayStringMapBase] ADD CONSTRAINT [cndx_PrimaryKey_DisplayStringMap] PRIMARY KEY CLUSTERED  ([DisplayStringMapId], [SolutionId], [ComponentState], [OverwriteTime]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_DisplayString_DisplayStringMaps] ON [dbo].[DisplayStringMapBase] ([DisplayStringId]) INCLUDE ([ComponentState]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[DisplayStringMapBase] ADD CONSTRAINT [UQ_DisplayStringMapBase_DisplayStringMapIdUnique] UNIQUE NONCLUSTERED  ([DisplayStringMapIdUnique]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
