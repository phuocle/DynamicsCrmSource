USE [D365_MSCRM]
GO
/****** Object:  Table [dbo].[ActionCardUserStateBase]    Script Date: 4/10/2017 9:59:21 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ActionCardUserStateBase](
	[TransactionCurrencyId] [uniqueidentifier] NULL,
	[ExchangeRate] [decimal](23, 10) NULL,
	[OwnerId] [uniqueidentifier] NOT NULL,
	[UTCConversionTimeZoneCode] [int] NULL,
	[ActionCardUserStateId] [uniqueidentifier] NOT NULL,
	[VersionNumber] [timestamp] NULL,
	[TimeZoneRuleVersionNumber] [int] NULL,
	[State] [int] NOT NULL,
	[StartDate] [datetime] NOT NULL,
	[ActionCardId] [uniqueidentifier] NULL,
	[ActionCardIdObjectTypeCode] [int] NULL,
	[OwnerIdType] [int] NOT NULL
) ON [PRIMARY]

GO
/****** Object:  Index [cndx_actioncardsuserstateownerid]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsuserstateownerid] ON [dbo].[ActionCardUserStateBase]
(
	[OwnerId] ASC,
	[ActionCardId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
/****** Object:  Index [fndx_Sync_VersionNumber]    Script Date: 4/10/2017 9:59:56 PM ******/
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActionCardUserStateBase]
(
	[VersionNumber] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, FILLFACTOR = 80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] ADD  CONSTRAINT [DF_ActionCardUserStateBase_OwnerId]  DEFAULT ('00000000-0000-0000-0000-000000000000') FOR [OwnerId]
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] ADD  CONSTRAINT [DF_ActionCardUserStateBase_State]  DEFAULT ((0)) FOR [State]
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] ADD  CONSTRAINT [DF_ActionCardUserStateBase_OwnerIdType]  DEFAULT ((8)) FOR [OwnerIdType]
GO
ALTER TABLE [dbo].[ActionCardUserStateBase]  WITH CHECK ADD  CONSTRAINT [ActionCardUserState_ActionCard] FOREIGN KEY([ActionCardId])
REFERENCES [dbo].[ActionCardBase] ([ActionCardId])
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] CHECK CONSTRAINT [ActionCardUserState_ActionCard]
GO
ALTER TABLE [dbo].[ActionCardUserStateBase]  WITH CHECK ADD  CONSTRAINT [TransactionCurrency_ActionCardUserState] FOREIGN KEY([TransactionCurrencyId])
REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] CHECK CONSTRAINT [TransactionCurrency_ActionCardUserState]
GO
