


--
-- base view for ConstraintBasedGroup
--
create view dbo.[ConstraintBasedGroup]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [ModifiedByName],
    [ModifiedByYomiName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [OrganizationIdName],
    [CreatedByName],
    [CreatedByYomiName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],

    -- physical attributes
    [ConstraintBasedGroupId],
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
    [GroupTypeCode],
    [OrganizationId]
) with view_metadata as
select
    -- logical attributes
    [business_unit_constraint_based_groups].[Name],
    [lk_constraintbasedgroup_modifiedby].[FullName],
    [lk_constraintbasedgroup_modifiedby].[YomiFullName],
    [lk_constraintbasedgroup_createdonbehalfby].[FullName],
    [lk_constraintbasedgroup_createdonbehalfby].[YomiFullName],
    [organization_constraint_based_groups].[Name],
    [lk_constraintbasedgroup_createdby].[FullName],
    [lk_constraintbasedgroup_createdby].[YomiFullName],
    [lk_constraintbasedgroup_modifiedonbehalfby].[FullName],
    [lk_constraintbasedgroup_modifiedonbehalfby].[YomiFullName],

    -- physical attribute
    [ConstraintBasedGroupBase].[ConstraintBasedGroupId],
    [ConstraintBasedGroupBase].[CreatedOn],
    [ConstraintBasedGroupBase].[CreatedBy],
    [ConstraintBasedGroupBase].[ModifiedOn],
    [ConstraintBasedGroupBase].[ModifiedBy],
    [ConstraintBasedGroupBase].[CreatedOnBehalfBy],
    [ConstraintBasedGroupBase].[ModifiedOnBehalfBy],
    [ConstraintBasedGroupBase].[BusinessUnitId],
    [ConstraintBasedGroupBase].[VersionNumber],
    [ConstraintBasedGroupBase].[ImportSequenceNumber],
    [ConstraintBasedGroupBase].[OverriddenCreatedOn],
    [ConstraintBasedGroupBase].[TimeZoneRuleVersionNumber],
    [ConstraintBasedGroupBase].[UTCConversionTimeZoneCode],
    [ConstraintBasedGroupBase].[Name],
    [ConstraintBasedGroupBase].[Constraints],
    [ConstraintBasedGroupBase].[Description],
    [ConstraintBasedGroupBase].[GroupTypeCode],
    [ConstraintBasedGroupBase].[OrganizationId]
from [ConstraintBasedGroupBase] 
    left join [BusinessUnitBase] [business_unit_constraint_based_groups] on ([ConstraintBasedGroupBase].[BusinessUnitId] = [business_unit_constraint_based_groups].[BusinessUnitId])
    left join [SystemUserBase] [lk_constraintbasedgroup_createdby] on ([ConstraintBasedGroupBase].[CreatedBy] = [lk_constraintbasedgroup_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_constraintbasedgroup_createdonbehalfby] on ([ConstraintBasedGroupBase].[CreatedOnBehalfBy] = [lk_constraintbasedgroup_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_constraintbasedgroup_modifiedby] on ([ConstraintBasedGroupBase].[ModifiedBy] = [lk_constraintbasedgroup_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_constraintbasedgroup_modifiedonbehalfby] on ([ConstraintBasedGroupBase].[ModifiedOnBehalfBy] = [lk_constraintbasedgroup_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_constraint_based_groups] on ([ConstraintBasedGroupBase].[OrganizationId] = [organization_constraint_based_groups].[OrganizationId])
