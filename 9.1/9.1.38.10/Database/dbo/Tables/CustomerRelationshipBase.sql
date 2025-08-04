CREATE TABLE [dbo].[CustomerRelationshipBase] (
    [ModifiedOnBehalfBy]      UNIQUEIDENTIFIER NULL,
    [OwnerId]                 UNIQUEIDENTIFIER CONSTRAINT [DF_CustomerRelationshipBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedBy]              UNIQUEIDENTIFIER NULL,
    [ModifiedOn]              DATETIME         NULL,
    [PartnerId]               UNIQUEIDENTIFIER NOT NULL,
    [CustomerRelationshipId]  UNIQUEIDENTIFIER NOT NULL,
    [UniqueDscId]             UNIQUEIDENTIFIER NULL,
    [PartnerRoleId]           UNIQUEIDENTIFIER NULL,
    [PartnerRoleDescription]  NVARCHAR (MAX)   NULL,
    [CreatedOn]               DATETIME         NULL,
    [ConverseRelationshipId]  UNIQUEIDENTIFIER NULL,
    [CustomerRoleId]          UNIQUEIDENTIFIER NULL,
    [CustomerRoleDescription] NVARCHAR (MAX)   NULL,
    [OverriddenCreatedOn]     DATETIME         NULL,
    [ImportSequenceNumber]    INT              NULL,
    [CustomerId]              UNIQUEIDENTIFIER NOT NULL,
    [OwningBusinessUnit]      UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]       UNIQUEIDENTIFIER NULL,
    [VersionNumber]           ROWVERSION       NULL,
    [CreatedBy]               UNIQUEIDENTIFIER NULL,
    [CustomerIdType]          INT              NULL,
    [PartnerIdName]           NVARCHAR (4000)  NULL,
    [OwnerIdType]             INT              CONSTRAINT [DF_CustomerRelationshipBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [PartnerIdType]           INT              NULL,
    [CustomerIdName]          NVARCHAR (4000)  NULL,
    [PartnerIdYomiName]       NVARCHAR (4000)  NULL,
    [CustomerIdYomiName]      NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomerRelationship] PRIMARY KEY CLUSTERED ([CustomerRelationshipId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_customer_relationship] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [customer_relationship_converse_relationship] FOREIGN KEY ([ConverseRelationshipId]) REFERENCES [dbo].[CustomerRelationshipBase] ([CustomerRelationshipId]),
    CONSTRAINT [owner_customerrelationships] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [relationship_role_customer_role] FOREIGN KEY ([CustomerRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId]),
    CONSTRAINT [relationship_role_partner_role] FOREIGN KEY ([PartnerRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CustomerRelationshipBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CustomerRelationshipBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CustomerRelationshipBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomerRelationshipBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerRelationship]
    ON [dbo].[CustomerRelationshipBase]([CustomerId] ASC, [CustomerIdType] ASC, [PartnerId] ASC, [PartnerIdType] ASC, [CustomerRoleId] ASC, [PartnerRoleId] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_customer_relationship_converse_relationship]
    ON [dbo].[CustomerRelationshipBase]([ConverseRelationshipId] ASC) WHERE ([ConverseRelationshipId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_customer]
    ON [dbo].[CustomerRelationshipBase]([CustomerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_partner_role]
    ON [dbo].[CustomerRelationshipBase]([PartnerRoleId] ASC) WHERE ([PartnerRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_customer_relationship]
    ON [dbo].[CustomerRelationshipBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_account_customer_relationship_partner]
    ON [dbo].[CustomerRelationshipBase]([PartnerId] ASC, [PartnerIdType] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_role]
    ON [dbo].[CustomerRelationshipBase]([CustomerRoleId] ASC) WHERE ([CustomerRoleId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_CustomerRoleId]
    ON [dbo].[CustomerRelationshipBase]([CustomerRoleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_B5CC2D8E9768DD11B1B000155D869F00]
    ON [dbo].[CustomerRelationshipBase]([CustomerRelationshipId] ASC)
    INCLUDE([CustomerRoleId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

