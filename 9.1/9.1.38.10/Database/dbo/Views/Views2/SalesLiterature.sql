


--
-- base view for SalesLiterature
--
create view dbo.[SalesLiterature]
 (
    -- logical attributes
    [EntityImage],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [EmployeeContactIdYomiName],
    [EntityImage_URL],
    [TransactionCurrencyIdName],
    [EmployeeContactIdName],
    [EntityImage_Timestamp],
    [SubjectIdName],

    -- physical attributes
    [SalesLiteratureId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [OrganizationId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [ProcessId],
    [StageId],
    [TraversedPath],
    [Description],
    [EmployeeContactId],
    [ExpirationDate],
    [HasAttachments],
    [IsCustomerViewable],
    [KeyWords],
    [LiteratureTypeCode],
    [SubjectId],
    [EntityImageId],
    [ExchangeRate],
    [TransactionCurrencyId]
) with view_metadata as
select
    -- logical attributes
    [lk_salesliterature_entityimage].[ImageData],
    [lk_salesliteraturebase_createdby].[FullName],
    [lk_salesliteraturebase_createdby].[YomiFullName],
    [lk_salesliteraturebase_createdonbehalfby].[FullName],
    [lk_salesliteraturebase_createdonbehalfby].[YomiFullName],
    [lk_salesliteraturebase_modifiedby].[FullName],
    [lk_salesliteraturebase_modifiedby].[YomiFullName],
    [lk_salesliteraturebase_modifiedonbehalfby].[FullName],
    [lk_salesliteraturebase_modifiedonbehalfby].[YomiFullName],
    [organization_sales_literature].[Name],
    [system_user_sales_literature].[YomiFullName],
    [lk_salesliterature_entityimage].[ImageURL],
    [TransactionCurrency_SalesLiterature].[CurrencyName],
    [system_user_sales_literature].[FullName],
    [lk_salesliterature_entityimage].[ImageTimestamp],
    [subject_sales_literature].[Title],

    -- physical attribute
    [SalesLiteratureBase].[SalesLiteratureId],
    [SalesLiteratureBase].[CreatedOn],
    [SalesLiteratureBase].[CreatedBy],
    [SalesLiteratureBase].[ModifiedOn],
    [SalesLiteratureBase].[ModifiedBy],
    [SalesLiteratureBase].[CreatedOnBehalfBy],
    [SalesLiteratureBase].[ModifiedOnBehalfBy],
    [SalesLiteratureBase].[OrganizationId],
    [SalesLiteratureBase].[VersionNumber],
    [SalesLiteratureBase].[ImportSequenceNumber],
    [SalesLiteratureBase].[OverriddenCreatedOn],
    [SalesLiteratureBase].[TimeZoneRuleVersionNumber],
    [SalesLiteratureBase].[UTCConversionTimeZoneCode],
    [SalesLiteratureBase].[Name],
    [SalesLiteratureBase].[ProcessId],
    [SalesLiteratureBase].[StageId],
    [SalesLiteratureBase].[TraversedPath],
    [SalesLiteratureBase].[Description],
    [SalesLiteratureBase].[EmployeeContactId],
    [SalesLiteratureBase].[ExpirationDate],
    [SalesLiteratureBase].[HasAttachments],
    [SalesLiteratureBase].[IsCustomerViewable],
    [SalesLiteratureBase].[KeyWords],
    [SalesLiteratureBase].[LiteratureTypeCode],
    [SalesLiteratureBase].[SubjectId],
    [SalesLiteratureBase].[EntityImageId],
    [SalesLiteratureBase].[ExchangeRate],
    [SalesLiteratureBase].[TransactionCurrencyId]
from [SalesLiteratureBase] 
    left join [ImageDescriptor] [lk_salesliterature_entityimage] on ([SalesLiteratureBase].[EntityImageId] = [lk_salesliterature_entityimage].[ImageDescriptorId])
    left join [SystemUserBase] [lk_salesliteraturebase_createdby] on ([SalesLiteratureBase].[CreatedBy] = [lk_salesliteraturebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteraturebase_createdonbehalfby] on ([SalesLiteratureBase].[CreatedOnBehalfBy] = [lk_salesliteraturebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteraturebase_modifiedby] on ([SalesLiteratureBase].[ModifiedBy] = [lk_salesliteraturebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteraturebase_modifiedonbehalfby] on ([SalesLiteratureBase].[ModifiedOnBehalfBy] = [lk_salesliteraturebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_sales_literature] on ([SalesLiteratureBase].[OrganizationId] = [organization_sales_literature].[OrganizationId])
    left join [SubjectBase] [subject_sales_literature] on ([SalesLiteratureBase].[SubjectId] = [subject_sales_literature].[SubjectId])
    left join [SystemUserBase] [system_user_sales_literature] on ([SalesLiteratureBase].[EmployeeContactId] = [system_user_sales_literature].[SystemUserId])
    left join [TransactionCurrencyBase] [TransactionCurrency_SalesLiterature] on ([SalesLiteratureBase].[TransactionCurrencyId] = [TransactionCurrency_SalesLiterature].[TransactionCurrencyId])
