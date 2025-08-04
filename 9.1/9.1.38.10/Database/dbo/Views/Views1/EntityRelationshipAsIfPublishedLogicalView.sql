 
					
create view dbo.[EntityRelationshipAsIfPublishedLogicalView] as SELECT * FROM [EntityRelationship] WHERE OverwriteTime = 0 AND ComponentState <> 5