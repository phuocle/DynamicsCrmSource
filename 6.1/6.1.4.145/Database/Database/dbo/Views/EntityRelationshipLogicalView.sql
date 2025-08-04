
				
create view dbo.[EntityRelationshipLogicalView] as (SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0)