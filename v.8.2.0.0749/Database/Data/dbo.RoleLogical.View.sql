USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RoleLogical]    Script Date: 4/10/2017 9:59:20 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO



--
-- logical view for RoleLogical
--
create view [dbo].[RoleLogical]
 (
    -- logical attributes
    [BusinessUnitIdName],
    [ModifiedByYomiName],
    [ModifiedByName],
    [CreatedOnBehalfByName],
    [CreatedOnBehalfByYomiName],
    [CreatedByYomiName],
    [CreatedByName],
    [ModifiedOnBehalfByName],
    [ModifiedOnBehalfByYomiName],
    [ParentRoleIdName],
    [ParentRootRoleIdName],
    [OrganizationIdName],

    -- physical attributes
    [RoleId],
    [RoleTemplateId],
    [OrganizationId],
    [Name],
    [BusinessUnitId],
    [CreatedOn],
    [ModifiedOn],
    [CreatedBy],
    [VersionNumber],
    [ModifiedBy],
    [ParentRoleId],
    [OverriddenCreatedOn],
    [ImportSequenceNumber],
    [OverwriteTime],
    [SupportingSolutionId],
    [ComponentState],
    [SolutionId],
    [RoleIdUnique],
    [ParentRootRoleId],
    [ModifiedOnBehalfBy],
    [CreatedOnBehalfBy],
    [IsManaged],
    [IsCustomizable]
) with view_metadata as
select
    -- logical attributes
    [business_unit_roles].[Name],
    [lk_rolebase_modifiedby].[YomiFullName],
    [lk_rolebase_modifiedby].[FullName],
    [lk_rolebase_createdonbehalfby].[FullName],
    [lk_rolebase_createdonbehalfby].[YomiFullName],
    [lk_rolebase_createdby].[YomiFullName],
    [lk_rolebase_createdby].[FullName],
    [lk_rolebase_modifiedonbehalfby].[FullName],
    [lk_rolebase_modifiedonbehalfby].[YomiFullName],
    [role_parent_role].[Name],
    [role_parent_root_role].[Name],
    [organization_roles].[Name],

    -- physical attribute
    [T1].[RoleId],
    [T1].[RoleTemplateId],
    [T1].[OrganizationId],
    [T1].[Name],
    [T1].[BusinessUnitId],
    [T1].[CreatedOn],
    [T1].[ModifiedOn],
    [T1].[CreatedBy],
    [T1].[VersionNumber],
    [T1].[ModifiedBy],
    [T1].[ParentRoleId],
    [T1].[OverriddenCreatedOn],
    [T1].[ImportSequenceNumber],
    [T1].[OverwriteTime],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[SolutionId],
    [T1].[RoleIdUnique],
    [T1].[ParentRootRoleId],
    [T1].[ModifiedOnBehalfBy],
    [T1].[CreatedOnBehalfBy],
    [T1].[IsManaged],
    [T1].[IsCustomizable]
from [RoleBase] [T1]
    left join [BusinessUnitBase] [business_unit_roles] on ([T1].[BusinessUnitId] = [business_unit_roles].[BusinessUnitId])
    left join [SystemUserBase] [lk_rolebase_createdby] with(nolock) on ([T1].[CreatedBy] = [lk_rolebase_createdby].[SystemUserId])
    left join [SystemUserBase] [lk_rolebase_createdonbehalfby] with(nolock) on ([T1].[CreatedOnBehalfBy] = [lk_rolebase_createdonbehalfby].[SystemUserId])
    left join [SystemUserBase] [lk_rolebase_modifiedby] with(nolock) on ([T1].[ModifiedBy] = [lk_rolebase_modifiedby].[SystemUserId])
    left join [SystemUserBase] [lk_rolebase_modifiedonbehalfby] with(nolock) on ([T1].[ModifiedOnBehalfBy] = [lk_rolebase_modifiedonbehalfby].[SystemUserId])
    left join [OrganizationBase] [organization_roles] with(nolock) on ([T1].[OrganizationId] = [organization_roles].[OrganizationId])
    left join [RoleBase] [role_parent_role] on ([T1].[ParentRoleId] = [role_parent_role].[RoleId] and [role_parent_role].OverwriteTime = 0 and [role_parent_role].ComponentState = 0)
    left join [RoleBase] [role_parent_root_role] on ([T1].[ParentRootRoleId] = [role_parent_root_role].[RoleId] and [role_parent_root_role].OverwriteTime = 0 and [role_parent_root_role].ComponentState = 0)
where T1.OverwriteTime = 0
GO
