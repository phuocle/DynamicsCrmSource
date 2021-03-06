USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[CustomerOpportunityRoleBase]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CustomerOpportunityRoleBase](
	[CreatedBy] [uniqueidentifier] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[OwningBusinessUnit] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[Description] [nvarchar](500) NULL,
	[ModifiedOn] [datetime] NULL,
	[CustomerId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[CustomerOpportunityRoleId] [uniqueidentifier] NOT NULL,
	[OpportunityRoleId] [uniqueidentifier] NULL,
	[OpportunityId] [uniqueidentifier] NOT NULL,
	[CustomerIdType] [int] NULL,
	[UniqueDscId] [uniqueidentifier] NULL,
	[OverriddenCreatedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
	[CustomerIdName] [nvarchar](4000) NULL,
	[OwnerIdType] [int] NOT NULL,
	[CustomerIdYomiName] [nvarchar](4000) NULL,
 CONSTRAINT [cndx_PrimaryKey_CustomerOpportunityRole] PRIMARY KEY CLUSTERED 
(
	[CustomerOpportunityRoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_business_customer_opportunity_roles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase]
(
	[OwningBusinessUnit] ASC
)
WHERE ([OwningBusinessUnit] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_for_cascaderelationship_relationship_role_customer_opportunity_roles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase]
(
	[OpportunityRoleId] ASC
)
WHERE ([OpportunityRoleId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomerOpportunityRoleBase]
(
	[VersionNumber] ASC
)
WHERE ([VersionNumber] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_contact_customer_opportunity_roles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase]
(
	[CustomerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_for_cascaderelationship_opportunity_customer_opportunity_roles]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase]
(
	[OpportunityId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Security]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CustomerOpportunityRoleBase]
(
	[OwnerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [ndx_Unique_CustomerOpportunityRole]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerOpportunityRole] ON [dbo].[CustomerOpportunityRoleBase]
(
	[CustomerId] ASC,
	[CustomerIdType] ASC,
	[OpportunityId] ASC,
	[OpportunityRoleId] ASC,
	[UniqueDscId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD  CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD  CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase]  WITH CHECK ADD  CONSTRAINT [business_customer_opportunity_roles] FOREIGN KEY([OwningBusinessUnit])
REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] CHECK CONSTRAINT [business_customer_opportunity_roles]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase]  WITH CHECK ADD  CONSTRAINT [opportunity_customer_opportunity_roles] FOREIGN KEY([OpportunityId])
REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] CHECK CONSTRAINT [opportunity_customer_opportunity_roles]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase]  WITH CHECK ADD  CONSTRAINT [owner_customeropportunityroles] FOREIGN KEY([OwnerId])
REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] CHECK CONSTRAINT [owner_customeropportunityroles]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase]  WITH CHECK ADD  CONSTRAINT [relationship_role_customer_opportunity_roles] FOREIGN KEY([OpportunityRoleId])
REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] CHECK CONSTRAINT [relationship_role_customer_opportunity_roles]
GO
