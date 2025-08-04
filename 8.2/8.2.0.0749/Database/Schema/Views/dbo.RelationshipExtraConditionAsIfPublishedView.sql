SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[RelationshipExtraConditionAsIfPublishedView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
