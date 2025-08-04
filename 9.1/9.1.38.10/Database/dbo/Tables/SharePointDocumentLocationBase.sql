CREATE TABLE [dbo].[SharePointDocumentLocationBase] (
    [VersionNumber]                ROWVERSION       NULL,
    [CreatedOn]                    DATETIME         NULL,
    [StateCode]                    INT              NOT NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [UserId]                       UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [RelativeUrl]                  NVARCHAR (255)   NULL,
    [StatusCode]                   INT              NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ServiceType]                  INT              CONSTRAINT [DF_SharePointDocumentLocationBase_ServiceType] DEFAULT ((0)) NOT NULL,
    [OwnerId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [LocationType]                 INT              CONSTRAINT [DF_SharePointDocumentLocationBase_LocationType] DEFAULT ((0)) NULL,
    [RegardingObjectId]            UNIQUEIDENTIFIER NULL,
    [SharePointDocumentLocationId] UNIQUEIDENTIFIER NOT NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [Name]                         NVARCHAR (160)   NOT NULL,
    [SiteCollectionId]             UNIQUEIDENTIFIER NULL,
    [ParentSiteOrLocation]         UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [ImportSequenceNumber]         INT              NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [AbsoluteURL]                  NVARCHAR (2000)  NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [RegardingObjectTypeCode]      INT              NULL,
    [ParentSiteOrLocationTypeCode] INT              NULL,
    [ParentSiteOrLocationName]     NVARCHAR (4000)  NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_SharePointDocumentLocationBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [RegardingObjectIdName]        NVARCHAR (4000)  NULL,
    [RegardingObjectIdYomiName]    NVARCHAR (4000)  NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointDocumentLocation] PRIMARY KEY CLUSTERED ([SharePointDocumentLocationId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_sharepointdocumentlocation] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_sharepointdocumentlocation] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_SharePointDocumentLocation] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SharePointDocumentLocationBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SharePointDocumentLocationBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SharePointDocumentLocationBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SharePointDocumentLocationBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SharePointDocumentLocationBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointdocumentlocation_parent_sharepointsite]
    ON [dbo].[SharePointDocumentLocationBase]([ParentSiteOrLocation] ASC, [ParentSiteOrLocationTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointdocumentlocations]
    ON [dbo].[SharePointDocumentLocationBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_RegardingObjectId_SharePointDocumentLocation]
    ON [dbo].[SharePointDocumentLocationBase]([RegardingObjectId] ASC, [RegardingObjectTypeCode] ASC) WHERE ([RegardingObjectId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SharePointDocumentLocationBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_CB19F66A2B284B89BD4C5DFA3976E366]
    ON [dbo].[SharePointDocumentLocationBase]([SharePointDocumentLocationId] ASC)
    INCLUDE([Name], [RelativeUrl]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_CB19F66A2B284B89BD4C5DFA3976E366]
    ON [dbo].[SharePointDocumentLocationBase]([Name] ASC, [SharePointDocumentLocationId] ASC)
    INCLUDE([RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [RegardingObjectIdName], [ParentSiteOrLocation], [ParentSiteOrLocationName], [ParentSiteOrLocationTypeCode], [RelativeUrl], [AbsoluteURL], [StateCode], [LocationType], [ServiceType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_CB19F66A2B284B89BD4C5DFA3976E366]
    ON [dbo].[SharePointDocumentLocationBase]([SharePointDocumentLocationId] ASC)
    INCLUDE([Name], [RegardingObjectId], [RegardingObjectTypeCode], [RegardingObjectIdYomiName], [RegardingObjectIdName], [ParentSiteOrLocation], [ParentSiteOrLocationName], [ParentSiteOrLocationTypeCode], [RelativeUrl], [AbsoluteURL], [StateCode], [LocationType], [ServiceType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RelativeUrl]
    ON [dbo].[SharePointDocumentLocationBase]([RelativeUrl] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

