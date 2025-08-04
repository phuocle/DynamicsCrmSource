 
					
create view dbo.[EntityRelationshipAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0) A2 ON
				(A1.[EntityRelationshipId] = A2.[EntityRelationshipId] AND A1.[EntityRelationshipRowId] <> A2.[EntityRelationshipRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL