 
					
create view dbo.[PrivilegeObjectTypeCodeView] as SELECT * FROM [PrivilegeObjectTypeCodes] WHERE OverwriteTime = 0 AND ComponentState = 0