

CREATE PROCEDURE p_GetAddedRoleCount as
BEGIN

	set nocount on
	
	SELECT COUNT(*) FROM Role 
		WHERE RoleTemplateId IS NULL 
			OR RoleTemplateId NOT IN (SELECT RoleTemplateId From RoleTemplate)

END