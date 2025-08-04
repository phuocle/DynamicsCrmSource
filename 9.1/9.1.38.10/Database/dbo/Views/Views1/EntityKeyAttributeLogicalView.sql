 
					
create view dbo.[EntityKeyAttributeLogicalView] as SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0 AND ComponentState <> 5