
				
create view dbo.[EntityRelationshipRelationshipsView] as (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0 AND ComponentState = 0)