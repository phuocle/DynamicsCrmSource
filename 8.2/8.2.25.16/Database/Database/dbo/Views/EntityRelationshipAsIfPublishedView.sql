
				
create view dbo.[EntityRelationshipAsIfPublishedView] as (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0 AND ComponentState = 0)