
				
create view dbo.[EntityRelationshipRoleAsIfPublishedView] as (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0 AND ComponentState = 0)