


--
-- base view for SalesLiterature
--
create view dbo.[SalesLiterature]
 (
    -- logical attributes
    [EntityImage_URL],
    [TransactionCurrencyIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [EmployeeContactIdYomiName],
    [CreatedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],
    [EmployeeContactIdName],
    [SubjectIdName],
    [CreatedByYomiName],
    [EntityImage_Timestamp],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [EntityImage],

    -- physical attributes
    [SalesLiteratureId],
    [OrganizationId],
    [EmployeeContactId],
    [SubjectId],
    [Description],
    [LiteratureTypeCode],
    [Name],
    [ExpirationDate],
    [IsCustomerViewable],
    [CreatedBy],
    [KeyWords],
    [HasAttachments],
    [ModifiedBy],
    [CreatedOn],
    [ModifiedOn],
    [VersionNumber],
    [UTCConversionTimeZoneCode],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [ImportSequenceNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [TransactionCurrencyId],
    [ExchangeRate],
    [ProcessId],
    [StageId],
    [EntityImageId]
) with view_metadata as
select
    -- logical attributes
    [lk_salesliterature_entityimage].[ImageURL],
    [TransactionCurrency_SalesLiterature].[CurrencyName],
    [lk_salesliteraturebase_createdonbehalfby].[FullName],
    [lk_salesliteraturebase_createdonbehalfby].[YomiFullName],
    [system_user_sales_literature].[YomiFullName],
    [lk_salesliteraturebase_createdby].[FullName],
    [lk_salesliteraturebase_modifiedby].[YomiFullName],
    [organization_sales_literature].[Name],
    [system_user_sales_literature].[FullName],
    [subject_sales_literature].[Title],
    [lk_salesliteraturebase_createdby].[YomiFullName],
    [lk_salesliterature_entityimage].[ImageTimestamp],
    [lk_salesliteraturebase_modifiedonbehalfby].[FullName],
    [lk_salesliteraturebase_modifiedonbehalfby].[YomiFullName],
    [lk_salesliteraturebase_modifiedby].[FullName],
    [lk_salesliterature_entityimage].[ImageData],

    -- physical attribute
    [SalesLiteratureBase].[SalesLiteratureId],
    [SalesLiteratureBase].[OrganizationId],
    [SalesLiteratureBase].[EmployeeContactId],
    [SalesLiteratureBase].[SubjectId],
    [SalesLiteratureBase].[Description],
    [SalesLiteratureBase].[LiteratureTypeCode],
    [SalesLiteratureBase].[Name],
    [SalesLiteratureBase].[ExpirationDate],
    [SalesLiteratureBase].[IsCustomerViewable],
    [SalesLiteratureBase].[CreatedBy],
    [SalesLiteratureBase].[KeyWords],
    [SalesLiteratureBase].[HasAttachments],
    [SalesLiteratureBase].[ModifiedBy],
    [SalesLiteratureBase].[CreatedOn],
    [SalesLiteratureBase].[ModifiedOn],
    [SalesLiteratureBase].[VersionNumber],
    [SalesLiteratureBase].[UTCConversionTimeZoneCode],
    [SalesLiteratureBase].[OverriddenCreatedOn],
    [SalesLiteratureBase].[TimeZoneRuleVersionNumber],
    [SalesLiteratureBase].[ImportSequenceNumber],
    [SalesLiteratureBase].[CreatedOnBehalfBy],
    [SalesLiteratureBase].[ModifiedOnBehalfBy],
    [SalesLiteratureBase].[TransactionCurrencyId],
    [SalesLiteratureBase].[ExchangeRate],
    [SalesLiteratureBase].[ProcessId],
    [SalesLiteratureBase].[StageId],
    [SalesLiteratureBase].[EntityImageId]
from [SalesLiteratureBase] 
    left join [ImageDescriptor] [lk_salesliterature_entityimage] on ([SalesLiteratureBase].[EntityImageId] = [lk_salesliterature_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_salesliteraturebase_createdby] with(nolock) on ([SalesLiteratureBase].[CreatedBy] = [lk_salesliteraturebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteraturebase_createdonbehalfby] with(nolock) on ([SalesLiteratureBase].[CreatedOnBehalfBy] = [lk_salesliteraturebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteraturebase_modifiedby] with(nolock) on ([SalesLiteratureBase].[ModifiedBy] = [lk_salesliteraturebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteraturebase_modifiedonbehalfby] with(nolock) on ([SalesLiteratureBase].[ModifiedOnBehalfBy] = [lk_salesliteraturebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_sales_literature] with(nolock) on ([SalesLiteratureBase].[OrganizationId] = [organization_sales_literature].[OrganizationId])
    left join [SubjectBase] [subject_sales_literature] on ([SalesLiteratureBase].[SubjectId] = [subject_sales_literature].[SubjectId])
    left join [SystemUserBase] [system_user_sales_literature] with(nolock) on ([SalesLiteratureBase].[EmployeeContactId] = [system_user_sales_literature].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_SalesLiterature] on ([SalesLiteratureBase].[TransactionCurrencyId] = [TransactionCurrency_SalesLiterature].[TransactionCurrencyId])
