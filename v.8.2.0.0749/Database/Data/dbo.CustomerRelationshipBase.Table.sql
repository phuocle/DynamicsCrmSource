USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CustomerRelationshipBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerRelationshipBase](
	[VersionNumber] [timestamp] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedOn] [datetime] NULL,
	[CustomerRoleId] [uniqueidentifier] NULL,
	[CustomerRelationshipId] [uniqueidentifier] NOT NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[PartnerId] [uniqueidentifier] NOT NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[ConverseRelationshipId] [uniqueidentifier] NULL,
	[PartnerRoleId] [uniqueidentifier] NULL,
	[CustomerRoleDescription] [nvarchar](max) NULL,
	[CustomerId] [uniqueidentifier] NOT NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[PartnerRoleDescription] [nvarchar](max) NULL,
	[PartnerIdType] [int] NULL,
	[CustomerIdType] [int] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[UniqueDscId] [uniqueidentifier] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[PartnerIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[PartnerIdYomiName] [nvarchar](4000) NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_CustomerRelationship] PRIMARY KEY CLUSTERED 
(
	[CustomerRelationshipId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_unit_customer_relationship]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_customer_relationship] ON [dbo].[CustomerRelationshipBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_customer_relationship_converse_relationship]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_relationship_converse_relationship] ON [dbo].[CustomerRelationshipBase]
(
	[ConverseRelationshipId] ASC
)
WHERE ([ConverseRelationshipId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_relationship_role_customer_role]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_role] ON [dbo].[CustomerRelationshipBase]
(
	[CustomerRoleId] ASC
)
WHERE ([CustomerRoleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_relationship_role_partner_role]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_partner_role] ON [dbo].[CustomerRelationshipBase]
(
	[PartnerRoleId] ASC
)
WHERE ([PartnerRoleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomerRelationshipBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_account_customer_relationship_customer]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_customer] ON [dbo].[CustomerRelationshipBase]
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_account_customer_relationship_partner]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_partner] ON [dbo].[CustomerRelationshipBase]
(
	[PartnerId] ASC,
	[PartnerIdType] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CustomerRelationshipBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Unique_CustomerRelationship]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerRelationship] ON [dbo].[CustomerRelationshipBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC,
	[PartnerId] ASC,
	[PartnerIdType] ASC,
	[CustomerRoleId] ASC,
	[PartnerRoleId] ASC,
	[UniqueDscId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD  CONSTRAINT [DF_CustomerRelationshipBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD  CONSTRAINT [DF_CustomerRelationshipBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase]  WITH CHECK ADD  CONSTRAINT [business_unit_customer_relationship] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] CHECK CONSTRAINT [business_unit_customer_relationship]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase]  WITH CHECK ADD  CONSTRAINT [customer_relationship_converse_relationship] FOREIGN KEY([ConverseRelationshipId])
REFERENCES [dbo].[CustomerRelationshipBase] ([CustomerRelationshipId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] CHECK CONSTRAINT [customer_relationship_converse_relationship]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase]  WITH CHECK ADD  CONSTRAINT [owner_customerrelationships] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] CHECK CONSTRAINT [owner_customerrelationships]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase]  WITH CHECK ADD  CONSTRAINT [relationship_role_customer_role] FOREIGN KEY([CustomerRoleId])
REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] CHECK CONSTRAINT [relationship_role_customer_role]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase]  WITH CHECK ADD  CONSTRAINT [relationship_role_partner_role] FOREIGN KEY([PartnerRoleId])
REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] CHECK CONSTRAINT [relationship_role_partner_role]
GO
