USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RelationshipAsIfPublishedView]    Script Date: 4/10/2017 9:59:18 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[RelationshipAsIfPublishedView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
