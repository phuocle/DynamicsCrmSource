 
					
create view dbo.[AttributePicklistValueAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [AttributePicklistValue] WHERE OverwriteTime = 0) A2 ON
				(A1.[AttributePicklistValueId] = A2.[AttributePicklistValueId] AND A1.[AttributePicklistValueRowId] <> A2.[AttributePicklistValueRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL