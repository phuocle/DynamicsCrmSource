CREATE TABLE [dbo].[DelveActionHubBase] (
    [Sender]                     NVARCHAR (250)   NULL,
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [RelatedMailIds]             NVARCHAR (MAX)   NULL,
    [RecordId]                   UNIQUEIDENTIFIER NULL,
    [IconClassName]              NVARCHAR (160)   NULL,
    [DelveActionHubId]           UNIQUEIDENTIFIER NOT NULL,
    [StatusCode]                 INT              NULL,
    [CreatedOnBehalfBy]          UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                 DATETIME         NULL,
    [SenderEntityId]             UNIQUEIDENTIFIER NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [ModifiedTime]               DATETIME         NULL,
    [StateCode]                  INT              NOT NULL,
    [MessageTime]                DATETIME         NULL,
    [Description]                NVARCHAR (MAX)   NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [CreatedBy]                  UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [RegardingObjectId]          UNIQUEIDENTIFIER NULL,
    [MailWebLink]                NVARCHAR (250)   NULL,
    [MessageId]                  NVARCHAR (320)   NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [SenderEntityObjectTypeCode] INT              NULL,
    [CreatedTime]                DATETIME         NULL,
    [CardType]                   INT              CONSTRAINT [DF_DelveActionHubBase_CardType] DEFAULT ((0)) NOT NULL,
    [Subject]                    NVARCHAR (200)   NULL,
    [CreatedOn]                  DATETIME         NULL,
    [OrganizationId]             UNIQUEIDENTIFIER NULL,
    [ModifiedBy]                 UNIQUEIDENTIFIER NULL,
    [SenderImageUrl]             NVARCHAR (250)   NULL,
    [RecordIdObjectTypeCode]     INT              NULL,
    [RegardingObjectIdName]      NVARCHAR (4000)  NULL,
    [RecordIdName]               NVARCHAR (4000)  NULL,
    [RegardingObjectTypeCode]    INT              NULL,
    CONSTRAINT [TransactionCurrency_delveactionhub] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[DelveActionHubBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[DelveActionHubBase] SET (LOCK_ESCALATION = DISABLE);

