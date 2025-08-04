 
					
create view dbo.[PrivilegeAsIfPublishedView] as SELECT * FROM [PrivilegeBase] WHERE OverwriteTime = 0 AND ComponentState = 0