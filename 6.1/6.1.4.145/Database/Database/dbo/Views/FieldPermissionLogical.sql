


--
-- logical view for FieldPermissionLogical
--
create view dbo.[FieldPermissionLogical]
 (
    -- logical attributes
    [OrganizationId],

    -- physical attributes
    [CanRead],
    [CanUpdate],
    [CanCreate],
    [FieldSecurityProfileId],
    [FieldPermissionId],
    [EntityName],
    [AttributeLogicalName],
    [FieldPermissionIdUnique],
    [SolutionId],
    [SupportingSolutionId],
    [ComponentState],
    [OverwriteTime],
    [VersionNumber],
    [IsManaged]
) with view_metadata as
select
    -- logical attributes
    [lk_fieldpermissionbase_fieldsecurityprofileid].[OrganizationId],

    -- physical attribute
    [T1].[CanRead],
    [T1].[CanUpdate],
    [T1].[CanCreate],
    [T1].[FieldSecurityProfileId],
    [T1].[FieldPermissionId],
    [T1].[EntityName],
    [T1].[AttributeLogicalName],
    [T1].[FieldPermissionIdUnique],
    [T1].[SolutionId],
    [T1].[SupportingSolutionId],
    [T1].[ComponentState],
    [T1].[OverwriteTime],
    [T1].[VersionNumber],
    [T1].[IsManaged]
from [FieldPermissionBase] [T1]
    left join [FieldSecurityProfileBase] [lk_fieldpermissionbase_fieldsecurityprofileid] on ([T1].[FieldSecurityProfileId] = [lk_fieldpermissionbase_fieldsecurityprofileid].[FieldSecurityProfileId] and [lk_fieldpermissionbase_fieldsecurityprofileid].OverwriteTime = 0 and [lk_fieldpermissionbase_fieldsecurityprofileid].ComponentState = 0)
where T1.OverwriteTime = 0