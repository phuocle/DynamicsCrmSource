CREATE TABLE [dbo].[ActionCardUserStateBase] (
    [TransactionCurrencyId]      UNIQUEIDENTIFIER NULL,
    [ActionCardId]               UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber]  INT              NULL,
    [ActionCardUserStateId]      UNIQUEIDENTIFIER NOT NULL,
    [StartDate]                  DATETIME         NOT NULL,
    [UTCConversionTimeZoneCode]  INT              NULL,
    [VersionNumber]              ROWVERSION       NULL,
    [State]                      INT              CONSTRAINT [DF_ActionCardUserStateBase_State] DEFAULT ((0)) NOT NULL,
    [OwnerId]                    UNIQUEIDENTIFIER CONSTRAINT [DF_ActionCardUserStateBase_OwnerId] DEFAULT ('00000000-0000-0000-0000-000000000000') NOT NULL,
    [ExchangeRate]               DECIMAL (23, 10) NULL,
    [ActionCardIdObjectTypeCode] INT              NULL,
    [OwnerIdType]                INT              CONSTRAINT [DF_ActionCardUserStateBase_OwnerIdType] DEFAULT ((8)) NOT NULL,
    CONSTRAINT [ActionCardUserState_ActionCard] FOREIGN KEY ([ActionCardId]) REFERENCES [dbo].[ActionCardBase] ([ActionCardId]),
    CONSTRAINT [ActionCardUserState_Owner] FOREIGN KEY ([OwnerId]) REFERENCES [dbo].[OwnerBase] ([OwnerId]),
    CONSTRAINT [TransactionCurrency_ActionCardUserState] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[ActionCardUserStateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE UNIQUE NONCLUSTERED INDEX [fndx_Sync_VersionNumber]
    ON [dbo].[ActionCardUserStateBase]([VersionNumber] ASC) WITH (FILLFACTOR = 80);


GO
CREATE UNIQUE NONCLUSTERED INDEX [cndx_actioncardsuserstateownerid]
    ON [dbo].[ActionCardUserStateBase]([OwnerId] ASC, [ActionCardId] ASC) WITH (FILLFACTOR = 80);

