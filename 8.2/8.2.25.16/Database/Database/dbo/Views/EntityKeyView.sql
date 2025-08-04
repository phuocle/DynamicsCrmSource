
				
create view dbo.[EntityKeyView] as (SELECT * FROM [EntityKey] WHERE OverwriteTime = 0 AND ComponentState = 0)