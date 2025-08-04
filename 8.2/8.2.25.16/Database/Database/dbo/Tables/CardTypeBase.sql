CREATE TABLE [dbo].[CardTypeBase] (
    [IsBaseCard]            BIT              CONSTRAINT [DF_CardTypeBase_IsBaseCard] DEFAULT ((0)) NULL,
    [IsLiveOnly]            BIT              CONSTRAINT [DF_CardTypeBase_IsLiveOnly] DEFAULT ((0)) NULL,
    [IntCardOption]         INT              NULL,
    [ModifiedOnBehalfBy]    UNIQUEIDENTIFIER NULL,
    [CardName]              NVARCHAR (100)   NULL,
    [VersionNumber]         ROWVERSION       NULL,
    [LastSyncTime]          DATETIME         NULL,
    [ExchangeRate]          DECIMAL (23, 10) NULL,
    [ClientAvailability]    INT              CONSTRAINT [DF_CardTypeBase_ClientAvailability] DEFAULT ((1)) NOT NULL,
    [BoolCardOption]        BIT              CONSTRAINT [DF_CardTypeBase_BoolCardOption] DEFAULT ((0)) NULL,
    [Actions]               NVARCHAR (MAX)   NULL,
    [ScheduleTime]          DATETIME         NULL,
    [HasSnoozeDismiss]      BIT              CONSTRAINT [DF_CardTypeBase_HasSnoozeDismiss] DEFAULT ((0)) NULL,
    [CardTypeIcon]          NVARCHAR (250)   NULL,
    [IsEnabled]             BIT              CONSTRAINT [DF_CardTypeBase_IsEnabled] DEFAULT ((0)) NULL,
    [CardType]              INT              NOT NULL,
    [ModifiedBy]            UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]     UNIQUEIDENTIFIER NULL,
    [StringCardOption]      NVARCHAR (MAX)   NULL,
    [TransactionCurrencyId] UNIQUEIDENTIFIER NULL,
    [CreatedBy]             UNIQUEIDENTIFIER NULL,
    [IsPreviewCard]         BIT              CONSTRAINT [DF_CardTypeBase_IsPreviewCard] DEFAULT ((0)) NULL,
    [SummaryText]           NVARCHAR (250)   NULL,
    [GroupType]             NVARCHAR (128)   NULL,
    [CreatedOn]             DATETIME         NULL,
    [SoftTitle]             NVARCHAR (100)   NULL,
    [ModifiedOn]            DATETIME         NULL,
    [CardTypeId]            UNIQUEIDENTIFIER NOT NULL,
    CONSTRAINT [PK_CardTypeBase] PRIMARY KEY CLUSTERED ([CardTypeId] ASC) WITH (FILLFACTOR = 80)
);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_cardtypeint]
    ON [dbo].[CardTypeBase]([CardType] ASC) WITH (FILLFACTOR = 80);

