 
					
create view dbo.[RelationshipExtraConditionAsIfStagedView] as SELECT A1.* FROM (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0) A1 LEFT OUTER JOIN (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0) A2 ON
				(A1.[ConditionId] = A2.[ConditionId] AND A1.[RelationshipExtraConditionRowId] <> A2.[RelationshipExtraConditionRowId] AND (A1.ComponentState = 0 OR A1.ComponentState = 2))
				WHERE A2.ComponentState IS NULL AND (A1.ComponentState = 0 OR A1.ComponentState = 1 OR A1.ComponentState = 5)