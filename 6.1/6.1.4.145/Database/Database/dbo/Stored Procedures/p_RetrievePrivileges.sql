

-- Retrieve a set of privileges given a list of privileges ids
CREATE PROC p_RetrievePrivileges(
        @privilege_ids nvarchar(max)	-- concatened list of GUIDs passed in as a string
        ) AS
BEGIN
     
	SELECT  PrivilegeId as 'privilegeid', CanBeBasic as 'canbebasic', 
			CanBeLocal as 'canbelocal',  CanBeDeep as 'canbedeep', 
			CanBeGlobal as 'canbeglobal' 
	FROM Privilege 
	WHERE (PrivilegeId in (SELECT id FROM fn_GetGuidsFromString(@privilege_ids)) )
	
END