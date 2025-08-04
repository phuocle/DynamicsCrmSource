
				
create view dbo.[EntityRelationshipRoleView] as (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0 AND ComponentState = 0)