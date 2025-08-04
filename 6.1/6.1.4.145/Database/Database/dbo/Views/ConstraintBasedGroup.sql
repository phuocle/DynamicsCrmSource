


--
-- base view for ConstraintBasedGroup
--
create view dbo.[ConstraintBasedGroup]
 (
    -- logical attributes
    [CreatedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [BusinessUnitIdName],
    [OrganizationIdName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedByName],

    -- physical attributes
    [ModifiedBy],
    [GroupTypeCode],
    [VersionNumber],
    [Name],
    [ModifiedOn],
    [CreatedBy],
    [OrganizationId],
    [CreatedOn],
    [ConstraintBasedGroupId],
    [Description],
    [Constraints],
    [BusinessUnitId],
    [CreatedOnBehalfBy],
    [ModifiedOnBehalfBy]
) with view_metadata as
select
    -- logical attributes
    [lk_constraintbasedgroup_createdby].[YomiFullName],
    [lk_constraintbasedgroup_createdonbehalfby].[FullName],
    [lk_constraintbasedgroup_createdonbehalfby].[YomiFullName],
    [business_unit_constraint_based_groups].[Name],
    [organization_constraint_based_groups].[Name],
    [lk_constraintbasedgroup_modifiedonbehalfby].[FullName],
    [lk_constraintbasedgroup_modifiedonbehalfby].[YomiFullName],
    [lk_constraintbasedgroup_modifiedby].[YomiFullName],
    [lk_constraintbasedgroup_modifiedby].[FullName],
    [lk_constraintbasedgroup_createdby].[FullName],

    -- physical attribute
    [ConstraintBasedGroupBase].[ModifiedBy],
    [ConstraintBasedGroupBase].[GroupTypeCode],
    [ConstraintBasedGroupBase].[VersionNumber],
    [ConstraintBasedGroupBase].[Name],
    [ConstraintBasedGroupBase].[ModifiedOn],
    [ConstraintBasedGroupBase].[CreatedBy],
    [ConstraintBasedGroupBase].[OrganizationId],
    [ConstraintBasedGroupBase].[CreatedOn],
    [ConstraintBasedGroupBase].[ConstraintBasedGroupId],
    [ConstraintBasedGroupBase].[Description],
    [ConstraintBasedGroupBase].[Constraints],
    [ConstraintBasedGroupBase].[BusinessUnitId],
    [ConstraintBasedGroupBase].[CreatedOnBehalfBy],
    [ConstraintBasedGroupBase].[ModifiedOnBehalfBy]
from [ConstraintBasedGroupBase] 
    left join [BusinessUnitBase] [business_unit_constraint_based_groups] on ([ConstraintBasedGroupBase].[BusinessUnitId] = [business_unit_constraint_based_groups].[BusinessUnitId])
    left join [SystemUserBase] [lk_constraintbasedgroup_createdby] with(nolock) on ([ConstraintBasedGroupBase].[CreatedBy] = [lk_constraintbasedgroup_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_constraintbasedgroup_createdonbehalfby] with(nolock) on ([ConstraintBasedGroupBase].[CreatedOnBehalfBy] = [lk_constraintbasedgroup_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_constraintbasedgroup_modifiedby] with(nolock) on ([ConstraintBasedGroupBase].[ModifiedBy] = [lk_constraintbasedgroup_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_constraintbasedgroup_modifiedonbehalfby] with(nolock) on ([ConstraintBasedGroupBase].[ModifiedOnBehalfBy] = [lk_constraintbasedgroup_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_constraint_based_groups] with(nolock) on ([ConstraintBasedGroupBase].[OrganizationId] = [organization_constraint_based_groups].[OrganizationId])
