 
					
create view dbo.[PrivilegeObjectTypeCodeAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [PrivilegeObjectTypeCodes] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [PrivilegeObjectTypeCodes] WHERE OverwriteTime = 0) A2 ON
				(A1.[PrivilegeObjectTypeCodeId] = A2.[PrivilegeObjectTypeCodeId] AND A1.[PrivilegeObjectTypeCodeRowId] <> A2.[PrivilegeObjectTypeCodeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL