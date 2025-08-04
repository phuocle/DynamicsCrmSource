CREATE TABLE [dbo].[SharePointDocumentLocationBase] (
    [VersionNumber]                ROWVERSION       NULL,
    [StateCode]                    INT              NOT NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [RelativeUrl]                  NVARCHAR (255)   NULL,
    [AbsoluteURL]                  NVARCHAR (2000)  NULL,
    [Name]                         NVARCHAR (160)   NOT NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [StatusCode]                   INT              NULL,
    [OwnerId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [RegardingObjectId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [SiteCollectionId]             UNIQUEIDENTIFIER NULL,
    [SharePointDocumentLocationId] UNIQUEIDENTIFIER NOT NULL,
    [ParentSiteOrLocation]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]         INT              NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [CreatedOn]                    DATETIME         NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [ParentSiteOrLocationName]     NVARCHAR (4000)  NULL,
    [ParentSiteOrLocationTypeCode] INT              NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    [RegardingObjectIdName]        NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName]    NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointDocumentLocation] PRIMARY KEY CLUSTERED ([SharePointDocumentLocationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_sharepointdocumentlocation] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_sharepointdocumentlocation] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_SharePointDocumentLocation] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointdocumentlocation_parent_sharepointsite]
    ON [dbo].[SharePointDocumentLocationBase]([ParentSiteOrLocation] ASC, [ParentSiteOrLocationTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SharePointDocumentLocationBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectId_SharePointDocumentLocation]
    ON [dbo].[SharePointDocumentLocationBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SharePointDocumentLocationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SharePointDocumentLocationBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointdocumentlocations]
    ON [dbo].[SharePointDocumentLocationBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SharePointDocumentLocationBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RelativeUrl]
    ON [dbo].[SharePointDocumentLocationBase]([RelativeUrl] ASC) WITH (FILLFACTOR = 80);

