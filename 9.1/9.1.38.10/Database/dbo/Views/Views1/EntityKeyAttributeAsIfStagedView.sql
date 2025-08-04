 
					
create view dbo.[EntityKeyAttributeAsIfStagedView] as SELECT A1.* FROM (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [EntityKeyAttribute] WHERE OverwriteTime = 0) A2 ON
				(A1.[EntityKeyAttributeId] = A2.[EntityKeyAttributeId] AND A1.[EntityKeyAttributeRowId] <> A2.[EntityKeyAttributeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1 OR A1.ComponentState = 5)