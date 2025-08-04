
				
create view dbo.[ManagedPropertyView] as (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0 AND ComponentState = 0)