
				
create view dbo.[EntityView] as (SELECT * FROM [Entity] WHERE OverwriteTime = 0 AND ComponentState = 0)