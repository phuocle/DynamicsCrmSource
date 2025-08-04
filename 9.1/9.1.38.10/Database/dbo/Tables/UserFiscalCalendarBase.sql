CREATE TABLE [dbo].[UserFiscalCalendarBase] (
    [Period2]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period2] DEFAULT ((0)) NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [Period10]                  MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period10] DEFAULT ((0)) NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [ModifiedOn]                DATETIME         NULL,
    [SalesPersonId]             UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [ImportSequenceNumber]      INT              NULL,
    [Period9]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period9] DEFAULT ((0)) NULL,
    [Period3]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period3] DEFAULT ((0)) NULL,
    [Period1]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period1] DEFAULT ((0)) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [Period11]                  MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period11] DEFAULT ((0)) NULL,
    [Period8]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period8] DEFAULT ((0)) NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [Period6]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period6] DEFAULT ((0)) NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [EffectiveOn]               DATETIME         NULL,
    [FiscalPeriodType]          INT              NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [Period12]                  MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period12] DEFAULT ((0)) NULL,
    [Period7]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period7] DEFAULT ((0)) NULL,
    [Period5]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period5] DEFAULT ((0)) NULL,
    [UserFiscalCalendarId]      UNIQUEIDENTIFIER NOT NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [CreatedOn]                 DATETIME         NULL,
    [Period4]                   MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period4] DEFAULT ((0)) NULL,
    [Period13]                  MONEY            CONSTRAINT [DF_UserFiscalCalendarBase_Period13] DEFAULT ((0)) NULL,
    [Period6_Base]              MONEY            NULL,
    [Period12_Base]             MONEY            NULL,
    [Period2_Base]              MONEY            NULL,
    [Period4_Base]              MONEY            NULL,
    [Period7_Base]              MONEY            NULL,
    [Period3_Base]              MONEY            NULL,
    [Period5_Base]              MONEY            NULL,
    [Period9_Base]              MONEY            NULL,
    [Period10_Base]             MONEY            NULL,
    [Period1_Base]              MONEY            NULL,
    [Period13_Base]             MONEY            NULL,
    [Period11_Base]             MONEY            NULL,
    [Period8_Base]              MONEY            NULL,
    CONSTRAINT [cndx_PrimaryKey_UserFiscalCalendar] PRIMARY KEY CLUSTERED ([UserFiscalCalendarId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [system_user_quotas] FOREIGN KEY ([SalesPersonId]) REFERENCES [dbo].[SystemUserBase] ([SystemUserId]),
    CONSTRAINT [transactioncurrency_annualfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [transactioncurrency_fixedmonthlyfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [transactioncurrency_monthlyfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [transactioncurrency_quarterlyfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [transactioncurrency_semiannualfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId]),
    CONSTRAINT [transactioncurrency_userfiscalcalendar] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
ALTER TABLE [dbo].[UserFiscalCalendarBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [fndx_for_cascaderelationship_system_user_quotas]
    ON [dbo].[UserFiscalCalendarBase]([SalesPersonId] ASC) WHERE ([SalesPersonId] IS NOT NULL) WITH (FILLFACTOR = 80);

