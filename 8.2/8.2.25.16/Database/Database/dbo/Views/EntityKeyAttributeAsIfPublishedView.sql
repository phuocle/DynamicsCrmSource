
				
create view dbo.[EntityKeyAttributeAsIfPublishedView] as (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0 AND ComponentState = 0)