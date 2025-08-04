 
					
create view dbo.[RelationshipAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [Relationship] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [Relationship] WHERE OverwriteTime = 0) A2 ON
				(A1.[RelationshipId] = A2.[RelationshipId] AND A1.[RelationshipRowId] <> A2.[RelationshipRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL