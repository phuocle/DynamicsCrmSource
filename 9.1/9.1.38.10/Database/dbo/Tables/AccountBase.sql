CREATE TABLE [dbo].[AccountBase] (
    [CustomerTypeCode]                INT              NULL,
    [StageId]                         UNIQUEIDENTIFIER NULL,
    [DoNotPhone]                      BIT              CONSTRAINT [DF_AccountBase_DoNotPhone] DEFAULT ((0)) NULL,
    [Name]                            NVARCHAR (160)   NULL,
    [AccountRatingCode]               INT              NULL,
    [DoNotBulkPostalMail]             BIT              CONSTRAINT [DF_AccountBase_DoNotBulkPostalMail] DEFAULT ((0)) NULL,
    [LastUsedInCampaign]              DATETIME         NULL,
    [EMailAddress3]                   NVARCHAR (100)   NULL,
    [Telephone1]                      NVARCHAR (50)    NULL,
    [DoNotPostalMail]                 BIT              CONSTRAINT [DF_AccountBase_DoNotPostalMail] DEFAULT ((0)) NULL,
    [CreditOnHold]                    BIT              NULL,
    [AccountClassificationCode]       INT              NULL,
    [Fax]                             NVARCHAR (50)    NULL,
    [CreatedOn]                       DATETIME         NULL,
    [IsPrivate]                       BIT              CONSTRAINT [DF_AccountBase_IsPrivate] DEFAULT ((0)) NULL,
    [DoNotFax]                        BIT              CONSTRAINT [DF_AccountBase_DoNotFax] DEFAULT ((0)) NULL,
    [FollowEmail]                     BIT              CONSTRAINT [DF_AccountBase_FollowEmail] DEFAULT ((1)) NULL,
    [TransactionCurrencyId]           UNIQUEIDENTIFIER NULL,
    [CreditLimit]                     MONEY            NULL,
    [SIC]                             NVARCHAR (20)    NULL,
    [Revenue]                         MONEY            NULL,
    [PaymentTermsCode]                INT              NULL,
    [MasterId]                        UNIQUEIDENTIFIER NULL,
    [DoNotSendMM]                     BIT              CONSTRAINT [DF_AccountBase_DoNotSendMM] DEFAULT ((0)) NULL,
    [OwnershipCode]                   INT              NULL,
    [PreferredContactMethodCode]      INT              NULL,
    [WebSiteURL]                      NVARCHAR (200)   NULL,
    [OverriddenCreatedOn]             DATETIME         NULL,
    [ModifiedOn]                      DATETIME         NULL,
    [SLAInvokedId]                    UNIQUEIDENTIFIER NULL,
    [AccountId]                       UNIQUEIDENTIFIER NOT NULL,
    [PreferredAppointmentDayCode]     INT              NULL,
    [PreferredAppointmentTimeCode]    INT              NULL,
    [Aging60]                         MONEY            NULL,
    [MarketCap]                       MONEY            NULL,
    [AccountCategoryCode]             INT              NULL,
    [TimeSpentByMeOnEmailAndMeetings] NVARCHAR (1250)  NULL,
    [VersionNumber]                   ROWVERSION       NULL,
    [AccountNumber]                   NVARCHAR (20)    NULL,
    [Aging90]                         MONEY            NULL,
    [CreatedByExternalParty]          UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                    DECIMAL (23, 10) NULL,
    [CreatedBy]                       UNIQUEIDENTIFIER NULL,
    [SLAId]                           UNIQUEIDENTIFIER NULL,
    [BusinessTypeCode]                INT              NULL,
    [StatusCode]                      INT              NULL,
    [CustomerSizeCode]                INT              NULL,
    [Description]                     NVARCHAR (MAX)   NULL,
    [IndustryCode]                    INT              NULL,
    [OwnerId]                         UNIQUEIDENTIFIER CONSTRAINT [DF_AccountBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [TickerSymbol]                    NVARCHAR (10)    NULL,
    [SharesOutstanding]               INT              NULL,
    [Merged]                          BIT              CONSTRAINT [DF_AccountBase_Merged] DEFAULT ((0)) NULL,
    [StockExchange]                   NVARCHAR (20)    NULL,
    [LastOnHoldTime]                  DATETIME         NULL,
    [DoNotBulkEMail]                  BIT              CONSTRAINT [DF_AccountBase_DoNotBulkEMail] DEFAULT ((0)) NULL,
    [DoNotEMail]                      BIT              CONSTRAINT [DF_AccountBase_DoNotEMail] DEFAULT ((0)) NULL,
    [TraversedPath]                   NVARCHAR (1250)  NULL,
    [ImportSequenceNumber]            INT              NULL,
    [PrimaryTwitterId]                NVARCHAR (128)   NULL,
    [OnHoldTime]                      INT              NULL,
    [FtpSiteURL]                      NVARCHAR (200)   NULL,
    [Telephone3]                      NVARCHAR (50)    NULL,
    [ProcessId]                       UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]              UNIQUEIDENTIFIER NULL,
    [StateCode]                       INT              NOT NULL,
    [UTCConversionTimeZoneCode]       INT              NULL,
    [NumberOfEmployees]               INT              NULL,
    [ParentAccountId]                 UNIQUEIDENTIFIER NULL,
    [ShippingMethodCode]              INT              NULL,
    [TerritoryCode]                   INT              NULL,
    [EMailAddress2]                   NVARCHAR (100)   NULL,
    [OwningBusinessUnit]              UNIQUEIDENTIFIER NULL,
    [PrimarySatoriId]                 NVARCHAR (200)   NULL,
    [ModifiedByExternalParty]         UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]               UNIQUEIDENTIFIER NULL,
    [PreferredSystemUserId]           UNIQUEIDENTIFIER NULL,
    [ParticipatesInWorkflow]          BIT              CONSTRAINT [DF_AccountBase_ParticipatesInWorkflow] DEFAULT ((0)) NULL,
    [EMailAddress1]                   NVARCHAR (100)   NULL,
    [TimeZoneRuleVersionNumber]       INT              NULL,
    [MarketingOnly]                   BIT              CONSTRAINT [DF_AccountBase_MarketingOnly] DEFAULT ((0)) NULL,
    [Telephone2]                      NVARCHAR (50)    NULL,
    [ModifiedBy]                      UNIQUEIDENTIFIER NULL,
    [Aging30]                         MONEY            NULL,
    [EntityImageId]                   UNIQUEIDENTIFIER NULL,
    [PrimaryContactId]                UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                     INT              CONSTRAINT [DF_AccountBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [Aging30_Base]                    MONEY            NULL,
    [Aging60_Base]                    MONEY            NULL,
    [Aging90_Base]                    MONEY            NULL,
    [MarketCap_Base]                  MONEY            NULL,
    [CreditLimit_Base]                MONEY            NULL,
    [Revenue_Base]                    MONEY            NULL,
    [YomiName]                        NVARCHAR (160)   NULL,
    [OriginatingLeadId]               UNIQUEIDENTIFIER NULL,
    [DefaultPriceLevelId]             UNIQUEIDENTIFIER NULL,
    [PreferredEquipmentId]            UNIQUEIDENTIFIER NULL,
    [PreferredServiceId]              UNIQUEIDENTIFIER NULL,
    [TerritoryId]                     UNIQUEIDENTIFIER NULL,
    [OpenDeals]                       INT              CONSTRAINT [DF_AccountBase_OpenDeals] DEFAULT ((0)) NULL,
    [OpenDeals_Date]                  DATETIME         CONSTRAINT [DF_AccountBase_OpenDeals_Date] DEFAULT ([dbo].[fn_GetUtcDateTrunc]()) NULL,
    [OpenDeals_State]                 INT              CONSTRAINT [DF_AccountBase_OpenDeals_State] DEFAULT ((1)) NULL,
    [OpenRevenue]                     DECIMAL (38, 10) CONSTRAINT [DF_AccountBase_OpenRevenue] DEFAULT ((0)) NULL,
    [OpenRevenue_Base]                DECIMAL (38, 10) NULL,
    [OpenRevenue_Date]                DATETIME         CONSTRAINT [DF_AccountBase_OpenRevenue_Date] DEFAULT ([dbo].[fn_GetUtcDateTrunc]()) NULL,
    [OpenRevenue_State]               INT              CONSTRAINT [DF_AccountBase_OpenRevenue_State] DEFAULT ((1)) NULL,
    [TeamsFollowed]                   INT              NULL,
    CONSTRAINT [cndx_PrimaryKey_Account] PRIMARY KEY CLUSTERED ([AccountId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_master_account] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [account_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]),
    CONSTRAINT [account_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]),
    CONSTRAINT [account_primary_contact] FOREIGN KEY ([PrimaryContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]),
    CONSTRAINT [business_unit_accounts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]),
    CONSTRAINT [equipment_accounts] FOREIGN KEY ([PreferredEquipmentId]) REFERENCES [dbo].[EquipmentBase] ([EquipmentId]),
    CONSTRAINT [manualsla_account] FOREIGN KEY ([SLAId]) REFERENCES [dbo].[SLABaseIds] ([SLAId]),
    CONSTRAINT [owner_accounts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [price_level_accounts] FOREIGN KEY ([DefaultPriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]),
    CONSTRAINT [service_accounts] FOREIGN KEY ([PreferredServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId]),
    CONSTRAINT [system_user_accounts] FOREIGN KEY ([PreferredSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [territory_accounts] FOREIGN KEY ([TerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId]),
    CONSTRAINT [transactioncurrency_account] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AccountBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[AccountBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AccountBase]([OwnerId] ASC, [StateCode] ASC)
    INCLUDE([Name], [Telephone1], [AccountId], [VersionNumber], [ProcessId], [ParentAccountId], [PrimaryContactId]) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AccountBase]([VersionNumber] ASC) WITH (FILLFACTOR = 100);


GO
CREATE NONCLUSTERED INDEX [fndx_Account_AccountNumber]
    ON [dbo].[AccountBase]([AccountNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Account_Name]
    ON [dbo].[AccountBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress1]
    ON [dbo].[AccountBase]([EMailAddress1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_telephone1]
    ON [dbo].[AccountBase]([Telephone1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_accounts]
    ON [dbo].[AccountBase]([PreferredSystemUserId] ASC) WHERE ([PreferredSystemUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_master_account]
    ON [dbo].[AccountBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_telephone2]
    ON [dbo].[AccountBase]([Telephone2] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_primary_contact]
    ON [dbo].[AccountBase]([PrimaryContactId] ASC) WHERE ([PrimaryContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_parent_account]
    ON [dbo].[AccountBase]([ParentAccountId] ASC, [Name] ASC)
    INCLUDE([PrimaryContactId], [StateCode], [StatusCode], [OwnerId], [EntityImageId], [SLAInvokedId], [SLAId]) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_accounts]
    ON [dbo].[AccountBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AccountBase]([StateCode] ASC, [StatusCode] ASC)
    INCLUDE([AccountId], [TerritoryId]) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_originating_lead]
    ON [dbo].[AccountBase]([OriginatingLeadId] ASC) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_accounts]
    ON [dbo].[AccountBase]([PreferredServiceId] ASC) WHERE ([PreferredServiceId] IS NOT NULL) WITH (FILLFACTOR = 80, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Seek_2D1187C423FE4BB5964743BB1C6DDBD1]
    ON [dbo].[AccountBase]([AccountId] ASC)
    INCLUDE([Name], [AccountNumber], [PrimaryContactId], [Telephone1], [EMailAddress1], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_Scan_2D1187C423FE4BB5964743BB1C6DDBD1]
    ON [dbo].[AccountBase]([AccountId] ASC)
    INCLUDE([Name], [AccountNumber], [EMailAddress1], [Telephone1], [Telephone2]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_QF_SortedScan_2D1187C423FE4BB5964743BB1C6DDBD1]
    ON [dbo].[AccountBase]([Name] ASC, [AccountId] ASC)
    INCLUDE([AccountNumber], [PrimaryContactId], [Telephone1], [EMailAddress1], [StateCode], [VersionNumber]) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);


GO
CREATE NONCLUSTERED INDEX [ndx_for_cascaderelationship_price_level_accounts]
    ON [dbo].[AccountBase]([DefaultPriceLevelId] ASC) WITH (FILLFACTOR = 100, DATA_COMPRESSION = ROW);

