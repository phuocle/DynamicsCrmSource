CREATE TABLE [dbo].[CustomerOpportunityRoleBase]
(
[CreatedBy] [uniqueidentifier] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[OwningBusinessUnit] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[Description] [nvarchar] (500) COLLATE Latin1_General_CI_AI NULL,
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
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD CONSTRAINT [cndx_PrimaryKey_CustomerOpportunityRole] PRIMARY KEY CLUSTERED  ([CustomerOpportunityRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase] ([CustomerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerOpportunityRole] ON [dbo].[CustomerOpportunityRoleBase] ([CustomerId], [CustomerIdType], [OpportunityId], [OpportunityRoleId], [UniqueDscId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase] ([OpportunityId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase] ([OpportunityRoleId]) WHERE ([OpportunityRoleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_OpportunityRoleId] ON [dbo].[CustomerOpportunityRoleBase] ([OpportunityRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CustomerOpportunityRoleBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_customer_opportunity_roles] ON [dbo].[CustomerOpportunityRoleBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomerOpportunityRoleBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD CONSTRAINT [business_customer_opportunity_roles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD CONSTRAINT [opportunity_customer_opportunity_roles] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD CONSTRAINT [owner_customeropportunityroles] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] ADD CONSTRAINT [relationship_role_customer_opportunity_roles] FOREIGN KEY ([OpportunityRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
