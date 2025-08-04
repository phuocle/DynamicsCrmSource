


--
-- base view for PostRole
--
create view dbo.[PostRole]
 (
    -- logical attributes
    [PostIdName],
    [OrganizationIdName],

    -- physical attributes
    [OrganizationId],
    [PostId],
    [PostRoleId],
    [RegardingObjectId],
    [RegardingObjectTypeCode],
    [Type]
) with view_metadata as
select
    -- logical attributes
    [postrole_Post].[Text],
    [organization_postrole].[Name],

    -- physical attribute
    [PostRoleBase].[OrganizationId],
    [PostRoleBase].[PostId],
    [PostRoleBase].[PostRoleId],
    [PostRoleBase].[RegardingObjectId],
    [PostRoleBase].[RegardingObjectTypeCode],
    [PostRoleBase].[Type]
from [PostRoleBase] 
    left join [OrganizationBase] [organization_postrole] with(nolock) on ([PostRoleBase].[OrganizationId] = [organization_postrole].[OrganizationId])
    left join [PostBase] [postrole_Post] on ([PostRoleBase].[PostId] = [postrole_Post].[PostId])
