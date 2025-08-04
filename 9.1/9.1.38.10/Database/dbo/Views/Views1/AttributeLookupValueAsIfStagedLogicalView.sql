 
					
create view dbo.[AttributeLookupValueAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [AttributeLookupValue] WHERE OverwriteTime = 0) A2 ON
				(A1.[AttributeLookupValueId] = A2.[AttributeLookupValueId] AND A1.[AttributeLookupValueRowId] <> A2.[AttributeLookupValueRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL