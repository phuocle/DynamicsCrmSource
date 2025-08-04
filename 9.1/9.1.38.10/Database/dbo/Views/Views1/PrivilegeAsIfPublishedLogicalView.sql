 
					
create view dbo.[PrivilegeAsIfPublishedLogicalView] as SELECT * FROM [PrivilegeBase] WHERE OverwriteTime = 0 AND ComponentState <> 5