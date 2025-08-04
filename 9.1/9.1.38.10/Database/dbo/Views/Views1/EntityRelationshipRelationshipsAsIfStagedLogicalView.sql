 
					
create view dbo.[EntityRelationshipRelationshipsAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0) A2 ON
				(A1.[EntityRelationshipRelationshipsId] = A2.[EntityRelationshipRelationshipsId] AND A1.[EntityRelationshipRelationshipsRowId] <> A2.[EntityRelationshipRelationshipsRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL