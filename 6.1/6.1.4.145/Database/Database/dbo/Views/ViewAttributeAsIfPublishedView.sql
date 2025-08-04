
				
create view dbo.[ViewAttributeAsIfPublishedView] as (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0 AND ComponentState = 0)