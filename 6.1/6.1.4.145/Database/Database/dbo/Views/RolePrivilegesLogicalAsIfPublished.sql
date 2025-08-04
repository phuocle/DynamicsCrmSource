


--
-- logical 'as if published' view for RolePrivilegesLogicalAsIfPublished
--
create view dbo.[RolePrivilegesLogicalAsIfPublished]
 with view_metadata as
select
* from RolePrivilegesLogical