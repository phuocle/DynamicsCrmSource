USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RelationshipExtraConditionLogicalView]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[RelationshipExtraConditionLogicalView] as (SELECT * FROM [RelationshipExtraCondition] WHERE OverwriteTime = 0)
GO
