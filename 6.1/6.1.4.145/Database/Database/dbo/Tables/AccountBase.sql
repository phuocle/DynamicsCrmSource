CREATE TABLE [dbo].[AccountBase] (
    [AccountId]                    UNIQUEIDENTIFIER NOT NULL,
    [AccountCategoryCode]          INT              NULL,
    [TerritoryId]                  UNIQUEIDENTIFIER NULL,
    [DefaultPriceLevelId]          UNIQUEIDENTIFIER NULL,
    [CustomerSizeCode]             INT              NULL,
    [PreferredContactMethodCode]   INT              NULL,
    [CustomerTypeCode]             INT              NULL,
    [AccountRatingCode]            INT              NULL,
    [IndustryCode]                 INT              NULL,
    [TerritoryCode]                INT              NULL,
    [AccountClassificationCode]    INT              NULL,
    [BusinessTypeCode]             INT              NULL,
    [OwningBusinessUnit]           UNIQUEIDENTIFIER NULL,
    [OriginatingLeadId]            UNIQUEIDENTIFIER NULL,
    [PaymentTermsCode]             INT              NULL,
    [ShippingMethodCode]           INT              NULL,
    [PrimaryContactId]             UNIQUEIDENTIFIER NULL,
    [ParticipatesInWorkflow]       BIT              CONSTRAINT [Set_To_Zero93] DEFAULT ((0)) NULL,
    [Name]                         NVARCHAR (160)   NULL,
    [AccountNumber]                NVARCHAR (20)    NULL,
    [Revenue]                      MONEY            NULL,
    [NumberOfEmployees]            INT              NULL,
    [Description]                  NVARCHAR (MAX)   NULL,
    [SIC]                          NVARCHAR (20)    NULL,
    [OwnershipCode]                INT              NULL,
    [MarketCap]                    MONEY            NULL,
    [SharesOutstanding]            INT              NULL,
    [TickerSymbol]                 NVARCHAR (10)    NULL,
    [StockExchange]                NVARCHAR (20)    NULL,
    [WebSiteURL]                   NVARCHAR (200)   NULL,
    [FtpSiteURL]                   NVARCHAR (200)   NULL,
    [EMailAddress1]                NVARCHAR (100)   NULL,
    [EMailAddress2]                NVARCHAR (100)   NULL,
    [EMailAddress3]                NVARCHAR (100)   NULL,
    [DoNotPhone]                   BIT              CONSTRAINT [DF_AccountBase_DoNotPhone] DEFAULT ((0)) NULL,
    [DoNotFax]                     BIT              CONSTRAINT [DF_AccountBase_DoNotFax] DEFAULT ((0)) NULL,
    [Telephone1]                   NVARCHAR (50)    NULL,
    [DoNotEMail]                   BIT              CONSTRAINT [DF_AccountBase_DoNotEMail] DEFAULT ((0)) NULL,
    [Telephone2]                   NVARCHAR (50)    NULL,
    [Fax]                          NVARCHAR (50)    NULL,
    [Telephone3]                   NVARCHAR (50)    NULL,
    [DoNotPostalMail]              BIT              CONSTRAINT [DF_AccountBase_DoNotPostalMail] DEFAULT ((0)) NULL,
    [DoNotBulkEMail]               BIT              CONSTRAINT [DF_AccountBase_DoNotBulkEMail] DEFAULT ((0)) NULL,
    [DoNotBulkPostalMail]          BIT              CONSTRAINT [DF_AccountBase_DoNotBulkPostalMail] DEFAULT ((0)) NULL,
    [CreditLimit]                  MONEY            NULL,
    [CreditOnHold]                 BIT              NULL,
    [IsPrivate]                    BIT              CONSTRAINT [Set_To_Zero94] DEFAULT ((0)) NULL,
    [CreatedOn]                    DATETIME         NULL,
    [CreatedBy]                    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                   DATETIME         NULL,
    [ModifiedBy]                   UNIQUEIDENTIFIER NULL,
    [VersionNumber]                ROWVERSION       NULL,
    [ParentAccountId]              UNIQUEIDENTIFIER NULL,
    [Aging30]                      MONEY            NULL,
    [StateCode]                    INT              NOT NULL,
    [Aging60]                      MONEY            NULL,
    [StatusCode]                   INT              NULL,
    [Aging90]                      MONEY            NULL,
    [PreferredAppointmentDayCode]  INT              NULL,
    [PreferredSystemUserId]        UNIQUEIDENTIFIER NULL,
    [PreferredAppointmentTimeCode] INT              NULL,
    [Merged]                       BIT              CONSTRAINT [DF_AccountBase_Merged] DEFAULT ((0)) NULL,
    [DoNotSendMM]                  BIT              CONSTRAINT [DF_AccountBase_DoNotSendMM] DEFAULT ((0)) NULL,
    [MasterId]                     UNIQUEIDENTIFIER NULL,
    [LastUsedInCampaign]           DATETIME         NULL,
    [PreferredServiceId]           UNIQUEIDENTIFIER NULL,
    [PreferredEquipmentId]         UNIQUEIDENTIFIER NULL,
    [ExchangeRate]                 DECIMAL (23, 10) NULL,
    [UTCConversionTimeZoneCode]    INT              NULL,
    [OverriddenCreatedOn]          DATETIME         NULL,
    [TimeZoneRuleVersionNumber]    INT              NULL,
    [ImportSequenceNumber]         INT              NULL,
    [TransactionCurrencyId]        UNIQUEIDENTIFIER NULL,
    [CreditLimit_Base]             MONEY            NULL,
    [Aging30_Base]                 MONEY            NULL,
    [Revenue_Base]                 MONEY            NULL,
    [Aging90_Base]                 MONEY            NULL,
    [MarketCap_Base]               MONEY            NULL,
    [Aging60_Base]                 MONEY            NULL,
    [YomiName]                     NVARCHAR (160)   NULL,
    [OwnerId]                      UNIQUEIDENTIFIER CONSTRAINT [DF_AccountBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ModifiedOnBehalfBy]           UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]            UNIQUEIDENTIFIER NULL,
    [OwnerIdType]                  INT              CONSTRAINT [DF_AccountBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    [StageId]                      UNIQUEIDENTIFIER NULL,
    [ProcessId]                    UNIQUEIDENTIFIER NULL,
    [EntityImageId]                UNIQUEIDENTIFIER NULL,
    CONSTRAINT [cndx_PrimaryKey_Account] PRIMARY KEY CLUSTERED ([AccountId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [account_master_account] FOREIGN KEY ([MasterId]) REFERENCES [dbo].[AccountBase] ([AccountId]) NOT FOR REPLICATION,
    CONSTRAINT [account_originating_lead] FOREIGN KEY ([OriginatingLeadId]) REFERENCES [dbo].[LeadBase] ([LeadId]) NOT FOR REPLICATION,
    CONSTRAINT [account_parent_account] FOREIGN KEY ([ParentAccountId]) REFERENCES [dbo].[AccountBase] ([AccountId]) NOT FOR REPLICATION,
    CONSTRAINT [account_primary_contact] FOREIGN KEY ([PrimaryContactId]) REFERENCES [dbo].[ContactBase] ([ContactId]) NOT FOR REPLICATION,
    CONSTRAINT [business_unit_accounts] FOREIGN KEY ([OwningBusinessUnit]) REFERENCES [dbo].[BusinessUnitBase] ([BusinessUnitId]) NOT FOR REPLICATION,
    CONSTRAINT [equipment_accounts] FOREIGN KEY ([PreferredEquipmentId]) REFERENCES [dbo].[EquipmentBase] ([EquipmentId]) NOT FOR REPLICATION,
    CONSTRAINT [owner_accounts] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]) NOT FOR REPLICATION,
    CONSTRAINT [price_level_accounts] FOREIGN KEY ([DefaultPriceLevelId]) REFERENCES [dbo].[PriceLevelBase] ([PriceLevelId]) NOT FOR REPLICATION,
    CONSTRAINT [service_accounts] FOREIGN KEY ([PreferredServiceId]) REFERENCES [dbo].[ServiceBase] ([ServiceId]) NOT FOR REPLICATION,
    CONSTRAINT [system_user_accounts] FOREIGN KEY ([PreferredSystemUserId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]) NOT FOR REPLICATION,
    CONSTRAINT [territory_accounts] FOREIGN KEY ([TerritoryId]) REFERENCES [dbo].[TerritoryBase] ([TerritoryId]) NOT FOR REPLICATION,
    CONSTRAINT [transactioncurrency_account] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]) NOT FOR REPLICATION
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[AccountBase]', @OptionName = N'text in row', @OptionValue = N'7000';


