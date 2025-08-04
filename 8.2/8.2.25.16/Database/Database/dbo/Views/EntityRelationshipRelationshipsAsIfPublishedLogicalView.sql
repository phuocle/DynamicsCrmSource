
				
create view dbo.[EntityRelationshipRelationshipsAsIfPublishedLogicalView] as (SELECT * FROM [EntityRelationshipRelationships] WHERE OverwriteTime = 0)