SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for RecommendedDocument
--
create view [dbo].[RecommendedDocument]
 (
    -- logical attributes
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [TransactionCurrencyIdName],

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
    [lk_recommendeddocument_modifiedby].[FullName],
    [lk_recommendeddocument_modifiedby].[YomiFullName],
    [lk_recommendeddocument_createdby].[FullName],
    [lk_recommendeddocument_createdby].[YomiFullName],
    [lk_recommendeddocument_createdonbehalfby].[FullName],
    [lk_recommendeddocument_createdonbehalfby].[YomiFullName],
    [lk_recommendeddocument_modifiedonbehalfby].[FullName],
    [lk_recommendeddocument_modifiedonbehalfby].[YomiFullName],
    [organization_recommendeddocument].[Name],
    [TransactionCurrency_recommendeddocument].[CurrencyName],

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
    left join [SystemUserBase] [lk_recommendeddocument_createdby] with(nolock) on ([RecommendedDocumentBase].[CreatedBy] = [lk_recommendeddocument_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendeddocument_createdonbehalfby] with(nolock) on ([RecommendedDocumentBase].[CreatedOnBehalfBy] = [lk_recommendeddocument_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendeddocument_modifiedby] with(nolock) on ([RecommendedDocumentBase].[ModifiedBy] = [lk_recommendeddocument_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_recommendeddocument_modifiedonbehalfby] with(nolock) on ([RecommendedDocumentBase].[ModifiedOnBehalfBy] = [lk_recommendeddocument_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_recommendeddocument] with(nolock) on ([RecommendedDocumentBase].[OrganizationId] = [organization_recommendeddocument].[OrganizationId])
    left join [TransactionCurrencyBase] [TransactionCurrency_recommendeddocument] on ([RecommendedDocumentBase].[TransactionCurrencyId] = [TransactionCurrency_recommendeddocument].[TransactionCurrencyId])
GO
