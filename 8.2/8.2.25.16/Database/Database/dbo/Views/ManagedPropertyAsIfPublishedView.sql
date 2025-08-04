
				
create view dbo.[ManagedPropertyAsIfPublishedView] as (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0 AND ComponentState = 0)