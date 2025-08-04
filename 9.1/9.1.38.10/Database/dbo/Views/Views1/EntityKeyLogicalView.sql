 
					
create view dbo.[EntityKeyLogicalView] as SELECT * FROM [EntityKey] WHERE OverwriteTime = 0 AND ComponentState <> 5