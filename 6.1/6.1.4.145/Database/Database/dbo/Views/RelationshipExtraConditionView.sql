
				
create view dbo.[RelationshipExtraConditionView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0 AND ComponentState = 0)