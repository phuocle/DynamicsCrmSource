
				
create view dbo.[EntityKeyAsIfPublishedLogicalView] as (SELECT * FROM [EntityKey] WHERE OverwriteTime = 0)