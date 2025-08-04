 
					
create view dbo.[AttributeLookupValueAsIfPublishedView] as SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0 AND ComponentState = 0