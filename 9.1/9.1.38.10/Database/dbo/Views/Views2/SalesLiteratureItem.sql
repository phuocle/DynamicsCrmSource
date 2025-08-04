


--
-- base view for SalesLiteratureItem
--
create view dbo.[SalesLiteratureItem]
 (
    -- logical attributes
    [SalesLiteratureIdName],
    [OrganizationId],
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [SalesLiteratureItemId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Title],
    [Abstract],
    [AttachedDocumentUrl],
    [AuthorName],
    [DocumentBody],
    [FileName],
    [FileSize],
    [FileTypeCode],
    [IsCustomerViewable],
    [KeyWords],
    [MimeType],
    [SalesLiteratureId],
    [FileType],
    [Mode]
) with view_metadata as
select
    -- logical attributes
    [sales_literature_items].[Name],
    [sales_literature_items].[OrganizationId],
    [lk_salesliteratureitembase_createdby].[FullName],
    [lk_salesliteratureitembase_createdby].[YomiFullName],
    [lk_salesliteratureitembase_createdonbehalfby].[FullName],
    [lk_salesliteratureitembase_createdonbehalfby].[YomiFullName],
    [lk_salesliteratureitembase_modifiedby].[FullName],
    [lk_salesliteratureitembase_modifiedby].[YomiFullName],
    [lk_salesliteratureitembase_modifiedonbehalfby].[FullName],
    [lk_salesliteratureitembase_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [SalesLiteratureItemBase].[SalesLiteratureItemId],
    [SalesLiteratureItemBase].[CreatedOn],
    [SalesLiteratureItemBase].[CreatedBy],
    [SalesLiteratureItemBase].[ModifiedOn],
    [SalesLiteratureItemBase].[ModifiedBy],
    [SalesLiteratureItemBase].[CreatedOnBehalfBy],
    [SalesLiteratureItemBase].[ModifiedOnBehalfBy],
    [SalesLiteratureItemBase].[VersionNumber],
    [SalesLiteratureItemBase].[ImportSequenceNumber],
    [SalesLiteratureItemBase].[OverriddenCreatedOn],
    [SalesLiteratureItemBase].[TimeZoneRuleVersionNumber],
    [SalesLiteratureItemBase].[UTCConversionTimeZoneCode],
    [SalesLiteratureItemBase].[Title],
    [SalesLiteratureItemBase].[Abstract],
    [SalesLiteratureItemBase].[AttachedDocumentUrl],
    [SalesLiteratureItemBase].[AuthorName],
    [SalesLiteratureItemBase].[DocumentBody],
    [SalesLiteratureItemBase].[FileName],
    [SalesLiteratureItemBase].[FileSize],
    [SalesLiteratureItemBase].[FileTypeCode],
    [SalesLiteratureItemBase].[IsCustomerViewable],
    [SalesLiteratureItemBase].[KeyWords],
    [SalesLiteratureItemBase].[MimeType],
    [SalesLiteratureItemBase].[SalesLiteratureId],
    [SalesLiteratureItemBase].[FileType],
    [SalesLiteratureItemBase].[Mode]
from [SalesLiteratureItemBase] 
    left join [SystemUserBase] [lk_salesliteratureitembase_createdby] on ([SalesLiteratureItemBase].[CreatedBy] = [lk_salesliteratureitembase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteratureitembase_createdonbehalfby] on ([SalesLiteratureItemBase].[CreatedOnBehalfBy] = [lk_salesliteratureitembase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteratureitembase_modifiedby] on ([SalesLiteratureItemBase].[ModifiedBy] = [lk_salesliteratureitembase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteratureitembase_modifiedonbehalfby] on ([SalesLiteratureItemBase].[ModifiedOnBehalfBy] = [lk_salesliteratureitembase_modifiedonbehalfby].[SystemUserId])
    left join [SalesLiteratureBase] [sales_literature_items] on ([SalesLiteratureItemBase].[SalesLiteratureId] = [sales_literature_items].[SalesLiteratureId])
