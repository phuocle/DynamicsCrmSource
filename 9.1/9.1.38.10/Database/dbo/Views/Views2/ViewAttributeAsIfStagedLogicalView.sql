 
					
create view dbo.[ViewAttributeAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [ViewAttribute] WHERE OverwriteTime = 0) A2 ON
				(A1.[ViewAttributeId] = A2.[ViewAttributeId] AND A1.[ViewAttributeRowId] <> A2.[ViewAttributeRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL