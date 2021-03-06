USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ConnectionRoleAssociation]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ConnectionRoleAssociation](
	[AssociatedConnectionRoleId] [uniqueidentifier] NOT NULL,
	[ConnectionRoleAssociationId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ConnectionRoleAssociation_ConnectionRoleAssociationId]  DEFAULT (newid()),
	[ConnectionRoleId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
 CONSTRAINT [cndx_primarykey_connectionroleassociation] PRIMARY KEY CLUSTERED 
(
	[ConnectionRoleAssociationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'a428209a-89af-4661-b9bb-9bf455dc0c09', N'4e024568-f41d-e711-80d3-00155d00662d', N'63e69a22-8e7f-4524-be97-37e05480f7f0')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'35a23b91-ec62-41ea-b5e5-c59b689ff0b4', N'4b024568-f41d-e711-80d3-00155d00662d', N'1eb54ab1-58b7-4d14-bf39-4f3e402616e8')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'eda69fc6-0b5f-44fb-b584-7dfeb8a925af', N'47024568-f41d-e711-80d3-00155d00662d', N'df0bf69f-333c-4e9b-86e7-4ff737bc9343')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'5a18dfc8-0b8b-40c7-9381-cce1c485822d', N'51024568-f41d-e711-80d3-00155d00662d', N'cffe4a59-ce11-4fca-b132-5985d3917d26')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'ee375944-5415-437d-9336-7698cf665b26', N'46024568-f41d-e711-80d3-00155d00662d', N'ee375944-5415-437d-9336-7698cf665b26')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'df0bf69f-333c-4e9b-86e7-4ff737bc9343', N'48024568-f41d-e711-80d3-00155d00662d', N'eda69fc6-0b5f-44fb-b584-7dfeb8a925af')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'3a71217e-5941-4c4e-a6e8-7fb4df02d5db', N'42024568-f41d-e711-80d3-00155d00662d', N'3a71217e-5941-4c4e-a6e8-7fb4df02d5db')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'63e69a22-8e7f-4524-be97-37e05480f7f0', N'4d024568-f41d-e711-80d3-00155d00662d', N'a428209a-89af-4661-b9bb-9bf455dc0c09')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'81bb2655-f19b-42b2-9c4b-d45b84c3f61c', N'53024568-f41d-e711-80d3-00155d00662d', N'131f5d06-9f36-4b59-b8b7-a1f7d6c5c5ef')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'39c47e14-d479-457b-bbb6-bd43af886a05', N'44024568-f41d-e711-80d3-00155d00662d', N'39c47e14-d479-457b-bbb6-bd43af886a05')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'1d5193d8-ca4c-4fe0-9b6b-fee6bb1961f6', N'4a024568-f41d-e711-80d3-00155d00662d', N'8899231d-1514-423c-a06b-bf269558200a')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'1eb54ab1-58b7-4d14-bf39-4f3e402616e8', N'4c024568-f41d-e711-80d3-00155d00662d', N'35a23b91-ec62-41ea-b5e5-c59b689ff0b4')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'cffe4a59-ce11-4fca-b132-5985d3917d26', N'52024568-f41d-e711-80d3-00155d00662d', N'5a18dfc8-0b8b-40c7-9381-cce1c485822d')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'131f5d06-9f36-4b59-b8b7-a1f7d6c5c5ef', N'54024568-f41d-e711-80d3-00155d00662d', N'81bb2655-f19b-42b2-9c4b-d45b84c3f61c')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'55316c77-54aa-4d80-8534-f8b5d9aadfc1', N'4f024568-f41d-e711-80d3-00155d00662d', N'90aba153-635b-44df-9742-f02feaff9a95')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'90aba153-635b-44df-9742-f02feaff9a95', N'50024568-f41d-e711-80d3-00155d00662d', N'55316c77-54aa-4d80-8534-f8b5d9aadfc1')
INSERT [dbo].[ConnectionRoleAssociation] ([AssociatedConnectionRoleId], [ConnectionRoleAssociationId], [ConnectionRoleId]) VALUES (N'8899231d-1514-423c-a06b-bf269558200a', N'49024568-f41d-e711-80d3-00155d00662d', N'1d5193d8-ca4c-4fe0-9b6b-fee6bb1961f6')
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ConnectionRoleAssociation]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_associated_connection_roles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_associated_connection_roles] ON [dbo].[ConnectionRoleAssociation]
(
	[AssociatedConnectionRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_unique_connection_role_associations]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_unique_connection_role_associations] ON [dbo].[ConnectionRoleAssociation]
(
	[ConnectionRoleId] ASC,
	[AssociatedConnectionRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation]  WITH CHECK ADD  CONSTRAINT [associated_connection_roles] FOREIGN KEY([AssociatedConnectionRoleId])
REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation] CHECK CONSTRAINT [associated_connection_roles]
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation]  WITH CHECK ADD  CONSTRAINT [connection_role_associations] FOREIGN KEY([ConnectionRoleId])
REFERENCES [dbo].[ConnectionRoleBaseIds] ([ConnectionRoleId])
GO
ALTER TABLE [dbo].[ConnectionRoleAssociation] CHECK CONSTRAINT [connection_role_associations]
GO
