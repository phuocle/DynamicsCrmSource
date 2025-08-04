
				
create view dbo.[EntityKeyAttributeAsIfPublishedLogicalView] as (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0)