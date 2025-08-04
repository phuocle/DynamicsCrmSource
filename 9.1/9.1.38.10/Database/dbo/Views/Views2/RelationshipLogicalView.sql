 
					
create view dbo.[RelationshipLogicalView] as SELECT * FROM [Relationship] WHERE OverwriteTime = 0 AND ComponentState <> 5