 
					
create view dbo.[PrivilegeObjectTypeCodeAsIfPublishedView] as SELECT * FROM [PrivilegeObjectTypeCodes] WHERE OverwriteTime = 0 AND ComponentState = 0