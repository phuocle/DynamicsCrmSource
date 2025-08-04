CREATE TABLE [dbo].[CardTypeBase]
(
[IsBaseCard] [bit] NULL CONSTRAINT [DF_CardTypeBase_IsBaseCard] DEFAULT ((0)),
[IsLiveOnly] [bit] NULL CONSTRAINT [DF_CardTypeBase_IsLiveOnly] DEFAULT ((0)),
[IntCardOption] [int] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CardName] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[VersionNumber] [timestamp] NULL,
[LastSyncTime] [datetime] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[ClientAvailability] [int] NOT NULL CONSTRAINT [DF_CardTypeBase_ClientAvailability] DEFAULT ((1)),
[BoolCardOption] [bit] NULL CONSTRAINT [DF_CardTypeBase_BoolCardOption] DEFAULT ((0)),
[Actions] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[ScheduleTime] [datetime] NULL,
[HasSnoozeDismiss] [bit] NULL CONSTRAINT [DF_CardTypeBase_HasSnoozeDismiss] DEFAULT ((0)),
[CardTypeIcon] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[IsEnabled] [bit] NULL CONSTRAINT [DF_CardTypeBase_IsEnabled] DEFAULT ((0)),
[CardType] [int] NOT NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL,
[StringCardOption] [nvarchar] (max) COLLATE Latin1_General_CI_AI NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[CreatedBy] [uniqueidentifier] NULL,
[IsPreviewCard] [bit] NULL CONSTRAINT [DF_CardTypeBase_IsPreviewCard] DEFAULT ((0)),
[SummaryText] [nvarchar] (250) COLLATE Latin1_General_CI_AI NULL,
[GroupType] [nvarchar] (128) COLLATE Latin1_General_CI_AI NULL,
[CreatedOn] [datetime] NULL,
[SoftTitle] [nvarchar] (100) COLLATE Latin1_General_CI_AI NULL,
[ModifiedOn] [datetime] NULL,
[CardTypeId] [uniqueidentifier] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[CardTypeBase] ADD CONSTRAINT [PK_CardTypeBase] PRIMARY KEY CLUSTERED  ([CardTypeId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_cardtypeint] ON [dbo].[CardTypeBase] ([CardType]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
