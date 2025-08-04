 
					
create view dbo.[EntityKeyAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [EntityKey] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [EntityKey] WHERE OverwriteTime = 0) A2 ON
				(A1.[EntityKeyId] = A2.[EntityKeyId] AND A1.[EntityKeyRowId] <> A2.[EntityKeyRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL