


--
-- base view for ResourceSpec
--
create view dbo.[ResourceSpec]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],

    -- physical attributes
    [ResourceSpecId],
    [CreatedOn],
    [CreatedBy],
    [ModifiedOn],
    [ModifiedBy],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy],
    [BusinessUnitId],
    [VersionNumber],
    [ImportSequenceNumber],
    [OverriddenCreatedOn],
    [TimeZoneRuleVersionNumber],
    [UTCConversionTimeZoneCode],
    [Name],
    [Constraints],
    [Description],
    [EffortRequired],
    [GroupObjectId],
    [ObjectiveExpression],
    [ObjectTypeCode],
    [OrganizationId],
    [RequiredCount],
    [SameSite]
) with view_metadata as
select
    -- logical attributes
    [business_unit_resource_specs].[Name],
    [lk_resourcespec_modifiedby].[FullName],
    [lk_resourcespec_modifiedby].[YomiFullName],
    [lk_resourcespec_createdby].[FullName],
    [lk_resourcespec_createdby].[YomiFullName],
    [lk_resourcespec_modifiedonbehalfby].[FullName],
    [lk_resourcespec_modifiedonbehalfby].[YomiFullName],
    [organization_resource_specs].[Name],
    [lk_resourcespec_createdonbehalfby].[FullName],
    [lk_resourcespec_createdonbehalfby].[YomiFullName],

    -- physical attribute
    [ResourceSpecBase].[ResourceSpecId],
    [ResourceSpecBase].[CreatedOn],
    [ResourceSpecBase].[CreatedBy],
    [ResourceSpecBase].[ModifiedOn],
    [ResourceSpecBase].[ModifiedBy],
    [ResourceSpecBase].[CreatedOnBehalfBy],
    [ResourceSpecBase].[ModifiedOnBehalfBy],
    [ResourceSpecBase].[BusinessUnitId],
    [ResourceSpecBase].[VersionNumber],
    [ResourceSpecBase].[ImportSequenceNumber],
    [ResourceSpecBase].[OverriddenCreatedOn],
    [ResourceSpecBase].[TimeZoneRuleVersionNumber],
    [ResourceSpecBase].[UTCConversionTimeZoneCode],
    [ResourceSpecBase].[Name],
    [ResourceSpecBase].[Constraints],
    [ResourceSpecBase].[Description],
    [ResourceSpecBase].[EffortRequired],
    [ResourceSpecBase].[GroupObjectId],
    [ResourceSpecBase].[ObjectiveExpression],
    [ResourceSpecBase].[ObjectTypeCode],
    [ResourceSpecBase].[OrganizationId],
    [ResourceSpecBase].[RequiredCount],
    [ResourceSpecBase].[SameSite]
from [ResourceSpecBase] 
    left join [BusinessUnitBase] [business_unit_resource_specs] on ([ResourceSpecBase].[BusinessUnitId] = [business_unit_resource_specs].[BusinessUnitId])
    left join [SystemUserBase] [lk_resourcespec_createdby]  on ([ResourceSpecBase].[CreatedBy] = [lk_resourcespec_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_resourcespec_createdonbehalfby]  on ([ResourceSpecBase].[CreatedOnBehalfBy] = [lk_resourcespec_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_resourcespec_modifiedby]  on ([ResourceSpecBase].[ModifiedBy] = [lk_resourcespec_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_resourcespec_modifiedonbehalfby]  on ([ResourceSpecBase].[ModifiedOnBehalfBy] = [lk_resourcespec_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_resource_specs]  on ([ResourceSpecBase].[OrganizationId] = [organization_resource_specs].[OrganizationId])
