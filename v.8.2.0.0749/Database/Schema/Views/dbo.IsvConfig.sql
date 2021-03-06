SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO



--
-- base view for IsvConfig
--
create view [dbo].[IsvConfig]
 (
    -- logical attributes
    [CreatedByName],
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [OrganizationIdName],

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
    [lk_isvconfigbase_createdby].[YomiFullName],
    [lk_isvconfigbase_createdonbehalfby].[FullName],
    [lk_isvconfigbase_createdonbehalfby].[YomiFullName],
    [lk_isvconfigbase_modifiedonbehalfby].[FullName],
    [lk_isvconfigbase_modifiedonbehalfby].[YomiFullName],
    [lk_isvconfigbase_modifiedby].[FullName],
    [lk_isvconfigbase_modifiedby].[YomiFullName],
    [organization_isvconfigs].[Name],

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
GO
