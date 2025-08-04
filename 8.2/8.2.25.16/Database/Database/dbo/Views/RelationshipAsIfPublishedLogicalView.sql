
				
create view dbo.[RelationshipAsIfPublishedLogicalView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0)