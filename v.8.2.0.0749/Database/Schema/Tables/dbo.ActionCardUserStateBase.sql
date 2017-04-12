CREATE TABLE [dbo].[ActionCardUserStateBase]
(
[TransactionCurrencyId] [uniqueidentifier] NULL,
[ExchangeRate] [decimal] (23, 10) NULL,
[OwnerId] [uniqueidentifier] NOT NULL CONSTRAINT [DF_ActionCardUserStateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000'),
[UTCConversionTimeZoneCode] [int] NULL,
[ActionCardUserStateId] [uniqueidentifier] NOT NULL,
[VersionNumber] [timestamp] NULL,
[TimeZoneRuleVersionNumber] [int] NULL,
[State] [int] NOT NULL CONSTRAINT [DF_ActionCardUserStateBase_State] DEFAULT ((0)),
[StartDate] [datetime] NOT NULL,
[ActionCardId] [uniqueidentifier] NULL,
[ActionCardIdObjectTypeCode] [int] NULL,
[OwnerIdType] [int] NOT NULL CONSTRAINT [DF_ActionCardUserStateBase_OwnerIdType] DEFAULT ((8))
) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsuserstateownerid] ON [dbo].[ActionCardUserStateBase] ([OwnerId], [ActionCardId]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber] ON [dbo].[ActionCardUserStateBase] ([VersionNumber]) WITH (FILLFACTOR=80) ON [PRIMARY]
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] ADD CONSTRAINT [ActionCardUserState_ActionCard] FOREIGN KEY ([ActionCardId]) REFERENCES [dbo].[ActionCardBase] ([ActionCardId])
GO
ALTER TABLE [dbo].[ActionCardUserStateBase] ADD CONSTRAINT [TransactionCurrency_ActionCardUserState] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
GO
