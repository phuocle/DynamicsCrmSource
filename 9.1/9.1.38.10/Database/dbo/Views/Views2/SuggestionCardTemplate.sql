


--
-- base view for SuggestionCardTemplate
--
create view dbo.[SuggestionCardTemplate]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ExchangeRate],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [name],
    [OrganizationId],
    [StructuredLayout],
    [SuggestionCardTemplateId],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode]
) with view_metadata as
select
    -- logical attributes
    [organization_suggestioncardtemplate].[Name],
    [lk_suggestioncardtemplate_createdby].[FullName],
    [lk_suggestioncardtemplate_createdby].[YomiFullName],
    [lk_suggestioncardtemplate_modifiedonbehalfby].[FullName],
    [lk_suggestioncardtemplate_modifiedonbehalfby].[YomiFullName],
    [lk_suggestioncardtemplate_modifiedby].[FullName],
    [lk_suggestioncardtemplate_modifiedby].[YomiFullName],
    [lk_suggestioncardtemplate_createdonbehalfby].[FullName],
    [lk_suggestioncardtemplate_createdonbehalfby].[YomiFullName],
    [TransactionCurrency_suggestioncardtemplate].[CurrencyName],

    -- physical attribute
    [SuggestionCardTemplateBase].[CreatedBy],
    [SuggestionCardTemplateBase].[CreatedOn],
    [SuggestionCardTemplateBase].[CreatedOnBehalfBy],
    [SuggestionCardTemplateBase].[ExchangeRate],
    [SuggestionCardTemplateBase].[ModifiedBy],
    [SuggestionCardTemplateBase].[ModifiedOn],
    [SuggestionCardTemplateBase].[ModifiedOnBehalfBy],
    [SuggestionCardTemplateBase].[name],
    [SuggestionCardTemplateBase].[OrganizationId],
    [SuggestionCardTemplateBase].[StructuredLayout],
    [SuggestionCardTemplateBase].[SuggestionCardTemplateId],
    [SuggestionCardTemplateBase].[TimeZoneRuleVersionNumber],
    [SuggestionCardTemplateBase].[TransactionCurrencyId],
    [SuggestionCardTemplateBase].[UTCConversionTimeZoneCode]
from [SuggestionCardTemplateBase] 
    left join [SystemUserBase] [lk_suggestioncardtemplate_createdby]  on ([SuggestionCardTemplateBase].[CreatedBy] = [lk_suggestioncardtemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_suggestioncardtemplate_createdonbehalfby]  on ([SuggestionCardTemplateBase].[CreatedOnBehalfBy] = [lk_suggestioncardtemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_suggestioncardtemplate_modifiedby]  on ([SuggestionCardTemplateBase].[ModifiedBy] = [lk_suggestioncardtemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_suggestioncardtemplate_modifiedonbehalfby]  on ([SuggestionCardTemplateBase].[ModifiedOnBehalfBy] = [lk_suggestioncardtemplate_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_suggestioncardtemplate]  on ([SuggestionCardTemplateBase].[OrganizationId] = [organization_suggestioncardtemplate].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_suggestioncardtemplate] on ([SuggestionCardTemplateBase].[TransactionCurrencyId] = [TransactionCurrency_suggestioncardtemplate].[TransactionCurrencyId])
