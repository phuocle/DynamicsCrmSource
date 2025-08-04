 
					
create view dbo.[EntityRelationshipRoleAsIfPublishedLogicalView] as SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0 AND ComponentState <> 5