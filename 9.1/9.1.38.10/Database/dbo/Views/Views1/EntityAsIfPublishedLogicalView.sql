 
					
create view dbo.[EntityAsIfPublishedLogicalView] as SELECT * FROM [Entity] WHERE OverwriteTime = 0 AND ComponentState <> 5