


--
-- base view for OfficeGraphDocument
--
create view dbo.[OfficeGraphDocument]
 (
    -- logical attributes
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [TransactionCurrencyIdName],

    -- physical attributes
    [OfficeGraphDocumentId],
    [Title],
    [OrganizationId],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [PreviewImageUrl],
    [FileType],
    [WebLocationUrl],
    [ViewCount],
    [AuthorNames],
    [QueryType],
    [CreatedBy],
    [CreatedTime],
    [ModifiedBy],
    [ModifiedTime],
    [CreatedOnBehalfBy],
    [ExchangeRate],
    [ModifiedOnBehalfBy],
    [DocumentId],
    [Rank],
    [SiteUrl],
    [ReadUrl],
    [SiteTitle],
    [DocumentLastModifiedBy],
    [DocumentLastModifiedOn],
    [FileExtension],
    [SecondaryFileExtension],
    [DocumentPreviewMetadata]
) with view_metadata as
select
    -- logical attributes
    [organization_officegraphdocument].[Name],
    [lk_officegraphdocument_createdonbehalfby].[FullName],
    [lk_officegraphdocument_createdonbehalfby].[YomiFullName],
    [lk_officegraphdocument_modifiedonbehalfby].[FullName],
    [lk_officegraphdocument_modifiedonbehalfby].[YomiFullName],
    [TransactionCurrency_officegraphdocument].[CurrencyName],

    -- physical attribute
    [OfficeGraphDocumentBase].[OfficeGraphDocumentId],
    [OfficeGraphDocumentBase].[Title],
    [OfficeGraphDocumentBase].[OrganizationId],
    [OfficeGraphDocumentBase].[TimeZoneRuleVersionNumber],
    [OfficeGraphDocumentBase].[TransactionCurrencyId],
    [OfficeGraphDocumentBase].[UTCConversionTimeZoneCode],
    [OfficeGraphDocumentBase].[VersionNumber],
    [OfficeGraphDocumentBase].[PreviewImageUrl],
    [OfficeGraphDocumentBase].[FileType],
    [OfficeGraphDocumentBase].[WebLocationUrl],
    [OfficeGraphDocumentBase].[ViewCount],
    [OfficeGraphDocumentBase].[AuthorNames],
    [OfficeGraphDocumentBase].[QueryType],
    [OfficeGraphDocumentBase].[CreatedBy],
    [OfficeGraphDocumentBase].[CreatedTime],
    [OfficeGraphDocumentBase].[ModifiedBy],
    [OfficeGraphDocumentBase].[ModifiedTime],
    [OfficeGraphDocumentBase].[CreatedOnBehalfBy],
    [OfficeGraphDocumentBase].[ExchangeRate],
    [OfficeGraphDocumentBase].[ModifiedOnBehalfBy],
    [OfficeGraphDocumentBase].[DocumentId],
    [OfficeGraphDocumentBase].[Rank],
    [OfficeGraphDocumentBase].[SiteUrl],
    [OfficeGraphDocumentBase].[ReadUrl],
    [OfficeGraphDocumentBase].[SiteTitle],
    [OfficeGraphDocumentBase].[DocumentLastModifiedBy],
    [OfficeGraphDocumentBase].[DocumentLastModifiedOn],
    [OfficeGraphDocumentBase].[FileExtension],
    [OfficeGraphDocumentBase].[SecondaryFileExtension],
    [OfficeGraphDocumentBase].[DocumentPreviewMetadata]
from [OfficeGraphDocumentBase] 
    left join [SystemUserBase] [lk_officegraphdocument_createdonbehalfby]  on ([OfficeGraphDocumentBase].[CreatedOnBehalfBy] = [lk_officegraphdocument_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_officegraphdocument_modifiedonbehalfby]  on ([OfficeGraphDocumentBase].[ModifiedOnBehalfBy] = [lk_officegraphdocument_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_officegraphdocument]  on ([OfficeGraphDocumentBase].[OrganizationId] = [organization_officegraphdocument].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_officegraphdocument] on ([OfficeGraphDocumentBase].[TransactionCurrencyId] = [TransactionCurrency_officegraphdocument].[TransactionCurrencyId])
