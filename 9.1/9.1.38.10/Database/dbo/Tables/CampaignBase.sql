CREATE TABLE [dbo].[CampaignBase] (
    [CampaignId]                           UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]                            DATETIME         NULL,
    [CreatedBy]                            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                           DATETIME         NULL,
    [ModifiedBy]                           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]                   UNIQUEIDENTIFIER NULL,
    [OwnerId]                              UNIQUEIDENTIFIER NOT NULL,
    [OwnerIdType]                          INT              CONSTRAINT [DF_CampaignBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [OwningBusinessUnit]                   UNIQUEIDENTIFIER NULL,
    [VersionNumber]                        ROWVERSION       NULL,
    [EmailAddress]                         NVARCHAR (256)   NULL,
    [ImportSequenceNumber]                 INT              NULL,
    [OverriddenCreatedOn]                  DATETIME         NULL,
    [TimeZoneRuleVersionNumber]            INT              NULL,
    [UTCConversionTimeZoneCode]            INT              NULL,
    [Name]                                 NVARCHAR (128)   NOT NULL,
    [ProcessId]                            UNIQUEIDENTIFIER NULL,
    [StageId]                              UNIQUEIDENTIFIER NULL,
    [TraversedPath]                        NVARCHAR (1250)  NULL,
    [ActualEnd]                            DATETIME         NULL,
    [ActualStart]                          DATETIME         NULL,
    [BudgetedCost]                         MONEY            CONSTRAINT [DF_CampaignBase_BudgetedCost] DEFAULT ((0)) NULL,
    [TransactionCurrencyId]                UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                         DECIMAL (23, 10) NULL,
    [BudgetedCost_Base]                    MONEY            NULL,
    [CodeName]                             NVARCHAR (32)    NULL,
    [Description]                          NVARCHAR (MAX)   NULL,
    [ExpectedResponse]                     INT              NULL,
    [ExpectedRevenue]                      MONEY            CONSTRAINT [DF_CampaignBase_ExpectedRevenue] DEFAULT ((0)) NULL,
    [ExpectedRevenue_Base]                 MONEY            NULL,
    [IsTemplate]                           BIT              CONSTRAINT [DF_CampaignBase_IsTemplate] DEFAULT ((0)) NULL,
    [Message]                              NVARCHAR (256)   NULL,
    [Objective]                            NVARCHAR (MAX)   NULL,
    [OtherCost]                            MONEY            CONSTRAINT [DF_CampaignBase_OtherCost] DEFAULT ((0)) NULL,
    [OtherCost_Base]                       MONEY            NULL,
    [PromotionCodeName]                    NVARCHAR (128)   NULL,
    [ProposedEnd]                          DATETIME         NULL,
    [ProposedStart]                        DATETIME         NULL,
    [StateCode]                            INT              CONSTRAINT [DF_CampaignBase_StateCode] DEFAULT ((0)) NOT NULL,
    [StatusCode]                           INT              NULL,
    [TotalActualCost]                      MONEY            CONSTRAINT [DF_CampaignBase_TotalActualCost] DEFAULT ((0)) NULL,
    [TotalActualCost_Base]                 MONEY            NULL,
    [TotalCampaignActivityActualCost]      MONEY            CONSTRAINT [DF_CampaignBase_TotalCampaignActivityActualCost] DEFAULT ((0)) NULL,
    [TotalCampaignActivityActualCost_Base] MONEY            NULL,
    [TypeCode]                             INT              NULL,
    [PriceListId]                          UNIQUEIDENTIFIER NULL,
    [EntityImageId]                        UNIQUEIDENTIFIER NULL,
    [TmpRegardingObjectId]                 NVARCHAR (100)   NULL,
    CONSTRAINT [cndx_PrimaryKey_Campaign] PRIMARY KEY CLUSTERED ([CampaignId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [BusinessUnit_Campaigns] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [owner_campaigns] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [PriceList_Campaigns] FOREIGN KEY ([PriceListId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [transactioncurrency_campaign] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CampaignBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CampaignBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[CampaignBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[CampaignBase]([OwnerId] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[CampaignBase]([StateCode] ASC, [StatusCode] ASC) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_PriceList_Campaigns]
    ON [dbo].[CampaignBase]([PriceListId] ASC) WHERE ([PriceListId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_BusinessUnit_Campaigns]
    ON [dbo].[CampaignBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_A26C35875B944A779D335D75B4C922FE]
    ON [dbo].[CampaignBase]([CampaignId] ASC)
    INCLUDE([Name], [CodeName]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Name]
    ON [dbo].[CampaignBase]([Name] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_CodeName]
    ON [dbo].[CampaignBase]([CodeName] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_A26C35875B944A779D335D75B4C922FE]
    ON [dbo].[CampaignBase]([CampaignId] ASC)
    INCLUDE([Name], [IsTemplate], [StatusCode], [CreatedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_A26C35875B944A779D335D75B4C922FE]
    ON [dbo].[CampaignBase]([Name] ASC, [CampaignId] ASC)
    INCLUDE([IsTemplate], [StatusCode], [CreatedOn], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

