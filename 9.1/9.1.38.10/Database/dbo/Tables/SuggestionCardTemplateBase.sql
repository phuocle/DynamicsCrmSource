CREATE TABLE [dbo].[SuggestionCardTemplateBase] (
    [SuggestionCardTemplateId]  UNIQUEIDENTIFIER NOT NULL,
    [TransactionCurrencyId]     UNIQUEIDENTIFIER NULL,
    [CreatedOnBehalfBy]         UNIQUEIDENTIFIER NULL,
    [ModifiedOnBehalfBy]        UNIQUEIDENTIFIER NULL,
    [TimeZoneRuleVersionNumber] INT              NULL,
    [OrganizationId]            UNIQUEIDENTIFIER NULL,
    [ModifiedOn]                DATETIME         NULL,
    [ModifiedBy]                UNIQUEIDENTIFIER NULL,
    [name]                      NVARCHAR (100)   NULL,
    [ExchangeRate]              DECIMAL (23, 10) NULL,
    [CreatedBy]                 UNIQUEIDENTIFIER NULL,
    [UTCConversionTimeZoneCode] INT              NULL,
    [StructuredLayout]          NVARCHAR (MAX)   NULL,
    [CreatedOn]                 DATETIME         NULL,
    CONSTRAINT [PK_suggestioncardtemplateBase] PRIMARY KEY CLUSTERED ([SuggestionCardTemplateId] ASC) WITH (FILLFACTOR = 80),
    CONSTRAINT [TransactionCurrency_suggestioncardtemplate] FOREIGN KEY ([TransactionCurrencyId]) REFERENCES [dbo].[TransactionCurrencyBase] ([TransactionCurrencyId])
);


GO
EXECUTE sp_tableoption @TableNamePattern = N'[dbo].[SuggestionCardTemplateBase]', @OptionName = N'large value types out of row', @OptionValue = N'1';


GO
ALTER TABLE [dbo].[SuggestionCardTemplateBase] SET (LOCK_ESCALATION = DISABLE);


GO
CREATE NONCLUSTERED INDEX [ndx_Security]
    ON [dbo].[SuggestionCardTemplateBase]([OrganizationId] ASC) WITH (FILLFACTOR = 80);


GO
CREATE NONCLUSTERED INDEX [ndx_name]
    ON [dbo].[SuggestionCardTemplateBase]([name] ASC) WITH (FILLFACTOR = 80);

