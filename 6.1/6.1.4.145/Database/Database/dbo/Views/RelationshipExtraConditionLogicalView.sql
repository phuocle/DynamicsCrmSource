
				
create view dbo.[RelationshipExtraConditionLogicalView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0)