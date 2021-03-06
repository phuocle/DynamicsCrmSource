USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[UserFiscalCalendarBase]    Script Date: 4/10/2017 9:59:19 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserFiscalCalendarBase](
	[UserFiscalCalendarId] [uniqueidentifier] NOT NULL,
	[SalesPersonId] [uniqueidentifier] NULL,
	[FiscalPeriodType] [int] NULL,
	[EffectiveOn] [datetime] NULL,
	[Period1] [money] NULL,
	[Period2] [money] NULL,
	[Period3] [money] NULL,
	[Period4] [money] NULL,
	[Period5] [money] NULL,
	[Period6] [money] NULL,
	[Period7] [money] NULL,
	[Period8] [money] NULL,
	[Period9] [money] NULL,
	[Period10] [money] NULL,
	[Period11] [money] NULL,
	[Period12] [money] NULL,
	[Period13] [money] NULL,
	[CreatedBy] [uniqueidentifier] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [uniqueidentifier] NULL,
	[ModifiedOn] [datetime] NULL,
	[ImportSequenceNumber] [int] NULL,
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
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
	[CreatedOnBehalfBy] [uniqueidentifier] NULL,
 CONSTRAINT [cndx_PrimaryKey_UserFiscalCalendar] PRIMARY KEY CLUSTERED 
(
	[UserFiscalCalendarId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [fndx_for_cascaderelationship_system_user_quotas]    Script Date: 4/10/2017 9:59:57 PM ******/
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_quotas] ON [dbo].[UserFiscalCalendarBase]
(
	[SalesPersonId] ASC
)
WHERE ([SalesPersonId] IS NOT NULL)
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero153]  DEFAULT ((0)) FOR [Period1]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero154]  DEFAULT ((0)) FOR [Period2]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero155]  DEFAULT ((0)) FOR [Period3]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero156]  DEFAULT ((0)) FOR [Period4]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero157]  DEFAULT ((0)) FOR [Period5]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero158]  DEFAULT ((0)) FOR [Period6]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero159]  DEFAULT ((0)) FOR [Period7]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero160]  DEFAULT ((0)) FOR [Period8]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero161]  DEFAULT ((0)) FOR [Period9]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero162]  DEFAULT ((0)) FOR [Period10]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero163]  DEFAULT ((0)) FOR [Period11]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero164]  DEFAULT ((0)) FOR [Period12]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] ADD  CONSTRAINT [Set_To_Zero165]  DEFAULT ((0)) FOR [Period13]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [system_user_quotas] FOREIGN KEY([SalesPersonId])
REFERENCES [dbo].[SystemUserBase] ([SystemUserId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [system_user_quotas]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_annualfiscalcalendar] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [transactioncurrency_annualfiscalcalendar]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_fixedmonthlyfiscalcalendar] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [transactioncurrency_fixedmonthlyfiscalcalendar]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_monthlyfiscalcalendar] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [transactioncurrency_monthlyfiscalcalendar]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_quarterlyfiscalcalendar] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [transactioncurrency_quarterlyfiscalcalendar]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_semiannualfiscalcalendar] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [transactioncurrency_semiannualfiscalcalendar]
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase]  WITH CHECK ADD  CONSTRAINT [transactioncurrency_userfiscalcalendar] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] CHECK CONSTRAINT [transactioncurrency_userfiscalcalendar]
GO
