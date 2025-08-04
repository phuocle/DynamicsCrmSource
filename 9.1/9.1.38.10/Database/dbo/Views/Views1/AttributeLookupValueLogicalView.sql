 
					
create view dbo.[AttributeLookupValueLogicalView] as SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0 AND ComponentState <> 5