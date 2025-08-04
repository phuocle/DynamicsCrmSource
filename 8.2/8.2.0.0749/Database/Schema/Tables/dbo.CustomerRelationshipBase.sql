CREATE TABLE [dbo].[CustomerRelationshipBase]
(
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
[CustomerRoleDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[CustomerId] [uniqueidentifier] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[PartnerRoleDescription] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[PartnerIdType] [int] NULL,
[CustomerIdType] [int] NULL,
[OverriddenCreatedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[UniqueDscId] [uniqueidentifier] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_CustomerRelationshipBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[PartnerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_CustomerRelationshipBase_OwnerIdType] DEFAULT ((8)),
[CustomerIdName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[PartnerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL,
[CustomerIdYomiName] [nvarchar] (4000) COLLATE Latin1_General_CI_AI NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD CONSTRAINT [cndx_PrimaryKey_CustomerRelationship] PRIMARY KEY CLUSTERED  ([CustomerRelationshipId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_relationship_converse_relationship] ON [dbo].[CustomerRelationshipBase] ([ConverseRelationshipId]) WHERE ([ConverseRelationshipId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_customer] ON [dbo].[CustomerRelationshipBase] ([CustomerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerRelationship] ON [dbo].[CustomerRelationshipBase] ([CustomerId], [CustomerIdType], [PartnerId], [PartnerIdType], [CustomerRoleId], [PartnerRoleId], [UniqueDscId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_role] ON [dbo].[CustomerRelationshipBase] ([CustomerRoleId]) WHERE ([CustomerRoleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_QF_CustomerRoleId] ON [dbo].[CustomerRelationshipBase] ([CustomerRoleId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_Security] ON [dbo].[CustomerRelationshipBase] ([OwnerId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_customer_relationship] ON [dbo].[CustomerRelationshipBase] ([OwningBusinessUnit]) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_partner] ON [dbo].[CustomerRelationshipBase] ([PartnerId], [PartnerIdType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_partner_role] ON [dbo].[CustomerRelationshipBase] ([PartnerRoleId]) WHERE ([PartnerRoleId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[CustomerRelationshipBase] ([VersionNumber]) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD CONSTRAINT [business_unit_customer_relationship] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD CONSTRAINT [customer_relationship_converse_relationship] FOREIGN KEY ([ConverseRelationshipId]) REFERENCES [dbo].[CustomerRelationshipBase] ([CustomerRelationshipId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD CONSTRAINT [owner_customerrelationships] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD CONSTRAINT [relationship_role_customer_role] FOREIGN KEY ([CustomerRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
ALTER TABLE [dbo].[CustomerRelationshipBase] ADD CONSTRAINT [relationship_role_partner_role] FOREIGN KEY ([PartnerRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
GO
