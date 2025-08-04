 
					
create view dbo.[ManagedPropertyAsIfPublishedLogicalView] as SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0 AND ComponentState <> 5