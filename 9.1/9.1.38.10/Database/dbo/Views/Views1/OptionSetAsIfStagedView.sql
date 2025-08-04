 
					
create view dbo.[OptionSetAsIfStagedView] as SELECT A1.* FROM (SELECT * FROM [OptionSet] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [OptionSet] WHERE OverwriteTime = 0) A2 ON
				(A1.[OptionSetId] = A2.[OptionSetId] AND A1.[OptionSetRowId] <> A2.[OptionSetRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1 OR A1.ComponentState = 5)