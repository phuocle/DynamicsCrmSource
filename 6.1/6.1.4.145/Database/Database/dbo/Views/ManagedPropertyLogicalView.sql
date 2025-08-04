
				
create view dbo.[ManagedPropertyLogicalView] as (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0)