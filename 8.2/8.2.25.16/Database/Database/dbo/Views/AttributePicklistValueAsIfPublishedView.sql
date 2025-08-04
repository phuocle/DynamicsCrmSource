
				
create view dbo.[AttributePicklistValueAsIfPublishedView] as (SELECT A1.* FROM [AttributePicklistValueLogicalView] A1 LEFT OUTER JOIN [AttributePicklistValueLogicalView] A2 ON
				(A1.[AttributePicklistValueId] = A2.[AttributePicklistValueId] AND A1.[AttributePicklistValueRowId] <> A2.[AttributePicklistValueRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1))