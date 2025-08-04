CREATE TABLE [dbo].[UserFiscalCalendarBase]
(
[UserFiscalCalendarId] [uniqueidentifier] NOT NULL,
[SalesPersonId] [uniqueidentifier] NULL,
[FiscalPeriodType] [int] NULL,
[EffectiveOn] [datetime] NULL,
[Period1] [money] NULL CONSTRAINT [Set_To_Zero153] DEFAULT ((0)),
[Period2] [money] NULL CONSTRAINT [Set_To_Zero154] DEFAULT ((0)),
[Period3] [money] NULL CONSTRAINT [Set_To_Zero155] DEFAULT ((0)),
[Period4] [money] NULL CONSTRAINT [Set_To_Zero156] DEFAULT ((0)),
[Period5] [money] NULL CONSTRAINT [Set_To_Zero157] DEFAULT ((0)),
[Period6] [money] NULL CONSTRAINT [Set_To_Zero158] DEFAULT ((0)),
[Period7] [money] NULL CONSTRAINT [Set_To_Zero159] DEFAULT ((0)),
[Period8] [money] NULL CONSTRAINT [Set_To_Zero160] DEFAULT ((0)),
[Period9] [money] NULL CONSTRAINT [Set_To_Zero161] DEFAULT ((0)),
[Period10] [money] NULL CONSTRAINT [Set_To_Zero162] DEFAULT ((0)),
[Period11] [money] NULL CONSTRAINT [Set_To_Zero163] DEFAULT ((0)),
[Period12] [money] NULL CONSTRAINT [Set_To_Zero164] DEFAULT ((0)),
[Period13] [money] NULL CONSTRAINT [Set_To_Zero165] DEFAULT ((0)),
[CreatedBy] [uniqueidentifier] NULL,
[CreatedOn] [datetime] NULL,
[ModifiedBy] [uniqueidentifier] NULL,
[ModifiedOn] [datetime] NULL,
[ImportSequenceNumber] [int] NULL,
[TransactionCurrencyId] [uniqueidentifier] NULL,
[UTCConversionTimeZoneCode] [int] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[Period4_Base] [money] NULL,
[Period11_Base] [money] NULL,
[Period3_Base] [money] NULL,
[Period1_Base] [money] NULL,
[Period6_Base] [money] NULL,
[Period8_Base] [money] NULL,
[Period9_Base] [money] NULL,
[Period7_Base] [money] NULL,
[Period5_Base] [money] NULL,
[Period13_Base] [money] NULL,
[Period10_Base] [money] NULL,
[Period12_Base] [money] NULL,
[Period2_Base] [money] NULL,
[ModifiedOnBehalfBy] [uniqueidentifier] NULL,
[CreatedOnBehalfBy] [uniqueidentifier] NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [cndx_PrimaryKey_UserFiscalCalendar] PRIMARY KEY CLUSTERED  ([UserFiscalCalendarId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_quotas] ON [dbo].[UserFiscalCalendarBase] ([SalesPersonId]) WHERE ([SalesPersonId] IS NOT NULL) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [system_user_quotas] FOREIGN KEY ([SalesPersonId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [transactioncurrency_annualfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [transactioncurrency_fixedmonthlyfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [transactioncurrency_monthlyfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [transactioncurrency_quarterlyfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [transactioncurrency_semiannualfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD CONSTRAINT [transactioncurrency_userfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
