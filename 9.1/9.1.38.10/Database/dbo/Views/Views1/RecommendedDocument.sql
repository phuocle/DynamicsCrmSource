


--
-- base view for RecommendedDocument
--
create view dbo.[RecommendedDocument]
 (
    -- logical attributes
    [OrganizationIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [RecommendedDocumentId],
    [Title],
    [OrganizationId],
    [ExternalDocumentId],
    [Version],
    [AbsoluteUrl],
    [ReadUrl],
    [EditUrl],
    [ContentType],
    [Source],
    [FileSize],
    [FileType],
    [FullName],
    [Location],
    [Author],
    [RegardingObjectId],
    [RegardingObjectIdName],
    [RegardingObjectTypeCode],
    [IconClassName],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ExchangeRate],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [TimeZoneRuleVersionNumber],
    [TransactionCurrencyId],
    [UTCConversionTimeZoneCode],
    [VersionNumber],
    [ExternalModifiedBy],
    [AssociatedRecordName]
) with view_metadata as
select
    -- logical attributes
    [organization_recommendeddocument].[Name],
    [lk_recommendeddocument_modifiedby].[FullName],
    [lk_recommendeddocument_modifiedby].[YomiFullName],
    [lk_recommendeddocument_createdby].[FullName],
    [lk_recommendeddocument_createdby].[YomiFullName],
    [TransactionCurrency_recommendeddocument].[CurrencyName],
    [lk_recommendeddocument_createdonbehalfby].[FullName],
    [lk_recommendeddocument_createdonbehalfby].[YomiFullName],
    [lk_recommendeddocument_modifiedonbehalfby].[FullName],
    [lk_recommendeddocument_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [RecommendedDocumentBase].[RecommendedDocumentId],
    [RecommendedDocumentBase].[Title],
    [RecommendedDocumentBase].[OrganizationId],
    [RecommendedDocumentBase].[ExternalDocumentId],
    [RecommendedDocumentBase].[Version],
    [RecommendedDocumentBase].[AbsoluteUrl],
    [RecommendedDocumentBase].[ReadUrl],
    [RecommendedDocumentBase].[EditUrl],
    [RecommendedDocumentBase].[ContentType],
    [RecommendedDocumentBase].[Source],
    [RecommendedDocumentBase].[FileSize],
    [RecommendedDocumentBase].[FileType],
    [RecommendedDocumentBase].[FullName],
    [RecommendedDocumentBase].[Location],
    [RecommendedDocumentBase].[Author],
    [RecommendedDocumentBase].[RegardingObjectId],
    [RecommendedDocumentBase].[RegardingObjectIdName],
    [RecommendedDocumentBase].[RegardingObjectTypeCode],
    [RecommendedDocumentBase].[IconClassName],
    [RecommendedDocumentBase].[CreatedBy],
    [RecommendedDocumentBase].[CreatedOn],
    [RecommendedDocumentBase].[CreatedOnBehalfBy],
    [RecommendedDocumentBase].[ExchangeRate],
    [RecommendedDocumentBase].[ModifiedBy],
    [RecommendedDocumentBase].[ModifiedOn],
    [RecommendedDocumentBase].[ModifiedOnBehalfBy],
    [RecommendedDocumentBase].[TimeZoneRuleVersionNumber],
    [RecommendedDocumentBase].[TransactionCurrencyId],
    [RecommendedDocumentBase].[UTCConversionTimeZoneCode],
    [RecommendedDocumentBase].[VersionNumber],
    [RecommendedDocumentBase].[ExternalModifiedBy],
    [RecommendedDocumentBase].[AssociatedRecordName]
from [RecommendedDocumentBase] 
    left join [SystemUserBase] [lk_recommendeddocument_createdby]  on ([RecommendedDocumentBase].[CreatedBy] = [lk_recommendeddocument_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendeddocument_createdonbehalfby]  on ([RecommendedDocumentBase].[CreatedOnBehalfBy] = [lk_recommendeddocument_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendeddocument_modifiedby]  on ([RecommendedDocumentBase].[ModifiedBy] = [lk_recommendeddocument_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendeddocument_modifiedonbehalfby]  on ([RecommendedDocumentBase].[ModifiedOnBehalfBy] = [lk_recommendeddocument_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_recommendeddocument]  on ([RecommendedDocumentBase].[OrganizationId] = [organization_recommendeddocument].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_recommendeddocument] on ([RecommendedDocumentBase].[TransactionCurrencyId] = [TransactionCurrency_recommendeddocument].[TransactionCurrencyId])
