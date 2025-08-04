CREATE TABLE [dbo].[CustomerRelationshipBase] (
    [VersionNumber]           ROWVERSION       NULL,
    [CreatedOn]               DATETIME         NULL,
    [ModifiedOn]              DATETIME         NULL,
    [CustomerRoleId]          UNIQUEIDENTIFIER NULL,
    [CustomerRelationshipId]  UNIQUEIDENTIFIER NOT NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [PartnerId]               UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [ConverseRelationshipId]  UNIQUEIDENTIFIER NULL,
    [PartnerRoleId]           UNIQUEIDENTIFIER NULL,
    [CustomerRoleDescription] NVARCHAR (MAX)   NULL,
    [CustomerId]              UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [PartnerRoleDescription]  NVARCHAR (MAX)   NULL,
    [PartnerIdType]           INT              NULL,
    [CustomerIdType]          INT              NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [ImportSequenceNumber]    INT              NULL,
    [UniqueDscId]             UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_CustomerRelationshipBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [PartnerIdName]           NVARCHAR (4000)  NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_CustomerRelationshipBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [CustomerIdName]          NVARCHAR (4000)  NULL,
    [PartnerIdYomiName]       NVARCHAR (4000)  NULL,
    [CustomerIdYomiName]      NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomerRelationship] PRIMARY KEY CLUSTERED ([CustomerRelationshipId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_customer_relationship] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [customer_relationship_converse_relationship] FOREIGN KEY ([ConverseRelationshipId]) REFERENCES [dbo].[CustomerRelationshipBase] ([CustomerRelationshipId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_customerrelationships] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [relationship_role_customer_role] FOREIGN KEY ([CustomerRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId]) NOT FOR REPLICATION,
    CONSTRAINT [relationship_role_partner_role] FOREIGN KEY ([PartnerRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CustomerRelationshipBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_customer]
    ON [dbo].[CustomerRelationshipBase]([CustomerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_role]
    ON [dbo].[CustomerRelationshipBase]([CustomerRoleId] ASC) WHERE ([CustomerRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_partner_role]
    ON [dbo].[CustomerRelationshipBase]([PartnerRoleId] ASC) WHERE ([PartnerRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_partner]
    ON [dbo].[CustomerRelationshipBase]([PartnerId] ASC, [PartnerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_customer_relationship]
    ON [dbo].[CustomerRelationshipBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomerRelationshipBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerRelationship]
    ON [dbo].[CustomerRelationshipBase]([CustomerId] ASC, [CustomerIdType] ASC, [PartnerId] ASC, [PartnerIdType] ASC, [CustomerRoleId] ASC, [PartnerRoleId] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_relationship_converse_relationship]
    ON [dbo].[CustomerRelationshipBase]([ConverseRelationshipId] ASC) WHERE ([ConverseRelationshipId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CustomerRelationshipBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_CustomerRoleId]
    ON [dbo].[CustomerRelationshipBase]([CustomerRoleId] ASC) WITH (FILLFACTOR = 80);

