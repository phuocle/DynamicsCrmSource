CREATE TABLE [dbo].[CustomerOpportunityRoleBase] (
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Description]               NVARCHAR (500)   NULL,
    [ModifiedOn]                DATETIME         NULL,
    [CustomerId]                UNIQUEIDENTIFIER NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CustomerOpportunityRoleId] UNIQUEIDENTIFIER NOT NULL,
    [OpportunityRoleId]         UNIQUEIDENTIFIER NULL,
    [OpportunityId]             UNIQUEIDENTIFIER NOT NULL,
    [CustomerIdType]            INT              NULL,
    [UniqueDscId]               UNIQUEIDENTIFIER NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomerOpportunityRole] PRIMARY KEY CLUSTERED ([CustomerOpportunityRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_customer_opportunity_roles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [opportunity_customer_opportunity_roles] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_customeropportunityroles] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [relationship_role_customer_opportunity_roles] FOREIGN KEY ([OpportunityRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId]) NOT FOR REPLICATION
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomerOpportunityRoleBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([OpportunityRoleId] ASC) WHERE ([OpportunityRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([OpportunityId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerOpportunityRole]
    ON [dbo].[CustomerOpportunityRoleBase]([CustomerId] ASC, [CustomerIdType] ASC, [OpportunityId] ASC, [OpportunityRoleId] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([CustomerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CustomerOpportunityRoleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_OpportunityRoleId]
    ON [dbo].[CustomerOpportunityRoleBase]([OpportunityRoleId] ASC) WITH (FILLFACTOR = 80);

