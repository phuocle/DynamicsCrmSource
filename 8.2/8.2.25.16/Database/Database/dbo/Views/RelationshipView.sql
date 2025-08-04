
				
create view dbo.[RelationshipView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0 AND ComponentState = 0)