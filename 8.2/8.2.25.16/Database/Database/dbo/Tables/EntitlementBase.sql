CREATE TABLE [dbo].[EntitlementBase] (
    [OverriddenCreatedOn]       DATETIME         NULL,
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [RemainingTerms]            DECIMAL (23, 10) NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ImportSequenceNumber]      INT              NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [KbAccessLevel]             INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [EntitlementId]             UNIQUEIDENTIFIER NOT NULL,
    [AllocationTypeCode]        INT              NULL,
    [DecreaseRemainingOn]       INT              NULL,
    [EntitlementTemplateId]     UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [StartDate]                 DATETIME         NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [EndDate]                   DATETIME         NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [StateCode]                 INT              NULL,
    [RestrictCaseCreation]      BIT              NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [AccountId]                 UNIQUEIDENTIFIER NULL,
    [ContactId]                 UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [AccountIdName]             NVARCHAR (4000)  NULL,
    [ContactIdName]             NVARCHAR (160)   NULL,
    [CustomerIdType]            INT              NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_EntitlementBase_OwnerIdType] DEFAULT ((8)) NULL,
    [AccountIdYomiName]         NVARCHAR (4000)  NULL,
    [ContactIdYomiName]         NVARCHAR (450)   NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [IsDefault]                 BIT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Entitlement] PRIMARY KEY CLUSTERED ([EntitlementId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_entitlement_Account] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [business_unit_entitlement] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [contact_entitlement_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [entitlementtemplateid_RelationShip] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]),
    CONSTRAINT [owner_entitlement] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_Entitlement] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EntitlementBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[EntitlementBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_customerid]
    ON [dbo].[EntitlementBase]([CustomerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementBase]([Name] ASC) WITH (FILLFACTOR = 80);

