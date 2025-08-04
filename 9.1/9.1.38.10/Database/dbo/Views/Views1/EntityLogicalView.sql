 
					
create view dbo.[EntityLogicalView] as SELECT * FROM [Entity] WHERE OverwriteTime = 0 AND ComponentState <> 5