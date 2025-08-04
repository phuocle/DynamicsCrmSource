
				
create view dbo.[AttributeLookupValueAsIfPublishedLogicalView] as (SELECT A1.* FROM [AttributeLookupValueLogicalView] A1 LEFT OUTER JOIN [AttributeLookupValueLogicalView] A2 ON
				(A1.[AttributeLookupValueId] = A2.[AttributeLookupValueId] AND A1.[AttributeLookupValueRowId] <> A2.[AttributeLookupValueRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL)