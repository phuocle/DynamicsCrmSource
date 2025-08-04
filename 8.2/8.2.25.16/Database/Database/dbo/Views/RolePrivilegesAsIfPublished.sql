


--
-- base 'as if published' view for RolePrivilegesAsIfPublished
--
create view dbo.[RolePrivilegesAsIfPublished]
 with view_metadata as
select
* from [RolePrivileges]