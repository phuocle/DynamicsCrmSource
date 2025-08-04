
				
create view dbo.[RelationshipExtraConditionAsIfPublishedLogicalView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0)