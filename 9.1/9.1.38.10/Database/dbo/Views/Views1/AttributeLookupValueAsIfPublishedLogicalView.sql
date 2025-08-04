 
					
create view dbo.[AttributeLookupValueAsIfPublishedLogicalView] as SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0 AND ComponentState <> 5