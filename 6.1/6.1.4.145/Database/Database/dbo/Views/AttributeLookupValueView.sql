
				
create view dbo.[AttributeLookupValueView] as (SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0 AND ComponentState = 0)