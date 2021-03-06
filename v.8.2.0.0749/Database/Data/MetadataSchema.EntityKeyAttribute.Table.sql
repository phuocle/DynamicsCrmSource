USE [D365_MSCRM]
GO
/****** Object:  Table [MetadataSchema].[EntityKeyAttribute]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [MetadataSchema].[EntityKeyAttribute](
	[EntityKeyAttributeId] [uniqueidentifier] NOT NULL,
	[EntityKeyId] [uniqueidentifier] NOT NULL,
	[AttributeId] [uniqueidentifier] NOT NULL,
	[IndexOrder] [int] NOT NULL,
	[EntityKeyAttributeRowId] [uniqueidentifier] NOT NULL,
	[ComponentState] [tinyint] NOT NULL,
	[SolutionId] [uniqueidentifier] NOT NULL,
	[OverwriteTime] [datetime] NOT NULL,
	[SupportingSolutionId] [uniqueidentifier] NOT NULL,
	[IsManaged] [bit] NOT NULL,
	[VersionNumber] [timestamp] NOT NULL,
 CONSTRAINT [XPKEntityKeyAttribute] PRIMARY KEY CLUSTERED 
(
	[EntityKeyAttributeId] ASC,
	[SolutionId] ASC,
	[ComponentState] ASC,
	[OverwriteTime] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [ndx_AttributeId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_AttributeId] ON [MetadataSchema].[EntityKeyAttribute]
(
	[AttributeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EntityKeyAttribute_SolutionId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntityKeyAttribute_SolutionId] ON [MetadataSchema].[EntityKeyAttribute]
(
	[SolutionId] ASC,
	[OverwriteTime] ASC
)
INCLUDE ( 	[EntityKeyAttributeId],
	[VersionNumber]) WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [ndx_EntityKeyId]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [ndx_EntityKeyId] ON [MetadataSchema].[EntityKeyAttribute]
(
	[EntityKeyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD  DEFAULT (newid()) FOR [EntityKeyAttributeRowId]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD  DEFAULT ((0)) FOR [ComponentState]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD  DEFAULT ('fd140aae-4df4-11dd-bd17-0019b9312238') FOR [SolutionId]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD  DEFAULT ((0)) FOR [OverwriteTime]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [SupportingSolutionId]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] ADD  DEFAULT ((0)) FOR [IsManaged]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute]  WITH CHECK ADD  CONSTRAINT [entitykeyattribute_attribute] FOREIGN KEY([AttributeId])
REFERENCES [dbo].[AttributeIds] ([AttributeId])
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] CHECK CONSTRAINT [entitykeyattribute_attribute]
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute]  WITH CHECK ADD  CONSTRAINT [entitykeyattribute_entitykey] FOREIGN KEY([EntityKeyId])
REFERENCES [dbo].[EntityKeyIds] ([EntityKeyId])
GO
ALTER TABLE [MetadataSchema].[EntityKeyAttribute] CHECK CONSTRAINT [entitykeyattribute_entitykey]
GO
