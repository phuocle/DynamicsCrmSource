
				
create view dbo.[RelationshipExtraConditionAsIfPublishedView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0 AND ComponentState = 0)