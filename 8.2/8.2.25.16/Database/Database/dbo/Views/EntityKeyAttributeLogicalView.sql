
				
create view dbo.[EntityKeyAttributeLogicalView] as (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0)