GO
CREATE NONCLUSTERED INDEX [fndx_Account_AccountNumber]
    ON [dbo].[AccountBase]([AccountNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_accounts]
    ON [dbo].[AccountBase]([PreferredSystemUserId] ASC) WHERE ([PreferredSystemUserId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_parent_account]
    ON [dbo].[AccountBase]([ParentAccountId] ASC) WHERE ([ParentAccountId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_master_account]
    ON [dbo].[AccountBase]([MasterId] ASC) WHERE ([MasterId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_primary_contact]
    ON [dbo].[AccountBase]([PrimaryContactId] ASC) WHERE ([PrimaryContactId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_service_accounts]
    ON [dbo].[AccountBase]([PreferredServiceId] ASC) WHERE ([PreferredServiceId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Core]
    ON [dbo].[AccountBase]([StateCode] ASC, [StatusCode] ASC)
    INCLUDE([AccountId], [TerritoryId]) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_telephone1]
    ON [dbo].[AccountBase]([Telephone1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_Account_Name]
    ON [dbo].[AccountBase]([Name] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[AccountBase]([VersionNumber] ASC) WHERE ([VersionNumber] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[AccountBase]([OwnerId] ASC, [StateCode] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_account_originating_lead]
    ON [dbo].[AccountBase]([OriginatingLeadId] ASC) WHERE ([OriginatingLeadId] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_emailaddress1]
    ON [dbo].[AccountBase]([EMailAddress1] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_business_unit_accounts]
    ON [dbo].[AccountBase]([OwningBusinessUnit] ASC) WHERE ([OwningBusinessUnit] IS NOT NULL) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_telephone2]
    ON [dbo].[AccountBase]([Telephone2] ASC) WITH (FILLFACTOR = 80);

