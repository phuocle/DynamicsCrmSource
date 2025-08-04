 
					
create view dbo.[PrivilegeObjectTypeCodeLogicalView] as SELECT * FROM [PrivilegeObjectTypeCodes] WHERE OverwriteTime = 0 AND ComponentState <> 5