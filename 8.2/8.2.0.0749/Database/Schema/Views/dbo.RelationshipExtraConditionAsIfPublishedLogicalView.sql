SET QUOTED_IDENTIFIER ON
GO
SET ANSI_NULLS ON
GO

				
create view [dbo].[RelationshipExtraConditionAsIfPublishedLogicalView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0)
GO
