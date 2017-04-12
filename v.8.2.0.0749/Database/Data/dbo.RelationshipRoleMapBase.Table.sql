USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[RelationshipRoleMapBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[RelationshipRoleMapBase](
	[ModifiedOn] [datetime] NULL,
	[CreatedOn] [datetime] NULL,
	[RelationshipRoleMapId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[VersionNumber] [timestamp] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[AssociateObjectTypeCode] [int] NOT NULL,
	[RelationshipRoleId] [uniqueidentifier] NOT NULL,
	[PrimaryObjectTypeCode] [int] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_RelationshipRoleMap] PRIMARY KEY CLUSTERED 
(
	[RelationshipRoleMapId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [AK1_RelationshipRoleMapBase]    Script Date: 4/10/2017 9:59:56 PM ******/
ALTER TABLE [dbo].[RelationshipRoleMapBase] ADD  CONSTRAINT [AK1_RelationshipRoleMapBase] UNIQUE NONCLUSTERED 
(
	[RelationshipRoleId] ASC,
	[PrimaryObjectTypeCode] ASC,
	[AssociateObjectTypeCode] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[RelationshipRoleMapBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_relationship_role_relationship_role_map]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_relationship_role_relationship_role_map] ON [dbo].[RelationshipRoleMapBase]
(
	[RelationshipRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[RelationshipRoleMapBase]  WITH CHECK ADD  CONSTRAINT [relationship_role_relationship_role_map] FOREIGN KEY([RelationshipRoleId])
REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
ALTER TABLE [dbo].[RelationshipRoleMapBase] CHECK CONSTRAINT [relationship_role_relationship_role_map]
GO
