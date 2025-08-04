CREATE TABLE [dbo].[SharePointSiteBase] (
    [IsGridPresent]             BIT              NULL,
    [FolderStructureEntity]     INT              NULL,
    [ValidationStatus]          INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [Description]               NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [UserId]                    UNIQUEIDENTIFIER NULL,
    [StatusCode]                INT              NULL,
    [CreatedOn]                 DATETIME         NULL,
    [OwnerId]                   UNIQUEIDENTIFIER CONSTRAINT [DF_SharePointSiteBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [SharePointSiteId]          UNIQUEIDENTIFIER NOT NULL,
    [AbsoluteURL]               NVARCHAR (2000)  NULL,
    [IsPowerBISite]             BIT              CONSTRAINT [DF_SharePointSiteBase_IsPowerBISite] DEFAULT ((0)) NOT NULL,
    [SiteCollectionId]          UNIQUEIDENTIFIER NULL,
    [IsDefault]                 BIT              NULL,
    [ParentSite]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [ServiceType]               INT              CONSTRAINT [DF_SharePointSiteBase_ServiceType] DEFAULT ((0)) NOT NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [RelativeUrl]               NVARCHAR (160)   NULL,
    [OwningBusinessUnit]        UNIQUEIDENTIFIER NULL,
    [ValidationStatusErrorCode] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [StateCode]                 INT              NOT NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [Name]                      NVARCHAR (160)   NOT NULL,
    [VersionNumber]             ROWVERSION       NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [LastValidated]             DATETIME         NULL,
    [OverriddenCreatedOn]       DATETIME         NULL,
    [ParentSiteName]            NVARCHAR (4000)  NULL,
    [OwnerIdType]               INT              CONSTRAINT [DF_SharePointSiteBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [ParentSiteObjectTypeCode]  INT              NULL,
    CONSTRAINT [ndx_PrimaryKey_SharePointSite] PRIMARY KEY CLUSTERED ([SharePointSiteId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [business_unit_sharepointsites] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_sharepointsite] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_SharePointSite] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SharePointSiteBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SharePointSiteBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SharePointSiteBase]([OwnerId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[SharePointSiteBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[SharePointSiteBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_business_unit_sharepointsites]
    ON [dbo].[SharePointSiteBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_sharepointsite_parentsite_sharepointsite]
    ON [dbo].[SharePointSiteBase]([ParentSite] ASC, [ParentSiteObjectTypeCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_RelativeUrl]
    ON [dbo].[SharePointSiteBase]([RelativeUrl] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_9C63EDF3E47A4E55A8B66E74F1EDDD4D]
    ON [dbo].[SharePointSiteBase]([SharePointSiteId] ASC)
    INCLUDE([Name], [RelativeUrl]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[SharePointSiteBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_9C63EDF3E47A4E55A8B66E74F1EDDD4D]
    ON [dbo].[SharePointSiteBase]([SharePointSiteId] ASC)
    INCLUDE([Name], [ParentSite], [ParentSiteName], [ParentSiteObjectTypeCode], [RelativeUrl], [AbsoluteURL], [IsDefault], [ValidationStatus], [StateCode], [ServiceType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_9C63EDF3E47A4E55A8B66E74F1EDDD4D]
    ON [dbo].[SharePointSiteBase]([Name] ASC, [SharePointSiteId] ASC)
    INCLUDE([ParentSite], [ParentSiteName], [ParentSiteObjectTypeCode], [RelativeUrl], [AbsoluteURL], [IsDefault], [ValidationStatus], [StateCode], [ServiceType], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

