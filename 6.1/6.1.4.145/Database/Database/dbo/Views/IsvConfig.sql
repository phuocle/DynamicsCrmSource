


--
-- base view for IsvConfig
--
create view dbo.[IsvConfig]
 (
    -- logical attributes
    [CreatedByName],
    [ModifiedByName],
    [ModifiedOnBehalfByName],
    [OrganizationIdName],
    [ModifiedOnBehalfByYomiName],
    [CreatedOnBehalfByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],

    -- physical attributes
    [ConfigXML],
    [CreatedBy],
    [OrganizationId],
    [VersionNumber],
    [CreatedOn],
    [IsvConfigId],
    [ModifiedBy],
    [ModifiedOn],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_isvconfigbase_createdby].[FullName],
    [lk_isvconfigbase_modifiedby].[FullName],
    [lk_isvconfigbase_modifiedonbehalfby].[FullName],
    [organization_isvconfigs].[Name],
    [lk_isvconfigbase_modifiedonbehalfby].[YomiFullName],
    [lk_isvconfigbase_createdonbehalfby].[FullName],
    [lk_isvconfigbase_modifiedby].[YomiFullName],
    [lk_isvconfigbase_createdonbehalfby].[YomiFullName],
    [lk_isvconfigbase_createdby].[YomiFullName],

    -- physical attribute
    [IsvConfigBase].[ConfigXML],
    [IsvConfigBase].[CreatedBy],
    [IsvConfigBase].[OrganizationId],
    [IsvConfigBase].[VersionNumber],
    [IsvConfigBase].[CreatedOn],
    [IsvConfigBase].[IsvConfigId],
    [IsvConfigBase].[ModifiedBy],
    [IsvConfigBase].[ModifiedOn],
    [IsvConfigBase].[CreatedOnBehalfBy],
    [IsvConfigBase].[ModifiedOnBehalfBy]
from [IsvConfigBase] 
    left join [SystemUserBase] [lk_isvconfigbase_createdby] with(nolock) on ([IsvConfigBase].[CreatedBy] = [lk_isvconfigbase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_isvconfigbase_createdonbehalfby] with(nolock) on ([IsvConfigBase].[CreatedOnBehalfBy] = [lk_isvconfigbase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_isvconfigbase_modifiedby] with(nolock) on ([IsvConfigBase].[ModifiedBy] = [lk_isvconfigbase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_isvconfigbase_modifiedonbehalfby] with(nolock) on ([IsvConfigBase].[ModifiedOnBehalfBy] = [lk_isvconfigbase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_isvconfigs] with(nolock) on ([IsvConfigBase].[OrganizationId] = [organization_isvconfigs].[OrganizationId])
