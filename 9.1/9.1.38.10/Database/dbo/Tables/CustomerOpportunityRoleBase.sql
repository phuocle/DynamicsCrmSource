CREATE TABLE [dbo].[CustomerOpportunityRoleBase] (
    [CustomerOpportunityRoleId] UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_CustomerOpportunityRoleBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [CustomerId]                UNIQUEIDENTIFIER NOT NULL,
    [Description]               NVARCHAR (500)   NULL,
    [OpportunityId]             UNIQUEIDENTIFIER NOT NULL,
    [OpportunityRoleId]         UNIQUEIDENTIFIER NULL,
    [UniqueDscId]               UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_CustomerOpportunityRole] PRIMARY KEY CLUSTERED ([CustomerOpportunityRoleId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_customer_opportunity_roles] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [opportunity_customer_opportunity_roles] FOREIGN KEY ([OpportunityId]) REFERENCES [dbo].[OpportunityBase] ([OpportunityId]),
    CONSTRAINT [owner_customeropportunityroles] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [relationship_role_customer_opportunity_roles] FOREIGN KEY ([OpportunityRoleId]) REFERENCES [dbo].[RelationshipRoleBase] ([RelationshipRoleId])
);


GO
ALTER TABLE [dbo].[CustomerOpportunityRoleBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CustomerOpportunityRoleBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE UNIQUE NONCLUSTERED INDEX [ndx_Unique_CustomerOpportunityRole]
    ON [dbo].[CustomerOpportunityRoleBase]([CustomerId] ASC, [CustomerIdType] ASC, [OpportunityId] ASC, [OpportunityRoleId] ASC, [UniqueDscId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CustomerOpportunityRoleBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_opportunity_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([OpportunityId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_relationship_role_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([OpportunityRoleId] ASC) WHERE ([OpportunityRoleId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_contact_customer_opportunity_roles]
    ON [dbo].[CustomerOpportunityRoleBase]([CustomerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_OpportunityRoleId]
    ON [dbo].[CustomerOpportunityRoleBase]([OpportunityRoleId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_8A94DB8EF53845C1AA68B2D04103F689]
    ON [dbo].[CustomerOpportunityRoleBase]([CustomerOpportunityRoleId] ASC)
    INCLUDE([OpportunityRoleId], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

