
				
create view dbo.[EntityRelationshipRoleLogicalView] as (SELECT * FROM [EntityRelationshipRole] WHERE OverwriteTime = 0)