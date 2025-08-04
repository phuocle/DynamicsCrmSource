
				
create view dbo.[EntityRelationshipRelationshipsAsIfPublishedView] as (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0 AND ComponentState = 0)