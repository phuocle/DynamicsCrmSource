USE [D365_MSCRM]
GO
/****** Object:  View [dbo].[RelationshipLogicalView]    Script Date: 4/10/2017 9:59:22 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

				
create view [dbo].[RelationshipLogicalView] as (SELECT * FROM [Relationship] WHERE OverwriteTime = 0)
GO
