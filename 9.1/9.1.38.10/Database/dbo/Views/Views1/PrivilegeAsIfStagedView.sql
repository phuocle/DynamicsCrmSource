 
					
create view dbo.[PrivilegeAsIfStagedView] as SELECT A1.* FROM (SELECT * FROM [PrivilegeBase] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [PrivilegeBase] WHERE OverwriteTime = 0) A2 ON
				(A1.[PrivilegeId] = A2.[PrivilegeId] AND A1.[PrivilegeRowId] <> A2.[PrivilegeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1 OR A1.ComponentState = 5)