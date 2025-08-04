
				
create view dbo.[EntityRelationshipRoleAsIfPublishedLogicalView] as (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0)