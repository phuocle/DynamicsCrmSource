 
					
create view dbo.[EntityRelationshipRelationshipsLogicalView] as SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0 AND ComponentState <> 5