 
					
create view dbo.[AttributeAsIfStagedView] as SELECT A1.* FROM (SELECT * FROM [Attribute] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [Attribute] WHERE OverwriteTime = 0) A2 ON
				(A1.[AttributeId] = A2.[AttributeId] AND A1.[AttributeRowId] <> A2.[AttributeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1 OR A1.ComponentState = 5)