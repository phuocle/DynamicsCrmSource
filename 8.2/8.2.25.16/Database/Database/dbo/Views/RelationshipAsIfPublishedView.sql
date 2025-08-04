
				
create view dbo.[RelationshipAsIfPublishedView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0 AND ComponentState = 0)