CREATE TABLE [dbo].[EntitlementBase] (
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [RemainingTerms]            DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]      INT              NULL,
    [EntitlementTemplateId]     UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [KbAccessLevel]             INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NOT NULL,
    [AllocationTypeCode]        INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [StartDate]                 DATETIME         NULL,
    [EndDate]                   DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [DecreaseRemainingOn]       INT              NULL,
    [StateCode]                 INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [RestrictCaseCreation]      BIT              NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [AccountId]                 UNIQUEIDENTIFIER NULL,
    [ContactId]                 UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [AccountIdName]             NVARCHAR (4000)  NULL,
    [ContactIdName]             NVARCHAR (160)   NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_EntitlementBase_OwnerIdType] DEFAULT ((8)) NULL,
    [CustomerIdType]            INT              NULL,
    [AccountIdYomiName]         NVARCHAR (4000)  NULL,
    [ContactIdYomiName]         NVARCHAR (450)   NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    CONSTRAINT [cndx_PrimaryKey_Entitlement] PRIMARY KEY CLUSTERED ([EntitlementId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_entitlement_Account] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]) NOT FOR REPLICATION,
    CONSTRAINT [business_unit_entitlement] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [contact_entitlement_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [entitlementtemplateid_RelationShip] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_entitlement] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_Entitlement] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EntitlementBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[EntitlementBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementBase]([Name] ASC) WITH (FILLFACTOR = 80);

