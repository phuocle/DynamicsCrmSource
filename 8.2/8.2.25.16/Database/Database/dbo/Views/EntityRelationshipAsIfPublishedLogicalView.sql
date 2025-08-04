
				
create view dbo.[EntityRelationshipAsIfPublishedLogicalView] as (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0)