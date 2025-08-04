


--
-- base view for DelveActionHub
--
create view dbo.[DelveActionHub]
 (
    -- logical attributes
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [CreatedTime],
    [ModifiedTime],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [DelveActionHubId],
    [ExchangeRate],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [StateCode],
    [StatusCode],
    [MessageId],
    [Subject],
    [Sender],
    [MessageTime],
    [Description],
    [CardType],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RecordId],
    [RecordIdName],
    [MailWebLink],
    [RelatedMailIds],
    [RecordIdObjectTypeCode],
    [SenderImageUrl],
    [IconClassName],
    [RegardingObjectTypeCode],
    [SenderEntityId],
    [SenderEntityObjectTypeCode]
) with view_metadata as
select
    -- logical attributes
    [lk_delveactionhub_modifiedonbehalfby].[FullName],
    [lk_delveactionhub_modifiedonbehalfby].[YomiFullName],
    [lk_delveactionhub_createdby].[FullName],
    [lk_delveactionhub_createdby].[YomiFullName],
    [lk_delveactionhub_createdonbehalfby].[FullName],
    [lk_delveactionhub_createdonbehalfby].[YomiFullName],
    [lk_delveactionhub_modifiedby].[FullName],
    [lk_delveactionhub_modifiedby].[YomiFullName],
    [organization_delveactionhub].[Name],
    [TransactionCurrency_delveactionhub].[CurrencyName],

    -- physical attribute
    [DelveActionHubBase].[CreatedTime],
    [DelveActionHubBase].[ModifiedTime],
    [DelveActionHubBase].[CreatedBy],
    [DelveActionHubBase].[CreatedOn],
    [DelveActionHubBase].[CreatedOnBehalfBy],
    [DelveActionHubBase].[DelveActionHubId],
    [DelveActionHubBase].[ExchangeRate],
    [DelveActionHubBase].[ModifiedBy],
    [DelveActionHubBase].[ModifiedOn],
    [DelveActionHubBase].[ModifiedOnBehalfBy],
    [DelveActionHubBase].[OrganizationId],
    [DelveActionHubBase].[TimeZoneRuleVersionNumber],
    [DelveActionHubBase].[TransactionCurrencyId],
    [DelveActionHubBase].[UTCConversionTimeZoneCode],
    [DelveActionHubBase].[VersionNumber],
    [DelveActionHubBase].[StateCode],
    [DelveActionHubBase].[StatusCode],
    [DelveActionHubBase].[MessageId],
    [DelveActionHubBase].[Subject],
    [DelveActionHubBase].[Sender],
    [DelveActionHubBase].[MessageTime],
    [DelveActionHubBase].[Description],
    [DelveActionHubBase].[CardType],
    [DelveActionHubBase].[RegardingObjectId],
    [DelveActionHubBase].[RegardingObjectIdName],
    [DelveActionHubBase].[RecordId],
    [DelveActionHubBase].[RecordIdName],
    [DelveActionHubBase].[MailWebLink],
    [DelveActionHubBase].[RelatedMailIds],
    [DelveActionHubBase].[RecordIdObjectTypeCode],
    [DelveActionHubBase].[SenderImageUrl],
    [DelveActionHubBase].[IconClassName],
    [DelveActionHubBase].[RegardingObjectTypeCode],
    [DelveActionHubBase].[SenderEntityId],
    [DelveActionHubBase].[SenderEntityObjectTypeCode]
from [DelveActionHubBase] 
    left join [SystemUserBase] [lk_delveactionhub_createdby]  on ([DelveActionHubBase].[CreatedBy] = [lk_delveactionhub_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_delveactionhub_createdonbehalfby]  on ([DelveActionHubBase].[CreatedOnBehalfBy] = [lk_delveactionhub_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_delveactionhub_modifiedby]  on ([DelveActionHubBase].[ModifiedBy] = [lk_delveactionhub_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_delveactionhub_modifiedonbehalfby]  on ([DelveActionHubBase].[ModifiedOnBehalfBy] = [lk_delveactionhub_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_delveactionhub]  on ([DelveActionHubBase].[OrganizationId] = [organization_delveactionhub].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_delveactionhub] on ([DelveActionHubBase].[TransactionCurrencyId] = [TransactionCurrency_delveactionhub].[TransactionCurrencyId])
