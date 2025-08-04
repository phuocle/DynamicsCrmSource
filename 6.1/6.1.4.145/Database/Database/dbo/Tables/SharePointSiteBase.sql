CREATE TABLE [dbo].[SharePointSiteBase] (
    [IsGridPresent]             BIT              NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [AbsoluteURL]               NVARCHAR (2000)  NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [FolderStructureEntity]     INT              NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [ValidationStatus]          INT              NULL,
    [RelativeUrl]               NVARCHAR (160)   NULL,
    [SharePointSiteId]          UNIQUEIDENTIFIER NOT NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SharePointSiteBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [SiteCollectionId]          UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ImportSequenceNumber]      INT              NULL,
    [IsDefault]                 BIT              NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [ValidationStatusErrorCode] INT              NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [LastValidated]             DATETIME         NULL,
    [ParentSite]                UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SharePointSiteBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ParentSiteObjectTypeCode]  INT              NULL,
    [ParentSiteName]            NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointSite] PRIMARY KEY CLUSTERED ([SharePointSiteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_sharepointsites] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_sharepointsite] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [TransactionCurrency_SharePointSite] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointsites]
    ON [dbo].[SharePointSiteBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SharePointSiteBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SharePointSiteBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointsite_parentsite_sharepointsite]
    ON [dbo].[SharePointSiteBase]([ParentSite] ASC, [ParentSiteObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SharePointSiteBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RelativeUrl]
    ON [dbo].[SharePointSiteBase]([RelativeUrl] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SharePointSiteBase]([Name] ASC) WITH (FILLFACTOR = 80);

