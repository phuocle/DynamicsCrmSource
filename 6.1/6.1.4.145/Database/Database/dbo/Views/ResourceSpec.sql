


--
-- base view for ResourceSpec
--
create view dbo.[ResourceSpec]
 (
    -- logical attributes
    [ModifiedByName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [ModifiedByYomiName],
    [BusinessUnitIdName],
    [CreatedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [CreatedByYomiName],

    -- physical attributes
    [EffortRequired],
    [OrganizationId],
    [ModifiedOn],
    [ObjectTypeCode],
    [Description],
    [ModifiedBy],
    [BusinessUnitId],
    [Name],
    [CreatedBy],
    [CreatedOn],
    [VersionNumber],
    [ObjectiveExpression],
    [SameSite],
    [Constraints],
    [ResourceSpecId],
    [GroupObjectId],
    [RequiredCount],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_resourcespec_modifiedby].[FullName],
    [lk_resourcespec_createdby].[FullName],
    [lk_resourcespec_modifiedonbehalfby].[FullName],
    [lk_resourcespec_createdonbehalfby].[YomiFullName],
    [organization_resource_specs].[Name],
    [lk_resourcespec_modifiedby].[YomiFullName],
    [business_unit_resource_specs].[Name],
    [lk_resourcespec_createdonbehalfby].[FullName],
    [lk_resourcespec_modifiedonbehalfby].[YomiFullName],
    [lk_resourcespec_createdby].[YomiFullName],

    -- physical attribute
    [ResourceSpecBase].[EffortRequired],
    [ResourceSpecBase].[OrganizationId],
    [ResourceSpecBase].[ModifiedOn],
    [ResourceSpecBase].[ObjectTypeCode],
    [ResourceSpecBase].[Description],
    [ResourceSpecBase].[ModifiedBy],
    [ResourceSpecBase].[BusinessUnitId],
    [ResourceSpecBase].[Name],
    [ResourceSpecBase].[CreatedBy],
    [ResourceSpecBase].[CreatedOn],
    [ResourceSpecBase].[VersionNumber],
    [ResourceSpecBase].[ObjectiveExpression],
    [ResourceSpecBase].[SameSite],
    [ResourceSpecBase].[Constraints],
    [ResourceSpecBase].[ResourceSpecId],
    [ResourceSpecBase].[GroupObjectId],
    [ResourceSpecBase].[RequiredCount],
    [ResourceSpecBase].[CreatedOnBehalfBy],
    [ResourceSpecBase].[ModifiedOnBehalfBy]
from [ResourceSpecBase] 
    left join [BusinessUnitBase] [business_unit_resource_specs] on ([ResourceSpecBase].[BusinessUnitId] = [business_unit_resource_specs].[BusinessUnitId])
    left join [SystemUserBase] [lk_resourcespec_createdby] with(nolock) on ([ResourceSpecBase].[CreatedBy] = [lk_resourcespec_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_resourcespec_createdonbehalfby] with(nolock) on ([ResourceSpecBase].[CreatedOnBehalfBy] = [lk_resourcespec_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_resourcespec_modifiedby] with(nolock) on ([ResourceSpecBase].[ModifiedBy] = [lk_resourcespec_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_resourcespec_modifiedonbehalfby] with(nolock) on ([ResourceSpecBase].[ModifiedOnBehalfBy] = [lk_resourcespec_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_resource_specs] with(nolock) on ([ResourceSpecBase].[OrganizationId] = [organization_resource_specs].[OrganizationId])
