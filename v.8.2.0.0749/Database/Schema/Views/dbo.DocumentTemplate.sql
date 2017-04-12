SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for DocumentTemplate
--
create view [dbo].[DocumentTemplate]
 (
    -- logical attributes
    [OrganizationIdName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByName],

    -- physical attributes
    [ClientData],
    [Content],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [DocumentType],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [Name],
    [DocumentTemplateId],
    [VersionNumber],
    [OrganizationId],
    [AssociatedEntityTypeCode],
    [Description],
    [Status],
    [LanguageCode]
) with view_metadata as
select
    -- logical attributes
    [lk_documenttemplatebase_organization].[Name],
    [lk_documenttemplatebase_modifiedby].[FullName],
    [lk_documenttemplatebase_createdonbehalfby].[YomiFullName],
    [lk_documenttemplatebase_createdonbehalfby].[FullName],
    [lk_documenttemplatebase_modifiedonbehalfby].[FullName],
    [lk_documenttemplatebase_modifiedonbehalfby].[YomiFullName],
    [lk_documenttemplatebase_createdby].[FullName],

    -- physical attribute
    [DocumentTemplateBase].[ClientData],
    [DocumentTemplateBase].[Content],
    [DocumentTemplateBase].[CreatedBy],
    [DocumentTemplateBase].[CreatedOn],
    [DocumentTemplateBase].[CreatedOnBehalfBy],
    [DocumentTemplateBase].[DocumentType],
    [DocumentTemplateBase].[ModifiedBy],
    [DocumentTemplateBase].[ModifiedOn],
    [DocumentTemplateBase].[ModifiedOnBehalfBy],
    [DocumentTemplateBase].[Name],
    [DocumentTemplateBase].[DocumentTemplateId],
    [DocumentTemplateBase].[VersionNumber],
    [DocumentTemplateBase].[OrganizationId],
    [DocumentTemplateBase].[AssociatedEntityTypeCode],
    [DocumentTemplateBase].[Description],
    [DocumentTemplateBase].[Status],
    [DocumentTemplateBase].[LanguageCode]
from [DocumentTemplateBase] 
    left join [SystemUserBase] [lk_documenttemplatebase_createdby] with(nolock) on ([DocumentTemplateBase].[CreatedBy] = [lk_documenttemplatebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_documenttemplatebase_createdonbehalfby] with(nolock) on ([DocumentTemplateBase].[CreatedOnBehalfBy] = [lk_documenttemplatebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_documenttemplatebase_modifiedby] with(nolock) on ([DocumentTemplateBase].[ModifiedBy] = [lk_documenttemplatebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_documenttemplatebase_modifiedonbehalfby] with(nolock) on ([DocumentTemplateBase].[ModifiedOnBehalfBy] = [lk_documenttemplatebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [lk_documenttemplatebase_organization] with(nolock) on ([DocumentTemplateBase].[OrganizationId] = [lk_documenttemplatebase_organization].[OrganizationId])
GO
