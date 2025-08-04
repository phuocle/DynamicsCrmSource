 
					
create view dbo.[ManagedPropertyAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [ManagedProperty] WHERE OverwriteTime = 0) A2 ON
				(A1.[ManagedPropertyId] = A2.[ManagedPropertyId] AND A1.[ManagedPropertyRowId] <> A2.[ManagedPropertyRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL