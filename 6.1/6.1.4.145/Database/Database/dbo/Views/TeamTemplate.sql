


--
-- base view for TeamTemplate
--
create view dbo.[TeamTemplate]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedByName],
    [CreatedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [DefaultAccessRightsMask],
    [TeamTemplateName],
    [TeamTemplateId],
    [ObjectTypeCode],
    [Description],
    [CreatedBy],
    [CreatedOn],
    [CreatedOnBehalfBy],
    [ModifiedBy],
    [ModifiedOn],
    [ModifiedOnBehalfBy],
    [IsSystem]
) with view_metadata as
select
    -- logical attributes
    [lk_teamtemplate_createdby].[FullName],
    [lk_teamtemplate_modifiedonbehalfby].[FullName],
    [lk_teamtemplate_modifiedby].[FullName],
    [lk_teamtemplate_createdonbehalfby].[YomiFullName],
    [lk_teamtemplate_createdonbehalfby].[FullName],
    [lk_teamtemplate_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [TeamTemplateBase].[DefaultAccessRightsMask],
    [TeamTemplateBase].[TeamTemplateName],
    [TeamTemplateBase].[TeamTemplateId],
    [TeamTemplateBase].[ObjectTypeCode],
    [TeamTemplateBase].[Description],
    [TeamTemplateBase].[CreatedBy],
    [TeamTemplateBase].[CreatedOn],
    [TeamTemplateBase].[CreatedOnBehalfBy],
    [TeamTemplateBase].[ModifiedBy],
    [TeamTemplateBase].[ModifiedOn],
    [TeamTemplateBase].[ModifiedOnBehalfBy],
    [TeamTemplateBase].[IsSystem]
from [TeamTemplateBase] 
    left join [SystemUserBase] [lk_teamtemplate_createdby] with(nolock) on ([TeamTemplateBase].[CreatedBy] = [lk_teamtemplate_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_teamtemplate_createdonbehalfby] with(nolock) on ([TeamTemplateBase].[CreatedOnBehalfBy] = [lk_teamtemplate_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_teamtemplate_modifiedby] with(nolock) on ([TeamTemplateBase].[ModifiedBy] = [lk_teamtemplate_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_teamtemplate_modifiedonbehalfby] with(nolock) on ([TeamTemplateBase].[ModifiedOnBehalfBy] = [lk_teamtemplate_modifiedonbehalfby].[SystemUserId])
