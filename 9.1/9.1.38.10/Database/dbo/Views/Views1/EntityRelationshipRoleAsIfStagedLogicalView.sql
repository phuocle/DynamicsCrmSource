 
					
create view dbo.[EntityRelationshipRoleAsIfStagedLogicalView] as SELECT A1.* FROM (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0) A2 ON
				(A1.[EntityRelationshipRoleId] = A2.[EntityRelationshipRoleId] AND A1.[EntityRelationshipRoleRowId] <> A2.[EntityRelationshipRoleRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL