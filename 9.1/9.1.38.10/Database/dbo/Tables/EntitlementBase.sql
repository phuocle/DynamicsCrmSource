CREATE TABLE [dbo].[EntitlementBase] (
    [EntitlementId]             UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                 DATETIME         NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [OwnerId]                   UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_EntitlementBase_OwnerIdType] DEFAULT ((8)) NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [EmailAddress]              NVARCHAR (256)   NULL,
    [ImportSequenceNumber]      INT              NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NULL,
    [ProcessId]                 UNIQUEIDENTIFIER NULL,
    [StageId]                   UNIQUEIDENTIFIER NULL,
    [TraversedPath]             NVARCHAR (1250)  NULL,
    [AllocationTypeCode]        INT              NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [CustomerId]                UNIQUEIDENTIFIER NULL,
    [DecreaseRemainingOn]       INT              NULL,
    [EndDate]                   DATETIME         NULL,
    [EntitlementTemplateId]     UNIQUEIDENTIFIER NULL,
    [KbAccessLevel]             INT              NULL,
    [RemainingTerms]            DECIMAL (23, 10) NULL,
    [RestrictCaseCreation]      BIT              NULL,
    [SLAId]                     UNIQUEIDENTIFIER NULL,
    [StartDate]                 DATETIME         NULL,
    [StateCode]                 INT              NULL,
    [StatusCode]                INT              NULL,
    [TotalTerms]                DECIMAL (23, 10) NULL,
    [IsDefault]                 BIT              NULL,
    [AccountId]                 UNIQUEIDENTIFIER NULL,
    [ContactId]                 UNIQUEIDENTIFIER NULL,
    [CustomerIdName]            NVARCHAR (4000)  NULL,
    [CustomerIdType]            INT              NULL,
    [CustomerIdYomiName]        NVARCHAR (4000)  NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [AccountIdName]             NVARCHAR (4000)  NULL,
    [AccountIdYomiName]         NVARCHAR (4000)  NULL,
    [ContactIdName]             NVARCHAR (160)   NULL,
    [ContactIdYomiName]         NVARCHAR (450)   NULL,
    [entitytype]                INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Entitlement] PRIMARY KEY CLUSTERED ([EntitlementId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_entitlement_Account] FOREIGN KEY ([AccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [business_unit_entitlement] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [contact_entitlement_ContactId] FOREIGN KEY ([ContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [entitlementtemplateid_RelationShip] FOREIGN KEY ([EntitlementTemplateId]) REFERENCES [dbo].[EntitlementTemplateBase] ([EntitlementTemplateId]),
    CONSTRAINT [owner_entitlement] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_Entitlement] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[EntitlementBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[EntitlementBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[EntitlementBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[EntitlementBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[EntitlementBase]([Name] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_customerid]
    ON [dbo].[EntitlementBase]([CustomerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_7B0A14FFECA440CF9418F65BED24FA30]
    ON [dbo].[EntitlementBase]([EntitlementId] ASC)
    INCLUDE([Name], [StateCode], [CustomerId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName], [StartDate], [EndDate], [SLAId], [AllocationTypeCode], [RemainingTerms], [entitytype], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_7B0A14FFECA440CF9418F65BED24FA30]
    ON [dbo].[EntitlementBase]([Name] ASC, [EntitlementId] ASC)
    INCLUDE([StateCode], [CustomerId], [CustomerIdYomiName], [CustomerIdType], [CustomerIdName], [StartDate], [EndDate], [SLAId], [AllocationTypeCode], [RemainingTerms], [entitytype], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_7B0A14FFECA440CF9418F65BED24FA30]
    ON [dbo].[EntitlementBase]([EntitlementId] ASC)
    INCLUDE([Name]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_AutoGen_Customer_customerid]
    ON [dbo].[EntitlementBase]([CustomerId] ASC, [CustomerIdType] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

