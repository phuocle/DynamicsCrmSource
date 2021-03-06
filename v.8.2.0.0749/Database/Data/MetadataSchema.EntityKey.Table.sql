USE [D365_MSCRM]
GO
/****** Object:  Table [MetadataSchema].[EntityKey]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [MetadataSchema].[EntityKey](
	[EntityKeyId] [uniqueidentifier] NOT NULL,
	[EntityId] [uniqueidentifier] NOT NULL,
	[EntityKeyRowId] [uniqueidentifier] NOT NULL,
	[ComponentState] [tinyint] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NOT NULL,
	[Name] [nvarchar](64) NOT NULL,
	[LogicalName] [nvarchar](64) NOT NULL,
	[IndexId] [uniqueidentifier] NOT NULL,
	[IntroducedVersion] [nvarchar](48) NULL,
	[IsCustomizable] [bit] NULL,
	[IsManaged] [bit] NOT NULL,
	[EntityKeyIndexStatus] [int] NOT NULL,
	[AsyncJobId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NOT NULL,
 CONSTRAINT [XPKEntityKey] PRIMARY KEY CLUSTERED 
(
	[EntityKeyId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_EntityId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntityId] ON [MetadataSchema].[EntityKey]
(
	[EntityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EntityKey_SolutionId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntityKey_SolutionId] ON [MetadataSchema].[EntityKey]
(
	[SolutionId] ASC,
	[OverwriteTime] ASC
)
INCLUDE ( 	[EntityKeyId],
	[VersionNumber]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT (newid()) FOR [EntityKeyRowId]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [SupportingSolutionId]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [IndexId]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ((0)) FOR [IsCustomizable]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ((0)) FOR [EntityKeyIndexStatus]
GO
ALTER TABLE [MetadataSchema].[EntityKey] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [AsyncJobId]
GO
ALTER TABLE [MetadataSchema].[EntityKey]  WITH CHECK ADD  CONSTRAINT [entitykey_entity] FOREIGN KEY([EntityId])
REFERENCES [dbo].[EntityIds] ([EntityId])
GO
ALTER TABLE [MetadataSchema].[EntityKey] CHECK CONSTRAINT [entitykey_entity]
GO
