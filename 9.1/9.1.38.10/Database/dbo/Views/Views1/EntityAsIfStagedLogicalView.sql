 
					
create view dbo.[EntityAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [Entity] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [Entity] WHERE OverwriteTime = 0) A2 ON
				(A1.[EntityId] = A2.[EntityId] AND A1.[EntityRowId] <> A2.[EntityRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL