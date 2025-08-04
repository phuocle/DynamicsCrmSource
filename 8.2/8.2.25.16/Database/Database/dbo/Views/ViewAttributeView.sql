
				
create view dbo.[ViewAttributeView] as (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0 AND ComponentState = 0)