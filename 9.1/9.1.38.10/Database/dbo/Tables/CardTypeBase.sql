CREATE TABLE [dbo].[CardTypeBase] (
    [SummaryText]           NVARCHAR (250)   NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [CardType]              INT              NOT NULL,
    [SoftTitle]             NVARCHAR (100)   NULL,
    [CardName]              NVARCHAR (100)   NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [GroupType]             NVARCHAR (128)   NULL,
    [LastSyncTime]          DATETIME         NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [IsPreviewCard]         BIT              CONSTRAINT [DF_CardTypeBase_IsPreviewCard] DEFAULT ((0)) NULL,
    [IsEnabled]             BIT              CONSTRAINT [DF_CardTypeBase_IsEnabled] DEFAULT ((0)) NULL,
    [IsLiveOnly]            BIT              CONSTRAINT [DF_CardTypeBase_IsLiveOnly] DEFAULT ((0)) NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [BoolCardOption]        BIT              CONSTRAINT [DF_CardTypeBase_BoolCardOption] DEFAULT ((0)) NULL,
    [IntCardOption]         INT              NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [CardTypeIcon]          NVARCHAR (250)   NULL,
    [StringCardOption]      NVARCHAR (MAX)   NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [ModifiedOn]            DATETIME         NULL,
    [HasSnoozeDismiss]      BIT              CONSTRAINT [DF_CardTypeBase_HasSnoozeDismiss] DEFAULT ((0)) NULL,
    [IsBaseCard]            BIT              CONSTRAINT [DF_CardTypeBase_IsBaseCard] DEFAULT ((0)) NULL,
    [Actions]               NVARCHAR (MAX)   NULL,
    [CardTypeId]            UNIQUEIDENTIFIER NOT NULL,
    [CreatedOn]             DATETIME         NULL,
    [ScheduleTime]          DATETIME         NULL,
    [ClientAvailability]    INT              CONSTRAINT [DF_CardTypeBase_ClientAvailability] DEFAULT ((1)) NOT NULL,
    [ImportSequenceNumber]  INT              NULL,
    [OverriddenCreatedOn]   DATETIME         NULL,
    [GroupCategory]         INT              NULL,
    [PublisherName]         NVARCHAR (256)   NULL,
    [Priority]              INT              NULL,
    [AdaptiveCardTemplate]  NVARCHAR (MAX)   NULL,
    CONSTRAINT [PK_CardTypeBase] PRIMARY KEY CLUSTERED ([CardTypeId] ASC) WITH (FILLFACTOR = 80)
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[CardTypeBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[CardTypeBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_cardtypeint]
    ON [dbo].[CardTypeBase]([CardType] ASC) WITH (FILLFACTOR = 80);

