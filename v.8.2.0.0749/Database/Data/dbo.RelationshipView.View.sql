USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RelationshipView]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[RelationshipView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0 AND ComponentState = 0)
GO
