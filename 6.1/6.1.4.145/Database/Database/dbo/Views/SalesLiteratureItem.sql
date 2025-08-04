


--
-- base view for SalesLiteratureItem
--
create view dbo.[SalesLiteratureItem]
 (
    -- logical attributes
    [ModifiedByYomiName],
    [OrganizationId],
    [CreatedOnBehalfByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],

    -- physical attributes
    [SalesLiteratureItemId],
    [SalesLiteratureId],
    [IsCustomerViewable],
    [AttachedDocumentUrl],
    [Title],
    [MimeType],
    [AuthorName],
    [Abstract],
    [DocumentBody],
    [CreatedOn],
    [KeyWords],
    [FileName],
    [FileTypeCode],
    [FileSize],
    [CreatedBy],
    [ModifiedBy],
    [ModifiedOn],
    [VersionNumber],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_salesliteratureitembase_modifiedby].[YomiFullName],
    [sales_literature_items].[OrganizationId],
    [lk_salesliteratureitembase_createdonbehalfby].[YomiFullName],
    [lk_salesliteratureitembase_createdby].[FullName],
    [lk_salesliteratureitembase_modifiedonbehalfby].[FullName],
    [lk_salesliteratureitembase_createdonbehalfby].[FullName],
    [lk_salesliteratureitembase_createdby].[YomiFullName],
    [lk_salesliteratureitembase_modifiedonbehalfby].[YomiFullName],
    [lk_salesliteratureitembase_modifiedby].[FullName],

    -- physical attribute
    [SalesLiteratureItemBase].[SalesLiteratureItemId],
    [SalesLiteratureItemBase].[SalesLiteratureId],
    [SalesLiteratureItemBase].[IsCustomerViewable],
    [SalesLiteratureItemBase].[AttachedDocumentUrl],
    [SalesLiteratureItemBase].[Title],
    [SalesLiteratureItemBase].[MimeType],
    [SalesLiteratureItemBase].[AuthorName],
    [SalesLiteratureItemBase].[Abstract],
    [SalesLiteratureItemBase].[DocumentBody],
    [SalesLiteratureItemBase].[CreatedOn],
    [SalesLiteratureItemBase].[KeyWords],
    [SalesLiteratureItemBase].[FileName],
    [SalesLiteratureItemBase].[FileTypeCode],
    [SalesLiteratureItemBase].[FileSize],
    [SalesLiteratureItemBase].[CreatedBy],
    [SalesLiteratureItemBase].[ModifiedBy],
    [SalesLiteratureItemBase].[ModifiedOn],
    [SalesLiteratureItemBase].[VersionNumber],
    [SalesLiteratureItemBase].[OverriddenCreatedOn],
    [SalesLiteratureItemBase].[ImportSequenceNumber],
    [SalesLiteratureItemBase].[CreatedOnBehalfBy],
    [SalesLiteratureItemBase].[ModifiedOnBehalfBy]
from [SalesLiteratureItemBase] 
    left join [SystemUserBase] [lk_salesliteratureitembase_createdby] with(nolock) on ([SalesLiteratureItemBase].[CreatedBy] = [lk_salesliteratureitembase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteratureitembase_createdonbehalfby] with(nolock) on ([SalesLiteratureItemBase].[CreatedOnBehalfBy] = [lk_salesliteratureitembase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteratureitembase_modifiedby] with(nolock) on ([SalesLiteratureItemBase].[ModifiedBy] = [lk_salesliteratureitembase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_salesliteratureitembase_modifiedonbehalfby] with(nolock) on ([SalesLiteratureItemBase].[ModifiedOnBehalfBy] = [lk_salesliteratureitembase_modifiedonbehalfby].[SystemUserId])
    left join [SalesLiteratureBase] [sales_literature_items] on ([SalesLiteratureItemBase].[SalesLiteratureId] = [sales_literature_items].[SalesLiteratureId])
