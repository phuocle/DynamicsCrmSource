 
					
create view dbo.[PrivilegeView] as SELECT * FROM [PrivilegeBase] WHERE OverwriteTime = 0 AND ComponentState = 0